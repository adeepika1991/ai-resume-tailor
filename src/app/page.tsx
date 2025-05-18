"use client";
import Hero from "@/components/Hero";
import ResumeForm from "@/components/ResumeForm";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <Hero/>
      <div className="w-full max-w-3xl px-4 mt-12">
        <ResumeForm />
      </div>
    </main>
  );
}
