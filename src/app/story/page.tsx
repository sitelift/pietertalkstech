"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { milestones } from "@/data/story";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-warm-dark overflow-x-hidden">
      <Navbar variant="dark" />

      {/* ===== HERO ===== */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h1 className="font-[var(--font-heading)] text-4xl font-bold text-cream md:text-6xl">
              How I got here.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/50 md:text-xl">
              From a Python calculator to shipping real products — this is the
              timeline.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="pb-20 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-amber/30 md:left-[11px]" />

            <div className="flex flex-col gap-16 md:gap-20">
              {milestones.map((milestone, i) => (
                <FadeIn key={milestone.id} delay={i * 0.1}>
                  <div className="relative pl-10 md:pl-14">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-amber bg-warm-dark md:size-[23px] md:left-0 md:top-1" />

                    {/* Year label */}
                    <span className="font-[var(--font-code)] text-xs font-medium uppercase tracking-widest text-amber">
                      {milestone.year}
                    </span>

                    {/* Title */}
                    <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-bold text-cream md:text-3xl">
                      {milestone.title}
                    </h2>

                    {/* Body */}
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-cream/60 md:text-lg">
                      {milestone.body}
                    </p>

                    {/* Photo placeholder */}
                    {milestone.photo && (
                      <div className="mt-6 h-48 w-full max-w-sm overflow-hidden rounded-2xl ring-2 ring-amber/20 md:h-56">
                        <Image
                          src={milestone.photo}
                          alt={milestone.title}
                          width={400}
                          height={250}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA — light section ===== */}
      <section className="bg-cream px-5 py-20 md:px-6 md:py-28">
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
