import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import '../styles/components/socialNetworks.sass';

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedinIn/>, href: "https://www.linkedin.com/in/joao-vitor-5594aa220/" },
  {name: "github", icon: <FaGithub/>, href: "https://github.com/JoaoVitor2022dev"},
  {name: "instagram", icon: <FaInstagram/>, href: "https://github.com/JoaoVitor2022dev"},
]; 

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => ( 
        <a href={network.href} className="btnSocial" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks;
