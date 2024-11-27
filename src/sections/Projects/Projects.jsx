import React from 'react'
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import website from '../../assets/webBlock.png'
import DocLog from '../../assets/DocLogo.png'
import port from '../../assets/profolio.png'
import emp from '../../assets/employee.png'
import data from '../../assets/data-protection.png'
import gen from '../../assets/TodoPro.png'


const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <div className={styles.scroller}>

        
          
        <ProjectCard 
        src={emp}
        link='https://github.com/Nithish0011/EmployeeManagement'
        h3 = "Employee Management "
        p = "Full stack website"
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
        src={port}
        link='https://github.com/Nithish0011/Form_Generator'
        h3 = "Dynamic form Generator"
        p = ""
        /> 

        
          </div>
            
                  
        </div>

    </section>
  )
}

export default Projects