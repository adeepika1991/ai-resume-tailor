// hooks/useAnalyze.ts
import { useMutation } from "@tanstack/react-query";
import { useResultStore } from "@/store/useResultStore";
import { serialize } from "next-mdx-remote/serialize";
import { analyzeResume, AnalyzeRequest, AnalyzeResponse } from "@/lib/analyze";
import { useRouter } from "next/navigation";

export const useAnalyze = (useMock = false) => {
  const router = useRouter();
  const { setMdxSource } = useResultStore();
  const {mutateAsync, isPending, isError} = useMutation<AnalyzeResponse, Error, AnalyzeRequest>({
    mutationFn: (data) => analyzeResume(data, useMock),
    onSuccess: async (data) => {
      try {
        const mdx = await serialize(data.result);
        setMdxSource(mdx);
        router.push("/result");
      } catch (err) {
        console.error("MDX serialization failed:", err);
      }
    },
    onError: (err) => {
      console.error("API analysis failed:", err);
    },
  });

  return { mutateAsync, isPending, isError };
};