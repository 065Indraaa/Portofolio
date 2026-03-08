import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer style={{
      borderTop: "1px solid rgba(244,242,238,0.06)",
      background: "#0a0a0a",
    }}>
      <div style={{
        maxWidth: "1536px",
        margin: "0 auto",
        padding: "32px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "rgba(244,242,238,0.25)", letterSpacing: "0.05em" }}>
          © {year} Dev.io — {t("footerCrafted")}
        </p>
        <a href="#hero" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85rem",
          color: "rgba(244,242,238,0.25)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          transition: "color 0.3s",
        }}
          onMouseEnter={e => e.target.style.color = "#f4f2ee"}
          onMouseLeave={e => e.target.style.color = "rgba(244,242,238,0.25)"}>
          {t("footerBack")}
        </a>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          footer > div { padding: 32px 48px !important; }
        }
        @media (max-width: 768px) {
          footer > div { padding: 28px 24px !important; }
        }
        @media (max-width: 480px) {
          footer > div { padding: 24px 20px !important; }
        }
      `}</style>
    </footer>
  );
}
