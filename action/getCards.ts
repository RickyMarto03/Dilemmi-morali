"use server";

import { readItem, readItems } from "@directus/sdk";
import directus from "@/lib/directus";

const getCards = async (params: string) => {
  const cards = await directus.request(
    readItem("cards", params) // prende un solo item
  );
  console.log("Cards fetched with params:", cards);
  return cards;
};

export default getCards;
