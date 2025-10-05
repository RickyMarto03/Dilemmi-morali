"use server";

import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

const getCards = async (params: string) => {
  const cards = await directus.request(
    readItems("cards", {
      filter: { id: { _eq: params } },
    })
  );
  console.log("Cards fetched with params:", cards);
  return cards;
};

export default getCards;
