"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GoathexLanding() {
  const [copied, setCopied] = useState(false);

  const contract = "0x1234...GOATHEX";

  const copyAddress = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.15),transparent_60%)]" />

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center relative px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest text-red-500 drop-shadow-[0_0_20px_rgba(255,0,60,0.8)]">
            GOATHEX
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Next-Gen Decentralized Token Built for Hype & Utility
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="px-6 py-3 bg-red-600 rounded-xl shadow-lg hover:scale-105 transition">
              Buy Now
            </button>
            <button className="px-6 py-3 border border-red-500 rounded-xl hover:bg-red-500/20 transition">
              View Chart
            </button>
          </div>
        </motion.div>
      </section>

      {/* LIVE PRICE */}
      <section className="px-6 md:px-20 -mt-24 relative z-20">
        <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Live Price</h2>
            <p className="text-red-400 text-2xl font-semibold">$0.00042</p>
            <p className="text-green-400">+12.4% (24h)</p>
          </div>

          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-400">Volume</p>
            <p>$1,240,000</p>
          </div>

          <div>
            <p className="text-gray-400">Liquidity</p>
            <p>$540,000</p>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="px-6 md:px-20 mt-20">
        <h2 className="text-3xl font-bold mb-6">Tokenomics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl border border-red-500/20">
            <div className="space-y-3">
              <p>Liquidity - 40%</p>
              <p>Marketing - 20%</p>
              <p>Rewards - 25%</p>
              <p>Team - 10%</p>
              <p>Burn - 5%</p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl flex items-center justify-center text-red-400">
            <p className="text-center">
              Pie Chart Visualization Placeholder
            </p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 md:px-20 mt-20">
        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
        <div className="border-l border-red-500/30 pl-6 space-y-8">
          <div>
            <h3 className="text-red-400 font-bold">Phase 1</h3>
            <p>Launch, Website, Community Building</p>
          </div>
          <div>
            <h3 className="text-red-400 font-bold">Phase 2</h3>
            <p>Marketing Push, Listings, Partnerships</p>
          </div>
          <div>
            <h3 className="text-red-400 font-bold">Phase 3</h3>
            <p>Staking, Utility, Ecosystem Expansion</p>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 md:px-20 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Community</h2>
        <div className="flex justify-center gap-6">
          <button className="px-4 py-2 border border-red-500 rounded-xl">X</button>
          <button className="px-4 py-2 border border-red-500 rounded-xl">Telegram</button>
          <button className="px-4 py-2 border border-red-500 rounded-xl">DexScreener</button>
        </div>
      </section>

      {/* CONTRACT */}
      <section className="px-6 md:px-20 mt-20 mb-20">
        <div className="bg-white/5 border border-red-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400">Contract Address</p>
            <p className="font-mono">{contract}</p>
          </div>

          <button
            onClick={copyAddress}
            className="mt-4 md:mt-0 px-5 py-2 bg-red-600 rounded-xl hover:scale-105 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </section>
    </div>
  );
}
