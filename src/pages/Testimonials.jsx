import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const { t } = useLanguage();

  return (
    <section id="testimonials" style={{ padding: "90px 0", background: "#111111", overflow: "hidden" }}>
      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 5%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

        <div ref={headRef} style={{
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "none" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          marginBottom: "48px",
        }}>
          <div>
            <div className="section-label" style={{ margin: "0 auto 16px auto" }}>{t("testiLabel")}</div>
            <h2 className="section-title">{t("testiTitle1")}<br /><em style={{ fontStyle: "italic", color: "rgba(244,242,238,0.4)" }}>{t("testiTitle2")}</em></h2>
          </div>
        </div>

        {/* Featured quote */}
        <div style={{
          maxWidth: "780px",
          opacity: headVisible ? 1 : 0,
          transition: "opacity 0.8s 0.2s ease",
        }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.55,
            color: "rgba(244,242,238,0.8)",
            marginBottom: "28px",
            position: "relative",
          }}>
            <span style={{
              position: "absolute", top: "-16px", left: "-8px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "5rem",
              color: "rgba(244,242,238,0.04)",
              lineHeight: 1, userSelect: "none",
            }}>"</span>
            {t("testiDesc")}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          section#testimonials > div { padding: 0 48px !important; }
        }
        @media (max-width: 900px) {
          section#testimonials { padding: 70px 0 !important; }
        }
        @media (max-width: 768px) {
          section#testimonials > div { padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          section#testimonials > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
