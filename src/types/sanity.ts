export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  crop?: { _type: 'sanity.imageCrop'; left: number; bottom: number; right: number; top: number };
  hotspot?: { _type: 'sanity.imageHotspot'; x: number; y: number; height: number; width: number };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityBlock {
  _key: string;
  _type: string;
  children: {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
  }[];
  markDefs?: any[];
  style: string;
}

export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  _createdAt: string;
  _updatedAt: string;
  name?: string;
  slug?: SanitySlug;
  role?: string;
  bio?: string;
  image?: SanityImage;
  imageUrl?: string; // Add this
  socialLinks?: {
    _type: 'object';
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Service {
  _id: string;
  _type: 'service';
  _createdAt: string;
  _updatedAt: string;
  title?: string;
  slug?: SanitySlug;
  icon?: string; // Emoji icon
  shortDescription?: string;
  fullDescription?: SanityBlock[];
  technologies?: string[];
  startingPrice?: number;
  features?: string[];
  order?: number;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  _createdAt: string;
  _updatedAt: string;
  quote?: string;
  authorName?: string;
  authorRole?: string;
  company?: string;
  image?: SanityImage;
  projectRef?: { _ref: string; _type: 'reference' }; // Reference to Project
}

export type Documents = Service | TeamMember | Testimonial;