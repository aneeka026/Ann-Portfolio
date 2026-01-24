import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import crypto from '../../assets/crypto.png';
// import shopping from '../../assets/shopping.png';
import TaskManager from '../../assets/TaskManager.png';
import planner from '../../assets/planner.png';
import act from '../../assets/act.png';
import ise from '../../assets/ise.png';
import portfolioimg from '../../assets/portfolioimg.png';

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
     <div className={styles.projectscontent}>
      <p className={styles.subtitle}>PORTFOLIO</p>
      <h1 className={styles.title}>Featured Projects</h1>
      <p className={styles.desc}>
        A selection of projects showcasing my frontend skills and UI development.
      </p>

      <div className={styles.projectsGrid}>
        <ProjectCard
          src={crypto}
          title="Crypto Price Tracker"
          type="Web App"
          tech={["React", "JavaScript", "CSS", "CoinGecko API"]}
          livelink="https://cryptopricetracks.netlify.app/"
          codelink="https://github.com/aneeka026/CryptoTracker-Project"
        />
        {/* <ProjectCard
          src={shopping}
          title="Product Explorer"
          type="Web App"
          tech={["React", "JavaScript", "CSS", "FakeStore API"]}
          livelink="https://product-explorer-spa.netlify.app/"
          codelink="https://github.com/aneeka026/Product-explorer"
        /> */}
        <ProjectCard
          src={TaskManager}
          title="Task Manager"
          type="Web App"
          tech={["JavaScript", "CSS", "HTML"]}
          livelink="https://tasklist0.netlify.app/"
          codelink="https://github.com/aneeka026/Task-Manager"
        />
        <ProjectCard
          src={ise}
          title="Image Search Engine"
          type="Web Page"
          tech={["JavaScript", "Unsplash image API", "HTML", "CSS"]}
          livelink="https://imagessearc.netlify.app/"
          codelink="https://github.com/aneeka026/imagesearch"
        />

        <ProjectCard
          src={act}
          title="Avyukt Core Technologies Website"
          type="Web App"
          tech={["React","Bootstrap", "JavaScript", "CSS", "HTML"]}
          livelink="https://act-assesment-task.netlify.app/#solutions"
          codelink="https://github.com/aneeka026/ACT-assessment-task"
        />
        
        <ProjectCard
          src={planner}
          title="The Happiness Planner"
          type="Web App"
          tech={["React", "JavaScript", "CSS", "HTML"]}
          livelink="https://happiness-assessment.netlify.app/"
          codelink="https://github.com/aneeka026/happiness-plans-assessment"
        />

        <ProjectCard
          src={portfolioimg}
          title="Personal Portfolio Website"
          type="Web Page"
          tech={["React", "JavaScript", "CSS", "HTML"]}
          livelink="https://anee-portfolio.netlify.app/"
          codelink="https://github.com/aneeka026/My-Portfolio/tree/main"
        />
        
      </div>
    </div>
    </section>
  );
}

export default Projects;
