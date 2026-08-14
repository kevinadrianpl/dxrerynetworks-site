import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlueMapEmbed } from "@/components/wiki/BlueMapEmbed";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Browse tutorials, guides, and documentation for Dxrery Networks Minecraft server.",
};

const categories = [
  {
    title: "Getting Started",
    icon: "🛰️",
    description: "New to Dxrery Networks? Start here to learn the basics.",
    slug: "getting-started",
    articles: [
      { title: "Towny FAQ", slug: "towny-faq" },
      { title: "Welcome Guide", slug: "welcome-guide" },
      { title: "First Steps", slug: "first-steps" },
      { title: "Basic Commands", slug: "basic-commands" },
    ],
    color: "border-emerald-rpg/30 hover:border-emerald-rpg/60",
    iconBg: "from-emerald-rpg/20 to-emerald-rpg/5",
  },
  {
    title: "Gameplay",
    icon: "⚔️",
    description: "Deep dive into combat, skills, and game mechanics.",
    slug: "gameplay",
    articles: [
      { title: "Combat System", slug: "combat-system" },
      { title: "Skills & Leveling", slug: "skills-and-leveling" },
      { title: "Enchanting Guide", slug: "enchanting-guide" },
      { title: "Player Warps Guide", slug: "player-warps-guide" },
    ],
    color: "border-crimson-400/30 hover:border-crimson-400/60",
    iconBg: "from-crimson-400/20 to-crimson-500/5",
  },
  {
    title: "Economy",
    icon: "💰",
    description: "Learn how to earn, spend, and trade in-game currency.",
    slug: "economy",
    articles: [
      { title: "Currency & Shops", slug: "currency-and-shops" },
      { title: "Trading Guide", slug: "trading-guide" },
      { title: "Auction House", slug: "auction-house" },
    ],
    color: "border-primary-400/30 hover:border-primary-400/60",
    iconBg: "from-primary-400/20 to-primary-600/5",
  },
  {
    title: "Commands",
    icon: "✨",
    description: "Full reference of all server commands and permissions.",
    slug: "commands",
    articles: [
      { title: "LWC Guide", slug: "lwc-guide" },
      { title: "Player Commands", slug: "player-commands" },
      { title: "Chat Commands", slug: "chat-commands" },
      { title: "Teleportation", slug: "teleportation" },
    ],
    color: "border-mystic-400/30 hover:border-mystic-400/60",
    iconBg: "from-mystic-400/20 to-mystic-500/5",
  },
  {
    title: "Worlds & Regions",
    icon: "🌍",
    description: "Explore the different worlds, warps, and protected regions.",
    slug: "worlds",
    articles: [
      { title: "Towny Guide", slug: "towny-guide" },
      { title: "World Overview", slug: "world-overview" },
      { title: "Nation Guide", slug: "nation-guide" },
      { title: "Warps & Portals", slug: "warps-and-portals" },
    ],
    color: "border-parchment-200/20 hover:border-parchment-200/40",
    iconBg: "from-parchment-200/15 to-parchment-300/5",
  },
  {
    title: "Ranks & Perks",
    icon: "🎖️",
    description: "Understand the rank system, perks, and how to upgrade.",
    slug: "ranks-info",
    articles: [
      { title: "Rank Overview", slug: "rank-overview" },
      { title: "Perk Details", slug: "perk-details" },
      { title: "Rank Comparison", slug: "rank-comparison" },
    ],
    color: "border-primary-400/30 hover:border-primary-400/60",
    iconBg: "from-primary-400/20 to-primary-600/5",
  },
];

export default function WikiPage() {
  return (
    <>
      <PageHeader
        title="The Archives"
        subtitle="Seek knowledge within these ancient scrolls. Find guides, tutorials, and lore for every corner of Dxrery Networks."
        icon="📚"
      />

      <section className="py-12 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.slug}
                className={`rpg-card p-6 border ${category.color} transition-all duration-300`}
                id={`wiki-category-${category.slug}`}
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.iconBg} flex items-center justify-center text-xl shrink-0`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100">
                      {category.title}
                    </h2>
                    <p className="text-xs text-parchment-300/50 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Article List */}
                <ul className="space-y-1">
                  {category.articles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/wiki/${article.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-parchment-300/70 hover:text-primary-400 hover:bg-charcoal-600/30 transition-all duration-200 group"
                      >
                        <svg
                          className="w-3 h-3 text-charcoal-500 group-hover:text-primary-400 transition-colors shrink-0"
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
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* View All */}
                <div className="mt-4 pt-3 border-t border-charcoal-600/30">
                  <span className="text-xs text-parchment-300/40 font-[family-name:var(--font-heading)] uppercase tracking-wider">
                    {category.articles.length} articles
                  </span>
                </div>
              </div>
            ))}
          </div>

          <BlueMapEmbed />
        </div>
      </section>
    </>
  );
}
