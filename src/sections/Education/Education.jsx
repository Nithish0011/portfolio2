import React from 'react';
import style from './EducationStyle.module.css'



const educationData = [
  {
    institution: "Kakatiya University",
    degree: "Master of Computer Applications",
    year: "2022 - 2024",
    result:"",
  },
  {
    institution: "A v v Degree and Pg college",
    degree: "Bachelor of Science(computer)",
    year: "2018 - 2021",
    result:"https://drive.google.com/file/d/1N0XLqP6VGDorAu72vXOv0XqGNXhcnhP5/view?usp=sharing",
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
      <ul className="list-disc pl-5">
        {educationData.map((edu, index) => (
          <li key={index} className="mb-3">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
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