import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let animId;
    let frame = 0;
    let lastStream = 0;

    // ── Brand palette ─────────────────────────────────
    const CYAN      = "6,182,212";    // #06B6D4
    const BLUE      = "37,99,235";    // #2563EB
    const PURPLE    = "123,97,255";   // #7B61FF

    // ── Config ────────────────────────────────────────
    const PARTICLE_COUNT  = 52;
    const HUB_COUNT       = 4;        // large anchor nodes
    const CONNECT_DIST    = 170;
    const MAX_STREAMS     = 22;
    const CX              = 0.50;     // canvas center X ratio
    const CY              = 0.44;     // canvas center Y ratio (slightly above mid)

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      initAll();
    };
    window.addEventListener("resize", handleResize);

    // ── Particle ──────────────────────────────────────
    class Particle {
      constructor(isHub = false) {
        this.isHub = isHub;
        this.reset();
      }

      reset() {
        if (this.isHub) {
          // Hubs scatter evenly, never too close to edges
          this.x = W * 0.15 + Math.random() * W * 0.70;
          this.y = H * 0.12 + Math.random() * H * 0.76;
          this.radius      = 4 + Math.random() * 3;
          this.glowRadius  = 22 + Math.random() * 18;
          this.vx          = (Math.random() - 0.5) * 0.18;
          this.vy          = (Math.random() - 0.5) * 0.18;
          this.pulseSpeed  = 0.018 + Math.random() * 0.012;
          // Hub color: cyan or purple
          this.color       = Math.random() < 0.6 ? CYAN : PURPLE;
        } else {
          // Regular particles — gentle center bias
          const angle  = Math.random() * Math.PI * 2;
          const spread = 0.28 + Math.random() * 0.38;
          this.x = W * CX + Math.cos(angle) * W * spread;
          this.y = H * CY + Math.sin(angle) * H * spread;
          this.x = Math.max(0, Math.min(W, this.x));
          this.y = Math.max(0, Math.min(H, this.y));
          this.radius      = 1.0 + Math.random() * 1.8;
          this.glowRadius  = 5 + Math.random() * 7;
          this.vx          = (Math.random() - 0.5) * 0.30;
          this.vy          = (Math.random() - 0.5) * 0.30;
          this.pulseSpeed  = 0.022 + Math.random() * 0.028;
          const roll       = Math.random();
          this.color       = roll < 0.55 ? CYAN : roll < 0.82 ? BLUE : PURPLE;
        }

        this.alpha       = this.isHub ? 0.85 : 0.45 + Math.random() * 0.40;
        this.pulsePhase  = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;

        // Soft bounce
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
        this.x = Math.max(0, Math.min(W, this.x));
        this.y = Math.max(0, Math.min(H, this.y));
      }

      draw() {
        const pf = 0.72 + 0.28 * Math.sin(this.pulsePhase);
        const a  = this.alpha * pf;
        const r  = this.radius * pf;

        // Glow halo
        const g = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowRadius * pf
        );
        g.addColorStop(0,   `rgba(${this.color},${a})`);
        g.addColorStop(0.45,`rgba(${this.color},${a * 0.35})`);
        g.addColorStop(1,   `rgba(${this.color},0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowRadius * pf, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color === CYAN ? "165,243,252" : this.color === PURPLE ? "196,181,253" : "147,197,253"},${a})`;
        ctx.fill();
      }
    }

    // ── Pulse Ring ────────────────────────────────────
    class PulseRing {
      constructor(anchored = false) {
        this.anchored = anchored;
        this.reset();
      }

      reset() {
        if (this.anchored) {
          // Rings always come from the hero center
          this.cx = W * CX;
          this.cy = H * CY;
          this.color  = Math.random() < 0.5 ? CYAN : BLUE;
          this.maxR   = 200 + Math.random() * 140;
          this.speed  = 0.7 + Math.random() * 0.4;
        } else {
          // Rings drift from random spots
          this.cx = W * 0.1 + Math.random() * W * 0.8;
          this.cy = H * 0.1 + Math.random() * H * 0.8;
          this.color  = Math.random() < 0.4 ? PURPLE : CYAN;
          this.maxR   = 100 + Math.random() * 100;
          this.speed  = 0.5 + Math.random() * 0.5;
        }
        this.r     = 0;
        this.alpha = this.anchored ? 0.55 : 0.28;
      }

      update() {
        this.r += this.speed;
        if (this.r > this.maxR) this.reset();
      }

      draw() {
        const progress = this.r / this.maxR;
        const a = this.alpha * (1 - progress) * (1 - progress);
        if (a < 0.004) return;
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${this.color},${a})`;
        ctx.lineWidth   = this.anchored ? 1.2 : 0.7;
        ctx.stroke();
      }
    }

    // ── Data Stream ───────────────────────────────────
    class DataStream {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.t     = Math.random();
        this.speed = 0.0045 + Math.random() * 0.007;
        this.color = Math.random() < 0.55 ? CYAN : Math.random() < 0.7 ? BLUE : PURPLE;
        this.alive = true;
      }

      update() {
        this.t += this.speed;
        if (this.t > 1) {
          this.t = 0;
          if (Math.random() < 0.18) this.alive = false;
        }
      }

      draw() {
        const x = this.p1.x + (this.p2.x - this.p1.x) * this.t;
        const y = this.p1.y + (this.p2.y - this.p1.y) * this.t;

        // Trail
        const trailFrac = 0.07;
        const tx = x - (this.p2.x - this.p1.x) * trailFrac;
        const ty = y - (this.p2.y - this.p1.y) * trailFrac;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = `rgba(${this.color},0.35)`;
        ctx.lineWidth   = 1.2;
        ctx.stroke();

        // Head dot
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},0.95)`;
        ctx.fill();
      }
    }

    // ── Scene state ───────────────────────────────────
    let particles   = [];
    let pulses      = [];
    let dataStreams  = [];

    function initAll() {
      // Mix of hub nodes + regular particles
      const hubs    = Array.from({ length: HUB_COUNT }, () => new Particle(true));
      const regular = Array.from({ length: PARTICLE_COUNT - HUB_COUNT }, () => new Particle(false));
      particles = [...hubs, ...regular];

      // 3 anchored (center) pulses, 4 ambient pulses
      pulses = [
        ...Array.from({ length: 3 }, (_, i) => {
          const p = new PulseRing(true);
          p.r = (p.maxR / 3) * i;
          return p;
        }),
        ...Array.from({ length: 4 }, () => {
          const p = new PulseRing(false);
          p.r = Math.random() * p.maxR;
          return p;
        }),
      ];

      dataStreams = [];
    }

    // ── Draw connections ──────────────────────────────
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > CONNECT_DIST) continue;

          const t     = 1 - dist / CONNECT_DIST;
          const isHub = particles[i].isHub || particles[j].isHub;

          // Hub connections are brighter and slightly thicker
          const alpha = isHub ? t * 0.55 : t * 0.22;
          const color = isHub ? CYAN : BLUE;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color},${alpha})`;
          ctx.lineWidth   = isHub ? 0.8 : 0.35;
          ctx.stroke();
        }
      }
    }

    // ── Spawn data streams ────────────────────────────
    function spawnDataStreams() {
      if (frame - lastStream < 40 || dataStreams.length >= MAX_STREAMS) return;

      for (let attempt = 0; attempt < 25; attempt++) {
        const i = Math.floor(Math.random() * particles.length);
        const j = Math.floor(Math.random() * particles.length);
        if (i === j) continue;
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST && dist > 35) {
          dataStreams.push(new DataStream(particles[i], particles[j]));
          lastStream = frame;
          break;
        }
      }

      dataStreams = dataStreams.filter(s => s.alive);
    }

    // ── Central rotating geometry ─────────────────────
    function drawCenterGeometry() {
      const cx = W * CX;
      const cy = H * CY;
      const t  = frame * 0.0015;

      ctx.save();
      ctx.translate(cx, cy);

      // Outer slow-rotating hex ring
      ctx.rotate(t * 0.25);
      const outerSize = Math.min(W, H) * 0.09;
      ctx.strokeStyle = `rgba(${CYAN},0.07)`;
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const angle = (Math.PI / 3) * s;
        const x = outerSize * Math.cos(angle);
        const y = outerSize * Math.sin(angle);
        s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner counter-rotating diamond
      ctx.rotate(-t * 0.6);
      const innerSize = Math.min(W, H) * 0.055;
      ctx.strokeStyle = `rgba(${BLUE},0.10)`;
      ctx.beginPath();
      ctx.moveTo(0, -innerSize);
      ctx.lineTo(innerSize, 0);
      ctx.lineTo(0, innerSize);
      ctx.lineTo(-innerSize, 0);
      ctx.closePath();
      ctx.stroke();

      // Tiny inner pulse dot
      const dotPulse = 0.5 + 0.5 * Math.sin(t * 4);
      const dot = ctx.createRadialGradient(0, 0, 0, 0, 0, 14 * dotPulse);
      dot.addColorStop(0, `rgba(${CYAN},${0.6 * dotPulse})`);
      dot.addColorStop(1, `rgba(${CYAN},0)`);
      ctx.beginPath();
      ctx.arc(0, 0, 14 * dotPulse, 0, Math.PI * 2);
      ctx.fillStyle = dot;
      ctx.fill();

      ctx.restore();
    }

    // ── Main loop ─────────────────────────────────────
    function animate() {
      ctx.clearRect(0, 0, W, H);
      frame++;

      drawConnections();
      drawCenterGeometry();

      pulses.forEach(p => { p.update(); p.draw(); });

      spawnDataStreams();
      dataStreams.forEach(s => { s.update(); s.draw(); });

      particles.forEach(p => { p.update(); p.draw(); });

      animId = requestAnimationFrame(animate);
    }

    initAll();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ── Base gradient — matches existing site ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617]" />

      {/* ── Ambient color washes — brand colors only ── */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 10%, rgba(6,182,212,0.35) 0%, transparent 70%)," +
            "radial-gradient(ellipse 60% 55% at 88% 88%, rgba(123,97,255,0.30) 0%, transparent 70%)," +
            "radial-gradient(ellipse 50% 45% at 50% 44%, rgba(37,99,235,0.20) 0%, transparent 65%)",
        }}
      />

      {/* ── Canvas particle network ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 50% 44%, transparent 45%, rgba(5,8,22,0.70) 100%)",
        }}
      />

    </div>
  );
}
