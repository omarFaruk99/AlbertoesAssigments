"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchPost() {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data);
      }

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className=" border border-gray-800 bg-zinc-900 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-slate-400">
          {post.title}
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed mb-4">
          {post.body}
        </p>
      </div>
    </div>
  );
}
