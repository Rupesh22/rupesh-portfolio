import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Interests from '@/components/Interests';
import Languages from '@/components/Languages';
import Skills from '@/components/Skills';
import TechnicalSkills from '@/components/TechnicalSkill';
import Head from 'next/head';

type Data = {
    name: string,
    title: string
}

const CV = ({data}:{data: Data}) => {
    return(
        <div className="cv" id="cv">
            <Head>
                <title>Rupesh's CV</title>
                <meta name="description" content="Rupesh's portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className="cv_container">
                <div className="cv_header">
                    <div>
                        <h1>Rupesh kumar</h1>
                        <h3>Software Engineer</h3>
                    </div>
                    <Contact />
                </div>
                <Skills />
                <TechnicalSkills />
                <Experience />
                <Education />
                <Certifications />
                <Languages />
                <Interests />
            </main>
        </div>
    )
}

export default CV;
