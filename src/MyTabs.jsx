import { useContext } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import { LanguageContext } from "./App";

function MyTabs() {
    const { language } = useContext(LanguageContext);

    return (
        <Tabs
            defaultActiveKey={'about'}
            fill
        >
            <Tab 
                eventKey={'about'}
                title={language === 'en' ? 'About Me' : 'Acerca de Mí'}
            >
                <AboutMe />
            </Tab>
            <Tab 
                eventKey={'projects'}
                title={language === 'en' ? 'Projects' : 'Proyectos'}
            >
                <Projects />
            </Tab>
            <Tab 
                eventKey={'skills'}
                title={language === 'en' ? 'Skills' : 'Competencias'}
            >
                <Skills />
            </Tab>
        </Tabs>
    )
}

export default MyTabs