import { ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal';

function ProjectCard({ src, title, type, tech, livelink, codelink, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-teal-300/40 hover:bg-white/5.5 hover:shadow-teal-500/10">
        <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
          <img
            src={src}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-teal-200 backdrop-blur-md">
            {type}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-teal-200">
            {title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-teal-300/10 bg-teal-3006 px-3 py-1 text-xs text-slate-300 transition-colors group-hover:border-teal-300/20 group-hover:text-teal-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={livelink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-400/20"
            >
              Live <ExternalLink size={15} />
            </a>
            <a
              href={codelink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-teal-300/30 hover:text-teal-200"
            >
              Code <Github size={15} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
