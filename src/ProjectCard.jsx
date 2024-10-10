import { useContext } from 'react';
import { 
    Button, 
    Card 
} from 'react-bootstrap';
import { LanguageContext } from "./App";

function ProjectCard({
    projID,
    projImg,
    projText,
    projTexto,
    projTitle,
    projTitulo,
    setModalID,
    setShowModal
}) {
    const { language } = useContext(LanguageContext);

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
                    {language === 'en' ? projTitle : projTitulo}
                </Card.Title>
                <Card.Text>
                    {language === 'en' ? projText : projTexto}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => {
                    setModalID(projID)
                    setShowModal(true)
                }}>
                    {language === 'en' ? 'Learn More' : 'Aprende Más'}
                </Button>
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard;