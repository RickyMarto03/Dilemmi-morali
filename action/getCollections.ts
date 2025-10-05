"use server";

import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

const getCollections = async () => {
  const collections = await directus.request(readItems("collections"));

  return collections;
};

export default getCollections;
