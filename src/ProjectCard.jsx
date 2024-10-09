import { 
    Button, 
    Card 
} from 'react-bootstrap';
import './ProjectCard.css';

function ProjectCard({
    projID,
    projImg,
    projText,
    projTitle,
    setModalID,
    setShowModal
}) {

    return (
        <Card>
            <Card.Img 
                variant='top' 
                src={projImg} 
                width={120} 
                height={100}
            />
            <Card.Body>
                <Card.Title>
                    {projTitle}
                </Card.Title>
                <Card.Text>
                    {projText}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => {
                    setModalID(projID)
                    setShowModal(true)
                }}>
                    Learn More
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard;