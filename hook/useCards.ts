"use client";
import getCards from "@/action/getCards";
import { Cards } from "@/lib/directus";
import { useEffect, useState } from "react";

const useCards = (params: string) => {
  const [card, setCard] = useState<Cards>();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const result = await getCards(params);
        console.log("Fetched cards:", result);
        setCard(result);
      } catch (err) {
        console.error("An error occurred during cards retrieval:", err);
      }
    };

    fetchCards();
  }, [params]);

  return {
    card,
  };
};

export default useCards;
