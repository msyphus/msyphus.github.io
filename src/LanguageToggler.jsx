import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { LanguageContext } from './App';

function LanguageToggler() {
    const { language, setLanguage } = useContext(LanguageContext);
    
    return (
        <div className='languageToggle'>
            <Button
                onClick={() => language === 'en' ? setLanguage('es') : setLanguage('en')}
            >
                {language === 'en' ? 'Español' : 'English'}
            </Button>
        </div>
    )
}

export default LanguageToggler