import { useContext } from 'react';
import { 
    Button, 
    Modal 
} from 'react-bootstrap';
import { projects } from './ProjectsData.json';
import { LanguageContext } from "./App";

function ProjectModal({
    id,
    showModal,
    setShowModal
}) {
    const { language } = useContext(LanguageContext);
    const data = projects.find(e => e.id === id);

    return(
        <>
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
        >
            <Modal.Header closeButton>
                {language === 'en' ? data.title : data.titulo}
            </Modal.Header>
            <Modal.Body>
                <p>
                    {language === 'en' ? data.longDesc : data.descLarga}
                </p>
                <p>
                    {language === 'en' ? 'Technologies Used: ' : 'Tecnologías Utilizadas: '} {data.techDesc}
                </p>
            </Modal.Body>
            <Modal.Footer>
                {data.deployURL !== 'none' &&
                    <Button href={data.deployURL} target='_blank' rel='noopener noreferrer'>
                        {language === 'en' ? 'View App' : 'Ver Aplicación: '}
                    </Button>
                }
                {data.repoURL !== 'none' &&
                    <Button href={data.repoURL} target='_blank' rel='noopener noreferrer'>
                        {language === 'en' ? 'Repository' : 'Repositorio'}
                    </Button>
                }
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ProjectModal;