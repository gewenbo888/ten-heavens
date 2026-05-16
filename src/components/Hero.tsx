"use client";

import { useLang } from "@/lib/i18n";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <header id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow mono">
              <span style={{ color: "var(--onchain)" }}>ψ</span>
              {t("PSYVERSE NOTE · 2026", "PSYVERSE 笔记 · 2026")}
            </div>

            <h1 className="hero-title">
              {lang === "zh" ? (
                <>
                  <span>十重天</span>
                  <span className="ascend">价值的分层本体论</span>
                </>
              ) : (
                <>
                  <span>Ten Heavens</span>
                  <span className="ascend">The Layered Ontology of Value</span>
                </>
              )}
            </h1>

            <p className="hero-deck">
              {t(
                "Four worlds stacked one on top of the other — Physical, Fictional, Real, On-chain. Ten heavens layered through them. Five mappings holding them together. A field guide to the architecture beneath money, law, code, and civilisation itself.",
                "四个世界一层一层叠上来 —— 物理、虚构、现实、链上。十重天贯穿其中。五种映射把它们扣在一起。这是一本关于「货币、法律、代码与文明本身」之下那座建筑的实地指南。"
              )}
            </p>

            <div className="hero-meta">
              <span className="chip">
                <span className="dot physical" /> {t("Physical", "物理")}
              </span>
              <span className="chip">
                <span className="dot fictional" /> {t("Fictional", "虚构")}
              </span>
              <span className="chip">
                <span className="dot real" /> {t("Real", "现实")}
              </span>
              <span className="chip">
                <span className="dot onchain" /> {t("On-chain", "链上")}
              </span>
            </div>

            <div className="hero-cta">
              <a href="#stack" className="cta-prime">
                {t("Enter the Stack", "进入堆栈")} <span aria-hidden>↓</span>
              </a>
              <a href="#worlds" className="cta-sub">
                {t("Read the Map", "阅读地图")}
              </a>
            </div>
          </div>

          <div className="hero-figure" aria-hidden>
            <HeroStack />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 80px 0 60px;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
          min-height: 78vh;
        }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr; min-height: auto; gap: 48px; padding-bottom: 40px; }
          .hero-figure { order: -1; max-height: 320px; }
        }
        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 28px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .hero-title {
          font-family: var(--display);
          font-size: clamp(56px, 9vw, 132px);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.025em;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 36px;
        }
        .hero-title .ascend {
          font-family: var(--serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(22px, 2.6vw, 38px);
          letter-spacing: -0.015em;
          color: var(--ink-mute);
        }
        .hero-deck {
          font-family: var(--serif);
          font-size: clamp(18px, 1.6vw, 22px);
          line-height: 1.55;
          color: var(--ink);
          max-width: 540px;
          margin-bottom: 36px;
        }
        .hero-meta {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px;
        }
        .hero-cta { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
        .cta-prime {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 24px;
          background: var(--ink);
          color: var(--bg);
          font-family: var(--display);
          font-size: 15px;
          letter-spacing: 0.02em;
          border-radius: 4px;
          transition: transform 200ms ease;
        }
        .cta-prime:hover { transform: translateY(-1px); }
        .cta-sub {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--ink-mute);
          text-transform: uppercase;
          border-bottom: 1px solid var(--line-strong);
          padding-bottom: 2px;
        }
        .cta-sub:hover { color: var(--ink); }

        .hero-figure {
          width: 100%;
          aspect-ratio: 1;
          max-width: 540px;
          margin-left: auto;
        }
      `}</style>
    </header>
  );
}

/* Static SVG stack for the hero — a compact visual companion to the headline */
function HeroStack() {
  const layers = [
    { label: "On-chain", zh: "链上", hue: "#61f5b3", y: 60 },
    { label: "Real", zh: "现实", hue: "#f0c14b", y: 140 },
    { label: "Fictional", zh: "虚构", hue: "#b89cf5", y: 220 },
    { label: "Physical", zh: "物理", hue: "#b8a47a", y: 300 },
  ];

  return (
    <svg viewBox="0 0 480 480" width="100%" height="100%">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(97,245,179,0.18)" />
          <stop offset="100%" stopColor="rgba(8,8,10,0)" />
        </radialGradient>
        {layers.map((l, i) => (
          <linearGradient key={i} id={`lg${i}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={l.hue} stopOpacity="0.05" />
            <stop offset="50%" stopColor={l.hue} stopOpacity="0.32" />
            <stop offset="100%" stopColor={l.hue} stopOpacity="0.05" />
          </linearGradient>
        ))}
      </defs>

      <circle cx="240" cy="200" r="220" fill="url(#bgGlow)" />

      {/* Vertical axis */}
      <line x1="240" y1="20" x2="240" y2="440" stroke="rgba(245,243,238,0.15)" strokeDasharray="2 5" />

      {/* Top sigil */}
      <g transform="translate(240,30)">
        <text textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="32" fill="#61f5b3" dy="8">
          ψ
        </text>
      </g>

      {/* Layers */}
      {layers.map((l, i) => (
        <g key={i} transform={`translate(60, ${l.y})`}>
          <ellipse cx="180" cy="0" rx="180" ry="24" fill={`url(#lg${i})`} stroke={l.hue} strokeOpacity="0.55" strokeWidth="0.8" />
          <text x="0" y="4" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={l.hue} opacity="0.9">
            0{4 - i}
          </text>
          <text x="360" y="4" textAnchor="end" fontFamily="Cabin Condensed, sans-serif" fontSize="13" fill={l.hue} letterSpacing="0.08em">
            {l.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* Earth at bottom */}
      <g transform="translate(240,400)">
        <circle r="14" fill="rgba(184,164,122,0.08)" stroke="rgba(184,164,122,0.5)" />
        <circle r="3" fill="rgba(184,164,122,0.8)" />
      </g>
    </svg>
  );
}
