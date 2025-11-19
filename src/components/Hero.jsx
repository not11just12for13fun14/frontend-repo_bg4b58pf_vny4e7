import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector('[data-scroll-start]');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-fuchsia-600/20 via-purple-700/10 to-transparent" />

      {/* Headline */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(217,70,239,0.35)]">
          Neon City
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-violet-200/90">
          Drift through a cyberpunk metropolis. Scroll to cruise the districts, markets, and data streams.
        </p>

        <button onClick={handleScroll} className="mt-10 inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-3 text-fuchsia-100 hover:bg-fuchsia-500/20 hover:border-fuchsia-400/60 transition">
          Enter the City
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.7)_1px,transparent_2px)] bg-[length:100%_3px]" />
    </section>
  );
}
