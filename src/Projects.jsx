import { projects } from './ProjectsData.json';
import ProjectCard from './ProjectCard';

function Projects() {
    const sortedProjects = projects.sort((a, b) => a.id < b.id ? 1 : -1)

    return (
        <div className='contentContainer'>
            {sortedProjects.map(e => {
                return (
                    <ProjectCard
                        key={e.id}   
                        projID={e.id} 
                        projImg={e.image}
                        projText={e.shortDesc}
                        projTitle={e.title}
                    />
                )
            })}
        </div>
    )
}

export default Projects