"use client";

export default function LaunchPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="text-red-500 font-bold tracking-[0.3em] uppercase">
          Powered by Flaunch
        </p>

        <h1 className="mt-4 text-7xl font-black uppercase">
          GOATHEX
        </h1>

        <h2 className="text-3xl font-bold text-zinc-300 mt-2">
          Launch Engine
        </h2>

        <p className="mt-6 text-zinc-400">
          Launch Base meme tokens through GOATHEX infrastructure.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-500 px-8 py-4 rounded-xl font-black uppercase">
            Create Token
          </button>

          <button className="border border-red-500 px-8 py-4 rounded-xl font-black uppercase hover:bg-red-600/20">
            View Launches
          </button>
        </div>
      </div>
    </main>
  );
}