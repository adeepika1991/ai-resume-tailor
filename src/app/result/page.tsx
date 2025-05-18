"use client";
import { MDXRemote } from "next-mdx-remote";
import { useResultStore } from "@/store/useResultStore";

export default function ResultPage() {
  const mdxSource = useResultStore((state) => state.mdxSource);

  if (!mdxSource) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">No results available.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-10 py-5 items-center justify-center">
      <MDXRemote {...mdxSource} />
    </div>
  );
}
