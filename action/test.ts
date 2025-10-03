"use server";

import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

const test = async () => {
  const posts = await directus.request(readItems("post"));

  return posts;
};

export default test;
