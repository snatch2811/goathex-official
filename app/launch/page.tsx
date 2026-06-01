export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.14),transparent_58%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-5 rounded-full border border-red-500/30 bg-red-950/20 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-400">
          Powered by GOATHEX & Flaunch
        </div>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-none md:text-7xl">
          Launch Your Token
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          Create and launch your token on Base through the GOATHEX ecosystem.
          Fair launch mechanics, liquidity infrastructure, and creator-focused revenue sharing.
        </p>

        <div className="mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-2">
          {["Base Chain", "Powered by Flaunch", "Fair Launch", "Revenue Sharing"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-red-500/20 bg-zinc-950/80 px-6 py-5 text-left font-bold text-zinc-200"
            >
              <span className="text-red-500">✓</span> {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-red-600 px-8 py-4 font-black uppercase tracking-wider transition hover:bg-red-500">
            Launch Token
          </button>

          <a
            href="/"
            className="rounded-xl border border-red-500/30 px-8 py-4 font-black uppercase tracking-wider hover:bg-red-600/10"
          >
            Back To GOATHEX
          </a>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Coming soon: one-click token deployment through GOATHEX Launch Engine.
        </p>
      </section>
    </main>
  );
}