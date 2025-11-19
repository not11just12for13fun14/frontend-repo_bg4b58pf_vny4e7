import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxCity() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Global drift for fog and neon haze
  const fogY = useTransform(scrollYProgress, [0, 1], [0, 400])
  const starsY = useTransform(scrollYProgress, [0, 1], [0, 150])

  // Skyline parallax speeds (far moves least, near moves most)
  const farY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 420])
  const nearY = useTransform(scrollYProgress, [0, 1], [0, 680])

  // Reveal intensity simulating city generating as you scroll
  const reveal = useTransform(scrollYProgress, [0, 0.25, 0.5, 1], [0, 0.45, 0.8, 1])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Stars */}
      <motion.div style={{ y: starsY, opacity: 0.7 }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8) 50%, transparent 51%),\
             radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.6) 50%, transparent 51%),\
             radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.8) 50%, transparent 51%),\
             radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.7) 50%, transparent 51%),\
             radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6) 50%, transparent 51%)',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-fuchsia-900/10 to-black" />
      </motion.div>

      {/* Neon haze */}
      <motion.div style={{ y: fogY, opacity: reveal }} className="absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 blur-3xl" style={{
          background: 'radial-gradient(60% 40% at 50% 110%, rgba(192,38,211,0.18), transparent 60%),\
                       radial-gradient(40% 35% at 20% 90%, rgba(56,189,248,0.12), transparent 60%),\
                       radial-gradient(45% 35% at 80% 85%, rgba(147,51,234,0.15), transparent 60%)'
        }} />
      </motion.div>

      {/* Far skyline silhouette */}
      <motion.div style={{ y: farY, opacity: reveal }} className="absolute inset-x-0 bottom-0 h-[42vh]">
        <div className="absolute inset-0" style={{
          background:
            'linear-gradient(to top, rgba(124,58,237,0.25), transparent 60%),\
             repeating-linear-gradient(90deg, rgba(148,163,184,0.15) 0 1px, transparent 1px 6px)',
          maskImage: 'linear-gradient(to top, black 60%, transparent)'
        }} />
        <div className="absolute bottom-0 inset-x-0" style={{ height: '100%', backgroundImage: skylineStripes(22, 5, 18, '#201a33') }} />
      </motion.div>

      {/* Mid skyline */}
      <motion.div style={{ y: midY, opacity: reveal }} className="absolute inset-x-0 bottom-0 h-[55vh]">
        <div className="absolute bottom-0 inset-x-0" style={{ height: '100%', backgroundImage: skylineStripes(16, 8, 22, '#261d3d') }} />
        <div className="absolute inset-0" style={{
          background:
            'linear-gradient(to top, rgba(217,70,239,0.25), transparent 60%),\
             radial-gradient(30% 60% at 70% 80%, rgba(99,102,241,0.25), transparent 60%)',
          maskImage: 'linear-gradient(to top, black 70%, transparent)'
        }} />
      </motion.div>

      {/* Near skyline with windows */}
      <motion.div style={{ y: nearY, opacity: reveal }} className="absolute inset-x-0 bottom-0 h-[70vh]">
        <div className="absolute bottom-0 inset-x-0" style={{ height: '100%', backgroundImage: skylineStripes(12, 12, 28, '#2b2146') }} />
        {/* Windows layer */}
        <div className="absolute inset-x-0 bottom-0 h-full opacity-70 mix-blend-screen" style={{
          backgroundImage: windowsGrid(),
          backgroundSize: '12px 12px, 12px 12px',
          maskImage: 'linear-gradient(to top, black 75%, transparent)'
        }} />
        {/* Ground glow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[140%] h-24 rounded-[50%] blur-3xl opacity-60 bg-[radial-gradient(closest-side,rgba(217,70,239,0.35),transparent_70%)]" />
      </motion.div>

      {/* Horizon fog */}
      <motion.div style={{ opacity: reveal }} className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-violet-950/70 to-transparent" />
    </div>
  )
}

// Helpers to procedurally draw blocky skylines using CSS gradients.
function skylineStripes(columns = 16, minW = 6, maxW = 24, color = '#241b39') {
  const segments = []
  for (let i = 0; i < columns; i++) {
    const w = Math.floor(minW + Math.random() * (maxW - minW))
    const x = (i / columns) * 100
    const h = 20 + Math.random() * 80
    segments.push(`linear-gradient(${color} ${h}%, transparent ${h+0.1}%) ${x}% 100% / ${w}px 100% no-repeat`)
  }
  return segments.join(',')
}

function windowsGrid() {
  const on = 'rgba(236,72,153,0.9)'
  const off = 'rgba(147,51,234,0.35)'
  return `
    repeating-linear-gradient(90deg, ${on} 0 1px, transparent 1px 12px),
    repeating-linear-gradient(180deg, ${off} 0 1px, transparent 1px 12px)
  `
}
