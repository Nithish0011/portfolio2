import React from "react";
import styles from "./skillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkmarkiconLight from "../../assets/checkmark-light.svg";

import SkillList from "../../common/SkillList";

const Skills = ({ theme }) => {
  const checkMarkIcon =
    theme === "dark" ? checkMarkIconDark : checkmarkiconLight;

  return (
    

    <section id="skills" className={styles.container}><br />

    <h1 className={styles.sectionTitle}>Skills</h1>
    <br />
    <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="Html" />
        <SkillList src={checkMarkIcon} skill="css" />
        <SkillList src={checkMarkIcon} skill="javascript" />
        <SkillList src={checkMarkIcon} skill="python" />
        <SkillList src={checkMarkIcon} skill="MYSQL" />
      </div>
      <hr />
      <div className={styles.SkillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="Agile" />
      </div>
    
    </section>
  );
};

export default Skills;

