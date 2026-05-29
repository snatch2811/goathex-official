"use client";

import { motion } from "framer-motion";
import { Flame, Coins, Skull } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <nav className="flex items-center justify-between p-6 border-b border-white/10">
        <h1 className="text-2xl font-black tracking-[0.3em]">
          GOATHEX
        </h1>

        <button className="px-5 py-2 rounded-full bg-white text-black font-bold">
          Buy $GHEX
        </button>
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
              <Skull size={80} />
            </div>
          </div>

          <h1 className="text-7xl font-black tracking-[0.2em]">
            GOATHEX
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
            Born from chaos. Forged in darkness.
            GOATHEX is a premium cult-themed meme token.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold">
              Join The Cult
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20">
              View Chart
            </button>
          </div>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 pb-24">
        {[
          {
            icon: <Coins />,
            title: "Market Cap",
            value: "$6,666,666",
          },
          {
            icon: <Flame />,
            title: "Burned",
            value: "42%",
          },
          {
            icon: <Skull />,
            title: "Cult Members",
            value: "13,337",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="mb-4 text-zinc-300">
              {item.icon}
            </div>

            <h2 className="text-zinc-400 text-sm uppercase tracking-widest">
              {item.title}
            </h2>

            <p className="mt-2 text-4xl font-black">
              {item.value}
            </p>
          </motion.div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 GOATHEX — Rule The Shadows
      </footer>
    </main>
  );
}