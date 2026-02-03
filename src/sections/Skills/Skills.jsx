import styles from "./SkillsStyles.module.css";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdApi } from "react-icons/md";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <p className={styles.tag}>WHAT I DO</p>
      <h2 className={styles.title}>
        Skills & <span>Technologies</span>
      </h2>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>3+</h3>
          <p>Months Internship</p>
        </div>
        <div className={styles.statCard}>
          <h3>3+</h3>
          <p>Real Projects</p>
        </div>
        <div className={styles.statCard}>
          <h3>2+</h3>
          <p>Live Websites</p>
        </div>
        <div className={styles.statCard}>
          <h3>5K+</h3>
          <p>Lines of Code</p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.box}>
          <h4>Frontend</h4>
          <ul>
            <li><FaReact/> React.js</li>
            <li><IoLogoJavascript/> JavaScript</li>
            <li><FaCss3Alt/> CSS3</li>
            <li><FaHtml5/> HTML5</li>
            <li><FaBootstrap/> Bootstrap</li>
          </ul>
        </div>

        <div className={styles.box}>
          <h4>Backend</h4>
          <ul>
            <li><MdApi/> REST API Integration</li>
          </ul>
        </div>

        <div className={styles.box}>
          <h4>Tools & Others</h4>
          <ul>
            <li><FaGitAlt/> Git & GitHub</li>
            <li><SiFigma/> Figma</li>
            <li><VscCode/> VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
