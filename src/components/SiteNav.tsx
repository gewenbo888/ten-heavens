"use client";

import { useLang } from "@/lib/i18n";

export default function SiteNav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="site-nav">
      <div className="container inner">
        <a href="#top" className="brand">
          <span className="glyph">ψ</span>
          <span className="name">{t("Ten Heavens", "十重天")}</span>
          <span className="sub">{t("ontology of value", "价值本体论")}</span>
        </a>
        <div className="links">
          <a href="#stack">{t("Stack", "堆栈")}</a>
          <a href="#worlds">{t("Worlds", "四界")}</a>
          <a href="#mappings">{t("Mappings", "映射")}</a>
          <a href="#history">{t("History", "历史")}</a>
          <a href="#future">{t("Future", "未来")}</a>
        </div>
        <div className="lang-toggle">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>
            EN
          </button>
          <button className={lang === "zh" ? "on" : ""} onClick={() => setLang("zh")}>
            中文
          </button>
        </div>
      </div>
    </nav>
  );
}
