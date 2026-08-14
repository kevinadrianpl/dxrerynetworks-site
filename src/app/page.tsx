import Link from "next/link";
import { CopyIP } from "@/components/ui/CopyIP";
import { DiscordOnline } from "@/components/DiscordOnline";
import { ServerOnline } from "@/components/ServerOnline";

const features = [
  {
    icon: "🏡",
    title: "Cozy Survival",
    description: "Claim a town, build a home, and explore a shared world with friends.",
    href: "/wiki/welcome-guide",
    color: "from-primary-400/20 to-primary-600/5",
  },
  {
    icon: "⚒️",
    title: "Jobs & Rewards",
    description: "Pick a profession, accept a quest, gather your riches to spend on gear and upgrades.",
    href: "/wiki/skills-and-leveling",
    color: "from-emerald-rpg/20 to-emerald-rpg/5",
  },
  {
    icon: "🪄",
    title: "Towns & Community",
    description: "Build towns, trade with others, and grow together in a non-PVP social world.",
    href: "/wiki/nation-guide",
    color: "from-mystic-400/20 to-mystic-500/5",
  },
  {
    icon: "🎁",
    title: "Vote Rewards",
    description: "Support the server daily and earn exclusive bonuses, keys, and cosmetics.",
    href: "/vote#vote-minecraft-mp-1",
    color: "from-crimson-400/20 to-crimson-500/5",
  },
];

const stats = [
  { label: "Players Joined", value: "100+", icon: "👥" },
  { label: "Towns Founded", value: "50+", icon: "⛺" },
  { label: "Jobs Available", value: "15+", icon: "✨" },
  { label: "Quests Available", value: "30+", icon: "🎉" },
];

const firstHoursSteps = [
  {
    title: "Join the server",
    text: "Copy the IP, add it in Minecraft, and hop straight in. Java and Bedrock share one world.",
  },
  {
    title: "Claim your land",
    text: "Protect your base with one quick command so only you and trusted friends can build there.",
  },
  {
    title: "Pick a job",
    text: "Choose a job, accept a quest, and engage in custom fishing, mining, and farming.",
  },
  {
    title: "Find your people",
    text: "Join a town, team up with others, and turn your corner of the world into something lasting.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* -- Hero Section -- */}
      <section className="relative min-h-[64vh] flex items-center justify-center overflow-hidden" id="hero">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-glow)_0%,_transparent_70%)] opacity-30" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/40 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-14 sm:pt-16">
          <p className="text-xl sm:text-2xl uppercase tracking-[0.4em] text-primary-400/90 mb-5 animate-fade-in-up">
            Dxrery Networks
          </p>
          <h1
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-parchment-50 mb-6 tracking-tight animate-fade-in-up"
          >
            Cozy towns. Grand adventures.
          </h1>

          <p
            className="text-sm sm:text-base text-parchment-300/70 max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Survive, explore, and build your kingdom in a relaxed South African Towny server with custom mod-like features and time-based ranks.
          </p>

          <div
            className="flex flex-col items-center justify-center gap-4 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              <CopyIP
                className="rpg-btn h-20 w-full rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-3 text-sm shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
                showPrefix={false}
                codeClassName="!font-[family-name:var(--font-heading)] !text-base !font-bold !text-parchment-50"
                layout="stacked"
                secondaryClassName="text-xs font-normal uppercase tracking-[0.1em] text-parchment-300/65 leading-normal"
                secondaryContent={
                  <ServerOnline numberOnly />
                }
              />
              <a
                href="https://discord.com/invite/mM7esdn"
                target="_blank"
                rel="noreferrer"
                className="rpg-btn h-20 w-full flex-col justify-center gap-1 rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-3 text-sm shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
              >
                <span className="text-base font-bold uppercase tracking-[0.12em] text-parchment-50">Join the Discord</span>
                <DiscordOnline
                  numberOnly
                  className="text-xs font-normal uppercase tracking-[0.1em] text-parchment-300/65"
                />
              </a>
            </div>

            <div className="w-full max-w-2xl text-center text-[0.7rem] uppercase tracking-[0.28em] text-parchment-300/75 sm:text-xs">
              Java 26.2 · Bedrock play.dxrery.top:26000 · one shared world
            </div>

          </div>
        </div>
      </section>

      {/* -- First Hours Section -- */}
      <section className="pt-4 pb-7 sm:pt-5 sm:pb-6 relative" id="first-hours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-charcoal-600/60 bg-charcoal-900/45 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-charcoal-600/40 lg:divide-y-0 lg:divide-x lg:divide-charcoal-600/40">
              {firstHoursSteps.map((step, index) => (
                <div key={step.title} className="px-4 py-4 sm:px-5 sm:py-5 text-center lg:text-left">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-400/75 mb-1">Step {index + 1}</p>
                  <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-semibold text-parchment-100 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[0.82rem] text-parchment-300/60 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Features Grid -- */}
      <section className="pt-8 pb-6 sm:pt-9 sm:pb-4 relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-parchment-50 mb-4">
              Why players stay
            </h2>
            <p className="text-parchment-300/60 max-w-lg mx-auto">
              A gentle blend of survival, community, and rewards in a cozy server world.
            </p>
            <div className="ornament-divider mt-6 max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="rpg-card p-6 group block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-parchment-300/60 leading-relaxed">
                  {feature.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs text-primary-400/70 group-hover:text-primary-400 transition-colors duration-300">
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- Stats Bar -- */}
      <section className="py-8 border-y border-charcoal-600/30 bg-charcoal-800/30" id="stats">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-primary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-parchment-300/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-10 sm:py-8 relative" id="cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary-glow)_0%,_transparent_60%)] opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-parchment-50 mb-4">
            Ready to start your adventure?
          </h2>
          <p className="text-parchment-300/60 mb-8 max-w-lg mx-auto">
            Join our community in a friendly Minecraft world full of quests, towns, and rewards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/wiki/welcome-guide" className="rpg-btn rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-10 py-4 text-base font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700">
              Explore the Wiki
            </Link>
            <Link href="/vote#vote-minecraft-mp-1" className="rpg-btn rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-10 py-4 text-base font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700">
              Vote for Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
