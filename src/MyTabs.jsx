import { Tabs, Tab } from "react-bootstrap";
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function MyTabs({
    language
}) {
    
    return (
        <Tabs
            defaultActiveKey={'about'}
            fill
        >
            <Tab 
                eventKey={'about'}
                title={language === 'en' ? 'About Me' : 'Acerca de Mí'}
            >
                <AboutMe 
                    language={language}
                />
            </Tab>
            <Tab 
                eventKey={'projects'}
                title={language === 'en' ? 'Projects' : 'Proyectos'}
            >
                <Projects 
                    language={language}
                />
            </Tab>
            <Tab 
                eventKey={'skills'}
                title={language === 'en' ? 'Skills' : 'Competencias'}
            >
                <Skills 
                    language={language}
                />
            </Tab>
        </Tabs>
    )
}

export default MyTabs