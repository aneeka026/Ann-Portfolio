import ProjectCard from '../common/ProjectCard';
import Reveal from '../common/Reveal';
import crypto from '../assets/crypto.png';
import TaskManager from '../assets/TaskManager.png';
import planner from '../assets/planner.png';
import act from '../assets/act.png';
import ise from '../assets/ise.png';
import portfolioimg from '../assets/portfolioimg.png';

const projects = [
  {
    src: crypto,
    title: 'Crypto Price Tracker',
    type: 'Web App',
    tech: ['React', 'JavaScript', 'CSS', 'CoinGecko API'],
    livelink: 'https://cryptopricetracks.netlify.app/',
    codelink: 'https://github.com/aneeka026/CryptoTracker-Project',
  },
  {
    src: TaskManager,
    title: 'Task Manager',
    type: 'Web App',
    tech: ['JavaScript', 'CSS', 'HTML'],
    livelink: 'https://tasklist0.netlify.app/',
    codelink: 'https://github.com/aneeka026/Task-Manager',
  },
  {
    src: ise,
    title: 'Image Search Engine',
    type: 'Web Page',
    tech: ['JavaScript', 'Unsplash API', 'HTML', 'CSS'],
    livelink: 'https://imagessearc.netlify.app/',
    codelink: 'https://github.com/aneeka026/imagesearch',
  },
  {
    src: act,
    title: 'Avyukt Core Technologies Website',
    type: 'Web App',
    tech: ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML'],
    livelink: 'https://act-assesment-task.netlify.app/#solutions',
    codelink: 'https://github.com/aneeka026/ACT-assessment-task',
  },
  {
    src: planner,
    title: 'The Happiness Planner',
    type: 'Web App',
    tech: ['React', 'JavaScript', 'CSS', 'HTML'],
    livelink: 'https://happiness-assessment.netlify.app/',
    codelink: 'https://github.com/aneeka026/happiness-plans-assessment',
  },
  {
    src: portfolioimg,
    title: 'Personal Portfolio Website',
    type: 'Web Page',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'HTML'],
    livelink: 'https://anee-portfolio.netlify.app/',
    codelink: 'https://github.com/aneeka026/My-Portfolio/tree/main',
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-teal-300">PORTFOLIO</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of projects showcasing my frontend development, responsive UI, API integration, and React skills.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={(index % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
