"use client";
import { MDXRemote } from "next-mdx-remote";
import { useResultStore } from "@/store/useResultStore";
import { motion } from "framer-motion";

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
    <motion.div
      className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-10 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="prose max-w-3xl w-full space-y-10">
        <MDXRemote {...mdxSource} />
      </div>
    </motion.div>
  );
}
