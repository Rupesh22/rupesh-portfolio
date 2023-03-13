const Languages = () => {

    type Lang_Data = {
        language: string
        rating: number
    }

    const languages: Lang_Data[] =[
        {
            language: 'English',
            rating: 4
        },
        {
            language: 'Telugu',
            rating: 5
        },
        {
            language: 'Hindi',
            rating: 3
        }
    ]

    return(
        <div className="lang_container">
            <h2 className="lang_header">Langugaes</h2>
            <div className="lang_box">
                {languages.map((lang, index) => {
                    return(
                        <li key={index} className="lang_card"> 
                            {lang.language}
                        </li>
                    )
                })}
            </div>
        </div>
    )
}

export default Languages;