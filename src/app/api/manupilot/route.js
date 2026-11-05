// ManuPilot AI route
// API route for OpenAI (ManuPilot AI)
// Supports streaming responses & token count limit enforcement

export const runtime = "nodejs";

import OpenAI from "openai";
import { checkAndCount } from "@/utils/quota";

const hasOpenAI = Boolean(process.env.OPENAI_API_KEY);
const openai = hasOpenAI ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const MAX_TOKENS_FOR_PROMPT = 100_000; // summarise threshold

/* rough 1 token ≈ 4 chars */
const approxTokens = (msgs = []) =>
  Math.floor(msgs.reduce((sum, m) => sum + (m?.content?.length || 0), 0) / 4);

export async function POST(req) {
  /* ── Parse body early ─────────────────────────────────────── */
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const { messages } = body;
  if (!Array.isArray(messages)) {
    return json({ error: "messages must be an array" }, 400);
  }

  /* ── Quota check (increments counter on success) ─────────── */
  const quota = await checkAndCount();
  if (!quota.allowed) {
    return json(
      {
        error: "Quota exceeded – come back later.",
        resetAt: quota.resetAt.toISOString(),
      },
      429,
      quota
    );
  }

  /* ── Smart offline / local fallback if no OpenAI API key ──── */
  if (!hasOpenAI) {
    const lastMsg =
      messages[messages.length - 1]?.content?.toLowerCase() || "";
    let reply = "";

    if (
      lastMsg.includes("project") ||
      lastMsg.includes("portfolio") ||
      lastMsg.includes("show me")
    ) {
      reply =
        "Ahmed OUN has engineered several production-grade projects:\n\n" +
        "1. **AI Agent & Hybrid RAG Platform**: LangGraph, LangChain, Google Gemini, PostgreSQL/pgvector, Next.js, NestJS, Docker, Turborepo.\n" +
        "2. **Azure AKS Infrastructure as Code**: Automated Azure Kubernetes Service deployment with Terraform, ACR, and GitHub Actions.\n" +
        "3. **Ticketing Microservices Platform**: Distributed event-driven ticketing with NATS Streaming, Redis, Docker, and Kubernetes.\n" +
        "4. **Bookmark Management Application**: Full stack Angular 16, NestJS, Prisma, and PostgreSQL.\n" +
        "5. **Real-Time Note Board Application**: Collaborative board with Socket.io, Firebase Auth, and Firestore.\n" +
        "6. **Shop-IT E-Commerce**: Full stack React, Redux, Node.js, and MongoDB.\n\n" +
        "Check out all repository links on the [Portfolio](/portfolio) page or on [GitHub](https://github.com/ahmed3oun)!";
    } else if (
      lastMsg.includes("experience") ||
      lastMsg.includes("career") ||
      lastMsg.includes("work") ||
      lastMsg.includes("job")
    ) {
      reply =
        "Ahmed OUN has 3+ years of professional full stack experience:\n\n" +
        "• **Auto Inspec** (Jul 2026 – Sep 2026): Full Stack Developer (Next.js, NestJS, Prisma, Docker, PostgreSQL)\n" +
        "• **IB Consulting : Freelance** (Oct 2025 – Dec 2025): Full Stack Developer (Angular, Ionic, Node.js, Docker, Nginx)\n" +
        "• **WOLO** (Jan 2024 – Dec 2024): Full Stack Developer (Angular, NestJS, Docker, renewable energy platform)\n" +
        "• **Tawa Digital SA** (Feb 2022 – Jul 2023): Full Stack Developer (React/Next.js analytics dashboard, Express microservices)\n" +
        "• **I Connect Service** (2020 – 2021): Trainee developer with Spring Boot and React.\n" +
        "• **Xtend** (2019): Web Developer Trainee with Spring Boot.";
    } else if (
      lastMsg.includes("skill") ||
      lastMsg.includes("stack") ||
      lastMsg.includes("tech")
    ) {
      reply =
        "Ahmed's core technical stack includes:\n\n" +
        "• **Frontend**: React, Next.js, Angular, Ionic, Tailwind CSS, Zustand, Redux\n" +
        "• **Backend**: Node.js, NestJS, Express, Spring Boot, REST APIs, Microservices, Socket.io\n" +
        "• **Databases**: PostgreSQL, pgvector, MongoDB, Redis, Prisma ORM\n" +
        "• **AI & GenAI**: LangGraph, LangChain, Google Gemini, Hybrid RAG, Autonomous Agents\n" +
        "• **DevOps & Cloud**: Docker, Kubernetes (AKS), Terraform, AWS, Azure, CI/CD pipelines";
    } else if (
      lastMsg.includes("contact") ||
      lastMsg.includes("email") ||
      lastMsg.includes("hire") ||
      lastMsg.includes("reach") ||
      lastMsg.includes("phone")
    ) {
      reply =
        "You can reach Ahmed OUN directly at:\n\n" +
        "• **Email**: ahmedoun199@gmail.com\n" +
        "• **Mobile**: +216-93-611-028\n" +
        "• **LinkedIn**: [linkedin.com/in/ahmed-oun-1175a5147](https://www.linkedin.com/in/ahmed-oun-1175a5147/)\n" +
        "• **GitHub**: [github.com/ahmed3oun](https://github.com/ahmed3oun)\n\n" +
        "You can also use the [Contact Page](/contact) to send a message directly!";
    } else {
      reply =
        "Hello! I am ManuPilot, Ahmed OUN's AI assistant. Ahmed is a Full Stack JavaScript Engineer with 3+ years of professional experience designing scalable web applications, REST APIs, cloud-native microservices, and Generative AI solutions.\n\n" +
        "How can I help you today? You can ask me about Ahmed's projects, tech stack, work experience, or how to get in touch!";
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder.encode(reply));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Quota-Remaining": String(quota.remaining),
        "X-Quota-Reset": quota.resetAt.toISOString(),
      },
    });
  }

  /* ── Summarisation shortcut if >100 k tokens ─────────────── */
  const tokenCount = approxTokens(messages);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  if (tokenCount > MAX_TOKENS_FOR_PROMPT) {
    const res = await fetch(`${baseUrl}/api/manupilot-summarize`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return json(
        { error: data.error || "Summarisation failed" },
        res.status,
        quota
      );
    }
    return json(data, 200, quota); // { role, content }
  }

  /* ── Normal streaming request to OpenAI ──────────────────── */
  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const part of chat) {
            const chunk = part.choices?.[0]?.delta?.content || "";
            if (chunk) controller.enqueue(encoder.encode(chunk));
          }
        } catch (e) {
          controller.error(e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Quota-Remaining": String(quota.remaining),
        "X-Quota-Reset": quota.resetAt.toISOString(),
      },
    });
  } catch (error) {
    console.error("OpenAI error:", error);
    return json({ error: "Failed to communicate with AI provider" }, 500, quota);
  }
}

/* helper */
function json(obj, status = 200, quota = null) {
  const headers = { "Content-Type": "application/json" };
  if (quota) {
    headers["X-Quota-Remaining"] = String(quota.remaining);
    headers["X-Quota-Reset"] = quota.resetAt.toISOString();
  }
  return new Response(JSON.stringify(obj), { status, headers });
}
