"use client";
import getCollections from "@/action/getCollections";
import { Collections } from "@/lib/directus";
import { useEffect, useState } from "react";

const useCollections = () => {
  const [collections, setCollections] = useState<Collections[]>([]);

  const fetchCollections = async () => {
    try {
      const result = await getCollections();
      console.log("Fetched collections:", result);
      setCollections(result);
    } catch (err) {
      console.error("An error occurred during collections retrieval:", err);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return {
    collections,
    fetchCollections,
  };
};

export default useCollections;
