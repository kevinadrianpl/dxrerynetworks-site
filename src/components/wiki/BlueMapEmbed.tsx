"use client";

import { useMemo, useState } from "react";

interface MapWorld {
  id: string;
  name: string;
}

const BLUE_MAP_BASE_URL = "http://102.212.60.73:26357/";

const mapWorlds: MapWorld[] = [
  {
    id: "forgotton_lands",
    name: "forgotton_lands",
  },
  {
    id: "new_horizons",
    name: "new_horizons",
  },
];

export function BlueMapEmbed() {
  const [selectedWorldId, setSelectedWorldId] = useState(mapWorlds[0]?.id ?? "");

  const selectedWorld = useMemo(
    () => mapWorlds.find((world) => world.id === selectedWorldId) ?? mapWorlds[0],
    [selectedWorldId]
  );

  const selectedWorldUrl = useMemo(() => {
    const params = new URLSearchParams({ world: selectedWorld.id });
    return `${BLUE_MAP_BASE_URL}?${params.toString()}`;
  }, [selectedWorld.id]);

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
          value={selectedWorld.id}
          onChange={(event) => setSelectedWorldId(event.target.value)}
          className="rpg-btn rounded-xl border-primary-400/40 bg-charcoal-800/95 px-4 py-3 text-sm font-bold text-parchment-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] outline-none"
        >
          {mapWorlds.map((world) => (
            <option key={world.id} value={world.id}>
              {world.name}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl overflow-hidden border border-charcoal-600/60 bg-charcoal-900/70">
        <iframe
          src={selectedWorldUrl}
          title={`${selectedWorld.name} BlueMap`}
          className="w-full h-[420px] sm:h-[520px]"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-parchment-300/50">
          If the embed is blocked by your browser, open the selected map in a new tab.
        </p>
        <a
          href={selectedWorldUrl}
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
