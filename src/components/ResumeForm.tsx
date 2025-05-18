"use client";

import React, { useEffect, useState } from "react";
import { useAnalyze } from "@/hooks/useAnalyze";
import { useResumeStore } from "@/store/useResumeStore";
import { useResumeForm } from "@/hooks/useResumeForm";
import Loader from "./Loader";
import { Button } from "./Button";
import TextAreaField from "./TextAreaField";
import ToneSelector from "./ToneSelector";


export default function ResumeForm() {
  const { tones, setTones } = useResumeStore();
  const { resume, jobDescription, updateResume, updateJD, errors, setErrors } =
    useResumeForm();
  const { mutateAsync, isPending, isError } = useAnalyze(false);
  const [selectedTones, setSelectedTones] = useState<string[]>(tones);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  useEffect(() => {
    setTones(selectedTones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTones]);

  const toggleTone = (tone: string) => {
    setSelectedTones((prev) =>
      prev.includes(tone) ? prev.filter((t) => t !== tone) : [...prev, tone]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {
      resume: resume ? undefined : "Resume is required.",
      jobDescription: jobDescription ? undefined : "Job description is required.",
    };

    const hasError = Object.values(newErrors).some(Boolean);
    setErrors(newErrors);

    if (!hasError) {
      setIsNavigating(true);
      mutateAsync({ resume, jobDescription, tones: selectedTones });
    }
  };

  if (isPending || isNavigating) return <Loader />;
  if (isError) return <p className="text-red-500">Something went wrong.</p>;

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[95vw] sm:max-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] xl:min-w-[90vw] 2xl:min-w-[90rem] space-y-8 sm:space-y-10 bg-white/5 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Tailor Your Resume with AI ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <TextAreaField
            id="resume"
            label="Resume"
            value={resume}
            onChange={updateResume}
            error={errors.resume}
            placeholder="Paste your resume here..."
          />

          <TextAreaField
            id="jobDescription"
            label="Job Description"
            value={jobDescription}
            onChange={updateJD}
            error={errors.jobDescription}
            placeholder="Paste the job description here..."
          />
        </div>

        <ToneSelector selectedTones={selectedTones} toggleTone={toggleTone} />

        <div className="flex justify-center">
          <Button className="px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-black bg-green-200 hover:bg-green-300 font-bold text-base sm:text-lg shadow-md transition">
            Analyze ✨
          </Button>
        </div>
      </form>
    </section>
  );
}
