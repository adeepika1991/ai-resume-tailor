"use client";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col">
            <header className="flex justify-between items-center px-8 py-4 shadow-md">
              <div className="text-xl font-bold">MyLogo</div>
              <nav>
                <a
                  href="/saved-projects"
                  className="text-blue-600 hover:underline"
                >
                  Saved Projects
                </a>
              </nav>
            </header>
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
