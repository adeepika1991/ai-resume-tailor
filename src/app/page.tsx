"use client";
import { useStore } from "@/store/useStore";

export default function Home() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Starter</h1>
      <p className="text-xl mb-6">Zustand counter: {count}</p>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </main>
  );
}
