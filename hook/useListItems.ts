"use client";
import getListItems from "@/action/getListItems";
import { Cards } from "@/lib/directus";
import { useEffect, useState } from "react";

const useListItems = (params: string) => {
  const [listItems, setListItems] = useState<Cards[]>([]);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const result = await getListItems(params);
        console.log("Fetched list items:", result);
        setListItems(result);
      } catch (err) {
        console.error("An error occurred during list items retrieval:", err);
      }
    };
    fetchListItems();
  }, [params]);

  return {
    listItems,
  };
};

export default useListItems;
