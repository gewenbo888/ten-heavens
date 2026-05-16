"use client";

import { useLang } from "@/lib/i18n";

export default function SiteFoot() {
  const { t } = useLang();
  return (
    <footer className="site-foot">
      <div className="container">
        <div className="row">
          <div>
            <div style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--ink)" }}>
              {t("Ten Heavens · 十重天", "十重天 · Ten Heavens")}
            </div>
            <div style={{ marginTop: 6 }}>
              {t(
                "A note in the Psyverse on the layered ontology of value.",
                "Psyverse 中关于价值分层本体论的一则笔记。"
              )}
            </div>
          </div>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            <a href="https://psyverse.fun" target="_blank" rel="noreferrer">
              {t("Psyverse", "Psyverse")}
            </a>
            <a href="https://psy.xyz" target="_blank" rel="noreferrer">
              Psy
            </a>
            <a href="https://github.com/gewenbo888/ten-heavens" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://psyverse.fun/atlas.html" target="_blank" rel="noreferrer">
              {t("Atlas", "图谱")}
            </a>
          </div>
        </div>
        <div className="row" style={{ marginTop: 24, color: "var(--ink-low)", fontSize: 12 }}>
          <span className="mono">© Gewenbo · ψ</span>
          <span className="mono">
            {t("Four worlds. Ten heavens. Five mappings.", "四界。十重天。五种映射。")}
          </span>
        </div>
      </div>
    </footer>
  );
}
