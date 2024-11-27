import React, { useRef }from 'react';
import styles from './ContactStyle.module.css'; // Assuming you are using CSS Modules
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q8ei22k', 'template_ubt6rna', form.current,'sdferGFhz1n0Mzidc')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('failed try again')
        },
      );
  };


  return (
    <section>
      <h1>Contact</h1><br />
      <form ref={form}onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="user_name" id="name" placeholder='Name' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="user_email" id="email" placeholder='Email' required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Message' 
            required 
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;