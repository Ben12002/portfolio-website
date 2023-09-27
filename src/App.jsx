import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import PhotographySection from './components/PhotographySection'
import ResumeSection from './components/ResumeSection'
import Footer from './components/Footer'

function App() {

  return (
    <div className='portfolio'>
      <Header />
      <ProjectSection />
      <AboutMeSection />
      <PhotographySection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
