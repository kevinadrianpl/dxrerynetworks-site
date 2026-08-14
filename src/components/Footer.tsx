"use client";

import Link from "next/link";
import { CopyIP } from "@/components/ui/CopyIP";

export function Footer() {
  return (
    <footer className="relative border-t border-charcoal-600/50 bg-charcoal-950/80">
      {/* Top decorative divider */}
      <div className="ornament-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-charcoal-950 font-bold font-[family-name:var(--font-heading)] text-base">
                D
              </div>
              <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100 tracking-wide">
                Dxrery <span className="text-primary-400">Networks</span>
              </span>
            </Link>
            <p className="text-sm text-parchment-300/60 leading-relaxed max-w-xs">
              An immersive Minecraft server experience. Join our community and
              embark on your adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary-400 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { href: "/wiki", label: "Wiki & Guides" },
                { href: "/ranks", label: "Rank Store" },
                { href: "/rules", label: "Server Rules" },
                { href: "/vote", label: "Vote for Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-parchment-300/60 hover:text-primary-400 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-primary-400 uppercase tracking-wider">
              Connect
            </h3>
            <div className="space-y-3">
              <CopyIP />
              <a
                href="https://discord.com/invite/mM7esdn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-parchment-300/60 hover:text-mystic-400 transition-colors duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-mystic-400 group-hover:text-mystic-300 transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join our Discord
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-charcoal-600/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment-300/40">
            © {new Date().getFullYear()} Dxrery Networks. All rights reserved.
          </p>
          <p className="text-xs text-parchment-300/30">
            Not affiliated with Mojang Studios or Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
