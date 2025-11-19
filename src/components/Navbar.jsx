import { Menu } from 'lucide-react';

export default function Navbar() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-fuchsia-500 shadow-[0_0_12px_3px_rgba(217,70,239,0.8)]" />
          <span className="text-sm font-semibold tracking-wider text-fuchsia-200">Neon City</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-violet-200/80 text-sm">
          {['districts','markets','datastreams','blackice','cores'].map((id) => (
            <button key={id} onClick={() => jump(id)} className="hover:text-white transition">
              {id}
            </button>
          ))}
        </nav>
        <button className="md:hidden text-violet-200">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
