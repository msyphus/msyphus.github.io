import { 
    Button, 
    Modal 
} from 'react-bootstrap';
import { projects } from './ProjectsData.json';

function ProjectModal({
    id,
    showModal,
    setShowModal
}) {
    const data = projects.find(e => e.id === id);

    return(
        <>
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
        >
            <Modal.Header closeButton>
                {data.title}
            </Modal.Header>
            <Modal.Body>
                <p>
                    {data.longDesc}
                </p>
                <p>
                    Technologies Used: {data.techDesc}
                </p>
            </Modal.Body>
            <Modal.Footer>
                {data.deployURL !== 'none' &&
                    <Button href={data.deployURL}>
                        View App
                    </Button>
                }
                {data.repoURL !== 'none' &&
                    <Button href={data.repoURL}>
                        Repository
                    </Button>
                }
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ProjectModal;