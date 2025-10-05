import { createDirectus, rest, staticToken } from "@directus/sdk";

const DIRECTUS_URL = process.env.DIRECTUS_URL;
const DIRECTUS_TOKEN_FE = process.env.DIRECTUS_TOKEN_FE;

export interface Post {
  id: string;
  title: string;
  content: string;
}
export enum PriceType {
  Free = "free",
  Silver = "silver",
  Platinum = "platinum",
}

export interface Collections {
  id: string;
  name: string;
  description: string;
  price_type: PriceType;
  category: string;
}

export interface Cards {
  id: string;
  name: string;
  collection_id: number;
}
export interface Schema {
  post: Post[];
  collections: Collections[];
  cards: Cards[];
}

const directus = createDirectus<Schema>(`${DIRECTUS_URL}`)
  .with(staticToken(`${DIRECTUS_TOKEN_FE}`))
  .with(rest());

export default directus;
