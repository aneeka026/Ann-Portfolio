import styles from "./About.module.css";

const skills = [
  { name: "HTML", level: 75 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 65 },
  { name: "React.js", level: 62 },
  // { name: "Bootstrap", level: 65 },
  { name: "Figma to Code", level: 40 },
  { name: "REST API", level: 60 },
  { name: "Git / GitHub", level: 60 }
];

function About() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.tag}>ABOUT ME</p>

      <h2 className={styles.title}>
        Crafting Digital <span>Experiences</span>
      </h2>

      <div className={styles.grid}>

        <div className={styles.left}>
          <p className={styles.intro}>
            I am a Frontend Developer with hands-on internship experience in building
            modern, responsive, and user-friendly web applications using React.js,
            JavaScript (ES6+), HTML5, and CSS3. I have worked on real-world dashboards,
            admin panels, and multi-page client interfaces used in production
            environments.
          </p>

          <p>
            During my internship, I worked on converting Figma designs into
            clean code, integrating REST APIs, and building real-world UI
            components. I am eager to learn new technologies and grow as a web
            developer.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>Clean & Maintainable Code</div>
            <div className={styles.card}>Pixel Perfect UI</div>
            <div className={styles.card}>REST API Integration</div>
            <div className={styles.card}>Git/GitHub Collaboration</div>
          </div>
        </div>

        <div className={styles.right}>
          <h3>Technical Skills</h3>

          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillTop}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;