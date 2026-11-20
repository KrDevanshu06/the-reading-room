
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F3] text-[#292820]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <BookOpen size={26} strokeWidth={1.6} />
          <span className="text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            href="/login"
            className="text-sm font-medium hover:opacity-70"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-[#34382B] px-5 py-2.5 text-sm text-white transition hover:bg-[#4B503E]"
          >
            Get Started
          </Link>
        </nav>
      </header>

      <section className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#777765]">
          A space for curious minds
        </p>

        <h1 className="max-w-3xl text-5xl font-medium leading-[1.12] tracking-tight md:text-7xl">
          Every book opens
          <br />
          a new possibility.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-[#777765]">
          Discover books, explore knowledge, and request
          the stories you want to read. Your library,
          thoughtfully brought online.
        </p>

        <div className="mt-10">
          <Link
            href="/register"
            className="inline-flex items-center gap-3 bg-[#34382B] px-6 py-3.5 text-sm text-white transition hover:bg-[#4B503E]"
          >
            Explore the library
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#E6E4DC] px-6 py-6">
        <div className="mx-auto flex max-w-7xl justify-between text-xs text-[#858477]">
          <span>{siteConfig.name}</span>
          <span>A place to discover and read.</span>
        </div>
      </footer>
    </main>
  );
}
