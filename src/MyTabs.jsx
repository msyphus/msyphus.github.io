import { Tabs, Tab } from "react-bootstrap";
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';

function MyTabs() {
    
    return (
        <Tabs
            defaultActiveKey={'about'}
            fill
        >
            <Tab 
                eventKey={'about'}
                title={'About Me'}
            >
                <AboutMe />
            </Tab>
            <Tab 
                eventKey={'projects'}
                title={'Projects'}
            >
                <Projects />
            </Tab>
            <Tab 
                eventKey={'skills'}
                title={'Skills'}
            >
                <Skills />
            </Tab>
        </Tabs>
    )
}

export default MyTabs