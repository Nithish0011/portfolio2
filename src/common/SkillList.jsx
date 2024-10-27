function SkillList({ skill , src}) {
  return (
    <span>
      <img src={src} alt="checkmarkiCon" />
      <p>{skill}</p>
    </span>
  )
}

export default SkillList;