"use client";

import { useState } from "react";
import { MAPPINGS } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function Mappings() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<string>("rwa");
  const m = MAPPINGS.find((x) => x.id === active) ?? MAPPINGS[0];

  return (
    <section id="mappings" className="section">
      <div className="container">
        <div className="section-head">
          <div className="rule" />
          <div className="eyebrow">{t("03 — THE FIVE MAPPINGS", "03 — 五种映射")}</div>
          <h2 className="title">
            {t("How value crosses between worlds.", "价值如何在世界之间穿越。")}
          </h2>
          <p className="deck">
            {t(
              "Every functional financial system is a mapping. RWA lifts the real world up to chain; ETF brings chain assets back down; cross-chain stitches chains together; ABS is finance's older version of the same trick; anchoring is the discipline that holds them all in place.",
              "每一个能运转的金融系统，本质都是一种映射。RWA 把现实世界抬上链；ETF 把链上资产送回去；跨链把链与链缝在一起；ABS 是金融对同一戏法的旧版本；锚定，是把它们维系在原位的纪律。"
            )}
          </p>
        </div>

        <div className="map-grid">
          <div className="map-tabs">
            {MAPPINGS.map((mm) => {
              const on = mm.id === active;
              return (
                <button
                  key={mm.id}
                  className={`tab ${on ? "on" : ""}`}
                  style={{ "--hue": mm.hue } as React.CSSProperties}
                  onClick={() => setActive(mm.id)}
                >
                  <span className="t-name display">{lang === "zh" ? mm.name.zh : mm.name.en}</span>
                  <span className="t-arrow mono">{lang === "zh" ? mm.arrow.zh : mm.arrow.en}</span>
                </button>
              );
            })}
          </div>

          <div className="map-detail" style={{ "--hue": m.hue } as React.CSSProperties}>
            <FlowDiagram from={lang === "zh" ? m.from.zh : m.from.en} to={lang === "zh" ? m.to.zh : m.to.en} hue={m.hue} />

            <h3 className="m-name display">{lang === "zh" ? m.name.zh : m.name.en}</h3>
            <p className="m-arrow mono">{lang === "zh" ? m.arrow.zh : m.arrow.en}</p>
            <p className="m-body">{lang === "zh" ? m.body.zh : m.body.en}</p>

            <div className="m-example">
              <span className="ex-label mono">{t("In practice", "实例")}</span>
              <p className="serif">{lang === "zh" ? m.example.zh : m.example.en}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 960px) { .map-grid { grid-template-columns: 1fr; } }

        .map-tabs { display: flex; flex-direction: column; gap: 4px; }
        .tab {
          appearance: none;
          background: transparent;
          color: var(--ink);
          border: 1px solid rgba(245,243,238,0.06);
          border-left: 2px solid transparent;
          padding: 18px 22px;
          text-align: left;
          display: flex; flex-direction: column; gap: 6px;
          cursor: pointer;
          transition: all 220ms ease;
          font: inherit;
          border-radius: 2px;
        }
        .tab:hover { background: rgba(245,243,238,0.02); border-color: rgba(245,243,238,0.16); }
        .tab.on {
          background: color-mix(in srgb, var(--hue) 12%, transparent);
          border-color: var(--hue);
          border-left-color: var(--hue);
        }
        .t-name { font-size: 22px; font-weight: 500; color: var(--ink); }
        .tab.on .t-name { color: var(--hue); }
        .t-arrow { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-mute); }

        .map-detail {
          padding: 36px;
          border: 1px solid var(--hue);
          border-radius: 4px;
          background: linear-gradient(180deg, color-mix(in srgb, var(--hue) 10%, transparent), transparent 70%);
        }
        .m-name {
          font-size: clamp(36px, 4.5vw, 54px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-top: 28px;
          color: var(--hue);
        }
        .m-arrow {
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-mute);
          margin-top: 10px;
        }
        .m-body { color: var(--ink); font-size: 16px; line-height: 1.7; margin-top: 22px; }
        .m-example {
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid rgba(245,243,238,0.08);
        }
        .ex-label { display: block; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-low); margin-bottom: 8px; }
        .m-example p { color: var(--ink-mute); font-style: italic; font-size: 15px; }
      `}</style>
    </section>
  );
}

function FlowDiagram({ from, to, hue }: { from: string; to: string; hue: string }) {
  return (
    <svg viewBox="0 0 600 140" width="100%" height="auto">
      <defs>
        <linearGradient id={`flow-${hue}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={hue} stopOpacity="0.1" />
          <stop offset="50%" stopColor={hue} stopOpacity="0.9" />
          <stop offset="100%" stopColor={hue} stopOpacity="0.1" />
        </linearGradient>
        <marker id={`arr-${hue}`} markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={hue} />
        </marker>
      </defs>

      <g>
        <circle cx="100" cy="70" r="48" fill="none" stroke="rgba(245,243,238,0.18)" strokeDasharray="3 3" />
        <text x="100" y="65" textAnchor="middle" fontFamily="Cabin Condensed, sans-serif" fontSize="16" fill="#f5f3ee" fontWeight="500">
          {from}
        </text>
        <text x="100" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={hue} letterSpacing="0.1em">
          FROM
        </text>
      </g>

      <line x1="148" y1="70" x2="452" y2="70" stroke={`url(#flow-${hue})`} strokeWidth="2.5" markerEnd={`url(#arr-${hue})`} />
      <line x1="148" y1="70" x2="452" y2="70" stroke={hue} strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 6" />

      <g>
        <circle cx="500" cy="70" r="48" fill="none" stroke={hue} strokeWidth="1" />
        <circle cx="500" cy="70" r="48" fill={hue} fillOpacity="0.08" />
        <text x="500" y="65" textAnchor="middle" fontFamily="Cabin Condensed, sans-serif" fontSize="16" fill="#f5f3ee" fontWeight="500">
          {to}
        </text>
        <text x="500" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={hue} letterSpacing="0.1em">
          TO
        </text>
      </g>
    </svg>
  );
}
