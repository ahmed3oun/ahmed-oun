import { createClient } from "contentful";

const hasCredentials = Boolean(
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
);

// Initialize Contentful client safely only if credentials exist, otherwise return a mock client
const client = hasCredentials
  ? createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    })
  : {
      getEntries: async () => ({ items: [] }),
      getEntry: async () => null,
      getAsset: async () => null,
    };

export default client;
