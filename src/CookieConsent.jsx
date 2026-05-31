import { useState, useEffect } from "react";

const STORAGE_KEY = "aivexa_consent_v1";

const styles = {
  overlay: {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(780px, calc(100vw - 32px))",
    background: "rgba(15,23,42,0.95)",
    border: "1px solid rgba(6,182,212,0.25)",
    borderRadius: "14px",
    boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    padding: "22px 26px",
    zIndex: 99999,
    animation: "aivexaSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
  },
  topRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    marginBottom: "16px",
  },
  logo: {
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    color: "#06B6D4",
    whiteSpace: "nowrap",
    paddingTop: "2px",
    flexShrink: 0,
  },
  logoWhite: { color: "#FFFFFF" },
  text: {
    fontSize: "13px",
    lineHeight: "1.65",
    color: "#CBD5E1",
  },
  link: {
    color: "#06B6D4",
    textDecoration: "none",
    borderBottom: "1px solid rgba(6,182,212,0.35)",
  },
  toggleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
    gap: "10px",
    marginBottom: "18px",
    marginTop: "14px",
  },
  toggleItem: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "11px 13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  toggleLabel: { display: "flex", flexDirection: "column", gap: "2px" },
  toggleTitle: { fontSize: "12.5px", fontWeight: 600, color: "#FFFFFF" },
  toggleSub: { fontSize: "11px", color: "#94A3B8" },
  actions: { display: "flex", gap: "10px", flexWrap: "wrap" },
  btnAccept: {
    flex: 1,
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    background: "linear-gradient(135deg, #2563EB, #06B6D4)",
    color: "#FFFFFF",
    letterSpacing: "0.02em",
    transition: "opacity 0.2s",
  },
  btnManage: {
    padding: "10px 18px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    background: "rgba(255,255,255,0.06)",
    color: "#CBD5E1",
    border: "1px solid rgba(255,255,255,0.12)",
    transition: "background 0.2s",
    whiteSpace: "nowrap",
  },
  btnEssential: {
    padding: "10px 18px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    background: "transparent",
    color: "rgba(203,213,225,0.5)",
    border: "1px solid rgba(255,255,255,0.07)",
    whiteSpace: "nowrap",
  },
  divider: {
    borderTop: "1px solid rgba(255,255,255,0.07)",
    marginTop: "16px",
    paddingTop: "14px",
  },
  prefNote: {
    fontSize: "11.5px",
    color: "#94A3B8",
    marginBottom: "4px",
  },
  toast: {
    position: "fixed",
    bottom: "28px",
    right: "28px",
    background: "#0F172A",
    border: "1px solid #06B6D4",
    color: "#FFFFFF",
    padding: "11px 18px",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: 500,
    zIndex: 99999,
    pointerEvents: "none",
  },
};

// Inline keyframe injection
const injectKeyframes = () => {
  if (document.getElementById("aivexa-consent-kf")) return;
  const style = document.createElement("style");
  style.id = "aivexa-consent-kf";
  style.textContent = `
    @keyframes aivexaSlideUp {
      from { opacity:0; transform: translateX(-50%) translateY(28px); }
      to   { opacity:1; transform: translateX(-50%) translateY(0); }
    }
  `;
  document.head.appendChild(style);
};

export default function CookieConsent() {
  const [visible, setVisible]       = useState(false);
  const [expanded, setExpanded]     = useState(false);
  const [toast, setToast]           = useState(false);
  const [analytics, setAnalytics]   = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing]   = useState(false);

  useEffect(() => {
    injectKeyframes();
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setTimeout(() => setVisible(true), 600);
    }
  }, []);

  const savePrefs = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, timestamp: new Date().toISOString() }));
    setVisible(false);
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  const handleAcceptAll = () => {
    setAnalytics(true); setFunctional(true); setMarketing(true);
    savePrefs({ essential: true, analytics: true, functional: true, marketing: true });
  };

  const handleEssentialOnly = () => {
    setAnalytics(false); setFunctional(false); setMarketing(false);
    savePrefs({ essential: true, analytics: false, functional: false, marketing: false });
  };

  const handleSavePrefs = () => {
    if (expanded) {
      savePrefs({ essential: true, analytics, functional, marketing });
    } else {
      setExpanded(true);
    }
  };

  const Toggle = ({ id, label, sub, checked, onChange, disabled }) => (
    <div style={styles.toggleItem}>
      <div style={styles.toggleLabel}>
        <span style={styles.toggleTitle}>{label}</span>
        <span style={styles.toggleSub}>{sub}</span>
      </div>
      <label style={{ position:"relative", width:"40px", height:"22px", flexShrink:0, cursor: disabled ? "not-allowed" : "pointer" }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={{ opacity:0, width:0, height:0 }}
        />
        <span style={{
          position:"absolute", inset:0,
          background: checked ? "#06B6D4" : "rgba(255,255,255,0.12)",
          borderRadius:"99px",
          transition:"background 0.25s",
          opacity: disabled ? 0.5 : 1,
        }}>
          <span style={{
            position:"absolute",
            width:"16px", height:"16px",
            top:"3px", left: checked ? "21px" : "3px",
            background:"#FFFFFF",
            borderRadius:"50%",
            transition:"left 0.25s",
          }} />
        </span>
      </label>
    </div>
  );

  if (!visible && !toast) return null;

  return (
    <>
      {visible && (
        <div style={styles.overlay} role="dialog" aria-modal="true" aria-label="Cookie preferences">

          {/* Top row */}
          <div style={styles.topRow}>
            <div style={styles.logo}>
              AIVE<span style={styles.logoWhite}>XA</span>
            </div>
            <p style={styles.text}>
              We use cookies to improve your experience, analyse site performance, and personalise
              content. You control which cookies are active — essential cookies are always on.{" "}
              <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
              {" "}·{" "}
              <a href="/cookie-policy" style={styles.link}>Cookie Policy</a>
            </p>
          </div>

          {/* Expandable preferences */}
          {expanded && (
            <div style={styles.divider}>
              <p style={styles.prefNote}>Toggle categories on or off. Preferences are saved in your browser.</p>
              <div style={styles.toggleGrid}>
                <Toggle label="Essential"  sub="Always active"    checked={true}      onChange={() => {}} disabled={true} />
                <Toggle label="Analytics"  sub="Site performance" checked={analytics}  onChange={e => setAnalytics(e.target.checked)} />
                <Toggle label="Functional" sub="Chat & forms"     checked={functional} onChange={e => setFunctional(e.target.checked)} />
                <Toggle label="Marketing"  sub="Personalised ads" checked={marketing}  onChange={e => setMarketing(e.target.checked)} />
              </div>
            </div>
          )}

          {/* Buttons */}
          <div style={styles.actions}>
            <button style={styles.btnAccept}    onClick={handleAcceptAll}>Accept All</button>
            <button style={styles.btnManage}    onClick={handleSavePrefs}>
              {expanded ? "Save Preferences" : "Manage Preferences"}
            </button>
            <button style={styles.btnEssential} onClick={handleEssentialOnly}>Essential Only</button>
          </div>

        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={styles.toast}>✓ Preferences saved</div>
      )}
    </>
  );
}
