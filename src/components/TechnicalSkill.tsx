const TechnicalSkills = () => {
    const technical_skills: string[] = [
        "Experience in working in the agile and waterfall methodologies.",
        "Experience with selenium webdriver with Java, TestNG, XPath, POM, CSS.",
        "Worked on MySql and redis databases.",
        "Worked on Tomcat and JBoss wildfly servers",
        "Experience in Performance Testing and Load Testing using Jmeter",
        "Experince in using linux systems and maintaing test environments.",
        "Good kowledged and experience in linux commands.",
        "Good knowledge on Javascript, Typecript, Cucumber, Gerkhin",
        "tools/utilities: Visual studio, IntelliJ IDEA, MySQL workbench, Postman, JMeter, OxygenXML.",
    ]
    return(
        <div className="tech_skills_container">
            <h2 className="tech_skill_header"> Technical Skiills</h2>
            <ul className="tech_skill_container">
                {technical_skills.map( (tech_skill, index) => {
                    return(
                        <li key={index} className="tech_skill">{tech_skill}</li>
                    )
                })}
            </ul>
        </div>
    )

}

export default TechnicalSkills;