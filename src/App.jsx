import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroBackground from "./HeroBackground";
import CookieConsent from "./CookieConsent";
export default function App() {
  const [selectedImage, setSelectedImage] = useState("");
    const [menuOpen, setMenuOpen] = useState(false); // ✅ MOBILE MENU STATE

  // ✅ CLOSE MENU ON RESIZE TO DESKTOP
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
  };

  // ✅ CLOSE MENU + SCROLL TO SECTION
  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white font-sans">

      {/* ── ANIMATED BACKGROUND ── */}
      <HeroBackground />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="AIVEXA Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              <h1 className="text-xl md:text-2xl font-bold tracking-wide text-cyan-400">AIVEXA</h1>
            </div>

            <div className="hidden md:flex items-center gap-8 text-base">
              <a href="#services" className="hover:text-cyan-400 transition duration-300">AI Agents</a>
              <a href="#about" className="hover:text-cyan-400 transition duration-300">About</a>
              <a href="#faq" className="hover:text-cyan-400 transition duration-300">FAQ</a>
              <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://tally.so/r/b5K6y6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-5 py-2 rounded-xl font-semibold text-black text-sm shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                Get Free Quote
              </motion.a>
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1 pt-4 pb-2 border-t border-white/10 mt-4">
                  {[
                    { label: "AI Agents", href: "#services" },
                    { label: "About", href: "#about" },
                    { label: "FAQ", href: "#faq" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="px-3 py-3 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition duration-300 text-sm font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="https://tally.so/r/b5K6y6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-5 py-3 rounded-xl font-semibold text-black text-sm shadow-[0_0_20px_rgba(0,255,255,0.3)] text-center"
                  >
                    Get Free Quote
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative px-4 md:px-8 py-20 md:py-28 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
      >
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 md:mb-8"
        >
          <img
            src="/logo.png"
            alt="AIVEXA Logo"
            className="w-36 sm:w-48 md:w-72 object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-5 md:mb-6 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/40 rounded-full px-4 md:px-5 py-2 text-xs md:text-sm text-cyan-300 font-medium backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block flex-shrink-0"></span>
          <span>Currently Accepting New Clients</span>
        </motion.div>

        <p className="text-cyan-400 font-semibold mb-3 md:mb-4 tracking-[2px] md:tracking-[3px] text-xs md:text-sm">AI SOLUTIONS COMPANY</p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8 max-w-6xl">
          AI Agents That Help Your Business{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Capture More Leads & Save Time
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-3xl px-2">
          AIVEXA builds AI agents and intelligent business systems — including AIVEXA AutoAgent —
          that handle customer communication, capture leads, and run your sales process around the clock.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 w-full max-w-md sm:max-w-none">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(34,211,238,0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="https://tally.so/r/b5K6y6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] text-center"
          >
            Get A Free Quote
          </motion.a>
          <a
            href="#services"
            className="border border-cyan-500 hover:bg-cyan-500/10 transition duration-300 px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-center"
          >
            Explore AI Agents
          </a>
          <button
            onClick={() => document.getElementById("demo-showcase")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 md:px-8 py-3.5 md:py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition duration-300 font-semibold text-white shadow-lg hover:scale-105"
          >
            View Demo
          </button>
        </div>
      </motion.section>

      {/* IMPACT STATS */}
      <section className="relative px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "24/7", label: "Systems Running" },
              { value: "20+", label: "Hours Saved Weekly" },
              { value: "100%", label: "Custom Built" },
              { value: "< 14", label: "Days to Go Live" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-4 md:p-6 text-center backdrop-blur-md hover:border-cyan-400/40 transition duration-300"
              >
                <p className="text-2xl md:text-4xl font-black text-cyan-400 mb-1 md:mb-2">{stat.value}</p>
                <p className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SHOWCASE */}
      <section id="demo-showcase" className="relative px-4 md:px-8 pt-16 md:pt-20 pb-10 md:pb-14 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-cyan-400 font-semibold tracking-[2px] md:tracking-[3px] mb-3 md:mb-4 text-sm">AIVEXA AUTOAGENT DEMOS</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6">
            AI Agents In <span className="text-cyan-400">Action</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Explore real-world examples of AI agents — from WhatsApp lead capture to intelligent
            follow-up systems — designed to help businesses respond faster and convert more leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-12 md:mb-16">
          {[
            { img: "/demos/demo1.png", label: "DEMO 1", title: "AIVEXA AutoAgent — WhatsApp Sales Agent", desc: "An AI sales agent that handles customer enquiries, qualifies leads, and replies instantly on WhatsApp — 24/7." },
            { img: "/demos/demo2.png", label: "DEMO 2", title: "AI Lead Capture & Scoring", desc: "AI agents that capture, score, and nurture leads automatically — connected directly to your CRM and follow-up system." },
            { img: "/demos/demo3.png", label: "DEMO 3", title: "AI Test Drive & Appointment Booking", desc: "An AI agent that books appointments, manages follow-ups, and keeps your sales pipeline moving without manual admin." },
          ].map((demo, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
            >
              <img
                src={demo.img}
                alt={demo.title}
                className="w-full h-52 md:h-72 object-cover cursor-pointer hover:scale-105 transition duration-300"
                onClick={() => setSelectedImage(demo.img)}
              />
              <div className="p-5 md:p-8">
                <p className="text-cyan-400 font-semibold mb-2 md:mb-3 text-sm">{demo.label}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{demo.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{demo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-8 md:mb-12">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-2 md:mb-3 text-sm">Real AI Agent Use Cases</p>
          <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Example AI Agent <span className="text-cyan-400">Systems</span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
            Real-world AI agent systems designed to reduce manual work, improve response times, and increase customer conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: "🤖", color: "cyan", title: "AI Receptionist Agent",
              desc: "An AI agent that instantly answers FAQs, qualifies leads, and books consultations — 24/7, on your website or WhatsApp.",
              features: ["✅ Instant lead qualification", "✅ WhatsApp integration", "✅ CRM synchronization"],
            },
            {
              icon: "⚡", color: "purple", title: "AI Quote & Follow-Up Agent",
              desc: "An AI agent that collects customer requirements, generates quotes, and follows up automatically until the deal closes.",
              features: ["✅ Instant quote requests", "✅ Automated email replies", "✅ Lead tracking dashboard"],
            },
            {
              icon: "📈", color: "blue", title: "Social Media AI Assistant",
              desc: "An AI agent that manages inquiries, captures leads, and responds instantly across your social channels.",
              features: ["✅ Facebook automation", "✅ Instagram lead capture", "✅ CRM integrations"],
            },
          ].map((item, i) => (
            <div key={i} className={`bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-xl hover:border-${item.color}-400/40 hover:scale-105 transition duration-300`}>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-${item.color}-500/20 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6`}>{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{item.desc}</p>
              <div className="space-y-2 md:space-y-3 text-sm text-gray-300">
                {item.features.map((f, j) => <div key={j}>{f}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST / WHY AIVEXA */}
      <section className="relative px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-cyan-400 font-semibold tracking-[2px] md:tracking-[4px] uppercase mb-3 md:mb-4 text-sm">Why Businesses Choose AIVEXA</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
              Intelligent AI Systems <span className="text-cyan-400">Built For Growth</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We build AI agents and intelligent business systems that handle repetitive tasks,
              improve customer response times, and help businesses scale their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: "⚡", color: "cyan", stat: "24/7", title: "Always Running", desc: "Your AI agents operate around the clock — capturing leads, answering questions, and responding instantly." },
              { icon: "🤖", color: "purple", stat: "AI", title: "Smart AI Agents", desc: "Intelligent AI agents designed to save time, improve efficiency, and streamline customer communication." },
              { icon: "🚀", color: "cyan", stat: "Custom", title: "Tailored Solutions", desc: "Every AI agent is built specifically for your business goals, systems, and operational needs." },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`bg-white/5 border border-${card.color}-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)] hover:border-${card.color}-400`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-${card.color}-500/20 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6`}>{card.icon}</div>
                <h3 className={`text-3xl md:text-4xl font-black text-${card.color}-400 mb-2 md:mb-3`}>{card.stat}</h3>
                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{card.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section id="services" className="relative py-16 md:py-24 px-4 md:px-6 bg-[#050816] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">AI Agents & Solutions</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
              AI agents and intelligent systems that handle customer enquiries, capture leads,
              qualify prospects, and follow up automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

            <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.3 }}
              className="h-full bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-md shadow-xl">
              <span className="bg-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">SERVICE 1</span>
              <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-5 mb-3 md:mb-4 text-cyan-400">AI Lead Capture & Follow-Up Agent</h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">An AI agent that captures leads, sends notifications, follows up automatically, and tracks every opportunity so nothing gets missed.</p>
              <ul className="space-y-2 md:space-y-3 text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                {["Website Lead Capture","WhatsApp Lead Capture","Email Lead Capture","Google Sheets / CRM Syncing","Lead Routing & Notifications","AI Follow-Up Sequences"].map((f,i)=><li key={i}>✓ {f}</li>)}
              </ul>
              <div className="bg-white/5 rounded-2xl p-4 md:p-5 mb-3 md:mb-4">
                <h4 className="text-gray-400 mb-1 md:mb-2 text-sm">Starter</h4>
                <p className="text-3xl md:text-4xl font-bold text-cyan-400">R2,500</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 md:p-5">
                <h4 className="text-gray-400 mb-1 md:mb-2 text-sm">Growth</h4>
                <p className="text-3xl md:text-4xl font-bold text-cyan-400">R5,000</p>
              </div>
              <div className="border-t border-white/10 mt-5 md:mt-6 pt-5 md:pt-6 text-gray-300 text-sm md:text-base">Monthly Retainer: <strong>R1,250/month</strong></div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.3 }}
              className="h-full bg-white/5 border border-white/10 rounded-3xl p-5 md:p-8 backdrop-blur-md shadow-xl">
              <span className="bg-purple-600 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">SERVICE 2</span>
              <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-5 mb-3 md:mb-4 text-purple-400">AI Sales Qualification Agent</h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">An AI agent that answers questions, qualifies leads, and routes hot opportunities to your sales team automatically.</p>
              <ul className="space-y-2 md:space-y-3 text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                {["Instant FAQ Answers","Lead Qualification Questions","Contact Capture","Lead Routing","CRM / Google Sheets Integration","Website & WhatsApp Integration"].map((f,i)=><li key={i}>✓ {f}</li>)}
              </ul>
              <div className="bg-white/5 rounded-2xl p-4 md:p-5 mb-3 md:mb-4">
                <h4 className="text-gray-400 mb-1 md:mb-2 text-sm">Basic</h4>
                <p className="text-3xl md:text-4xl font-bold text-purple-400">R3,500</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 md:p-5">
                <h4 className="text-gray-400 mb-1 md:mb-2 text-sm">Growth</h4>
                <p className="text-3xl md:text-4xl font-bold text-purple-400">R6,000</p>
              </div>
              <div className="border-t border-white/10 mt-5 md:mt-6 pt-5 md:pt-6 text-gray-300 text-sm md:text-base">Monthly Retainer: <strong>R1,250/month</strong></div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -10 }} transition={{ duration: 0.3 }}
              className="h-full bg-cyan-500/10 border-2 border-cyan-400 rounded-3xl p-5 md:p-8 backdrop-blur-md shadow-xl">
              <span className="bg-cyan-400 text-black px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">BUNDLE OPTION</span>
              <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-5 mb-3 md:mb-4 text-cyan-400">AIVEXA AutoAgent — Complete Lead Conversion System</h3>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">The complete AIVEXA AutoAgent system — combining lead capture and AI qualification into one end-to-end conversion engine.</p>
              <ul className="space-y-2 md:space-y-3 text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                {["Everything in Service 1","Everything in Service 2","Lead Capture + Qualification","CRM / Google Sheets Syncing","Automated AI Follow-Ups","Higher Conversion Potential"].map((f,i)=><li key={i}>✓ {f}</li>)}
              </ul>
              <div className="bg-white/5 rounded-2xl p-4 md:p-5">
                <h4 className="text-gray-400 mb-1 md:mb-2 text-sm">Bundle Price</h4>
                <p className="text-2xl md:text-4xl font-bold text-cyan-400">R5,000 – R6,000</p>
              </div>
              <div className="border-t border-white/10 mt-5 md:mt-6 pt-5 md:pt-6 text-gray-300 text-sm md:text-base">Monthly Retainer: <strong>R1,250/month</strong></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative px-4 md:px-8 py-20 md:py-24 bg-gradient-to-b from-black/10 to-black/30 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-cyan-400 uppercase tracking-[2px] md:tracking-[4px] font-semibold mb-3 md:mb-4 text-sm">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6">How It <span className="text-cyan-400">Works</span></h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Our process is designed to be fast, efficient, and tailored specifically to your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { n:"01", icon:"📞", color:"cyan", title:"Consultation", desc:"We analyse your business operations and identify where AI agents can save you the most time and convert more leads." },
              { n:"02", icon:"⚙️", color:"purple", title:"System Build", desc:"We build your AI agent — customised specifically for your business, your customers, and your sales process." },
              { n:"03", icon:"🚀", color:"cyan", title:"Launch & Scale", desc:"Your AI agent goes live and immediately starts capturing leads, saving time, and generating results." },
            ].map((step,i)=>(
              <motion.div key={i} whileHover={{ y: -10, scale: 1.03 }} transition={{ duration: 0.3 }}
                className={`relative bg-white/5 border border-${step.color}-500/20 rounded-3xl p-6 md:p-10 backdrop-blur-xl overflow-hidden hover:border-${step.color}-400 shadow-[0_0_50px_rgba(0,255,255,0.08)]`}>
                <div className="absolute top-0 right-0 text-[80px] md:text-[120px] font-black text-white/5 leading-none">{step.n}</div>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-${step.color}-500/20 flex items-center justify-center text-2xl md:text-3xl mb-5 md:mb-8`}>{step.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-lg">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER / ABOUT */}
      <section id="about" className="relative px-4 md:px-8 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-cyan-400 font-semibold tracking-[2px] md:tracking-[4px] uppercase mb-3 md:mb-4 text-sm">Meet The Founder</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">
              The Person Behind{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AIVEXA</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white/5 border border-cyan-500/20 rounded-3xl p-6 md:p-14 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.06)]"
          >
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-2xl opacity-30" />
                <img
                  src="/founder.png"
                  alt="Devan — Founder of AIVEXA"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-cyan-500/30 shadow-2xl"
                />
              </div>
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">Devan</h3>
              <p className="text-cyan-400 font-semibold mb-4 md:mb-6 tracking-wide text-sm md:text-base">Founder & CEO — AIVEXA Solutions</p>
              <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-lg">
                <p>My name is Devan, and I founded AIVEXA from a simple but powerful realisation — most businesses are drowning in manual work they don't have to do.</p>
                <p>Before AIVEXA, I spent years in the office automation industry, working closely with businesses across various operations. I watched talented teams waste hours every day on repetitive tasks, missed leads, and slow communication processes that technology could solve in minutes.</p>
                <p>I started AIVEXA because I knew I had more to offer. Not just to the businesses I work with — but to myself. I believed there was a better way to create real, measurable impact beyond the limits of a traditional career.</p>
                <p>AIVEXA was built on one core belief — that businesses deserve smarter systems. AI agents that work around the clock, reduce operational drag, and free up the people inside those businesses to focus on what truly matters.</p>
                <p className="text-cyan-300 font-medium">Based in Port Elizabeth, South Africa — AIVEXA is built for businesses that are ready to stop working harder and start working smarter.</p>
              </div>
              <div className="mt-6 md:mt-8">
                <a href="https://tally.so/r/b5K6y6" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] text-sm md:text-base">
                  Work With Devan
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 md:space-y-5">
            {[
              { q: "What businesses can benefit from AI agents?", a: "Almost any business can benefit from AI agents — for lead generation, customer support, and handling repetitive tasks. We work especially well with admin-heavy businesses, service providers, and companies that handle high volumes of customer communication." },
              { q: "Do you build custom AI systems?", a: "Yes. Every AI agent is designed around your specific business requirements, goals, and existing tools." },
              { q: "Can your AI agents work on WhatsApp?", a: "Yes. Our AI agents run natively on WhatsApp — handling customer communication, bookings, lead management, and support." },
              { q: "How long does setup take?", a: "Most AI agent systems are built and live within 7–14 business days depending on complexity. We'll give you a clear timeline during your free consultation." },
              { q: "What tools do you use?", a: "We build on a modern, fully-owned tech stack — including the Anthropic Claude AI platform, WhatsApp Business APIs, and custom-built infrastructure — rather than relying on no-code platforms. This gives you a faster, more reliable, and fully owned system." },
              { q: "Do I need technical knowledge to use the systems?", a: "Not at all. We build, set up, and hand over everything fully operational. We also provide guidance so you can manage it confidently without any technical background." },
              { q: "Do you offer ongoing support after setup?", a: "Yes. We offer monthly retainer packages that include system monitoring, updates, optimisation, and ongoing support so your AI agent keeps running at its best." },
              { q: "How much value can AI agents add to my business?", a: "Most clients reclaim 10–20+ hours per week in admin time alone. Beyond time, faster lead response and AI-driven follow-ups directly improve conversion rates and revenue." },
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 hover:border-cyan-500 transition duration-300">
                <h3 className="text-base md:text-xl font-semibold text-cyan-400 mb-2 md:mb-3">{faq.q}</h3>
                <p className="text-gray-400 text-sm md:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-4 md:px-8 py-16 md:py-24 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ready To Put AI Agents To Work For Your Business?</h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10">Let's build intelligent systems that save time and grow your business.</p>
          <a href="https://tally.so/r/44A1Zk" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] text-sm md:text-base">
            Get Started Today
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-xl mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AIVEXA</h2>
              <p className="text-gray-400 mt-3 md:mt-4 leading-relaxed text-sm md:text-base">AI agents and intelligent business systems designed to help businesses convert more leads, respond faster, and scale smarter.</p>
              <div className="flex flex-wrap gap-3 md:gap-4 mt-5 md:mt-6">
                {[
                  { href: "https://linkedin.com/company/officialaivexa", path: "M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.3V24h-4v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4V24h-4V8z" },
                  { href: "https://facebook.com/officialaivexa", path: "M22 12.07C22 6.477 17.523 2 11.93 2S2 6.477 2 12.07c0 5.017 3.657 9.178 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.9h-2.33V22c4.78-.752 8.437-4.913 8.437-9.93z" },
                  { href: "https://instagram.com/officialaivexa", path: "M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.322 4 20 5.678 20 7.75v8.5C20 18.322 18.322 20 16.25 20h-8.5C5.678 20 4 18.322 4 16.25v-8.5C4 5.678 5.678 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" },
                  { href: "https://youtube.com/@officialaivexa", path: "M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.548 3.5 12 3.5 12 3.5s-7.548 0-9.388.566a2.997 2.997 0 00-2.11 2.12C0 8.035 0 12 0 12s0 3.965.502 5.814a2.997 2.997 0 002.11 2.12C4.452 20.5 12 20.5 12 20.5s7.548 0 9.388-.566a2.997 2.997 0 002.11-2.12C24 15.965 24 12 24 12s0-3.965-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-all duration-300 p-2.5 md:p-3 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h3>
              <div className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">
                {[["#services","AI Agents"],["#about","About"],["#contact","Contact"],["/privacy","Privacy Policy"],["/terms","Terms of Service"]].map(([href,label],i)=>(
                  <a key={i} href={href} className="hover:text-cyan-400 transition">{label}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Contact</h3>
              <div className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">
                <a href="mailto:info@aivexasolutions.com" className="hover:text-cyan-400 transition break-all">info@aivexasolutions.com</a>
                <a href="https://wa.me/27698585902" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">WhatsApp: +27 69 858 5902</a>
                <a href="https://linkedin.com/company/officialaivexa" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn: Officialaivexa</a>
                <p className="text-gray-500 text-xs md:text-sm">Cape Town, South Africa</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            <p className="text-gray-500 text-xs md:text-sm">© 2026 AIVEXA Solutions. All rights reserved.</p>
            <p className="text-gray-600 text-xs md:text-sm">Built with AI-powered innovation.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a href="https://wa.me/27698585902" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-4 md:right-6 bg-green-500 hover:bg-green-400 text-white p-3.5 md:p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8 fill-current">
          <path d="M19.11 17.21c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.73.92-.89 1.11-.16.19-.33.22-.62.07-.29-.15-1.21-.44-2.3-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.33.44-.49.15-.17.19-.29.29-.48.1-.19.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.37-.26.29-.98.96-.98 2.35s1 2.74 1.14 2.93c.15.19 1.96 3 4.75 4.2.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.21-.55-.36z"/>
          <path d="M16 .4C7.39.4.4 7.39.4 16c0 2.82.74 5.58 2.15 8L0 32l8.22-2.51A15.52 15.52 0 0016 31.6c8.61 0 15.6-6.99 15.6-15.6C31.6 7.39 24.61.4 16 .4zm0 28.4c-2.42 0-4.79-.65-6.86-1.89l-.49-.29-4.88 1.49 1.5-4.75-.32-.49A12.72 12.72 0 013.2 16C3.2 8.93 8.93 3.2 16 3.2S28.8 8.93 28.8 16 23.07 28.8 16 28.8z"/>
        </svg>
      </a>

      {/* IMAGE POPUP */}
      {selectedImage !== "" && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-6" onClick={() => setSelectedImage("")}>
          <img src={selectedImage} alt="Expanded Demo" className="max-w-full max-h-full rounded-2xl" />
        </div>
      )}

      <CookieConsent />
    </div>
  );
}
