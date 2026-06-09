export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl tracking-tight">StegaVPN</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors">
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Domain Fronting + Traffic Obfuscation
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          VPN That Looks Like{" "}
          <span className="text-[#58a6ff]">Normal Browsing</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          StegaVPN disguises your encrypted tunnel as ordinary HTTPS traffic. Firewalls see a regular website visit. You get unrestricted internet access.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors">
            Start for $15/mo
          </a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🛡️", title: "Steganographic Tunneling", desc: "Traffic is embedded inside legitimate HTTPS requests, indistinguishable from normal web browsing." },
            { icon: "🌐", title: "Domain Fronting", desc: "Connections route through trusted CDN domains, making blocks nearly impossible without breaking the internet." },
            { icon: "⚡", title: "Global Server Network", desc: "50+ exit nodes across 30 countries. Automatic failover keeps you connected even under active censorship." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-white text-2xl font-bold mb-1">Pro</h3>
          <div className="text-5xl font-extrabold text-[#58a6ff] my-4">$15<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Steganographic obfuscation",
              "Domain fronting enabled",
              "50+ servers in 30 countries",
              "Unlimited bandwidth",
              "Up to 5 devices",
              "24/7 priority support",
              "30-day money-back guarantee"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg text-center hover:bg-[#79b8ff] transition-colors">
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does steganographic VPN differ from a regular VPN?",
              a: "A regular VPN creates an encrypted tunnel that deep packet inspection can identify and block. StegaVPN hides that tunnel inside normal HTTPS web traffic using steganographic techniques, so censorship systems see only ordinary browsing — not a VPN connection."
            },
            {
              q: "Is it legal to use StegaVPN in my country?",
              a: "VPN legality varies by jurisdiction. StegaVPN is a tool for privacy and security. We recommend reviewing local laws. Journalists and activists in restricted regions have used similar tools under press freedom and human rights frameworks."
            },
            {
              q: "What happens if a server gets blocked?",
              a: "Our automatic failover system detects blocks within seconds and reroutes your connection through an alternate server and domain. We continuously rotate infrastructure to stay ahead of censorship lists."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} StegaVPN. Built for those who need it most.</p>
      </footer>
    </main>
  );
}
