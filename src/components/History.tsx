"use client";

import { HISTORY } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function History() {
  const { t, lang } = useLang();

  return (
    <section id="history" className="section">
      <div className="container">
        <div className="section-head">
          <div className="rule" />
          <div className="eyebrow">{t("04 — THE HISTORY OF VALUE", "04 — 价值简史")}</div>
          <h2 className="title">
            {t("Five thousand years climbing the stack.", "五千年向上攀登的堆栈。")}
          </h2>
          <p className="deck">
            {t(
              "Each era moved value one heaven higher. Shells settled on biology; coins settled on physics; banknotes settled on law; chains settle on mathematics. The arrow has only ever pointed in one direction.",
              "每一个时代，都把价值往上推一重天。海贝结算在生物层，硬币结算在物理层，纸币结算在法律层，链条结算在数学层。这只箭，只指向同一个方向。"
            )}
          </p>
        </div>

        <ol className="timeline">
          {HISTORY.map((era, i) => (
            <li key={era.id} className="era">
              <div className="era-rail">
                <span className="era-dot" />
                {i < HISTORY.length - 1 && <span className="era-line" />}
              </div>
              <div className="era-card">
                <div className="era-meta mono">
                  <span>{lang === "zh" ? era.range.zh : era.range.en}</span>
                  <span className="bullet">·</span>
                  <span className="layer-tag">{lang === "zh" ? era.layer.zh : era.layer.en}</span>
                </div>
                <h3 className="era-title display">{lang === "zh" ? era.title.zh : era.title.en}</h3>
                <p className="era-body">{lang === "zh" ? era.body.zh : era.body.en}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style jsx>{`
        .timeline { list-style: none; display: flex; flex-direction: column; gap: 0; padding: 0; }
        .era {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 24px;
          position: relative;
        }
        .era-rail {
          position: relative;
          display: flex; flex-direction: column; align-items: center;
        }
        .era-dot {
          width: 14px; height: 14px; border-radius: 999px;
          background: var(--bg);
          border: 1.5px solid var(--onchain);
          margin-top: 22px;
          z-index: 1;
        }
        .era-line {
          flex: 1;
          width: 1px;
          background: linear-gradient(180deg, rgba(97,245,179,0.4), rgba(97,245,179,0.05));
          margin-top: 4px;
        }
        .era-card {
          padding: 16px 0 48px;
        }
        .era-meta {
          display: flex; align-items: center; gap: 8px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 10px;
        }
        .era-meta .layer-tag { color: var(--onchain); }
        .era-meta .bullet { color: var(--ink-low); }
        .era-title {
          font-size: clamp(24px, 2.6vw, 34px);
          font-weight: 500;
          letter-spacing: -0.015em;
          margin-bottom: 12px;
        }
        .era-body { color: var(--ink-mute); font-size: 15px; line-height: 1.7; max-width: 720px; }
      `}</style>
    </section>
  );
}
