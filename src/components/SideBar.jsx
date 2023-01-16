// compoenente da rede social 
import SocialNetworks from "./SocialNetworks";
import InformationConatiner from "./InformationConatiner";

// imagem de perfil
import Avatar from "../img/test01.jpeg";

import "../styles/components/sidebar.sass";

const SideBar = () => {
  return (
        <aside id="sidebar">
          <img src={Avatar} alt="Joao Vitor"/>
          <p className="title">Desevolvedor Full-stack</p>
          <SocialNetworks/>
          <InformationConatiner/>
        </aside>
  )
}

export default SideBar;