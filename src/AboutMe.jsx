import { useContext } from "react";
import { LanguageContext } from "./App";

function AboutMe() {
    const { language } = useContext(LanguageContext);

    return(
        <div className='scrollingDiv'>
            {language === 'en' ?
                <>
                    <p>
                        Bilingual (English/Spanish) Full Stack Web Developer with diverse experience in all aspects of software development
                        coupled with strong background in business management, process engineering, science, and data analytics.  As such, I'm a tech nerd 
                        with people skills!  I know how to document procedures and explain tools in a way non-tech people can understand.  I know 
                        how to make software tools that make business processes more efficient for end users.  I know how to collect, analyze, and 
                        visualize data so that it makes sense and leads managers in making good decisions.  I know how to work with people and computers!
                    </p>
                    <p>
                        I've been a full stack web developer for over 4 years.  Most of this experience has been developing tools for use in 
                        manufacturing facilities.  I've done everything from redesigning the app to improve user experience, optimizing performance of the app, 
                        setting up how the app deploys, migrating the app to new servers, communicating with third-party manufacturing equipment, 
                        generating automated email notifications, maintaining existing features, and creating new features such as real-time production dashboards, 
                        inventory management tools, purchasing requests/ordering systems, project management tools, and production record keeping tools. 
                    </p>
                    <p>
                        Prior to web development, I gained strong coding skills through 8 years of statistics programming and Microsoft VBA. 
                        As a second generation programmer, I got an introduction to coding as a child. After growing up and becoming a 
                        world-class scientist, my R programming skills became a powerful asset in my regular work responsibilities. I also 
                        learned to use Excel VBA to build sophisticated tools to help with management review, data collection, and 
                        automating product quality designation decisions. Throughout my years of management and consulting experience, I kept 
                        seeing a common problem across all companies large and small, no matter the industry: Everyone needs software tools to 
                        perform their jobs but the software tools frequently create severe problems. An operation can only be as efficient as 
                        its software allows it to be. Therefore I now create software with the intent of improving productivity for users, businesses, and developers.
                    </p>
                    <p>
                        Click <a href="/Mark Syphus Resume.pdf" target="_blank" rel="noopener noreferrer">here</a> to download a copy of my current resume.
                    </p>
                </>
            :
                <>
                    <p>
                        Desarrollador de Pila Completa bilingüe (inglés/español) con experiencia diversa en todos los aspectos del desarrollo de software junto con 
                        una sólida experiencia en gestión empresarial, ingeniería de procesos, ciencia y análisis de datos.  Como tal, soy un nerd tecnológico con 
                        habilidades interpersonales!  Sé cómo documentar procesos y explicar herramientas en una manera que puedan entender las personas que no son tecnológicas.  
                        Sé cómo crear herramientas de software que hacen los procesos empresariales más eficientes para los usuarios finales.  Sé cómo recoger, analizar y visualizar 
                        los datos en una manera clara sentido que guíen a los gerentes para tomar buenas decisiones.  Sé cómo trabajar con personas y computadoras!
                    </p>
                    <p>
                        He sido un desarrollador de Pila Completa por más de 4 años.  La mayoría de esta experiencia ha sido el desarrollo de herramientas para 
                        instalaciones de fabricación.  He hecho todo los aspectos de software incluyendo rediseñar la aplicación para mejorar la experiencia del usuario, optimizar el rendimiento de la aplicación, 
                        configuración de la forma en que se despliega la aplicación, migración de la aplicación a nuevos servidores, comunicación con equipos de fabricación de terceros, 
                        generar notificaciones automatizadas por correo electrónico, mantener las funciones existentes y crear nuevas funciones como los tableros de producción en tiempo real, 
                        herramientas de gestión de inventario, sistemas de compra, herramientas de gestión de proyectos y herramientas de mantenimiento de registros de producción. 
                    </p>
                    <p>
                        Antes de mi carrera en el desarrollo de software, adquirí fuertes habilidades de programación a través de 8 años de programación estadística y Microsoft VBA. 
                        Como programador de segunda generación, tuve una introducción a la programación cuando era niño. Después de crecer y convertirse en un 
                        científico de clase mundial, mis habilidades de programación R se convirtió en un activo poderoso en mis responsabilidades laborales regulares. También 
                        aprendí a utilizar Excel VBA para crear herramientas sofisticadas que ayuden la revisión de la gestión, la recogida de datos y 
                        automatización de las decisiones de designación de la calidad del productos. Durante mis años de experiencia en gestión y consultoría, yo frecuentemente 
                        ví un problema común en todas las empresas grandes y pequeñas, sin importar la industria: todo el mundo necesita herramientas de software para 
                        realizar sus tareas, pero las herramientas de software con frecuencia crean problemas graves. Una operación sólo puede ser tan eficiente como 
                        su software permite que sea. Por lo tanto, ahora creo software con la intención de mejorar la productividad para los usuarios, empresas y desarrolladores.
                    </p>
                    <p>
                        Pulse <a href="/Mark Syphus Resume.pdf" target="_blank" rel="noopener noreferrer">aquí</a> para descargar una copia de mi currículum actual.
                    </p>
                </>
            }
        </div>
    )
}

export default AboutMe