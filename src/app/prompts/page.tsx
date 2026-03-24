"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

const links = [
  {
    title: "OpenCode",
    description: "Free, open-source Cursor alternative. 130K+ GitHub stars, MIT license, runs in your terminal with 75+ AI models.",
    href: "https://github.com/anomalyco/opencode",
    category: "Tool",
    icon: "💻",
    isNew: true,
  },
  {
    title: "RevenueCat 2026 Report",
    description: "State of Subscription Apps — 338 pages of real pricing data. Apps that charge more actually convert better.",
    href: "https://www.revenuecat.com/pdf/state-of-subscription-apps-2026-sosa.pdf",
    category: "Report",
    icon: "📊",
    isNew: true,
  },
  {
    title: "Fish Speech",
    description: "Free ElevenLabs alternative on GitHub. Open-source voice cloning and text-to-speech.",
    href: "https://github.com/fishaudio/fish-speech",
    category: "Tool",
    icon: "🎙️",
  },
  {
    title: "Pocketbase",
    description: "Your entire backend in one file. Auth, database, file storage — all in a single Go binary.",
    href: "https://pocketbase.io",
    category: "Tool",
    icon: "🗄️",
  },
  {
    title: "LTX Video",
    description: "Free Sora alternative on GitHub. Open-source AI video generation.",
    href: "https://github.com/Lightricks/LTX-Video",
    category: "Tool",
    icon: "🎬",
  },
  {
    title: "Activepieces",
    description: "Free Zapier alternative. Open-source automation platform you can self-host.",
    href: "https://github.com/activepieces/activepieces",
    category: "Tool",
    icon: "⚡",
  },
  {
    title: "Hoppscotch",
    description: "Free Postman alternative. Open-source API development platform.",
    href: "https://github.com/hoppscotch/hoppscotch",
    category: "Tool",
    icon: "🔌",
  },
  {
    title: "The Log",
    description: "My fitness app. Track workouts without the noise — no social feeds, no AI coaches.",
    href: "https://apps.apple.com/us/app/the-log-workout-tracker/id6758683089",
    category: "My App",
    icon: "/the-log-logo.png",
    isImage: true,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <div className="mb-8 flex items-center gap-2 text-sm text-warm-gray">
              <Link href="/" className="transition-colors hover:text-charcoal">
                Home
              </Link>
              <span className="text-warm-gray/30">/</span>
              <span className="text-charcoal font-medium">Links</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl">
              <h1 className="font-[var(--font-heading)] text-4xl font-bold text-charcoal md:text-5xl">
                Links & Resources
              </h1>
              <p className="mt-4 text-base leading-relaxed text-warm-gray">
                Every tool, report, and resource I mention in my videos. All free.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-3" staggerDelay={0.08}>
            {links.map((link) => (
              <StaggerItem key={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="border-0 bg-white ring-1 ring-charcoal/5 transition-all duration-300 hover:ring-amber/25 hover:shadow-xl hover:shadow-amber/8">
                    <CardContent className="flex items-center gap-4 p-5">
                      {link.isImage ? (
                        <Image src={link.icon} alt={link.title} width={32} height={32} className="shrink-0 rounded-lg" />
                      ) : (
                        <span className="text-2xl shrink-0">{link.icon}</span>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-[var(--font-heading)] text-base font-semibold text-charcoal group-hover:text-amber transition-colors truncate">
                            {link.title}
                          </h3>
                          {link.isNew && (
                            <Badge className="bg-amber text-white text-[10px] px-1.5 py-0 font-medium shrink-0">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-warm-gray line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                      <div className="shrink-0 rounded-full bg-charcoal/[0.03] p-2 text-warm-gray/40 transition-colors group-hover:bg-amber/10 group-hover:text-amber">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
