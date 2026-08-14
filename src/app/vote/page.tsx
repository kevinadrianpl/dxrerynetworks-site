import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Vote",
  description: "Vote for Dxrery Networks on Minecraft server lists and earn in-game rewards!",
};

const voteSites = [
  {
    name: "Minecraft-MP #1",
    url: "https://minecraft-mp.com/server/221984/vote/",
    icon: "🌐",
    description: "Vote on our first Minecraft-MP listing.",
    color: "border-emerald-rpg/30 hover:border-emerald-rpg/60",
  },
  {
    name: "Minecraft-MP #2",
    url: "https://minecraft-mp.com/server/315282/vote/",
    icon: "🗳️",
    description: "Vote on our second Minecraft-MP listing.",
    color: "border-mystic-400/30 hover:border-mystic-400/60",
  },
  {
    name: "MinecraftServers.org",
    url: "https://minecraftservers.org/vote/637524",
    icon: "🚀",
    description: "Support us on MinecraftServers.org.",
    color: "border-primary-400/30 hover:border-primary-400/60",
  },
  {
    name: "TopMinecraftServers",
    url: "https://topminecraftservers.org/server/28267",
    icon: "🌟",
    description: "Vote on TopMinecraftServers.org.",
    color: "border-crimson-400/30 hover:border-crimson-400/60",
  },
  {
    name: "TopG",
    url: "https://topg.org/minecraft-servers/server-535007",
    icon: "🏆",
    description: "Cast your daily vote on TopG.",
    color: "border-cyan-300/30 hover:border-cyan-300/60",
  },
];

const rewards = [
  {
    icon: "💰",
    title: "In-Game Currency",
    description: "Earn cash and gems with every vote to spend in-game.",
  },
  {
    icon: "🎁",
    title: "Vote Crate Key",
    description: "Each vote gives you a key to open the Vote Crate with exclusive loot.",
  },
  {
    icon: "🏆",
    title: "Vote Streak Bonuses",
    description: "Maintain daily vote streaks for multiplied rewards/special bonuses.",
  },
  {
    icon: "🌟",
    title: "Monthly Top Voter",
    description: "The player with most votes each month receives a unique reward.",
  },
];

export default function VotePage() {
  return (
    <>
      <PageHeader
        title="The Quest Board"
        subtitle="Support the server by voting daily! Each vote helps us grow and earns you awesome in-game rewards."
        icon="⭐"
      />

      <section className="py-12 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vote Sites */}
          <div className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-parchment-50 text-center mb-2">
              Cast Your Vote
            </h2>
            <p className="text-sm text-parchment-300/50 text-center mb-8">
              Click each site below to vote. You can vote on every site once every 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 items-stretch">
              {voteSites.map((site) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rpg-card p-5 flex flex-col items-start gap-4 border ${site.color} transition-all duration-300 group h-full`}
                  id={`vote-${site.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-charcoal-700 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {site.icon}
                  </div>
                  <div className="flex-1 min-w-0 w-full">
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-parchment-100 group-hover:text-primary-400 transition-colors duration-300">
                      {site.name}
                    </h3>
                    <p className="text-xs text-parchment-300/50 mt-0.5 leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                  <div className="shrink-0 mt-auto">
                    <span className="rpg-btn text-xs px-3 py-1.5">
                      Vote
                      <svg className="w-3 h-3 inline ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-parchment-50 text-center mb-2">
              Vote Rewards
            </h2>
            <p className="text-sm text-parchment-300/50 text-center mb-8">
              Every vote counts — here&apos;s what you earn for supporting us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rewards.map((reward) => (
                <div key={reward.title} className="rpg-card p-5 flex items-start gap-4 border border-charcoal-600/30">
                  <div className="w-10 h-10 rounded-lg bg-charcoal-700 flex items-center justify-center text-xl shrink-0">
                    {reward.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-parchment-100 text-sm mb-1">
                      {reward.title}
                    </h3>
                    <p className="text-xs text-parchment-300/50 leading-relaxed">
                      {reward.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Voting Helps */}
          <div className="rpg-card p-6 sm:p-8 mt-12 text-center border border-primary-400/20 bg-gradient-to-br from-primary-400/5 to-transparent">
            <span className="text-3xl block mb-3">🌟</span>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100 mb-2">
              Why Your Vote Matters
            </h3>
            <p className="text-sm text-parchment-300/60 max-w-md mx-auto">
              Voting boosts our visibility on server lists, helping new players discover Dxrery Networks.
              The more votes we get, the more players join and the more epic our community grows!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
