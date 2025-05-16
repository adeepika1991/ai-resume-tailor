// hooks/useAnalyze.ts
import { useMutation } from "@tanstack/react-query";
import { analyzeResume, AnalyzeRequest, AnalyzeResponse } from "@/lib/analyze";

export const useAnalyze = (useMock = false) =>
  useMutation<AnalyzeResponse, Error, AnalyzeRequest>({
    mutationFn: (data) => analyzeResume(data, useMock),
  });
