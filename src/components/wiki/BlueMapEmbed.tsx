interface MapLink {
  label: string;
  href: string;
  description: string;
}

const mapLinks: MapLink[] = [
  {
    label: "forgotten_lands",
    href: "http://102.212.60.73:26357/#forgotten_lands:0:0:0:1500:0:0:0:1:flat",
    description: "Walk the ancient roads of the first realm, where veteran towns and old alliances were forged.",
  },
  {
    label: "new_horizons",
    href: "http://102.212.60.73:26357/#new_horizons:0:0:0:1500:0:0:0:1:flat",
    description: "Chart fresh frontiers in a newborn world, rich with untamed land and future legends.",
  },
];

export function BlueMapEmbed() {
  return (
    <div className="mt-10 rpg-card p-4 sm:p-6 border border-primary-400/30" id="wiki-live-map">
      <div className="flex flex-col items-center text-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-primary-600/5 flex items-center justify-center text-xl shrink-0">
          🗺️
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-parchment-100">
            World Maps
          </h2>
          <p className="text-sm text-parchment-300/60 mt-1">
            Choose a world below to open its BlueMap view.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mapLinks.map((world) => (
          <div
            key={world.label}
            className="rounded-xl border border-charcoal-600/60 bg-charcoal-900/60 p-4 flex flex-col gap-3 text-center items-center"
          >
            <p className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-[0.14em] text-parchment-100">
              {world.label}
            </p>
            <p className="text-sm text-parchment-300/70 leading-relaxed flex-1">
              {world.description}
            </p>
            <a
              href={world.href}
              target="_blank"
              rel="noreferrer"
              className="rpg-btn rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700 w-full justify-center"
            >
              Open World
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
