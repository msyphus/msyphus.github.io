import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css'
import MyTabs from './MyTabs';
import Footer from './Footer';
import LanguageToggler from './LanguageToggler';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className='px-3'>
      <Row className='header'>
        <Col>
          <img className='profile' src='/profilePic.jpg' alt="Mark's profile picture" />
        </Col>
        <Col>
          <Row className='titleRow'>
            <h1>Mark Syphus</h1>
          </Row>
          <Row className='text-center'>
            <h3>Full Stack Web Developer</h3>
          </Row>
        </Col>
        <Col>
          <LanguageToggler
            language={language}
            setLanguage={setLanguage}
          />
        </Col>
      </Row>
      <Row>
        <MyTabs />
      </Row>
      <Row>
        <Footer />
      </Row>
    </div>
  )
}

export default App
