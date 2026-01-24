// import { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import gmailIcon from '../../assets/gmailLight.svg';
import githubIcon from '../../assets/github-dark.svg';
import linkedinIcon from '../../assets/linkedin-dark.svg';

// const roles = [
//   'Frontend Developer',
//   'React Developer',
//   'Creative Coder',
//   'UI/UX Designer',
//   'Frontend Web Developer',
// ];

function Hero() {
  // const [text, setText] = useState('');
  // const [roleIndex, setRoleIndex] = useState(0);
  // const [charIndex, setCharIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const current = roles[roleIndex];
  //   let typingSpeed = isDeleting ? 40 : 90;

  //   const timeout = setTimeout(() => {
  //     if (!isDeleting && charIndex < current.length) {
  //       setText(current.substring(0, charIndex + 1));
  //       setCharIndex(charIndex + 1);
  //     } else if (isDeleting && charIndex > 0) {
  //       setText(current.substring(0, charIndex - 1));
  //       setCharIndex(charIndex - 1);
  //     } else if (!isDeleting && charIndex === current.length) {
  //       setTimeout(() => setIsDeleting(true), 1200);
  //     } else if (isDeleting && charIndex === 0) {
  //       setIsDeleting(false);
  //       setRoleIndex((prev) => (prev + 1) % roles.length);
  //     }
  //   }, typingSpeed);

  //   return () => clearTimeout(timeout);
  // }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <p className={styles.hello}>HELLO, I'M</p>

        <h1 className={styles.name}>
          {/* ANEEKA <span>Frontend Developer</span> */}
          <span>ANEEKA</span>
        </h1>

        <h2 className={styles.role}>
          {/* {text} */} Frontend Developer
          {/* <span className={styles.cursor}>|</span> */}
        </h2>

        <p className={styles.description}>
          I craft beautiful, responsive, and high-performance web experiences
          with clean code and intuitive design.
        </p>

        <div className={styles.buttons}>
          <a href="#projects">
            <button className={styles.primary}>View My Work</button>
          </a>
          <a href="#contact">
            <button className={styles.secondary}>Get In Touch</button>
          </a>
        </div>

        <div className={styles.socials}>
          <a href="mailto:aneeka.0026@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Gmail" />
          </a>
          <a href="https://github.com/aneeka026/" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/aneeka-a74166204/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        <p className={styles.scroll}>Scroll Down ↓</p>
      </div>
    </section>
  );
}

export default Hero;
