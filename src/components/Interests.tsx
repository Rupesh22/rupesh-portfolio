const Interests = () => {
    
    const interests : string[] = [
        'Playing Cricket',
        'Tennins',
        'Chess',
        'Music',
    ]

    return(
        <div className="interests_container">
            <h2 className="interests_header">Interests</h2>
            <div className="interests_box">
                {interests.map((interest, index) => {
                    return(
                        <li key={index} className="interest_card">
                            {interest}
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Interests;