"use client";

import { useMemo, useState } from "react";
import { WORLDS } from "@/lib/data";
import { useLang } from "@/lib/i18n";

type FlatLayer = {
  worldId: string;
  worldName: string;
  worldHue: string;
  worldHueSoft: string;
  layerId: string;
  number: string;
  domain: string;
  essence: string;
  instances: { name: string; gloss: string }[];
  body: string;
};

export default function StackViz() {
  const { lang, t } = useLang();

  const flat: FlatLayer[] = useMemo(() => {
    const out: FlatLayer[] = [];
    // top-down: on-chain (10) → physical (01)
    [...WORLDS].reverse().forEach((w) => {
      [...w.layers].reverse().forEach((l) => {
        out.push({
          worldId: w.id,
          worldName: lang === "zh" ? w.name.zh : w.name.en,
          worldHue: w.hue,
          worldHueSoft: w.hueSoft,
          layerId: l.id,
          number: l.number,
          domain: lang === "zh" ? l.domain.zh : l.domain.en,
          essence: lang === "zh" ? l.essence.zh : l.essence.en,
          instances: l.instances.map((i) => ({
            name: lang === "zh" ? i.name.zh : i.name.en,
            gloss: lang === "zh" ? i.gloss.zh : i.gloss.en,
          })),
          body: lang === "zh" ? l.body.zh : l.body.en,
        });
      });
    });
    return out;
  }, [lang]);

  const [active, setActive] = useState<string>(flat[0]?.layerId ?? "");
  const activeLayer = flat.find((l) => l.layerId === active) ?? flat[0];

  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-head">
          <div className="rule" />
          <div className="eyebrow">{t("01 — THE STACK", "01 — 堆栈")}</div>
          <h2 className="title">{t("Ten Heavens, four worlds, one ascent.", "十重天 · 四界 · 一次攀升。")}</h2>
          <p className="deck">
            {t(
              "Read top-down or bottom-up. Each layer rests on the one beneath it; each layer borrows enforcement from the layer that does not need it. Click a heaven to read its essence — the right column updates in place.",
              "可以从上往下读，也可以从下往上读。每一层都坐在它下面那一层上；每一层都向「不需要被执行的那一层」借执行力。点击任何一重天，右栏即时切换它的核心要义。"
            )}
          </p>
        </div>

        <div className="stack-wrap">
          <div className="stack-col">
            {flat.map((l, i) => {
              const isActive = l.layerId === active;
              const widthPct = 100 - (i % 3) * 4; // subtle stepped width per layer
              return (
                <button
                  key={l.layerId}
                  className={`layer ${isActive ? "on" : ""}`}
                  onClick={() => setActive(l.layerId)}
                  style={
                    {
                      "--hue": l.worldHue,
                      "--hueSoft": l.worldHueSoft,
                      width: `${widthPct}%`,
                      marginLeft: `${(100 - widthPct) / 2}%`,
                    } as React.CSSProperties
                  }
                >
                  <span className="layer-num">{l.number}</span>
                  <span className="layer-domain">{l.domain}</span>
                  <span className="layer-essence">{l.essence}</span>
                  <span className="layer-world">{l.worldName}</span>
                </button>
              );
            })}

            <div className="anchor-line">
              <span className="anchor-dot" />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {t("Earth · the only layer that requires no consensus", "大地 · 唯一无须共识的一层")}
              </span>
            </div>
          </div>

          <aside className="detail">
            <div
              className="detail-card"
              style={{ borderColor: activeLayer.worldHue, background: activeLayer.worldHueSoft }}
            >
              <div className="detail-head">
                <span className="num mono" style={{ color: activeLayer.worldHue }}>{activeLayer.number}</span>
                <span className="world-chip mono" style={{ borderColor: activeLayer.worldHue, color: activeLayer.worldHue }}>
                  {activeLayer.worldName}
                </span>
              </div>
              <h3 className="detail-title display">
                {activeLayer.domain}
              </h3>
              <p className="detail-essence serif">{activeLayer.essence}</p>

              <div className="instances">
                {activeLayer.instances.map((inst, k) => (
                  <div key={k} className="instance">
                    <span className="i-name display">{inst.name}</span>
                    <span className="i-gloss">{inst.gloss}</span>
                  </div>
                ))}
              </div>

              <p className="detail-body">{activeLayer.body}</p>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .stack-wrap {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        @media (max-width: 960px) { .stack-wrap { grid-template-columns: 1fr; gap: 40px; } }

        .stack-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .layer {
          appearance: none;
          background: linear-gradient(90deg, transparent, var(--hueSoft) 30%, var(--hueSoft) 70%, transparent);
          border: 1px solid rgba(245,243,238,0.08);
          border-left: 2px solid var(--hue);
          color: var(--ink);
          text-align: left;
          padding: 18px 22px;
          display: grid;
          grid-template-columns: 60px 1fr auto;
          gap: 14px;
          align-items: baseline;
          cursor: pointer;
          transition: all 220ms ease;
          font: inherit;
          border-radius: 2px;
        }
        .layer:hover, .layer.on {
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--hue) 22%, transparent) 30%, color-mix(in srgb, var(--hue) 22%, transparent) 70%, transparent);
          border-color: var(--hue);
          transform: translateX(-2px);
        }
        .layer.on { box-shadow: 0 0 0 1px var(--hue); }
        .layer-num { font-family: var(--mono); font-size: 13px; color: var(--hue); }
        .layer-domain { font-family: var(--display); font-size: clamp(18px, 1.7vw, 22px); font-weight: 500; letter-spacing: -0.005em; }
        .layer-essence { font-family: var(--serif); font-style: italic; color: var(--ink-mute); font-size: 14px; grid-column: 2 / span 1; margin-top: 3px; }
        .layer-world { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-low); align-self: start; }

        .anchor-line {
          margin-top: 14px;
          display: flex; align-items: center; gap: 12px;
          color: var(--ink-low);
          padding: 14px 0;
          border-top: 1px dashed rgba(245,243,238,0.12);
        }
        .anchor-dot { width: 10px; height: 10px; border-radius: 999px; background: radial-gradient(circle at 30% 30%, #c0a36a, #5e4f33); border: 1px solid rgba(184,164,122,0.4); }

        .detail { position: sticky; top: 100px; }
        .detail-card {
          border: 1px solid var(--hue);
          border-radius: 4px;
          padding: 34px;
          transition: all 250ms ease;
        }
        .detail-head { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
        .num { font-size: 13px; letter-spacing: 0.1em; }
        .world-chip {
          padding: 4px 10px;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: 999px;
        }
        .detail-title {
          font-size: clamp(32px, 4.4vw, 56px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 16px;
        }
        .detail-essence {
          font-size: clamp(16px, 1.5vw, 20px);
          color: var(--ink);
          line-height: 1.5;
          font-style: italic;
          margin-bottom: 28px;
        }
        .instances {
          display: grid;
          gap: 8px;
          margin-bottom: 28px;
          padding: 16px 0;
          border-top: 1px solid rgba(245,243,238,0.08);
          border-bottom: 1px solid rgba(245,243,238,0.08);
        }
        .instance { display: flex; justify-content: space-between; gap: 16px; align-items: baseline; }
        .i-name { font-size: 16px; }
        .i-gloss { font-family: var(--serif); font-style: italic; color: var(--ink-mute); font-size: 14px; text-align: right; }
        .detail-body { color: var(--ink-mute); font-size: 15px; line-height: 1.7; }
      `}</style>
    </section>
  );
}
