"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
function LogIcon({ className }: { className?: string }) {
  return (
    <Image src="/the-log-logo.png" alt="The Log" width={48} height={48} className={className} />
  );
}

function SiteLiftIcon({ className }: { className?: string }) {
  return (
    <Image src="/sitelift-logo.png" alt="SiteLift" width={48} height={48} className={className} />
  );
}

const socials = [
  {
    href: "https://instagram.com/pietertalkstech",
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    href: "https://x.com/pietertalkstech",
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    href: "https://tiktok.com/@pietertalkstech",
    label: "TikTok",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.28 8.28 0 004.77 1.52V6.95a4.84 4.84 0 01-1-.26z",
  },
  {
    href: "https://youtube.com/@pietertalkstech",
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    href: "https://github.com/pietertalkstech",
    label: "GitHub",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
];

const bentoFeatures = [
  {
    Icon: LogIcon,
    name: "The Log",
    description:
      "A fitness app for people who just want to track workouts without the noise. No social feeds, no AI coaches. Built it because every other app tried to do too much.",
    href: "#",
    cta: "View on App Store",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber/20 via-amber/5 to-transparent" />
    ),
  },
  {
    Icon: SiteLiftIcon,
    name: "SiteLift LLC",
    description:
      "Web dev agency I started at 16. 20+ clients and counting. Taught me more about business than any class ever could.",
    href: "https://sitelift.net",
    cta: "Visit site",
    className: "col-span-3 md:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/15 via-soft-blue/5 to-transparent" />
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* ===== HERO — statement, not a resume ===== */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-32 pb-12 md:px-6 md:pt-20">
        {/* Warm gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber/10 via-cream to-sand/50" />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:gap-16">
              {/* Photo — smaller, off to the side */}
              <div className="relative mb-14 md:mb-0 md:order-2 md:shrink-0">
                <div className="h-28 w-28 overflow-hidden rounded-3xl ring-4 ring-amber/20 md:h-40 md:w-40 md:rounded-[2rem]">
                  <Image
                    src="/pfp.jpeg"
                    alt="Pieter"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-xl bg-amber px-2.5 py-1 md:-bottom-3 md:-right-3 md:px-3 md:py-1.5">
                  <span className="font-[var(--font-code)] text-[10px] font-bold text-white md:text-xs">
                    19 y/o
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="md:order-1 md:flex-1">
                <h1 className="font-[var(--font-heading)] text-5xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
                  I&apos;m Pieter.
                </h1>

                {/* GooeyText centerpiece */}
                <div className="mt-6 h-20 sm:h-24 md:h-28">
                  <GooeyText
                    texts={["Builder", "Developer", "Creator", "Founder"]}
                    morphTime={1.5}
                    cooldownTime={0.5}
                    className="h-full"
                    textClassName="font-[var(--font-heading)] font-bold !text-5xl sm:!text-6xl md:!text-[60pt] text-amber"
                  />
                </div>

                <p className="mx-auto max-w-md text-lg leading-relaxed text-warm-gray md:mx-0 md:text-xl">
                  I started a web agency at 16, shipped an iOS app, and now
                  I&apos;m sharing every prompt, system, and mistake along the
                  way.
                </p>

                {/* Social links */}
                <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-xl bg-charcoal/[0.06] text-warm-gray/70 transition-all hover:bg-amber/15 hover:text-amber active:scale-95"
                    >
                      <svg
                        className="size-[18px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href="https://instagram.com/pietertalkstech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-amber text-white hover:bg-amber-dark rounded-2xl h-12 text-sm font-semibold shadow-lg shadow-amber/20 sm:w-auto sm:px-8">
                      Follow the build
                    </Button>
                  </a>
                  <a href="#projects">
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl h-12 text-sm font-medium border-charcoal/10 text-charcoal hover:bg-charcoal/5 sm:w-auto sm:px-8"
                    >
                      See what I&apos;m building
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROJECTS — BENTO GRID ===== */}
      <section id="projects" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-[var(--font-code)] text-xs font-medium uppercase tracking-widest text-amber">
              What I&apos;m building
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-charcoal md:text-4xl">
              Projects
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <BentoGrid className="mt-8 auto-rows-[18rem] md:auto-rows-[22rem]">
              {bentoFeatures.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </FadeIn>
        </div>
      </section>

      {/* ===== ABOUT — DARK BACKGROUND ===== */}
      <section className="bg-warm-dark px-5 py-20 md:px-6 md:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold leading-tight text-cream sm:text-4xl md:text-5xl">
              20+ clients. Started at 16.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/60 md:text-xl">
              SiteLift taught me business. The Log taught me product. I
              open-source everything I learn along the way.
            </p>
            <Link
              href="/story"
              className="mt-6 inline-flex items-center gap-2 font-[var(--font-code)] text-sm font-medium text-amber transition-all hover:gap-3"
            >
              Read my story
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== OPEN SOURCE TEASER ===== */}
      <section className="bg-warm-dark px-5 pb-20 md:px-6 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <Link href="/prompts" className="group block">
              <div className="rounded-2xl bg-amber/10 px-8 py-8 transition-all duration-300 hover:bg-amber/20 md:px-12 md:py-10">
                <p className="font-[var(--font-code)] text-xs font-medium uppercase tracking-widest text-amber">
                  Resources
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-cream md:text-3xl">
                  Every tool and resource from my videos
                </h3>
                <p className="mt-3 text-base leading-relaxed text-cream/50 md:text-lg">
                  Free tools, reports, and resources I actually use. All in one place.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-[var(--font-code)] text-sm font-medium text-amber transition-all group-hover:gap-3">
                  Browse links
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA — back to light ===== */}
      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-charcoal md:text-4xl">
              Come build with me
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-warm-gray md:text-lg">
              I post the wins, the failures, and the actual systems behind it
              all. New stuff every week.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://instagram.com/pietertalkstech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-amber text-white hover:bg-amber-dark rounded-2xl h-12 px-8 text-sm font-semibold shadow-lg shadow-amber/20 sm:w-auto">
                  Follow on Instagram
                </Button>
              </a>
              <a
                href="https://github.com/pietertalkstech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-2xl h-12 px-8 text-sm font-medium border-charcoal/10 text-charcoal hover:bg-charcoal/5 sm:w-auto"
                >
                  GitHub
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
