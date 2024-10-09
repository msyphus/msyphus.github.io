import { Button } from 'react-bootstrap';

function LanguageToggler({
    language,
    setLanguage
}) {

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