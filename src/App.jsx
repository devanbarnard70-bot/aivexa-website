import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [selectedImage, setSelectedImage] = useState("");
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  useEffect(() => {
  const cookieConsent = localStorage.getItem("cookie_consent");

  if (!cookieConsent) {
    setShowCookieBanner(true);
  }
}, []);

const acceptCookies = () => {
  localStorage.setItem("cookie_consent", "accepted");
  setShowCookieBanner(false);
};

const declineCookies = () => {
  localStorage.setItem("cookie_consent", "declined");
  setShowCookieBanner(false);
};
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white font-sans">
      {/* Animated Background */}
<div className="absolute inset-0 overflow-hidden">

  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617]" />

<motion.div
  animate={{
    y: [0, -40, 0],
    x: [0, 30, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
/>

<motion.div
  animate={{
    y: [0, 30, 0],
    x: [0, -20, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[120px]"
/>

<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-[40%] left-[35%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"
/>
  {/* Moving Gradient */}
  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#06b6d4,transparent_35%),radial-gradient(circle_at_bottom_right,#8b5cf6,transparent_35%)] animate-pulse" />

  {/* Grid Overlay */}
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />
</div>

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>

        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
           </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-8 py-5">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Aivexa Logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />

            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-cyan-400">
              AIVEXA
            </h1>

          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base">

            <a href="#services" className="hover:text-cyan-400 transition duration-300">
              Services
            </a>

            
            <a href="#faq" className="hover:text-cyan-400 transition duration-300">
              FAQ
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>

          </div>

        </div>

      </nav>

{/* HERO */}
<motion.section 
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative px-8 py-32 max-w-7xl mx-auto flex flex-col items-center justify-center text-center"
>

  <div className="animate-bounce mb-8">
    <img
      src="/logo.png"
      alt="Aivexa Logo"
      className="w-56 md:w-72 object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]"
    />
  </div>

  {/* Small Label */}
  <p className="text-cyan-400 font-semibold mb-4 tracking-[3px]">
    AI AUTOMATION AGENCY
  </p>

  {/* Updated Main Heading */}
  <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-6xl">
    AI Automation That Saves Your Business{" "}
    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Time, Leads & Money
    </span>
  </h1>

  {/* Updated Subheading */}
  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
    Aivexa helps businesses automate customer communication, WhatsApp replies,
    lead capture, and repetitive tasks using intelligent AI systems.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-wrap justify-center gap-4">

    {/* Updated Main CTA */}
    <motion.a
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 30px rgba(34,211,238,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      href="https://tally.so/r/b5K6y6"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-8 py-4 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)]"
    >
      Get A Free Quote
    </motion.a>

    {/* Secondary CTA */}
    <a
      href="#services"
      className="border border-cyan-500 hover:bg-cyan-500/10 transition duration-300 px-8 py-4 rounded-xl"
    >
      Explore Services
    </a>
    {/* VIEW DEMO CTA BUTTON */}
{/* VIEW DEMO CTA BUTTON */}
<button
  onClick={() => {
    const section = document.getElementById("demo-showcase");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition duration-300 font-semibold text-white shadow-lg hover:scale-105"
>
  View Demo
</button>

  </div>
  {/* DEMO SHOWCASE */}
<section
  id="demo-showcase"
  className="relative px-8 pt-24 md:pt-52 pb-14 md:pb-28 max-w-7xl mx-auto"
>

  {/* Section Heading */}
  <div className="text-center mb-20">

    <p className="text-cyan-400 font-semibold tracking-[3px] mb-4">
      AI AUTOMATION DEMOS
    </p>

    <h2 className="text-4xl md:text-6xl font-black mb-6">
      AI Automation In{" "}
      <span className="text-cyan-400">
        Action
      </span>
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
      Explore real-world examples of AI chatbots, lead capture systems,
      CRM automation, and intelligent workflows designed to help
      businesses operate smarter and faster.
    </p>

  </div>

  {/* Demo Cards */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* DEMO 1 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
    >

    <img
  src="/demos/demo1.png"
  alt="WhatsApp Chatbot Demo"
  className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition duration-300"
  onClick={() => setSelectedImage("/demos/demo1.png")}
/>
      <div className="p-8">

        <p className="text-cyan-400 font-semibold mb-3">
          DEMO 1
        </p>

        <h3 className="text-2xl font-bold mb-4">
          WhatsApp AI Chatbot
        </h3>

        <p className="text-gray-300 leading-relaxed">
          AI-powered WhatsApp automation that handles customer support,
          quote requests, lead capture, and instant replies 24/7.
        </p>

      </div>

    </motion.div>

    {/* DEMO 2 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
    >

 <img
  src="/demos/demo2.png"
  alt="AI Lead Capture Workflow"
  className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition duration-300"
  onClick={() => setSelectedImage("/demos/demo2.png")}
/>

      <div className="p-8">

        <p className="text-cyan-400 font-semibold mb-3">
          DEMO 2
        </p>

        <h3 className="text-2xl font-bold mb-4">
          AI Lead Capture Workflow
        </h3>

        <p className="text-gray-300 leading-relaxed">
          Automatically capture, qualify, and nurture leads using AI,
          CRM integration, WhatsApp follow-ups, and automated workflows.
        </p>

      </div>

    </motion.div>

    {/* DEMO 3 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-cyan-500/20 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)]"
    >

    <img
  src="/demos/demo3.png"
  alt="CRM Automation Workflow"
  className="w-full h-72 object-cover cursor-pointer hover:scale-105 transition duration-300"
  onClick={() => setSelectedImage("/demos/demo3.png")}
/>

      <div className="p-8">

        <p className="text-cyan-400 font-semibold mb-3">
          DEMO 3
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Appointment Booking Automation

        </h3>

        <p className="text-gray-300 leading-relaxed">
          Streamline lead management, automate follow-ups, and improve
          customer relationships with intelligent CRM automation systems.
        </p>

      </div>

    </motion.div>

  </div>

</section>

</motion.section>
{/* TRUST SECTION */}
<section className="relative px-8 py-24">

  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[4px] uppercase mb-4">
        Why Businesses Choose AIVEXA
      </p>

      <h2 className="text-4xl md:text-5xl font-black mb-6">
        Intelligent AI Systems
        <span className="text-cyan-400"> Built For Growth</span>
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
        We help businesses automate repetitive tasks, improve customer response
        times, and scale operations using powerful AI automation systems.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.08)] hover:border-cyan-400"
      >

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-6">
          ⚡
        </div>

        <h3 className="text-4xl font-black text-cyan-400 mb-3">
          24/7
        </h3>

        <h4 className="text-2xl font-bold mb-4">
          Always Running
        </h4>

        <p className="text-gray-400 leading-relaxed">
          AI systems operate around the clock to capture leads,
          answer questions, and automate business tasks instantly.
        </p>

      </motion.div>

      {/* CARD 2 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:border-purple-400"
      >

        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl mb-6">
          🤖
        </div>

        <h3 className="text-4xl font-black text-purple-400 mb-3">
          AI
        </h3>

        <h4 className="text-2xl font-bold mb-4">
          Smart Automation
        </h4>

        <p className="text-gray-400 leading-relaxed">
          Intelligent automation systems designed to save time,
          improve efficiency, and streamline customer communication.
        </p>

      </motion.div>

      {/* CARD 3 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(236,72,153,0.08)] hover:border-pink-400"
      >

        <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-3xl mb-6">
          🚀
        </div>

        <h3 className="text-4xl font-black text-pink-400 mb-3">
          Custom
        </h3>

        <h4 className="text-2xl font-bold mb-4">
          Tailored Solutions
        </h4>

        <p className="text-gray-400 leading-relaxed">
          Every automation workflow is customized specifically for
          your business goals, systems, and operational needs.
        </p>

      </motion.div>

    </div>

  </div>

</section>

     {/* SERVICES & PRICING SECTION */}
<section id="services" className="relative py-14 md:py-28 px-6 bg-[#050816] text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        AI Automation Services
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Helping businesses automate customer enquiries, bookings,
        follow-ups and lead generation using AI & WhatsApp automation.
      </p>
    </div>
{/* Pricing Cards */}
<div className="grid md:grid-cols-3 gap-8">

  {/* REAL ESTATE */}
  <motion.div
    whileHover={{ scale: 1.04, y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl hover:border-yellow-400"
  >
    <h3 className="text-2xl font-bold mb-4 text-yellow-400">
      Real Estate
    </h3>

    <p className="text-gray-400 mb-6">
      AI chatbots & automation systems for property agencies.
    </p>

    <div className="mb-8">

      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold">
          Starter Package
        </h4>

        <span className="text-sm text-cyan-300">
          Setup + Retainer
        </span>
      </div>

      <p className="text-3xl font-bold">
        R2,500 Setup
      </p>

      <p className="text-cyan-400 text-lg mb-4">
        + R750/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>✔ AI Website Chatbot</li>
        <li>✔ Lead Capture Forms</li>
        <li>✔ WhatsApp Notifications</li>
        <li>✔ FAQ Automation</li>
        <li>✔ Monthly support & updates</li>
      </ul>

    </div>

    <div className="border-t border-white/10 pt-6">

      <h4 className="text-xl font-semibold mb-2">
        Growth Package
      </h4>

      <p className="text-3xl font-bold">
        R5,000 Setup
      </p>

      <p className="text-cyan-400 text-lg mb-4">
        + R1500/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>✔ Viewing Bookings</li>
        <li>✔ CRM Integration</li>
        <li>✔ Email Automation</li>
        <li>✔ Lead Tracking</li>
        <li>✔ Automated follow-ups</li>
      </ul>

    </div>
  </motion.div>

  {/* CAR DEALERSHIPS */}
  <motion.div
    whileHover={{ scale: 1.05, y: -12 }}
    transition={{ duration: 0.3 }}
    className="bg-gradient-to-b from-cyan-500/20 to-purple-500/20 border border-cyan-400 rounded-3xl p-8 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.15)]"
  >
    <h3 className="text-2xl font-bold mb-4 text-cyan-400">
      Car Dealerships
    </h3>

    <p className="text-gray-300 mb-6">
      AI systems for vehicle enquiries and customer follow-ups.
    </p>

    <div className="mb-8">

      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold">
          Starter Package
        </h4>

        <span className="text-sm text-cyan-300">
          Setup + Retainer
        </span>
      </div>

      <p className="text-3xl font-bold">
        R3,000 Setup
      </p>

      <p className="text-cyan-300 text-lg mb-4">
        + R1000/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-200">
        <li>✔ Vehicle Enquiry Bot</li>
        <li>✔ Lead Forms</li>
        <li>✔ WhatsApp Alerts</li>
        <li>✔ Instant Responses</li>
        <li>✔ Monthly optimization</li>
      </ul>

    </div>

    <div className="border-t border-white/10 pt-6">

      <h4 className="text-xl font-semibold mb-2">
        Premium Package
      </h4>

      <p className="text-3xl font-bold">
        R6,500 Setup
      </p>

      <p className="text-cyan-300 text-lg mb-4">
        + R2000/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-200">
        <li>✔ AI Sales Assistant</li>
        <li>✔ CRM Integration</li>
        <li>✔ Test Drive Scheduling</li>
        <li>✔ Automated Follow-Ups</li>
        <li>✔ Lead pipeline tracking</li>
      </ul>

    </div>
  </motion.div>

  {/* CLINICS */}
  <motion.div
    whileHover={{ scale: 1.04, y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl hover:border-pink-400"
  >
    <h3 className="text-2xl font-bold mb-4 text-pink-400">
      Clinics & Beauty
    </h3>

    <p className="text-gray-400 mb-6">
      Booking and customer automation for clinics & salons.
    </p>

    <div className="mb-8">

      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold">
          Basic Package
        </h4>

        <span className="text-sm text-pink-300">
          Setup + Retainer
        </span>
      </div>

      <p className="text-3xl font-bold">
        R2,500 Setup
      </p>

      <p className="text-pink-300 text-lg mb-4">
        + R1000/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>✔ AI Booking Assistant</li>
        <li>✔ FAQ Automation</li>
        <li>✔ Appointment Requests</li>
        <li>✔ After-Hours Replies</li>
        <li>✔ Monthly maintenance</li>
      </ul>

    </div>

    <div className="border-t border-white/10 pt-6">

      <h4 className="text-xl font-semibold mb-2">
        Advanced Package
      </h4>

      <p className="text-3xl font-bold">
        R5,500 Setup
      </p>

      <p className="text-pink-300 text-lg mb-4">
        + R2000/pm Retainer
      </p>

      <ul className="space-y-2 text-gray-300">
        <li>✔ WhatsApp Reminders</li>
        <li>✔ Follow-Up Automation</li>
        <li>✔ Cancellation Handling</li>
        <li>✔ Google Review Requests</li>
        <li>✔ CRM integrations</li>
      </ul>

    </div>
  </motion.div>

</div>

  </div>
</section>   
{/* HOW IT WORKS */}
<section className="relative px-8 py-32 bg-gradient-to-b from-black/10 to-black/30 overflow-hidden">

  {/* Glow Background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-24">

      <p className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-4">
        Simple Process
      </p>

      <h2 className="text-5xl md:text-6xl font-black mb-6">
        How It
        <span className="text-cyan-400"> Works</span>
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
        Our automation process is designed to be fast, efficient,
        and tailored specifically to your business operations.
      </p>

    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* STEP 1 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/5 border border-cyan-500/20 rounded-3xl p-10 backdrop-blur-xl overflow-hidden hover:border-cyan-400 shadow-[0_0_50px_rgba(0,255,255,0.08)]"
      >

        <div className="absolute top-0 right-0 text-[120px] font-black text-white/5 leading-none">
          01
        </div>

        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-8">
          📞
        </div>

        <h3 className="text-3xl font-bold mb-5">
          Consultation
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          We analyse your business operations and identify the best
          automation opportunities to improve efficiency and growth.
        </p>

      </motion.div>

      {/* STEP 2 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/5 border border-purple-500/20 rounded-3xl p-10 backdrop-blur-xl overflow-hidden hover:border-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.08)]"
      >

        <div className="absolute top-0 right-0 text-[120px] font-black text-white/5 leading-none">
          02
        </div>

        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl mb-8">
          ⚙️
        </div>

        <h3 className="text-3xl font-bold mb-5">
          System Build
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          We build intelligent AI workflows and automation systems
          customised specifically for your business needs.
        </p>

      </motion.div>

      {/* STEP 3 */}
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/5 border border-pink-500/20 rounded-3xl p-10 backdrop-blur-xl overflow-hidden hover:border-pink-400 shadow-[0_0_50px_rgba(236,72,153,0.08)]"
      >

        <div className="absolute top-0 right-0 text-[120px] font-black text-white/5 leading-none">
          03
        </div>

        <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center text-3xl mb-8">
          🚀
        </div>

        <h3 className="text-3xl font-bold mb-5">
          Launch & Scale
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          Your automation systems go live and immediately begin
          saving time, increasing efficiency, and generating results.
        </p>

      </motion.div>

    </div>

  </div>

</section>
  
      {/* FAQ */}
      <section
        id="faq"
        className="relative px-8 py-12 md:py-28"
      >
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">

            {[
              {
                q: "What businesses can benefit from AI automation?",
                a: "Almost any business can automate repetitive tasks, lead generation, customer support, and workflows.",
              },
              {
                q: "Do you build custom AI systems?",
                a: "Yes. Every automation solution is designed around your business requirements.",
              },
              {
                q: "Can you automate WhatsApp?",
                a: "Yes. We build WhatsApp automation systems for communication, bookings, and lead management.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {faq.q}
                </h3>

                <p className="text-gray-400">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-8 py-12 md:py-28 bg-black/20"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Automate Your Business?
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Let’s build intelligent systems that save time and grow your business.
          </p>

          <a
            href="https://tally.so/r/44A1Zk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-10 py-5 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)]"
          >
            Get Started Today
          </a>

        </div>
      </section>
      {/* CASE STUDIES */}
<section
  id="case-studies"
  className="relative max-w-7xl mx-auto px-6 py-28"
>

  <div className="text-center mb-16">
    <p className="text-cyan-400 font-semibold tracking-widest uppercase">
      Demo Prototypes
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Example AI Workflows &
      <span className="text-cyan-400"> Case Studies</span>
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
      Real-world automation systems designed to reduce manual work,
      improve response times, and increase customer conversions.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CASE 1 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:scale-105 transition duration-300">

      <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl mb-6">
        🤖
      </div>

      <h3 className="text-2xl font-bold mb-4">
        AI Customer Support Bot
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        Automated website chatbot that instantly answers FAQs,
        qualifies leads, and books consultations 24/7.
      </p>

      <div className="space-y-3 text-sm text-gray-300">

        <div className="flex items-center gap-2">
          ✅ Instant lead qualification
        </div>

        <div className="flex items-center gap-2">
          ✅ WhatsApp integration
        </div>

        <div className="flex items-center gap-2">
          ✅ CRM synchronization
        </div>

      </div>
    </div>

    {/* CASE 2 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-purple-400/40 hover:scale-105 transition duration-300">

      <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl mb-6">
        ⚡
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Automated Quote Workflow
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        Smart workflow that collects customer requirements,
        generates quotations, and sends automated follow-ups.
      </p>

      <div className="space-y-3 text-sm text-gray-300">

        <div className="flex items-center gap-2">
          ✅ Instant quote requests
        </div>

        <div className="flex items-center gap-2">
          ✅ Automated email replies
        </div>

        <div className="flex items-center gap-2">
          ✅ Lead tracking dashboard
        </div>

      </div>
    </div>

    {/* CASE 3 */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-400/40 hover:scale-105 transition duration-300">

      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl mb-6">
        📈
      </div>

      <h3 className="text-2xl font-bold mb-4">
        Social Media AI Assistant
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6">
        AI-powered assistant that manages inquiries,
        captures leads, and automates responses from social media.
      </p>

      <div className="space-y-3 text-sm text-gray-300">

        <div className="flex items-center gap-2">
          ✅ Facebook automation
        </div>

        <div className="flex items-center gap-2">
          ✅ Instagram lead capture
        </div>

        <div className="flex items-center gap-2">
          ✅ CRM integrations
        </div>

      </div>
    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-xl mt-32">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Brand */}
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          AIVEXA
        </h2>

        <p className="text-gray-400 mt-4 leading-relaxed">
          AI automation systems designed to help businesses scale faster,
          automate conversations, generate leads, and improve customer experience.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://linkedin.com/company/officialaivexa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition p-3 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.3V24h-4v-7.4c0-1.8 0-4.1-2.5-4.1s-2.9 1.9-2.9 4V24h-4V8z"/>
            </svg>
          </a>
          {/* Facebook */}
<a
  href="https://facebook.com/officialaivexa"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-all duration-300 p-4 rounded-2xl"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22 12.07C22 6.477 17.523 2 11.93 2S2 6.477 2 12.07c0 5.017 3.657 9.178 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.9h-2.33V22c4.78-.752 8.437-4.913 8.437-9.93z"/>
  </svg>
</a>

{/* Instagram */}
<a
  href="https://instagram.com/officialaivexa"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-all duration-300 p-4 rounded-2xl"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.322 4 20 5.678 20 7.75v8.5C20 18.322 18.322 20 16.25 20h-8.5C5.678 20 4 18.322 4 16.25v-8.5C4 5.678 5.678 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
</a>

{/* YouTube */}
<a
  href="https://youtube.com/@officialaivexa"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400 transition-all duration-300 p-4 rounded-2xl"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.548 3.5 12 3.5 12 3.5s-7.548 0-9.388.566a2.997 2.997 0 00-2.11 2.12C0 8.035 0 12 0 12s0 3.965.502 5.814a2.997 2.997 0 002.11 2.12C4.452 20.5 12 20.5 12 20.5s7.548 0 9.388-.566a2.997 2.997 0 002.11-2.12C24 15.965 24 12 24 12s0-3.965-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
  </svg>
</a>

        </div>
      </div>

    {/* Quick Links */}
<div>
  <h3 className="text-xl font-semibold mb-6">
    Quick Links
  </h3>

  <div className="flex flex-col gap-4 text-gray-400">

    <a
      href="#services"
      className="hover:text-cyan-400 transition"
    >
      Services
    </a>

    <a
      href="#about"
      className="hover:text-cyan-400 transition"
    >
      About
    </a>

    <a
      href="#contact"
      className="hover:text-cyan-400 transition"
    >
      Contact
    </a>

    <a
      href="/privacy"
      className="hover:text-cyan-400 transition"
    >
      Privacy Policy
    </a>

    <a
      href="/terms"
      className="hover:text-cyan-400 transition"
    >
      Terms of Service
    </a>

  </div>
</div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Contact
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <a
            href="mailto:officalaivexa@outlook.com"
            className="hover:text-cyan-400 transition"
          >
            officalaivexa@outlook.com
          </a>

          <a
            href="https://linkedin.com/company/officialaivexa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn: Officialaivexa
          </a>

        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-gray-500 text-sm">
        © 2026 Aivexa. All rights reserved.
      </p>

      <p className="text-gray-600 text-sm">
        Built with AI-powered innovation.
      </p>

    </div>

  </div>

</footer>
{/* WhatsApp Button */}
<a
  href="https://wa.me/27698585902"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-8 h-8 fill-current"
  >
    <path d="M19.11 17.21c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.73.92-.89 1.11-.16.19-.33.22-.62.07-.29-.15-1.21-.44-2.3-1.41-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.33.44-.49.15-.17.19-.29.29-.48.1-.19.05-.37-.02-.52-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.49.07-.74.37-.26.29-.98.96-.98 2.35s1 2.74 1.14 2.93c.15.19 1.96 3 4.75 4.2.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.35-.07-.13-.26-.21-.55-.36z"/>
    <path d="M16 .4C7.39.4.4 7.39.4 16c0 2.82.74 5.58 2.15 8L0 32l8.22-2.51A15.52 15.52 0 0016 31.6c8.61 0 15.6-6.99 15.6-15.6C31.6 7.39 24.61.4 16 .4zm0 28.4c-2.42 0-4.79-.65-6.86-1.89l-.49-.29-4.88 1.49 1.5-4.75-.32-.49A12.72 12.72 0 013.2 16C3.2 8.93 8.93 3.2 16 3.2S28.8 8.93 28.8 16 23.07 28.8 16 28.8z"/>
  </svg>
</a>

{/* IMAGE POPUP */}
{selectedImage !== "" && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
    onClick={() => setSelectedImage("")}
  >
    <img
      src={selectedImage}
      alt="Expanded Demo"
      className="max-w-full max-h-full rounded-2xl"
    />
  </div>
)}
{/* COOKIE CONSENT BANNER */}
{showCookieBanner && (
  <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-2xl bg-[#151030] border border-cyan-500/30 shadow-2xl rounded-2xl p-6 backdrop-blur-lg">
    
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      
      <div>
        <h3 className="text-white text-lg font-semibold">
          We use cookies
        </h3>

        <p className="text-gray-300 text-sm mt-1">
          This website uses cookies to improve your browsing experience and analyze website traffic.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={declineCookies}
          className="px-4 py-2 rounded-xl border border-white/10 text-gray-300 hover:bg-white/10 transition"
        >
          Decline
        </button>

        <button
          onClick={acceptCookies}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
        >
          Accept
        </button>
      </div>

    </div>
  </div>
)}
</div>
);
}

