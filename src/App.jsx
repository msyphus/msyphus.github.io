import { useState } from 'react';
import './App.css'
import MyTabs from './MyTabs';
import Footer from './Footer';
import LanguageToggler from './LanguageToggler';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div>
      <div className='header'>
        <img className='profile' src='/profilePic.jpg' alt="Mark's profile picture" />
        <div className='nameDiv'>
          <h1 className='name'>
            Mark Syphus
          </h1>
          <h3 className='title'>
            Full Stack Web Developer
          </h3>
        </div>
        <LanguageToggler
          language={language}
          setLanguage={setLanguage}
        />
      </div>
      <MyTabs />
      <Footer />
    </div>
  )
}

export default App
