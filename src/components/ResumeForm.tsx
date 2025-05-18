"use client";

import React, { useEffect, useState } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { useAnalyze } from "@/hooks/useAnalyze";

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
  const { mutateAsync, isPending, isError } = useAnalyze(true); // useMock = true
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

  if (isPending) return <p>Crafting your resume...</p>;
  if (isError) return <p className="text-red-500">Something went wrong.</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4">
      <label>
        Resume (paste text):
        <textarea
          className="w-full p-3 border rounded-2xl"
          value={resume}
          rows={10}
          onChange={(e) => handleResumeChange(e.target.value)}
          placeholder="Paste your resume text here..."
        />
        <div className="min-h-[1.5rem] text-sm text-red-600">
          {errors.resume && (
            <p className="text-red-600 text-sm">{errors.resume}</p>
          )}
        </div>
      </label>

      <label>
        Job Description:
        <textarea
          className="w-full p-3 border rounded-2xl"
          value={jobDescription}
          rows={6}
          onChange={(e) => handleJobDescriptionChange(e.target.value)}
          placeholder="Paste the job description here..."
        />
        <div className="min-h-[1.5rem] text-sm text-red-600">
          {errors.jobDescription && (
            <p className="text-red-600 text-sm">{errors.jobDescription}</p>
          )}
        </div>
      </label>

      <fieldset>
        <legend>Select Tone(s):</legend>
        <div className="flex flex-wrap gap-2">
          {TONE_OPTIONS.map((tone) => (
            <label key={tone} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTones.includes(tone)}
                onChange={() => toggleTone(tone)}
              />
              <span>{tone}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Analyze
      </button>
    </form>
  );
}
