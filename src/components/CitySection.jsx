import { motion } from 'framer-motion';
import { Building2, Cpu, Radio, Shield, ShoppingBag, Zap } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function CitySection({ id, icon: Icon, title, blurb, badge, gradient }) {
  return (
    <section id={id} data-scroll-start className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-0">
        <div className={`absolute inset-0 opacity-40 blur-3xl ${gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_120%,rgba(168,85,247,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
        >
          <div className="flex items-center gap-3 text-fuchsia-300">
            <Icon className="h-6 w-6" />
            <span className="text-xs tracking-widest uppercase">{badge}</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="mt-4 text-violet-200/90 text-lg max-w-2xl">{blurb}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <div className="flex items-center gap-3 text-fuchsia-200">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm">Sub-sector {i + 1}</span>
                </div>
                <p className="mt-2 text-sm text-violet-200/80">
                  Data streams hum beneath neon signs. Market drones negotiate micro-trades as rain hits chrome.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const sections = [
  {
    id: 'districts',
    icon: Building2,
    title: 'Neon Districts',
    blurb: 'Navigate towering spires and luminous alleys where every advert is an AI whisper.',
    badge: 'Sector 01',
    gradient: 'bg-gradient-to-b from-fuchsia-600/20 via-purple-700/10 to-transparent',
  },
  {
    id: 'markets',
    icon: ShoppingBag,
    title: 'Chromemarkets',
    blurb: 'Arcades of synthware and bio-mods, bartered in flashes of crypto and code.',
    badge: 'Sector 02',
    gradient: 'bg-gradient-to-b from-cyan-500/20 via-blue-700/10 to-transparent',
  },
  {
    id: 'datastreams',
    icon: Radio,
    title: 'Data Streams',
    blurb: 'Fiber rivers that crackle with secrets. Ride the packets between realities.',
    badge: 'Sector 03',
    gradient: 'bg-gradient-to-b from-violet-600/20 via-indigo-700/10 to-transparent',
  },
  {
    id: 'blackice',
    icon: Shield,
    title: 'Black ICE',
    blurb: 'Security constructs prowl the grid. Only the bold skim the edge.',
    badge: 'Sector 04',
    gradient: 'bg-gradient-to-b from-rose-600/20 via-pink-700/10 to-transparent',
  },
  {
    id: 'cores',
    icon: Cpu,
    title: 'Quantum Cores',
    blurb: 'Entangled minds compute the city’s pulse. Time splits and recombines in the towers.',
    badge: 'Sector 05',
    gradient: 'bg-gradient-to-b from-emerald-600/20 via-green-700/10 to-transparent',
  },
];
