import Reveal from '../common/Reveal';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React.js', level: 70 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'Bootstrap', level: 50 },
  { name: 'Git / GitHub', level: 60 },
  { name: 'UI/UX Design', level: 70 },
  { name: 'Figma', level: 73 },
  { name: 'REST APIs', level: 65 },
  { name: 'React Native', level: 20 },
  { name: 'Angular', level: 30 },
];

const strengths = ['Reusable React Components', 'Responsive Web Design', 'REST API Integration', 'Figma to React'];

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-teal-300">ABOUT ME</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Crafting Digital <span className="bg-linear-to-r from-teal-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Experiences</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              <p className="text-slate-300">
                I am a Frontend Developer with 1+ year of hands-on experience building responsive, production-grade web applications using React.js, JavaScript (ES6+), HTML5, and CSS3.
              </p>
              <p>
                Currently, I work as a Frontend Developer at NetCreativeMind Solutions, where I develop responsive React.js interfaces and reusable UI components. I have worked on the APSTS Bus Ticket Booking System and developed a responsive Template Builder Dashboard with an interactive user interface.
              </p>
              <p>
                Previously, I worked as a Frontend Developer Intern at HackElite and as a Web Developer Intern at Zentrok. My experience includes building dashboards and client interfaces, integrating REST APIs, converting Figma designs into reusable React components, and creating responsive web applications.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-slate-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:bg-teal-300/6 hover:text-teal-100"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="mr-2 text-teal-300">✦</span>{item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">Technical Skills</h3>
                <span className="rounded-full border border-teal-300/15 bg-teal-300/6 px-3 py-1 text-xs text-teal-200">Core stack</span>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-300 sm:text-sm">
                      <span>{skill.name}</span>
                      <span className="text-teal-200">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800/80">
                      <div
                        className="relative h-full rounded-full bg-linear-to-r from-teal-300 via-cyan-300 to-indigo-400 transition-[width] duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, transitionDelay: `${index * 65}ms` }}
                      >
                        <span className="absolute inset-y-0 left-0 w-16 bg-white/20 blur-sm animate-[shimmer_2.5s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
