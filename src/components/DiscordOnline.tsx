"use client";

import { useEffect, useState } from "react";

interface DiscordCount {
  onlineCount: number | null;
  totalCount: number | null;
}

interface DiscordOnlineProps {
  className?: string;
  numberOnly?: boolean;
}

export function DiscordOnline({ className = "", numberOnly = false }: DiscordOnlineProps) {
  const [count, setCount] = useState<DiscordCount>({ onlineCount: null, totalCount: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCount() {
      try {
        const res = await fetch("/api/discord/online", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setCount({
          onlineCount: typeof data.onlineCount === "number" ? data.onlineCount : null,
          totalCount: typeof data.totalCount === "number" ? data.totalCount : null,
        });
      } catch {
        setCount({ onlineCount: null, totalCount: null });
      } finally {
        setLoading(false);
      }
    }

    fetchCount();

    const intervalId = window.setInterval(fetchCount, 60000);

    return () => {
      controller.abort();
      window.clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <span className={`font-normal ${className}`.trim()}>{numberOnly ? "Loading" : "Loading..."}</span>;
  }

  if (count.onlineCount === null) {
    return <span className={`font-normal ${className}`.trim()}>{numberOnly ? "Offline" : "Discord"}</span>;
  }

  if (numberOnly) {
    return <span className={`font-normal ${className}`.trim()}>{count.onlineCount.toLocaleString()} online</span>;
  }

  return <span className={`font-normal ${className}`.trim()}>{count.onlineCount.toLocaleString()} Users Online</span>;
}
