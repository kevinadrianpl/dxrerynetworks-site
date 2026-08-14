"use client";

import type { ReactNode } from "react";
import { useState } from "react";

interface CopyIPProps {
  className?: string;
  idleText?: string;
  copiedText?: string;
  showPrefix?: boolean;
  statusDisplay?: "icon" | "text";
  codeClassName?: string;
  statusClassName?: string;
  layout?: "inline" | "stacked";
  secondaryContent?: ReactNode;
  secondaryClassName?: string;
}

export function CopyIP({
  className = "",
  idleText = "",
  copiedText = "",
  showPrefix = true,
  statusDisplay = "icon",
  codeClassName = "",
  statusClassName = "",
  layout = "inline",
  secondaryContent,
  secondaryClassName = "",
}: CopyIPProps) {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.dxrery.top";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = serverIP;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group rounded-lg bg-charcoal-800 border border-charcoal-600 hover:border-primary-400/50 transition-all duration-300 w-fit ${
        layout === "stacked" ? "flex flex-col items-center justify-center gap-1.5" : "flex items-center gap-2"
      } px-3 py-2 ${className}`.trim()}
      title="Click to copy server IP"
      id="copy-ip-btn"
    >
      <div className="flex items-center gap-2">
        {showPrefix ? (
          <span className="text-xs text-parchment-300/60 uppercase tracking-wider font-[family-name:var(--font-heading)]">
            IP:
          </span>
        ) : null}
        <code className={`text-sm text-primary-400 font-mono font-semibold group-hover:glow-text transition-all duration-300 ${codeClassName}`.trim()}>
          {serverIP}
        </code>
        {statusDisplay === "text" ? (
          <span
            className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              copied
                ? "text-emerald-rpg"
                : "text-parchment-300/70 group-hover:text-parchment-100"
            } ${statusClassName}`.trim()}
          >
            {copied ? copiedText || "Copied" : idleText || "Copy IP"}
          </span>
        ) : (
          <span
            className={`text-xs transition-all duration-300 ${
              copied
                ? "text-emerald-rpg"
                : "text-parchment-300/40 group-hover:text-parchment-300/80"
            }`}
          >
            {copied ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </span>
        )}
      </div>
      {secondaryContent ? (
        <span className={`text-xs text-parchment-300/70 leading-none ${secondaryClassName}`.trim()}>
          {secondaryContent}
        </span>
      ) : null}
    </button>
  );
}
