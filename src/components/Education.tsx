const Education = () => {
    interface Education_Data {
        program: string,
        institution: string,
        place_of_education: string,
        from_year: Date,
        to_year: Date,
        cgpa: string
    }

    const education : Education_Data = {
        program: "Bachelor's Degree in Electornics and communications",
        institution: "GITAM University",
        place_of_education: "Bengaluru",
        from_year: new Date('2014'),
        to_year: new Date('2018'),
        cgpa: "7.36"
    };
    return(
        <div className="edu_container">
            <h2 className="edu_header">Education</h2>
            <div className="edu_box">
                <h3 className="edu_program">{education.program}</h3>
                <div className="from_to_location_contianer">
                    <div>{education.from_year.getFullYear()} - {education.to_year.getFullYear()}</div>  
                    <div className="edu_location"> {education.place_of_education}</div>
                </div>
                <div className="edu_cgpa">CGPA: {education.cgpa}</div>
            </div>
        </div>
    )
}

export default Education;