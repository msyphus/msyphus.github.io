import { useState } from 'react';
import { projects } from './ProjectsData.json';
import { CardGroup } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

function Projects() {
    const [modalID, setModalID] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const sortedProjects = projects.sort((a, b) => a.id < b.id ? 1 : -1)

    return (
        <div className='scrollingDiv'>
            <CardGroup>
                {sortedProjects.map(e => {
                    return (
                        <ProjectCard
                            key={e.id}   
                            projID={e.id} 
                            projImg={e.image}
                            projText={e.shortDesc}
                            projTexto={e.descCorta}
                            projTitle={e.title}
                            projTitulo={e.titulo}
                            setShowModal={setShowModal}
                            setModalID={setModalID}
                        />
                    )
                })}
            </CardGroup>
            <ProjectModal
                id={modalID}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </div>
    )
}

export default Projects