import styles from './ProjectCard.module.css';

function ProjectCard({ src, title, type, tech, livelink, codelink }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={src} alt={title} />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{type}</p>

        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.badge}>
              {item}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={livelink}
            target="_blank"
            rel="noreferrer"
            className={styles.linkText}
          >
            Live 
          </a>

          <a
            href={codelink}
            target="_blank"
            rel="noreferrer"
            className={styles.linkText}
          >
            Code 
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
