import React from 'react'
import NavbarMain from './components/Navbarmain/NavbarMain'
import HomeSection from './components/homeSection/HomeSection'
import SubHomeSection from './components/homeSection/SubHomeSection'
import AboutMain from './components/aboutme/AboutMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ExperienceMain from './components/experience/ExperienceMain'
import ProjectMain from './components/projects/ProjectMain'
import ContactMeMain from './components/contactMe/ContactMeMain'
import FooterM from './components/footer/FooterM'

function App() {
  

  return (
   <main className="fonts-body">
    <NavbarMain />
    <HomeSection/>
    <SubHomeSection/>
    <AboutMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterM/>
    <HelperSection/>
    
   </main>
  )
}

export default App
