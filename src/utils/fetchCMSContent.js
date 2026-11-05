// utils/fetchCMSContent.js
import client from "@/utils/contentfulClient";
import { getContentfulLocale } from "@/utils/getContentfulLocale";
import {
  generalInfoData,
  welcomeData,
  portfolioContentData,
  writingsContentData,
  discussionContentData,
  manuPilotContentData,
  projectsList,
} from "@/data/portfolioData";

const fallbackDataMap = {
  generalInfo: generalInfoData,
  discussionPage: discussionContentData,
  manuPilotPage: manuPilotContentData,
  portfolioPage: portfolioContentData,
  welcomePage: welcomeData,
  writingPage: writingsContentData,
};

/* ------------------------------------------------------------ */
/*  Core helper                                                 */
/* ------------------------------------------------------------ */
async function fetchContentfulData(contentType, errorMessage, lang) {
  // If no Contentful credentials provided, return fallback immediately
  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    return { data: fallbackDataMap[contentType] || null, error: null };
  }

  try {
    const locale = getContentfulLocale(lang); // "en-US" | "fr-FR"

    const response = await client.getEntries({
      content_type: contentType,
      locale,
      limit: 1,
    });

    if (response?.items?.length) {
      return { data: response.items[0].fields, error: null };
    }

    if (fallbackDataMap[contentType]) {
      return { data: fallbackDataMap[contentType], error: null };
    }

    return { data: null, error: errorMessage };
  } catch (err) {
    console.warn(`${errorMessage}, using fallback data:`, err?.message || err);
    if (fallbackDataMap[contentType]) {
      return { data: fallbackDataMap[contentType], error: null };
    }
    return { data: null, error: errorMessage };
  }
}

/* ------------------------------------------------------------ */
/*  Page‑level wrappers                                         */
/* ------------------------------------------------------------ */
export const fetchGeneralInfoContent = (lang) =>
  fetchContentfulData(
    "generalInfo",
    "Error fetching General Info Content",
    lang
  );
export const fetchDiscussionContent = (lang) =>
  fetchContentfulData(
    "discussionPage",
    "Error fetching Discussion Page Content",
    lang
  );
export const fetchManuPilotContent = (lang) =>
  fetchContentfulData(
    "manuPilotPage",
    "Error fetching ManuPilot Page Content",
    lang
  );
export const fetchPortfolioContent = (lang) =>
  fetchContentfulData(
    "portfolioPage",
    "Error fetching Portfolio Page Content",
    lang
  );
export const fetchWelcomeContent = (lang) =>
  fetchContentfulData(
    "welcomePage",
    "Error fetching Welcome Page Content",
    lang
  );
export const fetchWritingsContent = (lang) =>
  fetchContentfulData(
    "writingPage",
    "Error fetching Writing Page Content",
    lang
  );

/* ------------------------------------------------------------ */
/*  Single‑entry helpers                                        */
/* ------------------------------------------------------------ */
export async function fetchProject(slug, lang = "en") {
  // Check local data first
  const localProject = projectsList.find((p) => p.projectSlug === slug);

  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    if (localProject) {
      return { data: localProject, error: null };
    }
    return { data: null, error: "No project found" };
  }

  const locale = getContentfulLocale(lang); // "en-US" | "fr-FR"
  try {
    // 1. try in the selected locale
    let res = await client.getEntries({
      content_type: "project",
      "fields.projectSlug": slug,
      locale,
      limit: 1,
    });

    // 2. fallback to default locale if nothing found
    if (!res.items.length && lang !== "en") {
      res = await client.getEntries({
        content_type: "project",
        "fields.projectSlug": slug,
        locale: "en-US",
        limit: 1,
      });
    }

    if (!res.items.length) {
      if (localProject) return { data: localProject, error: null };
      return { data: null, error: "No project found" };
    }
    return { data: res.items[0].fields, error: null };
  } catch (err) {
    console.warn("Error fetching project from CMS, using fallback:", err?.message || err);
    if (localProject) {
      return { data: localProject, error: null };
    }
    return { data: null, error: "Error fetching project" };
  }
}

export async function fetchProjectSlugs() {
  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    return { data: projectsList.map((p) => p.projectSlug), error: null };
  }

  try {
    const res = await client.getEntries({
      content_type: "project",
      select: "fields.projectSlug",
    });
    if (!res.items.length) {
      return { data: projectsList.map((p) => p.projectSlug), error: null };
    }

    const slugs = res.items.map((i) => i.fields?.projectSlug).filter(Boolean);

    return { data: slugs, error: null };
  } catch (err) {
    console.warn("Error fetching project slugs from CMS, using fallback:", err?.message || err);
    return { data: projectsList.map((p) => p.projectSlug), error: null };
  }
}

export async function fetchBlogPost(slug, lang = "en") {
  const localPost = writingsContentData.blogPosts.find(
    (p) => p.fields.postSlug === slug
  );

  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    if (localPost) {
      return { data: localPost.fields, error: null };
    }
    return { data: null, error: "No blog post found" };
  }

  const locale = getContentfulLocale(lang);

  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.postSlug": slug,
      locale,
      limit: 1,
    });
    if (!res.items.length) {
      if (localPost) return { data: localPost.fields, error: null };
      return { data: null, error: "No blog post found" };
    }
    return { data: res.items[0].fields, error: null };
  } catch (err) {
    console.warn("Error fetching blog post, using fallback:", err?.message || err);
    if (localPost) {
      return { data: localPost.fields, error: null };
    }
    return { data: null, error: "Error fetching blog post" };
  }
}

export async function fetchBlogPostSlugs() {
  const fallbackSlugs = writingsContentData.blogPosts.map(
    (p) => p.fields.postSlug
  );

  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    return { data: fallbackSlugs, error: null };
  }

  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      select: "fields.postSlug",
    });
    if (!res.items.length)
      return { data: fallbackSlugs, error: null };

    const slugs = res.items.map((i) => i.fields?.postSlug).filter(Boolean);

    return { data: slugs, error: null };
  } catch (err) {
    console.warn("Error fetching blog post slugs, using fallback:", err?.message || err);
    return { data: fallbackSlugs, error: null };
  }
}
