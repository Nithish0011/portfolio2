import React from 'react';
import style from './EducationStyle.module.css'



const educationData = [
  {
    institution: "Kakatiya University",
    degree: "Master of Computer Applications",
    year: "2022 - 2024",
    result:"https://drive.google.com/file/d/1B_eGkjaLHsUpIEl4AeAU1P6GNXwHqIfc/view?usp=sharing",
  },
  {
    institution: "A v v Degree and Pg college",
    degree: "Bachelor of Science(computer)",
    year: "2018 - 2021",
    result:"https://drive.google.com/file/d/1slF7sT0abQpnlINWJQvZJoZCGLhAk4p3/view?usp=sharing",
  },
  {
    institution: "JVS sri chaitanya junior college",
    degree: "intermediate",
    year: "2016 - 2018",
    result:"https://drive.google.com/file/d/1N0XLqP6VGDorAu72vXOv0XqGNXhcnhP5/view?usp=sharing",
  },
  
  {
    institution: "Lal bahadur High School",
    degree: "SSC",
    year: "2016",
    result:"https://drive.google.com/file/d/1cfFP-6OAVLT_w1mBW_sPGweQJ0rhjSYq/view?usp=sharing",
  },
  
  
];

const Education = () => {
  return (
    <section className={StyleSheet.sectionTitle}>
      <h1>Education</h1>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
            {edu.result && (
              <button>
                <a href={edu.result} target="_blank" rel="noopener noreferrer" className="result">
                View Results</a>
              </button>
              
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;