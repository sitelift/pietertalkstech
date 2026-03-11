"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  variant?: "light" | "dark"
}

export function NavBar({ items, className, variant = "light" }: NavBarProps) {
  const isDark = variant === "dark"
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Derive active tab from the current pathname
  const activeTab = (
    items.find((item) => item.url !== "/" && pathname.startsWith(item.url)) ??
    items.find((item) => item.url === "/") ??
    items[0]
  ).name

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className={cn(
        "flex items-center gap-3 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        isDark
          ? "bg-white/10 border border-white/15"
          : "bg-background/5 border border-border",
      )}>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                isDark
                  ? "text-cream/70 hover:text-amber"
                  : "text-foreground/80 hover:text-primary",
                isActive && (isDark ? "bg-white/10 text-cream" : "bg-muted text-primary"),
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Glow — bottom on mobile, top on desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-1 bg-[#E08A3C] -bottom-2 rounded-b-full sm:-bottom-auto sm:-top-2 sm:rounded-b-none sm:rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#E08A3C]/20 rounded-full blur-md bottom-0 -left-2 sm:bottom-auto sm:-top-2 sm:-left-2" />
                    <div className="absolute w-8 h-6 bg-[#E08A3C]/20 rounded-full blur-md bottom-1 sm:bottom-auto sm:-top-1" />
                    <div className="absolute w-4 h-4 bg-[#E08A3C]/20 rounded-full blur-sm bottom-0 left-2 sm:bottom-auto sm:top-0 sm:left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
