"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, BookOpen, Link2 } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Story", url: "/story", icon: BookOpen },
  { name: "Links", url: "/links", icon: Link2 },
];

export function Navbar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <>
      {/* Fixed logo — top-left */}
      <motion.div
        className="fixed top-0 left-0 z-50 px-5 py-4 md:px-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className={cn(
            "font-[var(--font-heading)] text-lg font-bold tracking-tight transition-colors hover:text-amber md:text-xl inline-block rounded-full backdrop-blur-lg px-4 py-2",
            isDark
              ? "bg-white/10 text-cream"
              : "bg-cream/80 text-charcoal",
          )}
        >
          <span className="text-amber">pieter</span>
          <span className={isDark ? "text-cream" : "text-charcoal"}>talkstech</span>
        </Link>
      </motion.div>

      {/* Tubelight navigation */}
      <NavBar items={navItems} variant={variant} />
    </>
  );
}
