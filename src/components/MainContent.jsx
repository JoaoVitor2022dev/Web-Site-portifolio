import '../styles/components/mainContent.sass'

import AboutContainer from './AboutContainer'; 
import TecnologiesContainer from './TecnologiesContainer';
import ProjectContainer from './ProjectContainer';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TecnologiesContainer/>
      <ProjectContainer/>
    </main>
  )
}

export default MainContent;