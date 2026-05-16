"use client";

import { FUTURE } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function Future() {
  const { t, lang } = useLang();
  return (
    <section id="future" className="section">
      <div className="container">
        <div className="section-head">
          <div className="rule" />
          <div className="eyebrow">{t("05 — WHAT COMES NEXT", "05 — 接下来的事")}</div>
          <h2 className="title">
            {t("Mathematics, returning to the centre.", "数学，回到中央。")}
          </h2>
          <p className="deck">
            {t(
              "The stack is folding in on itself. The deepest layer — pure mathematics — is becoming the most active. Zero-knowledge proofs let cryptography do work that previously required courts, auditors, and central banks. The Tenth Heaven is being rebuilt on the First.",
              "堆栈正在向内折叠。最深的一层 —— 纯数学 —— 正在变成最活跃的一层。零知识证明让密码学接手了原本需要法庭、审计师、中央银行才能完成的工作。第十重天，正被重新建立在第一重天之上。"
            )}
          </p>
        </div>

        <div className="future-grid">
          {FUTURE.map((node, i) => (
            <article key={node.id} className="f-card">
              <div className="f-num mono">{`0${i + 1}`}</div>
              <h3 className="f-title display">{lang === "zh" ? node.title.zh : node.title.en}</h3>
              <p className="f-body">{lang === "zh" ? node.body.zh : node.body.en}</p>
            </article>
          ))}
        </div>

        <div className="psy-coda">
          <span className="psy-glyph">ψ</span>
          <div className="psy-text">
            <p className="serif">
              {t(
                "When this site speaks of the on-chain heaven, it has Psy in mind — a chain that treats zero-knowledge proofs as the base case, where every transaction is private by default and every claim is verifiable by design.",
                "本页谈到链上那一重天时，心中所想的就是 Psy —— 一条把零知识证明作为基础情形的链：每一笔交易默认私密，每一个声明天然可验证。"
              )}
            </p>
            <a href="https://psy.xyz" target="_blank" rel="noreferrer" className="psy-link">
              psy.xyz <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .future-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
          margin-bottom: 80px;
          border: 1px solid var(--line);
          border-radius: 4px;
          overflow: hidden;
        }
        @media (max-width: 760px) { .future-grid { grid-template-columns: 1fr; } }
        .f-card {
          background: var(--bg-deep);
          padding: 34px 32px 38px;
          display: flex; flex-direction: column; gap: 12px;
          transition: background 220ms ease;
        }
        .f-card:hover { background: rgba(97,245,179,0.04); }
        .f-num { font-size: 11px; letter-spacing: 0.16em; color: var(--onchain); }
        .f-title { font-size: clamp(22px, 2.4vw, 28px); font-weight: 500; letter-spacing: -0.015em; line-height: 1.15; }
        .f-body { color: var(--ink-mute); font-size: 14.5px; line-height: 1.7; }

        .psy-coda {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 28px;
          align-items: center;
          padding: 36px;
          border: 1px solid rgba(97,245,179,0.25);
          background: linear-gradient(120deg, rgba(97,245,179,0.06), transparent);
          border-radius: 4px;
        }
        @media (max-width: 720px) { .psy-coda { grid-template-columns: 1fr; gap: 16px; } }
        .psy-glyph {
          font-family: var(--serif);
          font-size: 84px;
          color: var(--onchain);
          line-height: 1;
          text-align: center;
        }
        .psy-text p { color: var(--ink); font-size: 17px; line-height: 1.55; font-style: italic; }
        .psy-link {
          display: inline-flex; align-items: center; gap: 8px;
          margin-top: 14px;
          font-family: var(--mono);
          font-size: 13px;
          color: var(--onchain);
          letter-spacing: 0.04em;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
        }
      `}</style>
    </section>
  );
}
