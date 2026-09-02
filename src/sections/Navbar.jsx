import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import CV from '../assets/Aneeka_resume.pdf';

const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${scrolled
          ? 'border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20 backdrop-blur-xl'
          : 'border-white/6 bg-slate-950/45 backdrop-blur-md'
          }`}
      >
        <a href="#hero" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-teal-300 to-cyan-400 font-display text-xl font-black text-slate-950 shadow-lg shadow-teal-500/20 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
            A
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-slate-200 sm:inline">Aneeka</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/6 hover:text-teal-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={CV}
            download
            className="hidden items-center gap-2 rounded-xl border border-teal-300/20 bg-teal-300/8 px-4 py-2 text-sm font-semibold text-teal-200 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-300 hover:text-slate-950 sm:inline-flex"
          >
            <Download size={16} /> Download CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-teal-200 transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <div
          className={`absolute left-4 right-4 top-[calc(100%+0.55rem)] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
            }`}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-teal-200"
            >
              {link}
            </a>
          ))}
          <a
            href={CV}
            download
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3 text-sm font-bold text-slate-950 sm:hidden"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
