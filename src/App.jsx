export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white font-sans">

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

            <a href="#portfolio" className="hover:text-cyan-400 transition duration-300">
              Portfolio
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
      <section className="relative px-8 py-32 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

        <div className="animate-bounce mb-8">

          <img
            src="/logo.png"
            alt="Aivexa Logo"
            className="w-56 md:w-72 object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.6)]"
          />

        </div>

        <p className="text-cyan-400 font-semibold mb-4 tracking-[3px]">
          AI AUTOMATION AGENCY
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-5xl">
          Smarter Systems.
          <span className="text-cyan-400"> Faster Growth.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
          Aivexa helps businesses automate workflows, streamline operations,
          improve customer communication, and scale faster using intelligent
          AI-powered systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://tally.so/r/44A1Zk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-8 py-4 rounded-xl font-semibold text-black shadow-[0_0_30px_rgba(0,255,255,0.3)]"
          >
            Book Free Consultation
          </a>

          <a
            href="https://tally.so/r/b5K6y6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-500 hover:bg-cyan-500/10 transition duration-300 px-8 py-4 rounded-xl"
          >
            Request a Quote
          </a>

        </div>
</section>
{/* TRUST SECTION */}
<section className="px-8 py-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <h3 className="text-4xl font-black text-cyan-400 mb-3">
        24/7
      </h3>

      <p className="text-gray-400">
        Automated business systems running around the clock.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <h3 className="text-4xl font-black text-cyan-400 mb-3">
        AI
      </h3>

      <p className="text-gray-400">
        Intelligent automation designed to save time and increase efficiency.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <h3 className="text-4xl font-black text-cyan-400 mb-3">
        Custom
      </h3>

      <p className="text-gray-400">
        Every automation system is tailored specifically to your business needs.
      </p>
    </div>

  </div>
</section>
      {/* SERVICES */}
      <section
        id="services"
        className="relative px-8 py-28"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Intelligent automation systems designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "AI Chatbots",
                desc: "AI-powered assistants for support, lead generation, and customer engagement.",
              },
              {
                title: "WhatsApp Automation",
                desc: "Automate communication, bookings, follow-ups, and customer interactions.",
              },
              {
                title: "Workflow Automation",
                desc: "Connect systems and eliminate repetitive manual business tasks.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition duration-500"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
        </section>
{/* HOW IT WORKS */}
<section className="px-8 py-28 bg-black/20">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold mb-6">
        How It Works
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        Our process is simple, fast, and designed to automate your business efficiently.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl font-black mb-6">
          01
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Consultation
        </h3>

        <p className="text-gray-400">
          We analyse your business and identify automation opportunities.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl font-black mb-6">
          02
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          System Build
        </h3>

        <p className="text-gray-400">
          We create intelligent AI workflows tailored specifically to your business.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl font-black mb-6">
          03
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Automation Launch
        </h3>

        <p className="text-gray-400">
          Your AI systems go live and start saving time, improving efficiency, and generating results.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="relative px-8 py-28 bg-black/20"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio
            </h2>

            <p className="text-gray-400">
              Example automation systems built for businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "AI Quote Request System",
              "WhatsApp Lead Automation",
              "CRM Workflow Integration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-500"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-gray-400">
                  Intelligent automation system designed to streamline business operations.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative px-8 py-28"
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
{/* WHY CHOOSE AIVEXA */}
<section className="px-8 py-28">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold mb-6">
        Why Choose
        <span className="text-cyan-400"> AIVEXA</span>
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        We build intelligent automation systems that help businesses save time,
        improve efficiency, and scale faster using modern AI technology.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl mb-6">
          ⚡
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Faster Operations
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Automate repetitive tasks, customer communication, and workflows to
          save hours every week.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl mb-6">
          🤖
        </div>

        <h3 className="text-2xl font-bold mb-4">
          AI-Powered Systems
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Intelligent automation designed to improve efficiency, lead handling,
          and customer experience.
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500 transition duration-300">

        <div className="text-cyan-400 text-5xl mb-6">
          🚀
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Custom Solutions
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Every automation workflow is tailored specifically for your business
          goals and processes.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-8 py-28 bg-black/20"
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

      {/* FOOTER */}
<footer className="relative border-t border-white/10 py-10 px-8">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="flex items-center gap-3">

      <img
        src="/logo.png"
        alt="Aivexa Logo"
        className="w-10 h-10 object-contain"
      />

      <div>
        <h3 className="font-bold text-cyan-400">
          AIVEXA
        </h3>

        <p className="text-sm text-gray-500">
          AI Automation Agency
        </p>
      </div>

    </div>

    {/* ADD THIS SECTION */}
    <div className="flex gap-6 text-sm text-gray-400">
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

    <p className="text-gray-500 text-sm text-center">
      © 2026 Aivexa. All rights reserved.
    </p>

  </div>

</footer>

    </div>
  );
}