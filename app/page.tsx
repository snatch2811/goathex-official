```tsx
"use client";

import { motion } from "framer-motion";
import {
  Flame,
  ShieldCheck,
  Coins,
  Rocket,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.15),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_30%)]" />

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-700/20 blur-[140px] rounded-full" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)]">
              <span className="text-2xl">⛧</span>
            </div>

            <div>
              <h1 className="font-black text-xl tracking-[0.3em]">
                GOATHEX
              </h1>

              <p className="text-xs text-zinc-500">
                BASE CHAIN TOKEN
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#tokenomics" className="hover:text-white transition">
              Tokenomics
            </a>

            <a href="#roadmap" className="hover:text-white transition">
              Roadmap
            </a>
          </div>

          <button className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold shadow-[0_0_40px_rgba(255,0,0,0.5)]">
            Buy $GHEX
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-sm mb-6">
            <Rocket size={16} />
            Powered By Base Chain
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tight">
            GOATHEX
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            GOATHEX is a dark premium community token built on Base Chain.
            Combining elite branding, cult aesthetics, and unstoppable Web3
            energy into one next-generation ecosystem.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["Supply", "100B"],
              ["Chain", "BASE"],
              ["Tax", "0%"],
              ["Liquidity", "Locked"],
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <p className="text-zinc-500 text-sm">
                  {item[0]}
                </p>

                <h3 className="text-2xl font-black mt-2">
                  {item[1]}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold flex items-center gap-2 shadow-[0_0_40px_rgba(255,0,0,0.5)]">
              Launch App
              <ChevronRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold">
              View Chart
            </button>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-red-600/20 blur-3xl rounded-full" />

          <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-zinc-500 text-sm">
                  GOATHEX Price
                </p>

                <h2 className="text-5xl font-black">
                  $0.00042
                </h2>
              </div>

              <div className="px-4 py-2 rounded-xl bg-green-500/10 text-green-400 text-sm font-semibold">
                +124%
              </div>
            </div>

            {/* Fake Chart */}
            <div className="h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/20 to-black flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

              <svg
                viewBox="0 0 500 200"
                className="w-full h-full absolute"
              >
                <path
                  d="M0 180 Q100 100 180 120 T320 80 T500 20"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="5"
                />
              </svg>

              <p className="relative z-10 text-zinc-500">
                LIVE MARKET DATA
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <p className="text-zinc-500 text-sm">
                  Liquidity
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  $420K
                </h3>
              </div>

              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <p className="text-zinc-500 text-sm">
                  Holders
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  13,337
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 pb-28"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck size={28} />,
              title: "Secure Ecosystem",
              desc: "Built with transparency and powerful Base Chain infrastructure.",
            },
            {
              icon: <Flame size={28} />,
              title: "Deflationary Energy",
              desc: "Driven by strong community momentum and token burn mechanics.",
            },
            {
              icon: <Coins size={28} />,
              title: "Premium Branding",
              desc: "Dark cult-inspired identity combined with elite Web3 aesthetics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section
        id="tokenomics"
        className="max-w-7xl mx-auto px-6 pb-28"
      >
        <div className="rounded-[40px] border border-red-500/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-red-400 font-semibold mb-2">
                TOKENOMICS
              </p>

              <h2 className="text-5xl font-black">
                Built For Long Term Growth
              </h2>
            </div>

            <button className="px-6 py-4 rounded-2xl border border-white/10 bg-black/40 hover:bg-white/10 transition">
              Read Whitepaper
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {[
              ["Liquidity", "40%"],
              ["Community", "35%"],
              ["Marketing", "15%"],
              ["Development", "10%"],
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl bg-black/40 border border-white/10 p-6"
              >
                <p className="text-zinc-500 text-sm">
                  {item[0]}
                </p>

                <h3 className="text-4xl font-black mt-3">
                  {item[1]}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="rounded-[36px] border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-2xl">
          <p className="text-red-400 font-semibold mb-3">
            CONTRACT ADDRESS
          </p>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <code className="text-zinc-300 break-all">
              0x0000000000000000000000000000000000000000
            </code>

            <button className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-500 transition font-semibold">
              Copy Address
            </button>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section
        id="roadmap"
        className="max-w-7xl mx-auto px-6 pb-32"
      >
        <div className="text-center mb-16">
          <p className="text-red-400 font-semibold mb-3">
            ROADMAP
          </p>

          <h2 className="text-5xl font-black">
            The Rise Of GOATHEX
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            [
              "Phase 1",
              "Website Launch, Branding, Community Building",
            ],
            [
              "Phase 2",
              "DEX Listing, Viral Marketing, Base Chain Expansion",
            ],
            [
              "Phase 3",
              "Ecosystem Growth, NFT Integration, Utility Development",
            ],
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8"
            >
              <div className="text-red-400 text-sm font-semibold mb-4">
                {item[0]}
              </div>

              <h3 className="text-2xl font-bold leading-relaxed">
                {item[1]}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm">
        © 2026 GOATHEX • Built On Base Chain • Rule The Shadows
      </footer>
    </main>
  );
}