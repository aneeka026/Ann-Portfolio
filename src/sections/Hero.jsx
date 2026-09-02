import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Frontend Developer', 'React Developer', 'Creative Coder', 'UI/UX Designer', 'Web Developer'];

function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 1100);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const socialLinks = [
    { href: 'mailto:aneeka.0026@gmail.com', label: 'Email', icon: Mail },
    { href: 'https://github.com/aneeka026/', label: 'GitHub', icon: Github },
    { href: 'https://www.linkedin.com/in/aneeka-a74166204/', label: 'LinkedIn', icon: Linkedin },
  ];

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-5 pb-16 pt-32 sm:px-8">
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/15 bg-teal-300/6 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-teal-200 opacity-0 animate-[fadeIn_.7s_ease-out_.1s_forwards]">
          <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,.8)]" />
          HELLO, I&apos;M
        </div>

        <h1 className="font-display text-5xl font-black tracking-tight text-white opacity-0 animate-[fadeIn_.8s_ease-out_.2s_forwards] sm:text-6xl md:text-7xl lg:text-8xl">
          ANEEKA
        </h1>

        <div className="mx-auto mt-5 min-h-10 opacity-0 animate-[fadeIn_.8s_ease-out_.3s_forwards]">
          <h2 className="text-xl font-semibold text-slate-300 sm:text-2xl md:text-3xl">
            <span className="bg-linear-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="ml-1 text-teal-300 animate-[blink_1s_infinite]">|</span>
          </h2>
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 opacity-0 animate-[fadeIn_.8s_ease-out_.4s_forwards] sm:text-lg">
          I turn ideas into clean, responsive, and engaging web experiences with modern frontend technologies and thoughtful UI design.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 opacity-0 animate-[fadeIn_.8s_ease-out_.5s_forwards] sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-teal-300 to-cyan-300 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-teal-500/15 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/25 sm:w-auto"
          >
            View My Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/4 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-teal-300/[0.07] hover:text-teal-200 sm:w-auto"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-9 flex justify-center gap-3 opacity-0 animate-[fadeIn_.8s_ease-out_.6s_forwards]">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              className="group grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/4 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-teal-300/8 hover:text-teal-200"
            >
              <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        <a href="#about" aria-label="Scroll to about" className="mt-12 inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition hover:text-teal-200">
          Scroll
          <ArrowDown size={18} className="animate-[float_1.8s_ease-in-out_infinite]" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
