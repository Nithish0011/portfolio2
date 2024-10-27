import React from 'react'
import styles from './ProjectsStyles.module.css';
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';
import fitlift from '../../assets/fitlift.png'
import datapoison from '../../assets/DataPoisoning.png'
import website from '../../assets/webBlock.png'
import DocLog from '../../assets/DocLogo.png'
import Todo from '../../assets/TodoPro.png'
import port from '../../assets/profolio.png'



const Projects = () => {
  return (
    <section id="projects" className={StyleSheet.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={StyleSheet.projectsContainer}>
          <div className={styles.scroller}>

        
          
        <ProjectCard 
        src={port}
        link='https://github.com/Nithish0011/data-poisoning'
        h3 = "Portfolio "
        p = ""
        />

<ProjectCard 
        src={datapoison}
        link='https://careers.cognizant.com/india-en/'
        h3 = "Data poisoning"
        p = ""
        />     

        

       <ProjectCard 
        src={DocLog}
        link='https://www.imdb.com/name/nm1333687/'
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
        src={Todo}
        link='https://www.appbrewery.co/p/web-development-course-resources/'
        h3 = "Todo"
        p = "Daily Tasks"
        /> 
          </div>
            
                  
        </div>

    </section>
  )
}

export default Projects