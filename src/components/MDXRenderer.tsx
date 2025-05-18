"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export function MDXRenderer({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} />;
}
