"use client";

import { useMemo, useState } from "react";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TOKEN = {
  name: "GOATHEX",
  ticker: "$GHEX",
  chain: "Base Chain",
  supply: "100,000,000,000",
  contract: "0x5cA22D1bAec4638a10Ef834d3Dba0A700FEe030d",
  twitter: "#",
  telegram: "#",
  discord: "#",
  whitepaper: "#",
  dexscreener: "#",
  basescan:
    "https://basescan.org/address/0x5cA22D1bAec4638a10Ef834d3Dba0A700FEe030d",
};

const tokenomics = [
  { name: "Liquidity", percent: 40, amount: "40,000,000,000" },
  { name: "Community", percent: 35, amount: "35,000,000,000" },
  { name: "Marketing", percent: 15, amount: "15,000,000,000" },
  { name: "Development", percent: 10, amount: "10,000,000,000" },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Awakening",
    items: ["Website Launch", "Brand Identity", "Community Building", "Social Expansion"],
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    items: ["DEX Listing", "Influencer Campaigns", "Base Chain Growth", "Partnership Push"],
  },
  {
    phase: "Phase 3",
    title: "Dominance",
    items: ["Ecosystem Utility", "NFT Integration", "Holder Rewards", "Global Recognition"],
  },
];

function DonutChart() {
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative mx-auto h-72 w-72">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="20"
        />

        {tokenomics.map((item, index) => {
          const dash = (item.percent / 100) * circumference;
          const gap = circumference - dash;
          const currentOffset = offset;
          offset -= dash;

          const colors = [
            "#ff2020",
            "#b91c1c",
            "#7f1d1d",
            "#262626",
          ];

          return (
            <circle
              key={item.name}
              cx="90"
              cy="90"
              r={radius}
              fill="transparent"
              stroke={colors[index]}
              strokeWidth="20"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={currentOffset}
              strokeLinecap="butt"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-red-500/30 bg-black shadow-[0_0_40px_rgba(255,0,0,0.35)]">
          <img src="/logo.png" alt="GOATHEX" className="h-24 w-24 object-contain" />
        </div>
      </div>
    </div>
  );
}

function FakeChart() {
  return (
    <div className="relative h-60 overflow-hidden rounded-3xl border border-red-500/20 bg-black/70">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent" />

      <svg viewBox="0 0 600 260" className="absolute inset-0 h-full w-full">
        <path
          d="M0 230 L40 200 L80 215 L120 160 L160 178 L200 130 L240 150 L280 105 L320 118 L360 90 L400 103 L440 70 L480 80 L520 45 L560 55 L600 20"
          fill="none"
          stroke="#ff2020"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 230 L40 200 L80 215 L120 160 L160 178 L200 130 L240 150 L280 105 L320 118 L360 90 L400 103 L440 70 L480 80 L520 45 L560 55 L600 20 L600 260 L0 260 Z"
          fill="rgba(255,32,32,0.16)"
        />
      </svg>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-zinc-500">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const sparks = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        delay: `${(i * 0.37) % 5}s`,
        duration: `${4 + (i % 5)}s`,
      })),
    []
  );

  const copyContract = async () => {
    await navigator.clipboard.writeText(TOKEN.contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,0,0,0.22),transparent_36%),radial-gradient(circle_at_80%_45%,rgba(120,0,0,0.16),transparent_32%),linear-gradient(to_bottom,#000,#090000,#000)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {sparks.map((spark, index) => (
          <span
            key={index}
            className="absolute bottom-[-20px] h-1 w-1 rounded-full bg-red-500 shadow-[0_0_12px_#ff2020] animate-[spark_6s_linear_infinite]"
            style={{
              left: spark.left,
              animationDelay: spark.delay,
              animationDuration: spark.duration,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes spark {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>

      <nav className="sticky top-0 z-50 border-b border-red-500/20 bg-black/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="GOATHEX" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-xl font-black tracking-[0.25em]">
                GOAT<span className="text-red-500">HEX</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Base Chain Token
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-400 md:flex">
            <a href="#about" className="hover:text-red-400">About</a>
            <a href="#tokenomics" className="hover:text-red-400">Tokenomics</a>
            <a href="#contract" className="hover:text-red-400">Contract</a>
            <a href="#roadmap" className="hover:text-red-400">Roadmap</a>
            <a href="/launch" className="hover:text-red-400">
  Launch Your Token
</a>
          </div>

<div className="flex items-center gap-3">
  <a
    href={TOKEN.twitter}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/40 hover:bg-red-600/20"
  >
    <FaXTwitter size={18} />
  </a>

  <a
    href={TOKEN.telegram}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/40 hover:bg-red-600/20"
  >
    <FaTelegramPlane size={18} />
  </a>

  <a
    href={TOKEN.discord}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/40 hover:bg-red-600/20"
  >
    <FaDiscord size={18} />
  </a>
</div>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative text-center lg:text-left">
          <div className="mb-5 inline-flex rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
            Built on Base Chain • Supply 100B • Ticker {TOKEN.ticker}
          </div>

          <div className="relative mx-auto mb-8 flex max-w-xl justify-center lg:hidden">
            <img
              src="/logo.png"
              alt="GOATHEX"
              className="w-full max-w-md drop-shadow-[0_0_80px_rgba(255,0,0,0.9)]"
            />
          </div>

          <h2 className="text-7xl font-black leading-none tracking-tight text-red-600 drop-shadow-[0_0_35px_rgba(255,0,0,0.55)] md:text-9xl">
            GOATHEX
          </h2>

          <p className="mt-6 text-2xl font-bold text-white">
            The Darkest Meme. The Strongest Community.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
            GOATHEX is a premium dark-themed community token on Base Chain,
            built around strong branding, loyal holders, and underground Web3
            culture.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href={TOKEN.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-600 px-7 py-4 font-black uppercase tracking-wider text-white transition hover:bg-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.5)]"
            >
              Join The Cult
            </a>

            <a
              href={TOKEN.whitepaper}
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-black uppercase tracking-wider text-white transition hover:border-red-500/50 hover:bg-red-500/10"
            >
              Whitepaper
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["Total Supply", "100B"],
              ["Chain", "Base"],
              ["Tax", "0%"],
              ["Liquidity", "Locked"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-red-500/20 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
                <h3 className="mt-2 text-2xl font-black">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="absolute inset-0 rounded-full bg-red-600/20 blur-[90px]" />
          <img
            src="/logo.png"
            alt="GOATHEX"
            className="relative w-full max-w-xl drop-shadow-[0_0_100px_rgba(255,0,0,0.95)]"
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-red-500/25 bg-black/70 p-7 shadow-[0_0_60px_rgba(0,0,0,0.7)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                  {TOKEN.ticker} Price
                </p>
                <h3 className="mt-2 text-5xl font-black">$0.00042</h3>
              </div>
              <div className="rounded-lg border border-green-500/25 bg-green-500/10 px-3 py-2 text-sm font-bold text-green-400">
                +124%
              </div>
            </div>
            <FakeChart />
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Liquidity</p>
                <h4 className="mt-2 text-3xl font-black">$420K</h4>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">Holders</p>
                <h4 className="mt-2 text-3xl font-black">13,337</h4>
              </div>
            </div>
          </div>

          <div id="about" className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {[
              ["Secure & Transparent", "Built with transparency, clear token allocation, and community-first direction."],
              ["Deflationary Energy", "A dark brand identity powered by viral culture, holders, and momentum."],
              ["Premium Branding", "A high-impact visual identity designed to stand out across Base Chain."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition hover:border-red-500/40">
                <h3 className="text-xl font-black uppercase tracking-wide">{title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="relative z-10 mx-auto max-w-7xl px-5 py-24">
  <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/20 to-black p-10 md:p-14">

    <div className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-red-400">
      GOATHEX Launchpad
    </div>

    <h2 className="max-w-4xl text-4xl font-black uppercase md:text-6xl">
      Launch Your Token On Base
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
      GOATHEX Launchpad provides creators and communities with a streamlined
      way to launch tokens on Base using fair launch mechanics and liquidity
      infrastructure powered by Flaunch.
    </p>

    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-red-500/20 bg-black/40 p-5">
        <div className="text-red-500 text-2xl font-black">Base</div>
        <div className="mt-2 text-sm text-zinc-500">
          Built for the Base ecosystem
        </div>
      </div>

      <div className="rounded-2xl border border-red-500/20 bg-black/40 p-5">
        <div className="text-red-500 text-2xl font-black">Fair</div>
        <div className="mt-2 text-sm text-zinc-500">
          Community-first launch model
        </div>
      </div>

      <div className="rounded-2xl border border-red-500/20 bg-black/40 p-5">
        <div className="text-red-500 text-2xl font-black">V4</div>
        <div className="mt-2 text-sm text-zinc-500">
          Uniswap V4 infrastructure
        </div>
      </div>

      <div className="rounded-2xl border border-red-500/20 bg-black/40 p-5">
        <div className="text-red-500 text-2xl font-black">24/7</div>
        <div className="mt-2 text-sm text-zinc-500">
          Launch anytime
        </div>
      </div>
    </div>

    <div className="mt-10">
      <a
        href="/launch"
        className="inline-flex rounded-xl bg-red-600 px-8 py-4 font-black uppercase tracking-wider transition hover:bg-red-500"
      >
        Launch Your Token
      </a>
    </div>

  </div>
</section>
<section className="relative z-10 mx-auto max-w-7xl px-5 py-20">
  <div className="mb-12 text-center">
    <p className="mb-3 font-black uppercase tracking-[0.35em] text-red-500">
      Ecosystem
    </p>

    <h2 className="text-5xl font-black md:text-6xl">
      Built Beyond A Meme Token
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
      GOATHEX is building a Base-powered ecosystem around community, token creation,
      and launchpad infrastructure.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-[30px] border border-red-500/20 bg-white/[0.04] p-8 transition hover:border-red-500/50 hover:bg-red-500/[0.06]">
      <div className="mb-5 text-4xl">🐐</div>
      <h3 className="text-2xl font-black uppercase">GOATHEX Token</h3>
      <p className="mt-4 text-zinc-400">
        The core community asset powering the GOATHEX identity, culture, and ecosystem growth.
      </p>
    </div>

    <div className="rounded-[30px] border border-red-500/20 bg-white/[0.04] p-8 transition hover:border-red-500/50 hover:bg-red-500/[0.06]">
      <div className="mb-5 text-4xl">🚀</div>
      <h3 className="text-2xl font-black uppercase">Launchpad</h3>
      <p className="mt-4 text-zinc-400">
        A creator-focused token launch experience built for Base communities and powered by Flaunch.
      </p>
    </div>

    <div className="rounded-[30px] border border-red-500/20 bg-white/[0.04] p-8 transition hover:border-red-500/50 hover:bg-red-500/[0.06]">
      <div className="mb-5 text-4xl">🛠️</div>
      <h3 className="text-2xl font-black uppercase">Future Tools</h3>
      <p className="mt-4 text-zinc-400">
        Future utilities for builders, holders, and communities launching inside the GOATHEX ecosystem.
      </p>
    </div>
  </div>
</section>
      <section id="tokenomics" className="relative z-10 mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 font-black uppercase tracking-[0.35em] text-red-500">Tokenomics</p>
          <h2 className="text-5xl font-black md:text-6xl">Built For Long Term Growth</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Total Supply: {TOKEN.supply} {TOKEN.ticker}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <DonutChart />

          <div className="space-y-4">
            {tokenomics.map((item) => (
              <div key={item.name} className="grid grid-cols-[70px_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-3xl font-black text-red-400">{item.percent}%</div>
                <div>
                  <h3 className="font-black">{item.name}</h3>
                  <p className="text-sm text-zinc-500">{item.amount} {TOKEN.ticker}</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_#ff2020]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contract" className="relative z-10 mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[32px] border border-red-500/25 bg-red-500/[0.04] p-7">
          <p className="mb-3 font-black uppercase tracking-[0.35em] text-red-500">
            Contract Address
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <code className="break-all rounded-xl bg-black/50 p-4 text-zinc-300">
              {TOKEN.contract}
            </code>
 <div className="flex flex-wrap gap-3">
  <button
    onClick={copyContract}
    className="rounded-xl bg-red-600 px-6 py-4 font-black uppercase tracking-wide transition hover:bg-red-500"
  >
    {copied ? "Copied" : "Copy Contract"}
  </button>
  <a
    href={TOKEN.basescan}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-red-500/50 px-6 py-4 font-black uppercase tracking-wide hover:bg-red-600/20"
  >
    View BaseScan
  </a>
</div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 font-black uppercase tracking-[0.35em] text-red-500">Roadmap</p>
          <h2 className="text-5xl font-black md:text-6xl">The Rise Of GOATHEX</h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-[2px] bg-gradient-to-r from-red-600 via-red-900 to-red-600 md:block" />

          {roadmap.map((phase, index) => (
            <div key={phase.phase} className="relative rounded-[28px] border border-white/10 bg-black/70 p-7 transition hover:border-red-500/40">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl font-black shadow-[0_0_25px_rgba(255,0,0,0.5)]">
                  {index + 1}
                </div>
                <div>
                  <p className="font-black text-red-400">{phase.phase}</p>
                  <h3 className="text-xl font-black">{phase.title}</h3>
                </div>
              </div>

              <ul className="space-y-3 text-zinc-400">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
  <span className="h-2 w-2 rounded-full bg-red-500" />
  {item}
</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[36px] border border-red-500/20 bg-white/[0.04] p-10 text-center">
          <h2 className="text-4xl font-black">Read The GOATHEX Whitepaper</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Discover the vision, tokenomics, roadmap, and long-term direction of the GOATHEX ecosystem.
          </p>
          <a
            href={TOKEN.whitepaper}
            className="mt-7 inline-flex rounded-xl border border-red-500/60 px-7 py-4 font-black uppercase tracking-wide hover:bg-red-600/20"
          >
            Whitepaper TBA
          </a>
        </div>
      </section>
<section id="community" className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
  <div className="rounded-[36px] border border-red-500/20 bg-gradient-to-b from-red-950/20 to-black p-10 text-center">

    <p className="mb-3 font-black uppercase tracking-[0.35em] text-red-500">
      Community
    </p>

    <h2 className="text-4xl font-black md:text-6xl">
      Join The GOATHEX Movement
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
      Build. Launch. Dominate. Connect with the GOATHEX community and become part of the next generation of Base builders.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <a
        href={TOKEN.twitter}
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-white/[0.03] transition hover:border-red-500 hover:bg-red-500/10"
      >
        <FaXTwitter size={28} />
      </a>

      <a
        href={TOKEN.telegram}
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-white/[0.03] transition hover:border-red-500 hover:bg-red-500/10"
      >
        <FaTelegramPlane size={28} />
      </a>

      <a
        href={TOKEN.discord}
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-white/[0.03] transition hover:border-red-500 hover:bg-red-500/10"
      >
        <FaDiscord size={28} />
      </a>
    </div>
  </div>
</section>

      <footer className="relative z-10 border-t border-red-500/20 bg-black/90 px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
  src="/logo.png"
  alt="GOATHEX"
  className="h-24 w-24 object-contain drop-shadow-[0_0_35px_rgba(255,0,0,0.8)]"
/>
            <h3 className="mt-3 text-2xl font-black">GOATHEX</h3>
            <p className="mt-3 max-w-md text-zinc-500">
              A dark premium community token built on Base Chain.
            </p>
          </div>
  <div>
  <h4 className="mb-4 font-black uppercase tracking-wider text-red-400">
    Community
  </h4>

  <div className="flex gap-4">
    <a href={TOKEN.twitter} target="_blank" rel="noopener noreferrer">
      <FaXTwitter size={22} />
    </a>

    <a href={TOKEN.telegram} target="_blank" rel="noopener noreferrer">
      <FaTelegramPlane size={22} />
    </a>

    <a href={TOKEN.discord} target="_blank" rel="noopener noreferrer">
      <FaDiscord size={22} />
    </a>
  </div>
</div>

<div>
  <h4 className="mb-4 font-black uppercase tracking-wider text-red-400">
    Resources
  </h4>

  <div className="space-y-3">
    <a href={TOKEN.basescan} target="_blank" rel="noopener noreferrer" className="block text-zinc-400 hover:text-red-400">
      BaseScan
    </a>

    <a href={TOKEN.dexscreener} target="_blank" rel="noopener noreferrer" className="block text-zinc-400 hover:text-red-400">
      DexScreener
    </a>

    <a href={TOKEN.whitepaper} target="_blank" rel="noopener noreferrer" className="block text-zinc-400 hover:text-red-400">
      Whitepaper
    </a>
  </div>
  </div>
</div>          
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-zinc-600">
          © 2026 GOATHEX • Built On Base Chain • Rule The Shadows
        </div>
      </footer>
    </main>
  );
}