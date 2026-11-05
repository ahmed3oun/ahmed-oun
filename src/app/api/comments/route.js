// Comments API Handler: Handles CRUD operations for comments using Prisma

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle creating a new comment
export async function POST(request) {
  try {
    const {
      name,
      avatar,
      content,
      parentId,
      reactions,
      isAuthor,
      isTopComment,
    } = await request.json();

    const newComment = await prisma.comment.create({
      data: {
        name,
        avatar: avatar || null, // Optional avatar
        content,
        parentId: parentId || null, // Assign parentId for replies
        reactions: reactions || {}, // Default to empty reactions object
        isAuthor: isAuthor || false, // Mark if the author is responding
        isTopComment: isTopComment || false, // Mark if pinned as a top comment
      },
    });

    return new Response(JSON.stringify(newComment), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handle fetching all comments
export async function GET() {
  try {
    const fetchWithTimeout = Promise.race([
      prisma.comment.findMany({
        orderBy: {
          createdAt: "desc", // Retrieve comments in descending order
        },
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Database connection timeout")), 1200)
      ),
    ]);

    const comments = await fetchWithTimeout;

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.warn("Database not connected, returning default discussion comments:", error?.message);
    const fallback = [
      {
        id: 1,
        name: "Ahmed OUN",
        avatar: "/images/ahmed-oun.jpg",
        content:
          "Welcome to my portfolio website! Feel free to explore my full stack and GenAI projects, check out the source code on GitHub, or leave a message here! 🚀",
        parentId: null,
        reactions: { "👍": 8, "❤️": 5, "🚀": 10 },
        isAuthor: true,
        isTopComment: true,
        createdAt: new Date().toISOString(),
        children: [],
      },
    ];
    return new Response(JSON.stringify(fallback), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
