"use server";

import { readItems } from "@directus/sdk";
import directus from "@/lib/directus";

const getListItems = async (params: string) => {
  const listItems = await directus.request(
    readItems("cards", {
      filter: { collection_id: { _eq: Number(params) } },
    })
  );
  console.log("List Items fetched with params:", listItems);
  return listItems;
};

export default getListItems;
