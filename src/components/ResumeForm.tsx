"use client";

import React, { useState } from "react";
import { useResumeStore } from "@/store/useResumeStore";

const TONE_OPTIONS = ["Professional", "Impact-Oriented", "Friendly", "Formal"];

export default function ResumeForm() {
  const { resume, jobDescription, tones, setResume, setJobDescription, setTones } = useResumeStore();
  const [selectedTones, setSelectedTones] = useState<string[]>(tones);

  const toggleTone = (tone: string) => {
    setSelectedTones(prev =>
      prev.includes(tone) ? prev.filter(t => t !== tone) : [...prev, tone]
    );
    setTones(selectedTones);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API or navigate to results page here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4">
      <label>
        Resume (paste text):
        <textarea
          className="w-full p-2 border rounded"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          rows={10}
          placeholder="Paste your resume text here..."
        />
      </label>

      <label>
        Job Description:
        <textarea
          className="w-full p-2 border rounded"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={6}
          placeholder="Paste the job description here..."
        />
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
