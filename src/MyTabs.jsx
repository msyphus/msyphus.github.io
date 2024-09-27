import { Button } from "react-bootstrap";
import './MyTabs.css';

function MyTabs({
    setSelectedTab
}) {
    
    return (
        <div>
            <Button 
                className='tab'
                onClick={() => setSelectedTab('about')}
            >
                About Me
            </Button>
            <Button 
                className='tab'
                onClick={() => setSelectedTab('projects')}
            >
                Projects
            </Button>
            <Button 
                className='tab'
                onClick={() => setSelectedTab('skills')}
            >
                Skills
            </Button>
            <Button 
                className='tab'
                onClick={() => setSelectedTab('resume')}
            >
                Resume
            </Button>
        </div>
    )
}

export default MyTabs