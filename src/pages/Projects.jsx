import { useState, useRef, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";
import { projects } from "../data";
import BrowserMockup from "../components/BrowserMockup";
import AndroidMockup from "../components/AndroidMockup";
import lumiImg from "../assets/Lumi.png";
import hackatonImg from "../assets/Hackaton.jpg";
import mobileImg from "../assets/Mobile.png";
import desktopImg from "../assets/Dekstop.png";
import { useLanguage } from "../context/LanguageContext";

/* ─── MODAL DETAIL WENWORK ─────────────────────────────────── */
function WenworkModal({ onClose }) {
  const { lang, t } = useLanguage();
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.3s ease",
      }}>
      <div style={{
        background: "#0d0d0d",
        border: "1px solid rgba(244,242,238,0.1)",
        borderRadius: "16px",
        maxWidth: "880px",
        width: "100%",
        maxHeight: "92vh",
        overflowY: "auto",
        position: "relative",
        boxShadow: "0 60px 120px rgba(0,0,0,0.8)",
        animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* Header Modal */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(13,13,13,0.8)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(244,242,238,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 24px",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#f4f2ee" }}>WENWORK</div>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "1px solid rgba(244,242,238,0.1)", background: "rgba(244,242,238,0.05)",
              color: "rgba(244,242,238,0.8)", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f4f2ee"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(244,242,238,0.05)"; e.currentTarget.style.color = "rgba(244,242,238,0.8)"; }}>
            ✕
          </button>
        </div>

        {/* Hero Image */}
        <div style={{ width: "100%", background: "#111" }}>
          <img src={lumiImg} alt="WENWORK" style={{ width: "100%", display: "block", objectFit: "cover" }} />
        </div>

        {/* Info Content */}
        <div style={{ padding: "40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", marginBottom: "20px", background: "rgba(108,59,234,0.15)", border: "1px solid rgba(108,59,234,0.4)", borderRadius: "40px", fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.05em", color: "rgba(180,150,255,1)" }}>
            {lang === "en" ? projects[0].achievement_en : projects[0].achievement}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#f4f2ee", marginBottom: "8px" }}>WENWORK</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontStyle: "italic", color: "rgba(244,242,238,0.4)", marginBottom: "32px" }}>
            {lang === "en" ? projects[0].subtitle_en : projects[0].subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              lang === "en" ? projects[0].modalP1_en : projects[0].modalP1,
              lang === "en" ? projects[0].modalP2_en : projects[0].modalP2,
              lang === "en" ? projects[0].modalP3_en : projects[0].modalP3,
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(244,242,238,0.7)" }}>{text}</p>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {[
              { label: t("payment"), val: "Escrow SOL" }, { label: "Auth", val: "Phantom Wallet" }, { label: t("platform"), val: "Web / Desktop" },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(244,242,238,0.03)", border: "1px solid rgba(244,242,238,0.06)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px", color: "#f4f2ee" }}>{m.val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)", marginBottom: "16px" }}>{t("techStack")}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Solana", "Web3.js", "React Native", "Phantom Wallet", "Smart Contract", "Escrow", "Google Auth"].map((techItem) => (
                <span key={techItem} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.95rem", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(108,59,234,0.3)", color: "rgba(180,150,255,0.9)", background: "rgba(108,59,234,0.1)" }}>{techItem}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)", marginBottom: "16px" }}>Lumi.new Hackathon</div>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(244,242,238,0.1)" }}>
              <img src={hackatonImg} alt="Lumi AI Hackathon" style={{ width: "100%", display: "block" }} />
            </div>
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", color: "rgba(244,242,238,0.6)", marginTop: "12px" }}>
              {lang === "en" ? projects[0].modalHackathonDesc_en : projects[0].modalHackathonDesc}
            </p>
          </div>

          <a href="https://web3-marketplace.lumi.ing/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "16px", background: "#f4f2ee", color: "#0a0a0a", fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", fontWeight: 700, borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(244,242,238,0.85)"} onMouseLeave={e => e.currentTarget.style.background = "#f4f2ee"}>
            {t("visitApp")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL DETAIL AORA ─────────────────────────────────── */
function AoraModal({ onClose, lang, t }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px", animation: "fadeIn 0.3s ease",
      }}>
      <div style={{
        background: "#0d0d0d", boxSizing: "border-box",
        border: "1px solid rgba(244,242,238,0.1)", borderRadius: "16px",
        maxWidth: "880px", width: "100%", maxHeight: "92vh",
        overflowY: "auto", position: "relative",
        boxShadow: "0 60px 120px rgba(0,0,0,0.8)",
        animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* Header Modal */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(13,13,13,0.8)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(244,242,238,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 24px",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#f4f2ee" }}>AORA</div>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "1px solid rgba(244,242,238,0.1)", background: "rgba(244,242,238,0.05)",
              color: "rgba(244,242,238,0.8)", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f4f2ee"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(244,242,238,0.05)"; e.currentTarget.style.color = "rgba(244,242,238,0.8)"; }}>
            ✕
          </button>
        </div>

        {/* Hero Image */}
        <div style={{ width: "100%", background: "#111", display: "flex", justifyContent: "center", padding: "40px" }}>
          <img src={mobileImg} alt="AORA" style={{ maxHeight: "500px", objectFit: "contain" }} />
        </div>

        {/* Info Content */}
        <div style={{ padding: "40px", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", marginBottom: "20px", background: "rgba(255,144,0,0.15)", border: "1px solid rgba(255,144,0,0.4)", borderRadius: "40px", fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.05em", color: "rgba(255,180,50,1)" }}>
            🚀 Personal Project
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#f4f2ee", marginBottom: "8px" }}>AORA</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontStyle: "italic", color: "rgba(244,242,238,0.4)", marginBottom: "32px" }}>
            {lang === "en" ? projects[1].subtitle_en : projects[1].subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              lang === "en" ? projects[1].modalP1_en : projects[1].modalP1,
              lang === "en" ? projects[1].modalP2_en : projects[1].modalP2,
              lang === "en" ? projects[1].modalP3_en : projects[1].modalP3
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(244,242,238,0.7)" }}>{text}</p>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {[
              { label: t("platform"), val: "Android / iOS" }, { label: "Backend", val: "Appwrite" }, { label: "Framework", val: "React Native" },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(244,242,238,0.03)", border: "1px solid rgba(244,242,238,0.06)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px", color: "#f4f2ee" }}>{m.val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)", marginBottom: "16px" }}>{t("techStack")}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["React Native", "Appwrite", "TailwindCSS", "Zustand", "CRUD Video", "Cloud Storage"].map((techItem) => (
                <span key={techItem} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.95rem", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(255,144,0,0.3)", color: "rgba(255,180,50,0.9)", background: "rgba(255,144,0,0.1)" }}>{techItem}</span>
              ))}
            </div>
          </div>

          <a href="https://github.com/065Indraaa/PemrogramanMobile" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "16px", background: "#f4f2ee", color: "#0a0a0a", fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", fontWeight: 700, borderRadius: "8px", textTransform: "uppercase", letterSpacing: "0.1em", transition: "all 0.3s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(244,242,238,0.85)"} onMouseLeave={e => e.currentTarget.style.background = "#f4f2ee"}>
            {t("visitGithub")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL DETAIL Q-HADIRIN ─────────────────────────────────── */
function QhadirinModal({ onClose, lang, t }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px", animation: "fadeIn 0.3s ease",
      }}>
      <div style={{
        background: "#0d0d0d", boxSizing: "border-box",
        border: "1px solid rgba(244,242,238,0.1)", borderRadius: "16px",
        maxWidth: "880px", width: "100%", maxHeight: "92vh",
        overflowY: "auto", position: "relative",
        boxShadow: "0 60px 120px rgba(0,0,0,0.8)",
        animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* Header Modal */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: "rgba(13,13,13,0.8)", backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(244,242,238,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 24px",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#f4f2ee" }}>Q-HADIRIN</div>
          <button
            onClick={onClose}
            style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "1px solid rgba(244,242,238,0.1)", background: "rgba(244,242,238,0.05)",
              color: "rgba(244,242,238,0.8)", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f4f2ee"; e.currentTarget.style.color = "#0a0a0a"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(244,242,238,0.05)"; e.currentTarget.style.color = "rgba(244,242,238,0.8)"; }}>
            ✕
          </button>
        </div>

        {/* Hero Image */}
        <div style={{ width: "100%", background: "#111", display: "flex", justifyContent: "center", padding: "40px" }}>
          <img src={desktopImg} alt="Q-HADIRIN" style={{ maxHeight: "400px", width: "100%", objectFit: "cover", borderRadius: "8px" }} />
        </div>

        {/* Info Content */}
        <div style={{ padding: "40px", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", marginBottom: "20px", background: "rgba(0,123,255,0.15)", border: "1px solid rgba(0,123,255,0.4)", borderRadius: "40px", fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.05em", color: "rgba(100,180,255,1)" }}>
            🎓 Final Project
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, letterSpacing: "-0.02em", color: "#f4f2ee", marginBottom: "8px" }}>Q-HADIRIN</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontStyle: "italic", color: "rgba(244,242,238,0.4)", marginBottom: "32px" }}>
            {lang === "en" ? projects[2].subtitle_en : projects[2].subtitle}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {[
              lang === "en" ? projects[2].modalP1_en : projects[2].modalP1,
              lang === "en" ? projects[2].modalP2_en : projects[2].modalP2,
              lang === "en" ? projects[2].modalP3_en : projects[2].modalP3
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(244,242,238,0.7)" }}>{text}</p>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {[
              { label: t("platform"), val: "Desktop" }, { label: "Database", val: "MySQL" }, { label: "Technology", val: "Java / OOP" },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(244,242,238,0.03)", border: "1px solid rgba(244,242,238,0.06)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "6px", color: "#f4f2ee" }}>{m.val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(244,242,238,0.4)", marginBottom: "16px" }}>{t("techStack")}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {projects[2].tech.map((techItem) => (
                <span key={techItem} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.95rem", padding: "8px 16px", borderRadius: "20px", border: "1px solid rgba(0,123,255,0.3)", color: "rgba(100,180,255,0.9)", background: "rgba(0,123,255,0.1)" }}>{techItem}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CARD STANDARD PROPORSIONAL ───────────────────────────── */
function StandardCard({ project, index, onClick, lang }) {
  const { ref, visible } = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  const isMobile = project.mockupType === "android";

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      data-cursor
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ${index * 0.1}s cubic-bezier(0.16,1,0.3,1), transform 0.8s ${index * 0.1}s ease`,
        background: "rgba(244,242,238,0.02)",
        border: "1px solid rgba(244,242,238,0.06)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
      }}>

      {/* Background Glow on Hover */}
      <div style={{
        position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%",
        background: `radial-gradient(circle at center, rgba(244,242,238,0.03) 0%, transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.5s ease", pointerEvents: "none", zIndex: 0
      }} />

      {/* Image / Mockup Area (Fixed Aspect Ratio 16:10 or 4:3) */}
      <div style={{
        width: "100%", aspectRatio: "4/3",
        background: "#0c0c0c",
        borderBottom: "1px solid rgba(244,242,238,0.04)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        padding: "30px 30px 0 30px",
        overflow: "hidden", position: "relative", zIndex: 1
      }}>
        <div style={{
          width: "100%", maxWidth: "340px",
          transform: hovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          display: "flex", justifyContent: "center",
        }}>
          {isMobile ? (
            <div style={{ maxWidth: "180px", width: "100%" }}>
              <AndroidMockup title={project.title} accent={project.mockupAccent} imageSrc={project.imageSrc} />
            </div>
          ) : (
            <div style={{ width: "100%" }}>
              <BrowserMockup title={project.title} imageSrc={project.imageSrc} />
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "28px", display: "flex", flexDirection: "column", flexGrow: 1, zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(244,242,238,0.4)", textTransform: "uppercase" }}>
            {lang === "en" ? project.category_en : project.category}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(244,242,238,0.2)" }}>{project.year}</span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontWeight: 800,
          lineHeight: 1.1, letterSpacing: "-0.01em", color: "#f4f2ee", marginBottom: "6px",
          transition: "color 0.3s"
        }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", fontStyle: "italic", color: "rgba(244,242,238,0.4)", marginBottom: "16px" }}>
          {lang === "en" ? project.subtitle_en : project.subtitle}
        </p>

        <p style={{
          fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(244,242,238,0.5)", marginBottom: "24px",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden"
        }}>
          {lang === "en" ? project.desc_en : project.desc}
        </p>

        {/* Tech stack & Action */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(244,242,238,0.06)", paddingTop: "20px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {project.tech.slice(0, 2).map(t => (
              <span key={t} style={{ padding: "4px 8px", background: "rgba(244,242,238,0.04)", borderRadius: "4px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(244,242,238,0.5)" }}>{t}</span>
            ))}
            {project.tech.length > 2 && (
              <span style={{ padding: "4px 8px", background: "rgba(244,242,238,0.04)", borderRadius: "4px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(244,242,238,0.4)" }}>+{project.tech.length - 2}</span>
            )}
          </div>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%", background: hovered ? "#f4f2ee" : "rgba(244,242,238,0.04)",
            display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s"
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={hovered ? "#0a0a0a" : "rgba(244,242,238,0.6)"} strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── FEATURED HERO CARD (WENWORK) ─────────────────────────── */
function FeaturedCard({ project, index, onOpenModal, lang, t }) {
  const { ref, visible } = useReveal(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      onClick={onOpenModal}
      style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ${index * 0.1}s ease, transform 0.8s ${index * 0.1}s ease`,
        background: "rgba(108,59,234,0.02)", border: hovered ? "1px solid rgba(108,59,234,0.3)" : "1px solid rgba(108,59,234,0.15)",
        borderRadius: "20px", overflow: "hidden", cursor: "pointer",
        gridColumn: "1 / -1", /* Spans full width of the CSS grid */
        position: "relative",
      }}>

      {/* Glow */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, rgba(108,59,234,0.06) 0%, transparent 70%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.5s", pointerEvents: "none" }} />

      <div className="featured-card-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "0", alignItems: "stretch" }}>

        {/* Konten Kiri */}
        <div style={{ padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", background: "rgba(108,59,234,0.12)", border: "1px solid rgba(108,59,234,0.3)", borderRadius: "40px", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.06em", color: "rgba(180,150,255,0.9)", width: "fit-content", marginBottom: "20px" }}>
            {lang === "en" ? project.achievement_en : project.achievement}
          </div>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f4f2ee", marginBottom: "8px" }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontStyle: "italic", color: "rgba(244,242,238,0.4)", marginBottom: "20px" }}>
            {lang === "en" ? project.subtitle_en : project.subtitle}
          </p>

          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(244,242,238,0.55)", fontFamily: "'Syne', sans-serif", maxWidth: "480px", marginBottom: "32px", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {lang === "en" ? project.desc_en : project.desc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
            {project.tech.map(tOption => (
              <span key={tOption} style={{ padding: "5px 12px", borderRadius: "4px", background: "rgba(108,59,234,0.08)", border: "1px solid rgba(108,59,234,0.2)", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "rgba(180,150,255,0.8)" }}>{tOption}</span>
            ))}
          </div>

          <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "12px", fontFamily: "'Syne', sans-serif", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: hovered ? "#f4f2ee" : "rgba(244,242,238,0.6)", transition: "color 0.3s" }}>
            <span style={{ width: "24px", height: "1px", background: hovered ? "#f4f2ee" : "rgba(244,242,238,0.3)", transition: "all 0.3s" }} />
            {t("caseStudy")}
          </div>
        </div>

        {/* Mockup Kanan */}
        <div style={{ background: "#0a0a0a", borderLeft: "1px solid rgba(244,242,238,0.05)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <div style={{ width: "100%", maxWidth: "600px", transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 30px 60px rgba(0,0,0,0.8)" }}>
            <BrowserMockup title="WENWORK" imageSrc={lumiImg} url="web3-marketplace.lumi.ing" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── MAIN SECTION ──────────────────────────────────────────── */
export default function Projects() {
  const { ref: headRef, visible: headVisible } = useReveal();
  const [activeFilterId, setActiveFilterId] = useState("all");
  const [wenworkModalOpen, setWenworkModalOpen] = useState(false);
  const [aoraModalOpen, setAoraModalOpen] = useState(false);
  const [qhadirinModalOpen, setQhadirinModalOpen] = useState(false);
  const { t, lang } = useLanguage();

  const FILTER_OPTIONS = [
    { id: "all", label: t("filterAll") },
    { id: "web", label: t("filterWeb") },
    { id: "mobile", label: t("filterMobile") },
    { id: "desktop", label: t("filterDesktop") },
  ];

  const filtered = activeFilterId === "all" ? projects : projects.filter((p) => p.type.toLowerCase() === activeFilterId);

  return (
    <section id="projects" style={{ padding: "100px 0", background: "#0a0a0a", position: "relative" }}>
      {wenworkModalOpen && <WenworkModal onClose={() => setWenworkModalOpen(false)} />}
      {aoraModalOpen && <AoraModal onClose={() => setAoraModalOpen(false)} lang={lang} t={t} />}
      {qhadirinModalOpen && <QhadirinModal onClose={() => setQhadirinModalOpen(false)} lang={lang} t={t} />}

      <div style={{ maxWidth: "1536px", margin: "0 auto", padding: "0 5%" }}>

        {/* Header Section */}
        <div ref={headRef} style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "24px",
          opacity: headVisible ? 1 : 0, transform: headVisible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div>
            <div className="section-label">{t("projectsLabel")}</div>
            <h2 className="section-title">{t("projectsTitle1")}<br /><em style={{ fontStyle: "italic", WebkitTextStroke: "1px rgba(244,242,238,0.5)", color: "transparent" }}>{t("projectsTitle2")}</em></h2>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id} onClick={() => setActiveFilterId(opt.id)}
                style={{
                  padding: "8px 18px", fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: "30px",
                  border: "1px solid", borderColor: activeFilterId === opt.id ? "#f4f2ee" : "rgba(244,242,238,0.12)", color: activeFilterId === opt.id ? "#0a0a0a" : "rgba(244,242,238,0.4)", background: activeFilterId === opt.id ? "#f4f2ee" : "transparent", transition: "all 0.3s ease",
                }}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento/Grid System */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          alignItems: "stretch"
        }}>
          {filtered.map((p, i) => {
            if (p.id === 0) { // WENWORK Featured (Full Width Split)
              return <FeaturedCard key={p.id} project={p} index={i} onOpenModal={() => setWenworkModalOpen(true)} lang={lang} t={t} />;
            }
            return <StandardCard key={p.id} project={p} index={i} lang={lang} onClick={() => {
              if (p.title === "AORA") setAoraModalOpen(true);
              if (p.title === "Q-HADIRIN") setQhadirinModalOpen(true);
            }} />;
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          section#projects > div { padding: 0 48px !important; }
          .featured-card-inner { grid-template-columns: 1fr !important; }
          .featured-card-inner > div:last-child { min-height: 400px; }
        }
        @media (max-width: 768px) {
          section#projects { padding: 80px 0 !important; }
          section#projects > div { padding: 0 24px !important; }
          .featured-card-inner > div:first-child { padding: 40px !important; }
        }
        @media (max-width: 480px) {
          section#projects > div { padding: 0 20px !important; }
          .featured-card-inner > div:first-child { padding: 32px 24px !important; }
          .featured-card-inner > div:last-child { padding: 24px !important; min-height: 280px; }
        }
      `}</style>
    </section>
  );
}
