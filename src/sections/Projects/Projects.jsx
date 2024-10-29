import React from 'react'
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import website from '../../assets/webBlock.png'
import DocLog from '../../assets/DocLogo.png'
import Todo from '../../assets/TodoPro.png'
import port from '../../assets/profolio.png'
import data from '../../assets/data-protection.png'
import gen from '../../assets/computer-password.png'


const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <div className={styles.scroller}>

        
          
        <ProjectCard 
        src={port}
        link='https://github.com/Nithish0011/data-poisoning'
        h3 = "Portfolio "
        p = ""
        />

       <ProjectCard 
        src={data}
        link='https://github.com/Nithish0011/DataPoison'
        h3 = "Poison Detection"
        p = "Detecting Data Poison in AI Models"
        />     

        

       <ProjectCard 
        src={DocLog}
        link='https://github.com/Nithish0011/Dwakana'
        h3 = "Dawakana"
        p = "Doctor Appointment App"
        />    

        <ProjectCard 
        src={website}
        link='https://github.com/Nithish0011/webBlocker'
        h3 = "Website Blocker"
        p = "Child control"
        /> 

        <ProjectCard 
        src={gen}
        link='https://www.appbrewery.co/p/web-development-course-resources/'
        h3 = "Password Generator"
        p = ""
        /> 
          </div>
            
                  
        </div>

    </section>
  )
}

export default Projects