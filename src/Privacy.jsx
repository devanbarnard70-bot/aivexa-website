export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-8 text-cyan-400">
          Privacy Policy
        </h1>

        <p className="text-gray-300 mb-6">
          Aivexa respects your privacy and protects your personal information.
        </p>

        <div className="space-y-6 text-gray-400">

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Information We Collect
            </h2>

            <p>
              We may collect your name, email address, phone number,
              and business information when you contact us or request services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              How We Use Information
            </h2>

            <p>
              Information is used to provide automation services,
              improve customer experience, and communicate with clients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Data Protection
            </h2>

            <p>
              We implement secure systems and reasonable safeguards
              to protect your information.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}