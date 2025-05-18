// hooks/useResumeForm.ts
import { useResumeStore } from "@/store/useResumeStore";
import { useState } from "react";
import { validateResume, validateJD } from "@/lib/validate";

export function useResumeForm() {
  const { resume, jobDescription, setResume, setJobDescription } = useResumeStore();
  const [errors, setErrors] = useState<{ resume?: string; jobDescription?: string }>({});

  const updateResume = (val: string) => {
    setResume(val);
    setErrors((prev) => ({ ...prev, resume: validateResume(val) || undefined }));
  };

  const updateJD = (val: string) => {
    setJobDescription(val);
    setErrors((prev) => ({ ...prev, jobDescription: validateJD(val) || undefined }));
  };

  return { resume, jobDescription, updateResume, updateJD, errors, setErrors };
}
