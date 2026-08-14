"use client";

import { useEffect, useState } from "react";

interface ServerCount {
  online: boolean | null;
  onlineCount: number | null;
}

interface ServerOnlineProps {
  className?: string;
  numberOnly?: boolean;
}

export function ServerOnline({ className = "", numberOnly = false }: ServerOnlineProps) {
  const [count, setCount] = useState<ServerCount>({
    online: null,
    onlineCount: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCount() {
      try {
        const res = await fetch("/api/server/online", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setCount({
          online: typeof data.online === "boolean" ? data.online : null,
          onlineCount: typeof data.onlineCount === "number" ? data.onlineCount : null,
        });
      } catch {
        setCount({ online: null, onlineCount: null });
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
    return <span className={`font-normal ${className}`.trim()}>{numberOnly ? "Offline" : "Server Offline"}</span>;
  }

  if (numberOnly) {
    return <span className={`font-normal ${className}`.trim()}>{count.onlineCount.toLocaleString()} online</span>;
  }

  return <span className={`font-normal ${className}`.trim()}>{count.onlineCount.toLocaleString()} Online</span>;
}
