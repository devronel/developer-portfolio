import { ImageResponse } from "next/og";

import { profile, siteConfig } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const background = "#0d0f12";
const card = "#16191e";
const border = "#2a2f37";
const foreground = "#f2f4f7";
const muted = "#8b939f";
const accent = "#4ade80";

/** Terminal-style social card. Generated at build time — no request-time APIs. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background,
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${border}`,
            background: card,
            borderRadius: 12,
            padding: 48,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: accent,
                display: "flex",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: border,
                display: "flex",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: border,
                display: "flex",
              }}
            />
            <div
              style={{
                marginLeft: 8,
                fontSize: 22,
                color: muted,
                display: "flex",
              }}
            >
              {profile.handle}@portfolio — zsh
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 26, color: accent, display: "flex" }}>
              ~/portfolio $ whoami
            </div>
            <div
              style={{
                fontSize: 78,
                fontWeight: 700,
                letterSpacing: -2,
                color: foreground,
                display: "flex",
              }}
            >
              {profile.name}
            </div>
            <div style={{ fontSize: 34, color: muted, display: "flex" }}>
              {profile.role}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              fontSize: 24,
              color: muted,
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.description.slice(0, 72)}…</div>
            <div style={{ display: "flex", color: accent }}>
              {siteConfig.url.replace(/^https?:\/\//, "")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
