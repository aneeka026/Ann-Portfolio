import Reveal from '../common/Reveal';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiFigma, SiTailwindcss } from 'react-icons/si';
import { MdApi, MdDevices } from 'react-icons/md';
import { Palette, Rocket } from 'lucide-react';

const stats = [
  ['1+', 'Year Experience'],
  ['6', 'Featured Projects'],
  ['4+', 'Live Websites'],
  ['3', 'Professional Roles'],
];

const groups = [
  {
    title: 'Frontend',
    items: [
      [FaReact, 'React.js'], [IoLogoJavascript, 'JavaScript'], [FaHtml5, 'HTML5'],
      [FaCss3Alt, 'CSS3'], [SiTailwindcss, 'Tailwind CSS'], [FaBootstrap, 'Bootstrap'],
    ],
  },
  {
    title: 'Web & API',
    items: [[MdApi, 'REST API Integration'], [MdDevices, 'Responsive Web Design'], [Palette, 'UI/UX Design']],
  },
  {
    title: 'Tools & Others',
    items: [[FaGitAlt, 'Git & GitHub'], [SiFigma, 'Figma'], [Rocket, 'Netlify']],
  },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-teal-300">WHAT I DO</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Skills & <span className="bg-linear-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Technologies</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 80}>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-teal-300/30 hover:bg-teal-300/5 sm:p-7">
                <h3 className="font-display text-3xl font-bold text-teal-300 transition-transform duration-300 group-hover:scale-110 sm:text-4xl">{value}</h3>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 90}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-teal-300/25 hover:bg-white/5.5 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.items.map(([Icon, label]) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/6 bg-slate-900/35 px-4 py-3 text-sm text-slate-300 transition duration-300 hover:translate-x-1 hover:border-teal-300/20 hover:bg-teal-300/5 hover:text-teal-100">
                      <Icon className="text-lg text-teal-300" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
