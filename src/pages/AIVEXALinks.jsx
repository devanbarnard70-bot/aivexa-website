import { useState } from "react";

const links = [
  { id: 1, label: "Book a Free Discovery Call", sublabel: "Let's talk about your business", icon: "📅", href: "https://tally.so/r/44A1Zk", primary: true },
  { id: 2, label: "Get a Free Automation Audit", sublabel: "See what can be automated in your business", icon: "🤖", href: "https://tally.so/r/b5K6y6", accent: true },
  { id: 3, label: "Visit Our Website", sublabel: "aivexasolutions.com", icon: "🌐", href: "https://aivexasolutions.com" },
  { id: 4, label: "Follow on Instagram", sublabel: "@OfficialAivexa", icon: "📸", href: "https://instagram.com/OfficialAivexa" },
  { id: 5, label: "Connect on LinkedIn", sublabel: "@OfficialAivexa", icon: "💼", href: "https://linkedin.com/company/OfficialAivexa" },
  { id: 6, label: "Subscribe on YouTube", sublabel: "@OfficialAivexa", icon: "▶️", href: "https://youtube.com/@OfficialAivexa" },
  { id: 7, label: "Follow on Facebook", sublabel: "@OfficialAivexa", icon: "📘", href: "https://facebook.com/OfficialAivexa" },
  { id: 8, label: "Message on WhatsApp", sublabel: "+27 69 858 5902", icon: "💬", href: "https://wa.me/27698585902" },
];

export default function AIVEXALinks() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#0F172A", display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 20px 80px", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 25% 15%, rgba(37,99,235,0.1) 0%, transparent 55%), radial-gradient(ellipse at 75% 85%, rgba(6,182,212,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "460px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, boxShadow: "0 0 36px rgba(37,99,235,0.4)" }}>
          <span style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: -1 }}>AX</span>
        </div>

        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: -0.5 }}>AIVEXA</h1>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#06B6D4", letterSpacing: 3.5, textTransform: "uppercase", margin: "5px 0 0" }}>AI Automation Solutions</p>
        <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", margin: "12px 0 28px", lineHeight: 1.65, maxWidth: 300 }}>We help businesses work smarter through intelligent automation systems.</p>

        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.45), transparent)", marginBottom: 24 }} />

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
          {links.map((link) => {
            const isHovered = hovered === link.id;
            const bg = link.primary
              ? isHovered ? "#1d4ed8" : "#2563EB"
              : link.accent
              ? isHovered ? "rgba(6,182,212,0.15)" : "rgba(6,182,212,0.08)"
              : isHovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)";
            const border = link.primary ? "#2563EB" : link.accent ? "rgba(6,182,212,0.35)" : "rgba(203,213,225,0.1)";

            return (
              <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 16px", borderRadius: 13, border: `1px solid ${border}`, background: bg, textDecoration: "none", transition: "all 0.18s ease", transform: isHovered ? "translateY(-1px)" : "none" }}>
                <span style={{ fontSize: 18, minWidth: 26, textAlign: "center" }}>{link.icon}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: link.primary ? "#fff" : "#E2E8F0", lineHeight: 1.3 }}>{link.label}</p>
                  <p style={{ margin: "2px 0 0", fontSize: 11.5, color: link.primary ? "rgba(255,255,255,0.65)" : "#64748B" }}>{link.sublabel}</p>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={link.primary ? "rgba(255,255,255,0.6)" : "#475569"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.18s", transform: isHovered ? "translateX(2px)" : "none" }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            );
          })}
        </div>

        <p style={{ marginTop: 44, fontSize: 11, color: "#1E293B", letterSpacing: 1.5, textTransform: "uppercase" }}>© 2025 AIVEXA Solutions</p>
      </div>
    </div>
  );
}