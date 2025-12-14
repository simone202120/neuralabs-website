import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = '2023-05-03'

let client: any;
let builder: any;

if (projectId && dataset) {
  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
  builder = imageUrlBuilder(client);
} else {
  // Create a mock client and builder to avoid build errors
  client = {
    fetch: () => Promise.resolve([]),
  };
  builder = {
    image: () => ({
      url: () => '/images/placeholder.svg',
    }),
  };
}

export { client };

export function urlFor(source: any) {
  // If source is invalid, return a placeholder
  if (!source || !source.asset) {
    return {
      url: () => '/images/placeholder.svg',
    }
  }
  
  // Handle cases where the builder might not be initialized
  if (!builder) {
    return {
      url: () => '/images/placeholder.svg',
    };
  }
  return builder.image(source);
}