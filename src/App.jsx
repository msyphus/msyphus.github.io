import { useState } from 'react';
import './App.css'
import MyTabs from './MyTabs';

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
        <div>
          Here's about me
        </div>
      }
      {selectedTab === 'projects' &&
        <div>
          Here are projects
        </div>
      }
      {selectedTab === 'skills' &&
        <div>
          Here are my skills
        </div>
      }
      {selectedTab === 'resume' &&
        <div>
          Here's my resume
        </div>
      }
      <div>
        Footer
      </div>
    </div>
  )
}

export default App
