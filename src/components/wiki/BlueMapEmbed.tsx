"use client";

import { useEffect, useState } from "react";

interface MapWorld {
  label: string;
}

const BLUE_MAP_URL = "http://102.212.60.73:26357/";

const mapWorlds: MapWorld[] = [
  {
    label: "forgotton_lands",
  },
  {
    label: "new_horizons",
  },
  {
    label: "spawn",
  },
];

export function BlueMapEmbed() {
  const [isSecurePage, setIsSecurePage] = useState<boolean | null>(null);

  useEffect(() => {
    setIsSecurePage(window.location.protocol === "https:");
  }, []);

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

      <div className="mb-4 rounded-xl border border-charcoal-600/60 bg-charcoal-900/50 px-4 py-3">
        <p className="text-xs font-[family-name:var(--font-heading)] uppercase tracking-[0.18em] text-parchment-300/60">
          Available maps inside BlueMap
        </p>
        <p className="mt-2 text-sm text-parchment-200/80">
          {mapWorlds.map((world) => world.label).join(" and ")}
        </p>
      </div>

      {isSecurePage === null ? (
        <div className="rounded-xl border border-charcoal-600/60 bg-charcoal-900/70 p-6 sm:p-8 text-center">
          <p className="text-sm text-parchment-300/70">Loading map...</p>
        </div>
      ) : isSecurePage ? (
        <div className="rounded-xl border border-charcoal-600/60 bg-charcoal-900/70 p-6 sm:p-8 text-center">
          <p className="font-[family-name:var(--font-heading)] text-lg text-parchment-100">
            BlueMap can&apos;t be embedded on the public site yet.
          </p>
          <p className="mt-3 text-sm text-parchment-300/70 max-w-2xl mx-auto leading-relaxed">
            The live map server is currently served over HTTP, while the public website is served over HTTPS. Modern browsers block that combination inside iframes.
          </p>
          <a
            href={BLUE_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="rpg-btn mt-5 rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-2.5 text-sm font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
          >
            Open BlueMap
          </a>
        </div>
      ) : (
        <div className="rounded-xl overflow-hidden border border-charcoal-600/60 bg-charcoal-900/70">
          <iframe
            src={BLUE_MAP_URL}
            title="Live BlueMap"
            className="w-full h-[420px] sm:h-[520px]"
            loading="lazy"
          />
        </div>
      )}

      {isSecurePage === false ? (
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-parchment-300/50">
            If the embed is blocked by your browser, open BlueMap in a new tab.
          </p>
          <a
            href={BLUE_MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="rpg-btn rounded-2xl border-primary-400/40 bg-charcoal-800/95 px-5 py-2.5 text-sm font-bold text-parchment-50 shadow-[0_0_24px_rgba(0,0,0,0.2)] hover:bg-charcoal-700"
          >
            Open BlueMap
          </a>
        </div>
      ) : null}
    </div>
  );
}
