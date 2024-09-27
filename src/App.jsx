import { useState } from 'react';
import './App.css'
import MyTabs from './MyTabs';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App() {
  const [selectedTab, setSelectedTab] = useState('about');

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
      </div>
      <MyTabs 
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 'about' &&
        <AboutMe />
      }
      {selectedTab === 'projects' &&
        <Projects />
      }
      {selectedTab === 'skills' &&
        <Skills />
      }
      {selectedTab === 'contact' &&
        <ContactMe />
      }
      <Footer />
    </div>
  )
}

export default App
