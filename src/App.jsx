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
      <AboutMeSection />
      <ProjectSection />
      <PhotographySection />
      <ResumeSection />
      <Footer />
    </div>
  )
}

export default App
