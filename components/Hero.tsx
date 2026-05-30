"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden">

      <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-red-500">
          GOATHEX
        </h1>

        <p className="text-gray-400 mt-4">
          Next Gen DeFi Token
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-red-600 rounded-xl">
            Buy GOATHEX
          </button>
          <button className="px-6 py-3 border border-red-500 rounded-xl">
            View Chart
          </button>
        </div>
      </motion.div>

    </section>
  );
}