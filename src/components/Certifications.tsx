const Certifications = () => {
    type certificationType = {
        courseName: string,
        issuedBy: string,
        issuedDate?: Date,
        credentialId?: string
    }

    const certifications: certificationType[] = [{
        courseName: 'M001: MongoDB Basics',
        issuedBy: 'MongoDB',
        credentialId: 'MDBf42wxn1l0s'
    }]

    return (
        <div className="cert_container">
            <div>
                <h2 className="cert_header">Certifications</h2>
                {certifications.map((cert, index) => {
                    return (
                        <li className="cert_box" key={index}>
                            <div>
                                <span className="small_heading">Certification: </span>{cert.courseName}
                            </div>
                            <div>
                                <span className="small_heading">Issued by: </span>
                                {cert.issuedBy}
                            </div>
                            <div>
                                <span className="small_heading">Credential Id: </span> 
                                <a href="https://learn.mongodb.com/c/vwVzwk_jXs2TZnuH5q3eXw">{cert.credentialId}</a>
                            </div>
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications;