const Skills = () => {
    const skills= ['Java', 'Selenium', 'TestNG', 'MySQL', 'Functional Testing', 'API Testing', 'Git', 'Postman', 'JMeter', 'Redis', 'Linux', 'Agile', 'Performance Testing', 'Javascript/Typescript', 'HTML', 'CSS', 'Cucumber', 'Gherkin', 'MongoDB']
    return(
        <div className="skills_container">
            <h2 className="skills_header">Skills</h2>
            <div className="skill_box">
                {
                    skills.map( (skill, index) => {
                        return <li className="skill_card" key={index}>{skill}</li>
                    })
                }
            </div>
            
        </div>
    )
}

export default Skills;