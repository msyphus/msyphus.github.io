import { useContext } from 'react';
import { LanguageContext } from "./App";

function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <div className='scrollingDiv'>
            <h4>
                {language === 'en' ? 'Coding Skills Include:  ' : 'Competencias de Programación Incluyen:  '}
            </h4> 
            <p>
                Batch Script, Bootstrap, CSS, DevExtreme, Docker, Express, Git, HTML, Java, JavaScript,
                jQuery, Linux, MySQL, Node, Nginx, R, R Shiny, React, Redux, Sequelize, SQL, SSMS (SQL Server Management Studio), VBA, XML 
            </p>
            <h4 className='pt-3'>
                {language === 'en' ? 'Other Skills Include:  ' : 'Otros Competencias Incluyen:  '}
            </h4> 
            {language === 'en' ?
                <p>
                    Agile (Scrum Master), Auditing, Business Management, Documentation, Lean Six Sigma (Master Black Belt), Manufacturing, Jira,
                    Process Management, Project Management, Quality Management, Science, Statistical Analysis
                </p>
                :
                <p>
                    Agile Scrum Master, Análisis Estadístico, Auditoría, Ciencia, Documentación, Fabricación, Gestión de Calidad, Gestión Empresarial, Gestión de Procesos, Gestión de Proyectos, Jira, Lean Seis Sigma (Maestro Cinturón Negro)
                </p>
            }
        </div>
    )
}

export default Skills