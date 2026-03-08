import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ activeSection }) {
  const { t, lang, toggleLang } = useLanguage();

  const links = [
    { href: "#projects", label: t("navProjects") },
    { href: "#about", label: t("navAbout") },
    { href: "#process", label: t("navProcess") },
    { href: "#contact", label: t("navContact") },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 500,
    transition: "padding 0.4s ease, background 0.4s ease, border-color 0.4s ease",
    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(244,242,238,0.06)" : "1px solid transparent",
  };

  const navInnerStyle = {
    maxWidth: "1536px",
    width: "100%",
    margin: "0 auto",
    padding: "22px 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    color: "#f4f2ee",
  };

  const linkStyle = (href) => ({
    fontFamily: "'Syne', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: activeSection === href.replace("#", "") ? "#f4f2ee" : "rgba(244,242,238,0.45)",
    transition: "color 0.3s",
    position: "relative",
    paddingBottom: "3px",
  });

  return (
    <>
      <nav style={navStyle}>
        <div style={navInnerStyle}>
          <a href="#hero" style={logoStyle}>
            Dev<span style={{ fontStyle: "italic", color: "rgba(244,242,238,0.45)" }}>.io</span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: "40px", alignItems: "center" }}
            className="desktop-nav">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={linkStyle(l.href)}
                  onMouseEnter={e => e.target.style.color = "#f4f2ee"}
                  onMouseLeave={e => e.target.style.color = activeSection === l.href.replace("#", "") ? "#f4f2ee" : "rgba(244,242,238,0.45)"}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button onClick={toggleLang} style={{
                background: "transparent", border: "1px solid rgba(244,242,238,0.2)", color: "#f4f2ee", fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem", padding: "8px 12px", cursor: "pointer", borderRadius: "4px", transition: "all 0.3s"
              }}
                onMouseEnter={e => { e.target.style.background = "rgba(244,242,238,0.1)"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; }}>
                {lang === "id" ? "ID / EN" : "EN / ID"}
              </button>
            </li>
            <li>
              <a href="#contact" style={{
                padding: "10px 22px",
                border: "1px solid rgba(244,242,238,0.3)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#f4f2ee",
                transition: "background 0.3s, border-color 0.3s",
              }}
                onMouseEnter={e => { e.target.style.background = "#f4f2ee"; e.target.style.color = "#0a0a0a"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#f4f2ee"; }}>
                {t("navHireMe")}
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{ display: "none", flexDirection: "column", gap: "5px", padding: "4px", background: "none", border: "none", cursor: "pointer" }}>
            <span style={{ width: "24px", height: "1.5px", background: "#f4f2ee", transition: "transform 0.3s", display: "block", transform: menuOpen ? "rotate(45deg) translate(4px,4.5px)" : "none" }} />
            <span style={{ width: "24px", height: "1.5px", background: "#f4f2ee", transition: "opacity 0.3s", display: "block", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: "24px", height: "1.5px", background: "#f4f2ee", transition: "transform 0.3s", display: "block", transform: menuOpen ? "rotate(-45deg) translate(4px,-4.5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 400,
        background: "#0a0a0a",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "36px",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s cubic-bezier(0.76,0,0.24,1)",
      }}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.4rem",
              fontWeight: 900,
              color: "#f4f2ee",
              letterSpacing: "-0.02em",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s`,
            }}>
            {l.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav > div { padding: 20px 24px !important; }
        }
      `}</style>
    </>
  );
}
