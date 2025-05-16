"use client";
import ResumeForm from "@/components/ResumeForm";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="text-xl font-bold">MyLogo</div>
        <nav>
          <a href="/saved-projects" className="text-blue-600 hover:underline">
            Saved Projects
          </a>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <ResumeForm />
      </main>
    </div>
  );
}

