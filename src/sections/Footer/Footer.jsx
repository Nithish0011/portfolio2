import styles from './FooterStyle.module.css';
import React from 'react'

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
        <p>
            &copy; 2024 Nithish Baswa. <br/>
            All rights reserved.
        </p>
    </section>
  );
}

export default Footer;