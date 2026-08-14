import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Rules",
  description: "Server rules and guidelines for Dxrery Networks. Play fair, respect others, and enjoy the adventure.",
};

const ruleCategories = [
  {
    title: "General Rules",
    icon: "📜",
    color: "border-primary-400/30",
    rules: [
      {
        id: "G1",
        title: "Be Respectful",
        description: "Treat all players and staff with respect. Harassment, bullying, or discrimination of any kind is strictly prohibited.",
      },
      {
        id: "G2",
        title: "No Cheating or Exploiting",
        description: "The use of hacked clients, mods that give unfair advantages (x-ray, killaura, etc.), or exploiting bugs/glitches is forbidden. Report bugs to staff.",
      },
      {
        id: "G3",
        title: "No Advertising",
        description: "Do not advertise other servers, websites, or services in chat, signs, or through any other medium.",
      },
      {
        id: "G4",
        title: "Follow Staff Instructions",
        description: "Staff members have the final say. If you disagree with a decision, appeal through the proper channels — do not argue in public chat.",
      },
      {
        id: "G5",
        title: "One Account Per Player",
        description: "Alt accounts are not permitted unless approved by staff. Circumventing bans with alt accounts will result in permanent removal.",
      },
    ],
  },
  {
    title: "Chat Rules",
    icon: "💬",
    color: "border-mystic-400/30",
    rules: [
      {
        id: "C1",
        title: "Keep Chat Clean",
        description: "No excessive swearing, spam, caps lock abuse, or inappropriate content. Keep conversations suitable for all ages.",
      },
      {
        id: "C2",
        title: "English in Global Chat",
        description: "Please use English in the global chat so everyone can understand. Use /msg or party chat for other languages.",
      },
      {
        id: "C3",
        title: "No Sensitive Topics",
        description: "Avoid discussing politics, religion, or other controversial topics that may cause conflict.",
      },
      {
        id: "C4",
        title: "No Impersonation",
        description: "Do not impersonate staff members, other players, or any real-world individuals.",
      },
    ],
  },
  {
    title: "Gameplay Rules",
    icon: "🛡️",
    color: "border-emerald-rpg/30",
    rules: [
      {
        id: "P1",
        title: "No Griefing",
        description: "Do not destroy, alter, or steal from other players' builds or property without explicit permission.",
      },
      {
        id: "P2",
        title: "No Scamming",
        description: "All trades and deals must be honored. Scamming other players out of items, money, or services is prohibited.",
      },
      {
        id: "P3",
        title: "Claim Your Builds",
        description: "Use the claim system to protect your builds. Unclaimed builds may not be protected from world resets.",
      },
      {
        id: "P4",
        title: "Respect Boundaries",
        description: "Do not build excessively close to other players' claims without their permission. Maintain a reasonable distance.",
      },
      {
        id: "P5",
        title: "No AFK Machines",
        description: "Automated farms or machines designed to keep you AFK for extended periods are not allowed without staff approval.",
      },
    ],
  },
];

export default function RulesPage() {
  return (
    <>
      <PageHeader
        title="The Code of Conduct"
        subtitle="By playing on Dxrery Networks, you agree to abide by these rules. Violations may result in warnings, mutes, kicks, or bans."
        icon="⚖️"
      />

      <section className="py-12 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Warning Banner */}
          <div className="rpg-card p-4 border border-crimson-400/30 bg-gradient-to-r from-crimson-500/10 to-transparent">
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">⚠️</span>
              <div>
                <p className="text-sm text-parchment-100 font-semibold">Important</p>
                <p className="text-xs text-parchment-300/60 mt-1">
                  Ignorance of the rules is not an excuse. All players are expected to read and understand these guidelines. 
                  Staff reserves the right to take action for behaviors not explicitly listed here.
                </p>
              </div>
            </div>
          </div>

          {/* Rule Categories */}
          {ruleCategories.map((category) => (
            <div key={category.title} id={`rules-${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-parchment-50">
                  {category.title}
                </h2>
              </div>

              <div className={`rpg-card border ${category.color} divide-y divide-charcoal-600/30`}>
                {category.rules.map((rule) => (
                  <div key={rule.id} className="p-5 hover:bg-charcoal-700/20 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-charcoal-700 text-primary-400 text-xs font-bold font-[family-name:var(--font-heading)] shrink-0">
                        {rule.id}
                      </span>
                      <div>
                        <h3 className="font-semibold text-parchment-100 mb-1">
                          {rule.title}
                        </h3>
                        <p className="text-sm text-parchment-300/60 leading-relaxed">
                          {rule.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Appeal Info */}
          <div className="rpg-card p-6 text-center border border-mystic-400/20">
            <span className="text-3xl block mb-3">🛡️</span>
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100 mb-2">
              Need to Appeal?
            </h3>
            <p className="text-sm text-parchment-300/60 mb-4 max-w-md mx-auto">
              If you believe you were unfairly punished, you can submit an appeal through our Discord server. 
              Include your username, the date, and a detailed explanation.
            </p>
            <a href="https://discord.com/invite/mM7esdn" target="_blank" rel="noopener noreferrer" className="rpg-btn">
              Open Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
