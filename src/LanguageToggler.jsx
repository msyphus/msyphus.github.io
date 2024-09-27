import { Button } from 'react-bootstrap';

function LanguageToggler({
    language,
    setLanguage
}) {

    return (
        <div style={{
            position: 'absolute',
            top: 5,
            right: 15
        }}>
            <Button
                onClick={() => language === 'en' ? setLanguage('es') : setLanguage('en')}
            >
                {language === 'en' ? 'Español' : 'English'}
            </Button>
        </div>
    )
}

export default LanguageToggler