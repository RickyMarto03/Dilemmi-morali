"use client";
import getCards from "@/action/getCards";
import { Cards } from "@/lib/directus";
import { useEffect, useState } from "react";

const useCards = (params: string) => {
  const [cards, setCards] = useState<Cards[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const result = await getCards(params);
        console.log("Fetched cards:", result);
        setCards(result);
      } catch (err) {
        console.error("An error occurred during cards retrieval:", err);
      }
    };

    fetchCards();
  }, [params]);

  return {
    cards,
  };
};

export default useCards;
