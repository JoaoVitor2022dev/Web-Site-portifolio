// module de compoenents 
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

// module de sass
import "./styles/components/app.sass";


function App() {
  return (
    <div id="portifolio">
        <h1>João Vitor Moçambite Lima</h1>
        <SideBar/>
           <MainContent/>         
    </div>
  )
}

export default App; 
