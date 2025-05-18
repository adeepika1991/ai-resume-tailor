"use client";

import React, { useEffect, useState } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { useAnalyze } from "@/hooks/useAnalyze";
import Loader from "./Loader";
import { Button } from "./Button";


const TONE_OPTIONS = [
  "Professional",
  "Impact-Oriented",
  "Friendly",
  "Enthusiastic",
];

export default function ResumeForm() {
  const {
    resume,
    jobDescription,
    tones,
    setResume,
    setJobDescription,
    setTones,
  } = useResumeStore();
  const { mutateAsync, isPending, isError } = useAnalyze(false); // useMock = true
  const [selectedTones, setSelectedTones] = useState<string[]>(tones);
  const [errors, setErrors] = useState<{
    resume?: string;
    jobDescription?: string;
  }>({});

  useEffect(() => {
    setTones(selectedTones);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTones]);

  const toggleTone = (tone: string) => {
    setSelectedTones((prev) =>
      prev.includes(tone) ? prev.filter((t) => t !== tone) : [...prev, tone]
    );
  };

  const handleResumeChange = (text: string) => {
    setResume(text);
    if (text.length >= 100 && text.length <= 5000) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const handleJobDescriptionChange = (text: string) => {
    setJobDescription(text);
    if (text.length >= 100 && text.length <= 3000) {
      setErrors((prev) => ({ ...prev, jobDescription: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { resume?: string; jobDescription?: string } = {};

    if (!resume || resume.trim().length < 100) {
      newErrors.resume = "Resume must be at least 100 characters.";
    } else if (resume.length > 5000) {
      newErrors.resume = "Resume must be less than 5000 characters.";
    }

    if (!jobDescription || jobDescription.trim().length < 100) {
      newErrors.jobDescription =
        "Job description must be at least 100 characters.";
    } else if (jobDescription.length > 5000) {
      newErrors.jobDescription =
        "Job description must be less than 5000 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Everything is valid — navigate to result page
      mutateAsync({ resume, jobDescription, tones });
    }
  };

  if (isPending) return <Loader/>;
  if (isError) return <p className="text-red-500">Something went wrong.</p>;

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[95vw] sm:max-w-[90vw] md:min-w-[90vw] lg:min-w-[90vw] xl:min-w-[90vw] 2xl:min-w-[90rem] space-y-8 sm:space-y-10 bg-white/5 backdrop-blur-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl"
      >
        {/* Intro Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Tailor Your Resume with AI ✨
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="flex flex-col">
            <label htmlFor="resume" className="text-white font-semibold mb-2">
              Resume
            </label>
            <textarea
              id="resume"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white/10 text-white placeholder:text-white/50 p-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none transition-all duration-300"
              value={resume}
              onChange={(e) => handleResumeChange(e.target.value)}
              placeholder="Paste your resume here..."
            />
            {errors.resume && (
              <p className="text-red-500 text-sm mt-2">{errors.resume}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="jobDescription"
              className="text-white font-semibold mb-2"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white/10 text-white placeholder:text-white/50 p-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none transition-all duration-300"
              value={jobDescription}
              onChange={(e) => handleJobDescriptionChange(e.target.value)}
              placeholder="Paste the job description here..."
            />
            {errors.jobDescription && (
              <p className="text-red-500 text-sm mt-2">
                {errors.jobDescription}
              </p>
            )}
          </div>
        </div>

        {/* Tones */}
        <fieldset>
          <legend className="text-white font-semibold mb-2">
            Select Tone(s):
          </legend>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {TONE_OPTIONS.map((tone) => (
              <label
                key={tone}
                className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full cursor-pointer transition border ${
                  selectedTones.includes(tone)
                    ? "bg-[#00FFAB]/10 border-[#00FFAB] text-[#00FFAB]"
                    : "bg-white/5 border-white/10 text-white hover:border-[#00FFAB]/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={selectedTones.includes(tone)}
                  onChange={() => toggleTone(tone)}
                />
                {tone}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Button */}
        <div className="flex justify-center">
          <Button className="px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-black bg-green-200 hover:bg-green-300 font-bold text-base sm:text-lg shadow-md transition">
            Analyze ✨
          </Button>
        </div>
      </form>
    </section>
  );
}
