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
      
      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-red-500">
            GOATHEX
          </h1>

          <p className="text-gray-400 mt-4">
            Next-Gen Decentralized Token
          </p>
        </motion.div>
      </section>

      {/* LIVE PRICE */}
      <section className="px-6 md:px-20">
        <div className="bg-white/5 p-6 rounded-2xl border border-red-500/20">
          <p className="text-red-400 text-2xl">$0.00042</p>
        </div>
      </section>

    </div>
  );
}