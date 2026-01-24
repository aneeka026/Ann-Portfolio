import styles from './ContactStyles.module.css';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <p className={styles.topText}>GET IN TOUCH</p>
      <h1 className={styles.title}>Let’s <span>Connect</span></h1>
      <p className={styles.subText}>
        Have a project in mind? I’d love to hear about it. Send me a message and let’s create something amazing together.
      </p>

      <div className={styles.contactGrid}>

        <div className={styles.left}>
          <h3>Contact Information</h3>

          <div className={styles.infoCard}>
            <Mail /> <span>aneeka.0026@gmail.com</span>
          </div>
          <div className={styles.infoCard}>
            <MapPin /> <span>New Delhi, India</span>
          </div>
          <div className={styles.infoCard}>
            <Phone /> <span>+91 70327 77727</span>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.row}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <textarea placeholder="Your Message" required></textarea>

          <button className={styles.submitBtn} type="submit">
            Send Message <Send size={18}/>
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
