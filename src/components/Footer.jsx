export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-violet-200/70 text-sm">© {new Date().getFullYear()} Neon City — cruise safe.</p>
        <div className="flex items-center gap-3">
          <a href="#districts" className="text-fuchsia-300 hover:text-white text-sm">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
