"use client";

import { useMemo, useState } from "react";

interface MapWorld {
  key: string;
  label: string;
  embedUrl: string;
}

const mapWorlds: MapWorld[] = [
  {
    key: "forgotton_lands",
    label: "forgotton_lands",
    embedUrl: "http://102.212.60.73:26357/?world=forgotton_lands",
  },
  {
    key: "new_horizons",
    label: "new_horizons",
    embedUrl: "http://102.212.60.73:26357/?world=new_horizons",
  },
];

export function BlueMapEmbed() {
  const [selectedWorldKey, setSelectedWorldKey] = useState(mapWorlds[0]?.key ?? "");

  const selectedWorld = useMemo(
    () => mapWorlds.find((world) => world.key === selectedWorldKey) ?? mapWorlds[0],
    [selectedWorldKey]
  );

  if (!selectedWorld) {
    return null;
  }

  return (
    <div className="mt-10 rpg-card p-4 sm:p-6 border border-primary-400/30" id="wiki-live-map">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-primary-600/5 flex items-center justify-center text-xl shrink-0">
          🗺️
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-parchment-100">
            Live BlueMap
          </h2>
          <p className="text-sm text-parchment-300/60 mt-1">
            View your towns, builds, and landmarks in real time.
          </p>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2 sm:max-w-sm">
        <label
          htmlFor="world-map-select"
          className="text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.18em] text-parchment-300/60"
        >
          Choose World Map
        </label>
        <select
          id="world-map-select"
          value={selectedWorld.key}
          onChange={(event) => setSelectedWorldKey(event.target.value)}
          className="rpg-btn rounded-xl border-primary-400/40 bg-charcoal-800/95 px-4 py-3 text-sm font-bold text-parchment-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] outline-none"
        >
          {mapWorlds.map((world) => (
            <option key={world.key} value={world.key}>
              {world.label}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl overflow-hidden border border-charcoal-600/60 bg-charcoal-900/70">
        <iframe
          key={selectedWorld.key}
          src={selectedWorld.embedUrl}
          title={`${selectedWorld.label} BlueMap`}
          className="w-full h-[420px] sm:h-[520px]"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-parchment-300/50">
          If the embed is blocked by your browser, open the selected map in a new tab.
        </p>
        <a
          href={selectedWorld.embedUrl}
          target="_blank"
          rel="noreferrer"
          className="rpg-btn rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-2.5 text-sm font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
        >
          Open Selected Map
        </a>
      </div>
    </div>
  );
}
