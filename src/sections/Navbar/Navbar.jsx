import styles from './Navbar.module.css';
import CV from '../../assets/Aneeka_Frontend developer_resume.pdf';
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      
      <div className={styles.logo}>
        <span>A</span>
      </div>

      <div className={`${styles.menuBox} ${open ? styles.show : ''}`} >
        <a href="#hero" onClick={()=>setOpen(false)}>Home</a>
        <a href="#about" onClick={()=>setOpen(false)}>About</a>
        <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
        <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
      </div>

      <div className={styles.right}>
        <a href={CV} download>
          <button className={styles.cvBtn}>Download CV</button>
        </a>

        <div
          className={styles.menuIcon}
          onClick={()=>setOpen(!open)}
        > ☰
        </div>
      </div>

    </nav>
  );
}
export default Navbar;