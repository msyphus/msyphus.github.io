import { useContext } from "react";
import { LanguageContext } from "./App";

function Footer() {
    const { language } = useContext(LanguageContext);

    return (
        <div className='footer'>
            {language === 'en' ? 'Updated October 9, 2024' : 'Actualizado el 9 de Octubre, 2024'}
        </div>
    )
}

export default Footer