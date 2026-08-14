import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Ranks",
  description: "Browse and compare server ranks with exclusive perks and abilities on Dxrery Networks.",
};

const ranks = [
  {
    id: "free-progression",
    name: "Member",
    tier: "Free Progression",
    price: "Free",
    upgradeNote: "Auto-ranks every 50 hours played: 0h -> 50h -> 100h -> 150h",
    color: "from-emerald-rpg/25 to-teal-300/10",
    borderColor: "border-emerald-rpg/40",
    textColor: "text-emerald-200",
    badgeSrc: "/ranks/member.png",
    description: "Start as Member and auto-rank every 50 hours played.",
    free: true,
    perks: [
      "Member (0h): starter access + starter kit",
      "Wanderer (50h): 3 /sethome, /tfly, small backpack, 6 disguises, Wanderer kit",
      "Pathfinder (100h): 5 /sethome, /hat, medium backpack, 10 disguises, Pathfinder kit",
      "Vanguard (150h): 7 /sethome, large backpack, 14 disguises, Vanguard kit",
      "All free stages include rank-specific disguise and kit unlocks",
    ],
  },
  {
    id: "arcane",
    name: "Arcane",
    tier: "Tier 1",
    price: "R100",
    upgradeNote: "Upgrade to Aetherial for R50 if you already own Arcane",
    color: "from-mystic-400/30 to-mystic-500/10",
    borderColor: "border-mystic-400/40",
    textColor: "text-mystic-300",
    badgeSrc: "/ranks/arcane.png",
    description: "Arcane unlocks core premium quality-of-life tools and expands your build/travel flow.",
    free: false,
    perks: [
      "10 /sethome slots",
      "Portable utilities: /craft, /echest, /anvil",
      "Backpack slots: +2 tiers over free progression",
      "Disguises: 18 total (mythic starter pack placeholder)",
      "Arcane-specific kit (placeholder loadout + cooldown)",
      "Additional perks TBA (chat cosmetics, utility additions, etc.)",
    ],
    popular: false,
  },
  {
    id: "aetherial",
    name: "Aetherial",
    tier: "Tier 2",
    price: "R150",
    upgradeNote: "Upgrade to Archon for R50 if you already own Aetherial",
    color: "from-cyan-300/25 to-sky-400/10",
    borderColor: "border-cyan-300/45",
    textColor: "text-cyan-200",
    badgeSrc: "/ranks/aetherial.png",
    description: "Aetherial broadens creative utilities and adds stronger identity perks for advanced players.",
    free: false,
    perks: [
      "15 /sethome slots",
      "Utility commands: /cartography, /grindstone, /stonecutter, /loom",
      "Identity utility: /skull",
      "Backpack slots: +4 tiers over free progression",
      "Disguises: 26 total (sky + elemental pack placeholder)",
      "Aetherial-specific kit (placeholder loadout + cooldown)",
      "More perks to be added soon",
    ],
    popular: false,
  },
  {
    id: "archon",
    name: "Archon",
    tier: "Top Tier",
    price: "R200",
    upgradeNote: "Highest tier unlocked",
    color: "from-primary-500/25 to-crimson-500/15",
    borderColor: "border-primary-400/55",
    textColor: "text-primary-300",
    badgeSrc: "/ranks/archon.png",
    description: "Archon is the top rank, built for maximum freedom, prestige, and cosmetic depth.",
    free: false,
    perks: [
      "20 /sethome slots",
      "Multiple ender chest pages",
      "/fly access",
      "Particle access (planned)",
      "Backpack slots: +6 tiers over free progression",
      "Disguises: 36 total (legendary + boss set placeholder)",
      "Archon-specific kit (placeholder loadout + cooldown)",
      "Includes all lower-tier perk foundations",
    ],
    popular: true,
  },
];

export default function RanksPage() {
  return (
    <>
      <PageHeader
        title="Rank Store"
        subtitle="Progress through free playtime ranks or buy premium tiers. Premium upgrades progress in R50 steps between tiers."
        icon="🎖️"
      />

      <section className="py-12 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ranks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {ranks.map((rank) => (
              <div
                key={rank.name}
                className={`rpg-card relative h-full flex flex-col border ${rank.borderColor} ${
                  rank.popular ? "ring-1 ring-primary-400/30" : "overflow-hidden"
                }`}
                id={`rank-${rank.id}`}
              >
                {/* Header */}
                <div className={`p-6 pb-4 bg-gradient-to-br ${rank.color} rounded-t-lg`}>
                  <div className="text-center flex flex-col min-h-[17rem]">
                    <div className="h-6 mb-2 flex items-center justify-center">
                      {rank.popular ? (
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-400 text-charcoal-950 text-xs font-bold font-[family-name:var(--font-heading)] uppercase tracking-wider rounded-full shadow-lg">
                          ★ Most Popular
                        </span>
                      ) : null}
                    </div>
                    <div className="mb-2 flex h-32 items-center justify-center px-2">
                      <Image
                        src={rank.badgeSrc}
                        alt={`${rank.name} rank emblem`}
                        width={384}
                        height={384}
                        className="max-h-full w-auto max-w-full object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                    <h3 className={`font-[family-name:var(--font-heading)] text-2xl font-bold ${rank.textColor} mb-1 h-14 flex items-center justify-center`}>
                      {rank.name}
                    </h3>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-parchment-200/60 mb-2 h-4 flex items-center justify-center">{rank.tier}</p>
                    <p className="text-xs text-parchment-300/50 mb-3 h-16 leading-relaxed">
                      {rank.description}
                    </p>
                    <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-parchment-50">
                      {rank.price}
                    </div>
                  </div>
                </div>

                {/* Perks */}
                <div className="p-6 pt-4 flex-1 flex flex-col">
                  <ul className="space-y-2.5 flex-1">
                    {rank.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-parchment-200/70">
                        <svg className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-charcoal-600/30">
                    {rank.free ? (
                      <span className="rpg-btn w-full justify-center opacity-60 cursor-default text-center block py-3">
                        Included by Playtime
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="rpg-btn w-full justify-center rounded-2xl border-primary-400/40 bg-charcoal-800/95 py-3 text-center font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
                      >
                        Purchase / Upgrade
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-xs text-parchment-300/40 max-w-xl mx-auto">
              All purchases are final. Ranks are permanent and non-transferable. 
              Upgrade pricing shown assumes you already own the previous premium tier. Placeholder perk counts for disguises/kits will be finalized.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
