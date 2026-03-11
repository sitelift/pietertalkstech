import { Separator } from "@/components/ui/separator";

const socials = [
  { label: "Instagram", href: "https://instagram.com/pietertalkstech" },
  { label: "TikTok", href: "https://tiktok.com/@pietertalkstech" },
  { label: "X", href: "https://x.com/pietertalkstech" },
  { label: "YouTube", href: "https://youtube.com/@pietertalkstech" },
  { label: "GitHub", href: "https://github.com/pietertalkstech" },
];

export function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-cream">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-warm-gray transition-colors hover:text-amber"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-warm-gray/50">
            &copy; {new Date().getFullYear()} Pieter Talks Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
