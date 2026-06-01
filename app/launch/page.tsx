export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent_60%)]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        
        <div className="mb-6 rounded-full border border-red-500/30 bg-red-950/20 px-5 py-2 text-sm font-bold uppercase tracking-widest text-red-400">
          Powered by GOATHEX & Flaunch
        </div>

        <h1 className="text-5xl font-black uppercase md:text-7xl">
          Launch Your Token
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Create and launch your token on Base through the GOATHEX ecosystem.
          Fair launch mechanics, deep liquidity, and revenue-sharing infrastructure.
        </p>

        <div className="mt-10 grid gap-4 text-left">
          <div className="rounded-xl border border-red-500/20 bg-zinc-950 px-6 py-4">
            ✓ Base Chain
          </div>

          <div className="rounded-xl border border-red-500/20 bg-zinc-950 px-6 py-4">
            ✓ Powered by Flaunch
          </div>

          <div className="rounded-xl border border-red-500/20 bg-zinc-950 px-6 py-4">
            ✓ Fair Launch
          </div>

          <div className="rounded-xl border border-red-500/20 bg-zinc-950 px-6 py-4">
            ✓ Revenue Sharing
          </div>
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

        <p className="mt-8 text-sm text-zinc-500">
          Coming soon: One-click token deployment through GOATHEX Launch Engine.
        </p>
      </section>
    </main>
  );
}