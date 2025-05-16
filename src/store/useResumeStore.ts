import {create} from "zustand";

interface ResumeState {
  resume: string;
  jobDescription: string;
  tones: string[];
  setResume: (text: string) => void;
  setJobDescription: (text: string) => void;
  setTones: (tones: string[]) => void;
  clear: () => void;
}

export const useResumeStore = create<ResumeState>((set) => ({
  resume: "",
  jobDescription: "",
  tones: [],
  setResume: (resume) => set({ resume }),
  setJobDescription: (jobDescription) => set({ jobDescription }),
  setTones: (tones) => set({ tones }),
  clear: () => set({ resume: "", jobDescription: "", tones: [] }),
}));
