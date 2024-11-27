import React from 'react'
import styles from './HeroStyles.module.css'
import NithishPro2 from '../../assets/NithishPro2.png'
import Nithish from '../../assets/Nithish.png'

import themeIcon1 from '../../assets/sun.svg';
import themeIcon2 from '../../assets/moon.svg'

import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import NithishMca from '../../assets/NithishMca .pdf'
import {useTheme} from '../../common/ThemeContext';

const Hero = () => {
  const {theme, toggleTheme} = useTheme();


  const themeIcon = theme === 'light' ? themeIcon1 : themeIcon2;
  
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const ProfileImg = theme === 'light' ? NithishPro2 : Nithish;
  

  return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
        <img
        className={styles.hero}
        src={ProfileImg}
        alt="Profile Picture of Nithish Baswa"
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        />
      </div>
      <div className={styles.info}>
        <h1>Nithish Baswa
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://x.com/NithishBaswa" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Nithish0011" target="_blank" rel="noopener noreferrer">
             <img src={githubIcon} alt="Github Icon" />  
          </a>
              
          <a href="https://www.linkedin.com/in/nithish-baswa-657459214/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedIcon" /></a>
              
          

        </span>
        <p className={styles.description}>
        committed to creating impactful React web applications for the business landscape
        </p>
        <a href={NithishMca} target="_blank" rel="noopener noreferrer">
          <button className="button" role='button'>
            Resume</button>
        </a>
      </div>  

    </section>
  )
}

export default Hero

