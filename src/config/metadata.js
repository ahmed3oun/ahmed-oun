/**
 * Metadata Configuration
 *
 * This file contains the default metadata and page-specific metadata for Ahmed OUN's portfolio website.
 */

import metadataTranslations from "@/translations/metadataTranslation";

const my_url = process.env.NEXT_PUBLIC_BASE_URL || "https://oun-portfolio.netlify.app";
const ogImageUrl = `${my_url}/images/og-image.jpg`;

/**
 * Fetch default metadata dynamically based on language
 *
 * @param {string} lang - Language code ("en" or "fr")
 * @returns {object} Default metadata
 */
export const getDefaultMetadata = (lang = "en") => {
  const translation = metadataTranslations[lang] || metadataTranslations.en;

  return {
    metadataBase: new URL(my_url),
    title: translation.default.title,
    description: translation.default.description,
    keywords: [
      "Ahmed OUN",
      "Full Stack JavaScript Engineer",
      "AI Engineer",
      "React",
      "Next.js",
      "Angular",
      "NestJS",
      "Node.js",
      "Docker",
      "Kubernetes",
      "Terraform",
      "LangGraph",
      "LangChain",
      "pgvector",
      "PostgreSQL",
      "Azure",
      "AWS",
      "TypeScript",
      "Software Engineer",
      "GitHub Portfolio",
    ],
    openGraph: {
      title: translation.default.title,
      description: translation.default.description,
      url: my_url,
      type: "website",
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: translation.default.title,
      description: translation.default.description,
      images: [ogImageUrl],
    },
  };
};

/**
 * Fetch page-specific metadata dynamically based on page and language
 *
 * @param {string} page - Page key (e.g., "welcome", "portfolio")
 * @param {string} lang - Language code ("en" or "it")
 * @returns {object} Metadata object for the page
 */
export const getMetadataByPage = (page, lang = "en") => {
  const translation = metadataTranslations[lang] || metadataTranslations.en;

  return {
    title: translation.pages[page]?.title || translation.default.title,
    description:
      translation.pages[page]?.description || translation.default.description,
    keywords: [
      "Ahmed OUN",
      "Full Stack JavaScript Engineer",
      "AI Engineer",
      "React",
      "Next.js",
      "Angular",
      "NestJS",
      "Node.js",
      "Docker",
      "Kubernetes",
      "Terraform",
      "LangGraph",
      "LangChain",
      "pgvector",
      "PostgreSQL",
      "TypeScript",
    ],
    openGraph: {
      title: translation.pages[page]?.title || translation.default.title,
      description:
        translation.pages[page]?.description || translation.default.description,
      url: my_url,
      type: "website",
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: translation.pages[page]?.title || translation.default.title,
      description:
        translation.pages[page]?.description || translation.default.description,
      images: [ogImageUrl],
    },
  };
};
