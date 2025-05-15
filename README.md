# Next.js 15 Starter Template

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://github.com/adeepika1991/nextjs-starter-repo/actions/workflows/main.yml/badge.svg)](https://github.com/adeepika1991/nextjs-starter-repo/actions/workflows/main.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5-blueviolet?logo=prisma)](https://www.prisma.io/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.0-orange?logo=react-query)](https://tanstack.com/query/latest)
[![Zustand](https://img.shields.io/badge/Zustand-4.4-yellow?logo=zustand)](https://zustand-demo.pmnd.rs/)

A **minimal, modern starter template** for full-stack Next.js 15+ projects with:

- ✅ `src/` directory structure (clean separation of concerns)
- 🎨 Tailwind CSS preconfigured (v3.4+)
- 🔮 React 19 support (Client + Server Components)
- 🧠 [Zustand](https://zustand-demo.pmnd.rs/) for global state management (simple, scalable)
- 🧠 [TanStack Query](https://tanstack.com/query/latest) ready for async data and caching
- 🧩 Prisma ORM with `prisma/` folder and `.env.example`
- 🛠️ Path aliasing with `@/` via `tsconfig.json`
- 🧼 `.gitignore` and sensible project defaults
- 🧱 App Router with layout and example page (no pages directory)

---

## 🚀 Quickstart: Scaffold a New Project

You can use [`degit`](https://github.com/adeepika1991/degit) to copy this repo without Git history:

```bash
npx degit adeepika1991/nextjs-starter-repo my-new-project
cd my-new-project
npm install
cp .env.example .env
npm run dev
