import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { ref, visible } = useReveal();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Konfigurasi nomor WhatsApp dan format pesan
    const phoneNumber = "62859106854914";
    const textMessage = `${t("waGreeting")}%0A%0A*${t("waName")}:* ${form.name}%0A*${t("waEmail")}:* ${form.email}%0A*${t("waProject")}:* ${form.project}%0A*${t("waMessage")}:* ${form.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");

    setSent(true);
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === name ? "rgba(244,242,238,0.5)" : "rgba(244,242,238,0.12)"}`,
    color: "#f4f2ee",
    fontFamily: "'Syne', sans-serif",
    fontSize: "0.9rem",
    padding: "12px 0",
    outline: "none",
    transition: "border-color 0.3s",
  });

  const labelStyle = (name) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: focused === name ? "rgba(244,242,238,0.6)" : "rgba(244,242,238,0.25)",
    display: "block",
    marginBottom: "5px",
    transition: "color 0.3s",
  });

  return (
    <section id="contact" style={{ padding: "90px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
      {/* Animated rings — decorative, full width */}
      {[280, 460, 640, 820].map((size, i) => (
        <div key={size} style={{
          position: "absolute",
          width: size, height: size,
          border: "1px solid rgba(244,242,238,0.03)",
          borderRadius: "50%",
          top: "50%", right: -size * 0.3,
          transform: "translateY(-50%)",
          animation: `pulse ${4 + i}s ease-in-out infinite`,
          animationDelay: `${-i * 1.2}s`,
          pointerEvents: "none",
        }} />
      ))}

      {/* max-width container */}
      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 1 }}>
        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "72px",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>
          {/* Left: Info */}
          <div>
            <div className="section-label">{t("contactLabel")}</div>
            <h2 className="section-title" style={{ marginBottom: "24px" }}>
              {t("contactTitle1")}<br />
              <em style={{ fontStyle: "italic", WebkitTextStroke: "1.5px rgba(244,242,238,0.5)", color: "transparent" }}>{t("contactTitle2")}</em>
            </h2>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(244,242,238,0.45)", marginBottom: "36px", maxWidth: "380px" }}>
              {t("contactDesc")}
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "36px" }}>
              {[
                { label: t("contactEmail"), value: "indrbchtr06@gmail.com" },
                { label: t("contactLocation"), value: t("contactLocationVal") },
                { label: t("contactAvailability"), value: t("contactAvailabilityVal") },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(244,242,238,0.25)", width: "76px", flexShrink: 0 }}>{item.label}</span>
                  <span style={{ width: "18px", height: "1px", background: "rgba(244,242,238,0.1)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", color: "rgba(244,242,238,0.65)" }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((s) => (
                <a key={s} href="#" style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(244,242,238,0.3)",
                  padding: "7px 12px",
                  border: "1px solid rgba(244,242,238,0.08)",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.target.style.borderColor = "rgba(244,242,238,0.3)"; e.target.style.color = "#f4f2ee"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "rgba(244,242,238,0.08)"; e.target.style.color = "rgba(244,242,238,0.3)"; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "14px", animation: "scaleIn 0.5s ease" }}>
                <div style={{ width: "56px", height: "56px", border: "1px solid rgba(244,242,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6px" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(244,242,238,0.7)" strokeWidth="1.5"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", fontWeight: 700, textAlign: "center" }}>{t("contactSuccess")}</h3>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.88rem", color: "rgba(244,242,238,0.45)", textAlign: "center" }}>{t("contactSuccessMsg")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={labelStyle("name")}>{t("formName")}</label>
                    <input name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="John Doe" required style={inputStyle("name")} />
                  </div>
                  <div>
                    <label style={labelStyle("email")}>{t("formEmail")}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="john@example.com" required style={inputStyle("email")} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle("project")}>{t("formProject")}</label>
                  <select name="project" value={form.project} onChange={handleChange} onFocus={() => setFocused("project")} onBlur={() => setFocused(null)} required style={{ ...inputStyle("project"), cursor: "pointer" }}>
                    <option value="" style={{ background: "#111" }}>{t("formSelect")}</option>
                    <option value="web" style={{ background: "#111" }}>Web Application</option>
                    <option value="mobile" style={{ background: "#111" }}>Mobile App</option>
                    <option value="desktop" style={{ background: "#111" }}>Desktop App</option>
                    <option value="other" style={{ background: "#111" }}>{t("formOther")}</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle("message")}>{t("formMessage")}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} placeholder={t("formMessagePlaceholder")} required rows={4} style={{ ...inputStyle("message"), resize: "none" }} />
                </div>
                <button type="submit" style={{
                  alignSelf: "flex-start",
                  padding: "12px 32px",
                  background: "#f4f2ee",
                  color: "#0a0a0a",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "transform 0.3s, background 0.3s",
                  display: "flex", alignItems: "center", gap: "10px",
                  cursor: "pointer",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(244,242,238,0.85)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#f4f2ee"; }}>
                  {t("formSubmit")}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.3;transform:translateY(-50%) scale(1)} 50%{opacity:0.6;transform:translateY(-50%) scale(1.02)} }
        @media (max-width: 1024px) {
          section#contact > div:nth-child(5) { padding: 0 48px !important; }
          section#contact > div:nth-child(5) > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 768px) {
          section#contact { padding: 70px 0 !important; }
          section#contact > div:nth-child(5) { padding: 0 24px !important; }
        }
        @media (max-width: 480px) {
          section#contact > div:nth-child(5) { padding: 0 20px !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(244,242,238,0.2); }
        select option { color: #f4f2ee; }
      `}</style>
    </section>
  );
}
