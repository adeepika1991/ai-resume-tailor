"use client";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <svg
        className="w-24 h-24 motion-safe:animate-[wiggle_1.2s_ease-in-out_infinite]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 2v6l-3 5v7a2 2 0 002 2h8a2 2 0 002-2v-7l-3-5V2"
        />
      </svg>
      <p className="text-white text-lg font-medium animate-pulse">
        Crafting your resume...
      </p>
    </div>
  );
}
