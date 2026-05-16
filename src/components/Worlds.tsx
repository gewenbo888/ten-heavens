"use client";

import { WORLDS } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function Worlds() {
  const { t, lang } = useLang();

  return (
    <section id="worlds" className="section">
      <div className="container">
        <div className="section-head">
          <div className="rule" />
          <div className="eyebrow">{t("02 — THE FOUR WORLDS", "02 — 四界")}</div>
          <h2 className="title">
            {t("Physical · Fictional · Real · On-chain", "物理 · 虚构 · 现实 · 链上")}
          </h2>
          <p className="deck">
            {t(
              "Each world is a different kind of substance. Physical is matter; fictional is shared belief; real is enforced belief; on-chain is mathematically enforced belief. Together they form the only stack we have.",
              "每一个世界都是不同质地的实在。物理是物质；虚构是共同信念；现实是被执行的信念；链上是被数学执行的信念。它们合在一起，就是我们仅有的那一座堆栈。"
            )}
          </p>
        </div>

        <div className="worlds-grid">
          {WORLDS.map((w) => (
            <article
              key={w.id}
              className="world"
              style={{ "--hue": w.hue, "--hueSoft": w.hueSoft } as React.CSSProperties}
            >
              <header className="world-head">
                <div className="world-meta">
                  <span className="world-num mono">{`0${w.index}`}</span>
                  <span className="world-glyph" style={{ color: w.hue }}>
                    {w.glyph}
                  </span>
                </div>
                <h3 className="world-name display">{lang === "zh" ? w.name.zh : w.name.en}</h3>
                <p className="world-tagline serif">{lang === "zh" ? w.tagline.zh : w.tagline.en}</p>
              </header>

              <p className="world-thesis">{lang === "zh" ? w.thesis.zh : w.thesis.en}</p>

              <div className="world-layers">
                {w.layers.map((l) => (
                  <details key={l.id} className="layer-row">
                    <summary>
                      <span className="lr-num mono">{l.number}</span>
                      <span className="lr-domain display">
                        {lang === "zh" ? l.domain.zh : l.domain.en}
                      </span>
                      <span className="lr-essence serif">
                        {lang === "zh" ? l.essence.zh : l.essence.en}
                      </span>
                      <span className="lr-caret" aria-hidden>
                        +
                      </span>
                    </summary>
                    <div className="lr-body">
                      <p>{lang === "zh" ? l.body.zh : l.body.en}</p>
                      <ul className="lr-instances">
                        {l.instances.map((i, k) => (
                          <li key={k}>
                            <strong>{lang === "zh" ? i.name.zh : i.name.en}</strong>
                            <span>{lang === "zh" ? i.gloss.zh : i.gloss.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .worlds-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 880px) { .worlds-grid { grid-template-columns: 1fr; } }

        .world {
          position: relative;
          padding: 36px 32px 24px;
          border: 1px solid rgba(245,243,238,0.08);
          border-top: 2px solid var(--hue);
          background: linear-gradient(180deg, var(--hueSoft) 0%, transparent 60%);
          border-radius: 4px;
          transition: all 220ms ease;
        }
        .world:hover { border-color: var(--hue); }

        .world-head { margin-bottom: 20px; }
        .world-meta { display: flex; align-items: center; gap: 14px; margin-bottom: 10px; }
        .world-num { font-size: 12px; color: var(--ink-mute); letter-spacing: 0.14em; }
        .world-glyph { font-family: var(--serif); font-size: 22px; line-height: 1; }
        .world-name { font-size: clamp(28px, 3.2vw, 40px); font-weight: 500; letter-spacing: -0.02em; line-height: 1; }
        .world-tagline { font-style: italic; color: var(--ink-mute); margin-top: 8px; font-size: 16px; }

        .world-thesis {
          color: var(--ink-mute);
          font-size: 14.5px;
          line-height: 1.7;
          margin-bottom: 22px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(245,243,238,0.08);
        }

        .world-layers { display: flex; flex-direction: column; gap: 4px; }
        .layer-row {
          border-radius: 2px;
          transition: background 180ms ease;
        }
        .layer-row[open] { background: rgba(245,243,238,0.02); }
        .layer-row summary {
          list-style: none;
          cursor: pointer;
          display: grid;
          grid-template-columns: 50px 1fr auto;
          gap: 14px;
          align-items: baseline;
          padding: 12px 4px;
          border-bottom: 1px dashed rgba(245,243,238,0.06);
        }
        .layer-row summary::-webkit-details-marker { display: none; }
        .lr-num { font-size: 12px; color: var(--hue); }
        .lr-domain { font-size: 18px; font-weight: 500; }
        .lr-essence { font-style: italic; color: var(--ink-mute); font-size: 13.5px; grid-column: 2 / span 1; margin-top: 4px; }
        .lr-caret { font-family: var(--mono); color: var(--ink-low); transition: transform 200ms ease; }
        .layer-row[open] .lr-caret { transform: rotate(45deg); color: var(--hue); }

        .lr-body { padding: 16px 4px 18px; }
        .lr-body p { color: var(--ink-mute); font-size: 14px; line-height: 1.7; }
        .lr-instances { list-style: none; display: grid; gap: 6px; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(245,243,238,0.06); }
        .lr-instances li { display: flex; justify-content: space-between; gap: 16px; font-size: 13px; }
        .lr-instances strong { font-weight: 500; color: var(--ink); }
        .lr-instances span { color: var(--ink-mute); font-style: italic; text-align: right; font-family: var(--serif); }
      `}</style>
    </section>
  );
}
