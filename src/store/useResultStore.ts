import { create } from "zustand";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

type MdxStore = {
  mdxSource: MDXRemoteSerializeResult | null;
  setMdxSource: (mdx: MDXRemoteSerializeResult) => void;
  clearMdxSource: () => void;
};

export const useResultStore = create<MdxStore>((set) => ({
  mdxSource: null,
  setMdxSource: (mdx) => set({ mdxSource: mdx }),
  clearMdxSource: () => set({ mdxSource: null }),
}));
