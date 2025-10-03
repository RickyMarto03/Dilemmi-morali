"use client";
import test from "@/action/test";
import { Post } from "@/lib/directus";
import React, { useEffect, useState } from "react";

const useTest = () => {
  const [post, setPost] = useState<Post[]>([]);

  const fetchPost = async () => {
    try {
      const result = await test();
      console.log("Fetched posts:", result);
      setPost(result);
    } catch (err) {
      console.error("An error occurred during post retrieval:", err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return {
    post,
    fetchPost,
  };
};

export default useTest;
