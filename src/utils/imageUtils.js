/**
 * This file contains utility functions for handling image URLs in a CMS-based project.
 *
 * - `getOptimizedImageUrl`: Returns an optimized image URL with specified width and WebP format for better performance.
 * - `getAssetUrl`: Retrieves the direct URL of an asset, ensuring it is correctly formatted with `https://` or local path.
 * - `generateImagePreloadTags`: Generates HTML preload tags for a list of assets to optimize image loading.
 */

export function getOptimizedImageUrl(asset, width = 1920) {
  if (!asset) return "";
  if (typeof asset === "string") return asset;
  if (!asset.fields?.file?.url) {
    return "";
  }

  let url = asset.fields.file.url;

  let urlString;
  if (typeof url === "string") {
    urlString = url;
  } else {
    urlString = url?.url || "";
  }

  if (urlString.startsWith("/")) {
    return urlString;
  }

  // Remove any leading '//' from the URL
  urlString = urlString.replace(/^\/\//, "");

  // Ensure the URL starts with 'https://'
  if (!urlString.startsWith("http")) {
    urlString = `https://${urlString}`;
  }

  // Construct the optimized image URL
  return `${urlString}?w=${width}&q=80&fm=webp`;
}

export function getAssetUrl(asset) {
  if (!asset) return "";
  if (typeof asset === "string") return asset;
  if (!asset.fields?.file?.url) {
    return "";
  }

  let url = asset.fields.file.url;

  let urlString;
  if (typeof url === "string") {
    urlString = url;
  } else {
    urlString = url?.url || "";
  }

  if (urlString.startsWith("/")) {
    return urlString;
  }

  // Remove any leading '//' from the URL
  urlString = urlString.replace(/^\/\//, "");

  // Ensure the URL starts with 'https://'
  if (!urlString.startsWith("http")) {
    urlString = `https://${urlString}`;
  }

  return urlString;
}

export function generateImagePreloadTags(assets) {
  return assets
    .map((asset) => {
      const optimizedUrl = getOptimizedImageUrl(asset);
      return `<link rel="preload" as="image" href="${optimizedUrl}">`;
    })
    .join("\n");
}
