import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Staff",
  description: "Meet the team behind Dxrery Networks Minecraft server.",
};

const staffGroups = [
  {
    role: "Admins",
    color: "from-primary-400 to-primary-600",
    borderColor: "border-primary-400/40",
    textColor: "text-primary-400",
    members: [
      { name: "DirewolF_ZA", bio: "Server Owner" },
      { name: "xRymeria", bio: "Community Manager" },
      { name: "CptForest", bio: "Complaints Manager" },
    ],
  },
  {
    role: "Junior Moderators",
    color: "from-mystic-400 to-mystic-500",
    borderColor: "border-mystic-400/30",
    textColor: "text-mystic-300",
    members: [
      { name: "jmod1", bio: "Junior moderator placeholder." },
      { name: "jmod2", bio: "Junior moderator placeholder." },
      { name: "jmod3", bio: "Junior moderator placeholder." },
    ],
  },
];

function getSkinUrl(name: string) {
  // Using mc-heads.net for skin renders
  return `https://mc-heads.net/avatar/${name}/128`;
}

export default function StaffPage() {
  return (
    <>
      <PageHeader
        title="The Council"
        subtitle="Meet the dedicated team that keeps Dxrery Networks running. Our staff are here to help, guide, and protect the community."
        icon="🛡️"
      />

      <section className="py-12 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {staffGroups.map((group) => (
            <div key={group.role} id={`staff-${group.role.toLowerCase()}`}>
              {/* Role Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`h-0.5 flex-1 bg-gradient-to-r ${group.color} opacity-30`} />
                <h2 className={`font-[family-name:var(--font-heading)] text-lg font-bold ${group.textColor} uppercase tracking-wider px-2`}>
                  {group.role}
                </h2>
                <div className={`h-0.5 flex-1 bg-gradient-to-l ${group.color} opacity-30`} />
              </div>

              {/* Members Grid - strictly 3 columns */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
                {group.members.map((member) => (
                  <div
                    key={member.name}
                    className={`rpg-card p-6 text-center border ${group.borderColor}`}
                  >
                    {/* Avatar */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${group.color} opacity-20 blur-lg`} />
                      <img
                        src={getSkinUrl(member.name)}
                        alt={`${member.name}'s Minecraft skin`}
                        width={80}
                        height={80}
                        className="relative rounded-xl border border-charcoal-500 w-20 h-20 image-rendering-pixelated"
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>

                    {/* Info */}
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-parchment-100 mb-1">
                      {member.name}
                    </h3>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${group.textColor} bg-charcoal-700 mb-3`}>
                      {group.role.replace(/s$/, '')}
                    </span>
                    <p className="text-sm text-parchment-300/50 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Apply CTA */}
          <div className="rpg-card p-8 text-center border border-charcoal-600/30 mt-8">
            <span className="text-3xl block mb-3">🌟</span>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-parchment-100 mb-2">
              Interested in Joining the Team?
            </h3>
            <p className="text-sm text-parchment-300/60 mb-6 max-w-md mx-auto">
              We&apos;re always looking for dedicated and passionate players to join our staff. 
              Applications open periodically — stay tuned in Discord!
            </p>
            <a href="https://discord.com/invite/mM7esdn" target="_blank" rel="noopener noreferrer" className="rpg-btn">
              Apply on Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
