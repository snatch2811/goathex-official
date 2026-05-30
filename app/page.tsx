export default function Home() {
  const stats = [
    ["Supply", "100B"],
    ["Chain", "BASE"],
    ["Tax", "0%"],
    ["Liquidity", "Locked"],
  ];

  const tokenomics = [
    ["Liquidity", "40%"],
    ["Community", "35%"],
    ["Marketing", "15%"],
    ["Development", "10%"],
  ];

  const roadmap = [
    ["Phase 1", "Website Launch, Branding, Community Building"],
    ["Phase 2", "DEX Listing, Viral Marketing, Base Chain Expansion"],
    ["Phase 3", "Ecosystem Growth, NFT Integration, Utility Development"],
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-xl font-black tracking-[0.3em]">GOATHEX</h1>
            <p className="text-xs text-zinc-500">BASE CHAIN TOKEN</p>
          </div>

          <button className="rounded-2xl bg-red-600 px-5 py-3 font-semibold hover:bg-red-500">
            Buy $GHEX
          </button>
        </div>
      </nav>

      <section className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <div className="mb-6 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
          Powered By Base Chain
        </div>

        <h1 className="text-7xl font-black md:text-8xl">GOATHEX</h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
          GOATHEX is a dark premium community token built on Base Chain.
          Combining elite branding, cult aesthetics, and unstoppable Web3
          energy into one next-generation ecosystem.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(([title, value]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm text-zinc-500">{title}</p>
              <h3 className="mt-2 text-2xl font-black">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 text-2xl font-bold">Secure Ecosystem</h3>
            <p className="text-zinc-400">
              Built with transparency and powerful Base Chain infrastructure.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 text-2xl font-bold">Community Driven</h3>
            <p className="text-zinc-400">
              Driven by strong community momentum and long-term growth.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 text-2xl font-bold">Premium Branding</h3>
            <p className="text-zinc-400">
              Dark cult-inspired identity combined with elite Web3 aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[40px] border border-red-500/10 bg-white/5 p-10">
          <h2 className="mb-12 text-center text-5xl font-black">
            TOKENOMICS
          </h2>

          <div className="grid gap-5 md:grid-cols-4">
            {tokenomics.map(([title, value]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <p className="text-sm text-zinc-500">{title}</p>
                <h3 className="mt-3 text-4xl font-black">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[36px] border border-red-500/20 bg-red-500/5 p-8">
          <p className="mb-3 font-semibold text-red-400">
            CONTRACT ADDRESS
          </p>

          <code className="break-all text-zinc-300">
            0x0000000000000000000000000000000000000000
          </code>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold text-red-400">ROADMAP</p>
          <h2 className="text-5xl font-black">The Rise Of GOATHEX</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map(([phase, text]) => (
            <div
              key={phase}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-4 text-sm font-semibold text-red-400">
                {phase}
              </div>

              <h3 className="text-2xl font-bold leading-relaxed">
                {text}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        © 2026 GOATHEX • Built On Base Chain • Rule The Shadows
      </footer>
    </main>
  );
}