import { useReveal } from "../hooks/useReveal";
import { processSteps } from "../data";
import { useLanguage } from "../context/LanguageContext";

function ProcessItem({ step, index, visible, lang }) {
  return (
    <div style={{
      padding: "36px 28px",
      border: "1px solid rgba(244,242,238,0.06)",
      borderLeft: "none",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      cursor: "default",
      transition: `opacity 0.8s ${index * 0.12}s ease, transform 0.8s ${index * 0.12}s ease, background 0.3s ease`,
    }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(244,242,238,0.02)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>

      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "1px", background: "rgba(244,242,238,0.06)",
      }} />
      <div className={`proc-line-${index}`} style={{
        position: "absolute", top: 0, left: 0,
        height: "2px", width: "0%",
        background: "#f4f2ee",
        transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
      }} />

      {/* Number */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "3.5rem",
        fontWeight: 900,
        color: "rgba(244,242,238,0.04)",
        lineHeight: 1, marginBottom: "16px",
        letterSpacing: "-0.03em", userSelect: "none",
      }}>
        {step.num}
      </div>

      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(244,242,238,0.5)" strokeWidth="1.5" style={{ marginBottom: "14px" }}>
        <path d={step.icon} />
      </svg>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.25rem", fontWeight: 700,
        letterSpacing: "-0.01em", marginBottom: "10px",
        color: "#f4f2ee",
      }}>
        {lang === "en" ? (step.title_en || step.title) : step.title}
      </h3>

      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "0.95rem", lineHeight: 1.8,
        color: "rgba(244,242,238,0.4)",
      }}>
        {lang === "en" ? (step.desc_en || step.desc) : step.desc}
      </p>

      <style>{`
        div:hover .proc-line-${index} { width: 100% !important; }
      `}</style>
    </div>
  );
}

export default function Process() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { ref: gridRef, visible: gridVisible } = useReveal(0.05);
  const { t, lang } = useLanguage();

  return (
    <section id="process" style={{ padding: "90px 0", background: "#0a0a0a", overflow: "hidden" }}>
      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 5%" }}>
        <div ref={headRef} style={{
          marginBottom: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "24px",
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "none" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          <div>
            <div className="section-label">{t("processLabel")}</div>
            <h2 className="section-title">
              {t("processTitle1")}<br />
              <em style={{ fontStyle: "italic", color: "rgba(244,242,238,0.4)" }}>{t("processTitle2")}</em>
            </h2>
          </div>
          <p style={{
            maxWidth: "380px",
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.95rem", lineHeight: 1.8,
            color: "rgba(244,242,238,0.4)",
          }}>
            {t("processDesc")}
          </p>
        </div>
      </div>

      {/* Grid — full width dengan padding sisi */}
      <div ref={gridRef} style={{
        maxWidth: "1536px", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderLeft: "1px solid rgba(244,242,238,0.06)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}>
        {processSteps.map((step, i) => (
          <ProcessItem key={step.num} step={step} index={i} visible={gridVisible} lang={lang} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section#process > div { padding-left: 48px !important; padding-right: 48px !important; }
        }
        @media (max-width: 900px) {
          section#process > div:last-of-type { grid-template-columns: 1fr 1fr !important; }
          section#process { padding: 70px 0 !important; }
        }
        @media (max-width: 768px) {
          section#process > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
        @media (max-width: 580px) {
          section#process > div:last-of-type { grid-template-columns: 1fr !important; }
          section#process > div { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </section>
  );
}
