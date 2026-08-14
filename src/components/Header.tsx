"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wiki", label: "Wiki" },
  { href: "/ranks", label: "Store" },
  { href: "/rules", label: "Rules" },
  { href: "/staff", label: "Staff" },
  { href: "/vote", label: "Vote" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full py-6 px-4 sm:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto relative flex items-center justify-center">
        
        {/* Mobile Menu Button - Left aligned on mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="absolute left-0 lg:hidden p-2 text-white hover:text-primary-400 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:text-primary-400 ${
                  isActive ? "text-primary-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal-900/95 backdrop-blur-md rounded-xl border border-charcoal-600/50 p-4 shadow-xl">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-primary-500/20 text-primary-400"
                      : "text-white hover:bg-charcoal-800 hover:text-primary-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="h-px bg-charcoal-600/50 my-2" />
            <a
              href="https://discord.com/invite/mM7esdn"
              target="_blank"
              rel="noreferrer"
              className="rpg-btn flex items-center justify-center gap-2 rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-4 py-3 text-base font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
            >
              Join Discord
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
