import { createDirectus, rest, staticToken } from "@directus/sdk";

const DIRECTUS_URL = process.env.DIRECTUS_URL;
const DIRECTUS_TOKEN_FE = process.env.DIRECTUS_TOKEN_FE;

export interface Post {
  id: string;
  title: string;
  content: string;
}


export interface Schema {
  post: Post[];
}

const directus = createDirectus<Schema>(`${DIRECTUS_URL}`)
  .with(staticToken(`${DIRECTUS_TOKEN_FE}`))
  .with(rest());

export default directus;
