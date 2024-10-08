import { useState } from 'react';
import { 
    Button, 
    Card 
} from 'react-bootstrap';
import './ProjectCard.css';

function ProjectCard({
    projImg,
    projText,
    projTitle
}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='projectDiv'>
            <Card>
                <Card.Img 
                    variant='top' 
                    src={projImg} 
                    width={'100%'} 
                    height={'150vh'}
                />
                <Card.Body>
                    <Card.Title className={'cardTitle'}>
                        {projTitle}
                    </Card.Title>
                    <Card.Text>
                        {projText}
                    </Card.Text>
                    <Button onClick={() => setShowModal(true)}>
                        Learn More
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;