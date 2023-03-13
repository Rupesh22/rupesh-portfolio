const Experience = () => {
    interface Experiences {
        company: string,
        title: string,
        location: string,
        isPresentCompany: boolean,
        fromDate: Date,
        toDate?: Date,
        roles_responsibilities: string[]
    }

    const experiences: Experiences[] =[{
            company: 'Synchronoss Technologies',
            title: 'Software Engineer',
            location: 'Bangalore',
            isPresentCompany: true,
            fromDate: new Date('2021-10-01'),
            roles_responsibilities: [
                "Worked on multiple TP packages in the INOW project to support different clients",
                "Handled Automation of Test cases using selenium webdriver with java and TestNG",
                "Engaged in daily scrums, sprint planning, sprint retrospective, sprint review/demo meetings",
                "Worked with cross platform teams to make sure that E2E flow is working as expected for aretha to celine migration",
                "Developed JSON Validator tool from swagger yml schema",
            ]
        },
        {
            company: 'Huawei Technologies (Payroll company: Ionidea interactive ltd.)',
            title: 'Associate Software Engineer',
            location: 'Bangalore',
            isPresentCompany: false,
            fromDate: new Date('2018-10-18'),
            toDate: new Date('2021-09-30'),
            roles_responsibilities: [
                "Prepared Test scenarios and Test Cases for the new requriements.",
                "Tested automation deployment for multiple applications in the project.",
                "Handled Functional, Integration, Regression, E2E, API and Performance Testing.",
                "Handled the Automation suites and was responsible for maintaining the automation suites in the CI.",
                "Tested the performance for the recommendation systems project and helped in finding the critical issues.",
                "Supported SRE team to deploy the released version in 3 different regions.",
                "Worked on the solutions for LB(Nginx) in the production to avoid down time.",
                "Automated acceptance and functional test suites for the recommendations system API. Reviewed and validated the new components to ensure the recommendations are working as expected for different business flows",
                "Prepared test reports for the test completed versions.",
                "Responsible for taking over the wise-marketing project from HQ team.",
                "Understood the architecture and previous features of the project.",
                "Worked on micro services as part of the project.",
                "Found more than 60+ bugs in the project including numerous base defects.",
                "Supported SRE team to deploy the released versions in 3 different regions.",
                "Interacted with developers for debugging and defect analysis.",
                "Automated test cases for wise-marketing project using selenium webdriver with Java and TestNG",
                "Technologies & tools: Java, Tomcat, MySQL, redis, postman, JMeter, Selenium with Java, micro services",
            ]
        }
    ]

    const getFromAndToDate = (from : Date, to: Date|undefined, isPresent: boolean) => {
        const monthNames: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const from_to_date: string = `${monthNames[from.getMonth()]} ${from.getFullYear()} - ${isPresent ? "Present" : `${monthNames[to.getMonth()]} ${to.getFullYear()}`}`
        return from_to_date

    }

    return(
        <div className="experience_container">
            <h2 className="exp_header">Work Experience</h2>
            {experiences.map((experience, index) => {
                return(
                    <li className="exp_container" key={index}> 
                        <div className="exp_title">{experience.title}</div>
                        <div className="exp_company">{experience.company}</div>
                        <div className="from_to_location_contianer">
                            <div className="exp_from_to">{getFromAndToDate(experience.fromDate, experience.toDate, experience.isPresentCompany)}</div>
                            <div className="exp_loaction">{experience.location}</div>
                        </div>
                        
                        <div className="exp_roles">Roles & Responsibilities</div>
                        <ul className="exp_role_container">
                            {experience.roles_responsibilities.map((role, index) => {
                                return(
                                    <li className="exp_role" key={index}>
                                        {role}
                                    </li>)
                                })
                            }
                        </ul>
                    </li>
                )
            })}
        </div>
    )
}

export default Experience;