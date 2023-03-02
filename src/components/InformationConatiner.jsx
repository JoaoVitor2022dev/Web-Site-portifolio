import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/inforContainer.sass"

const InformationConatiner = () => {
  return (
    <section id="informationContainer">
       <div className="inforCard">
        <AiOutlineMail id="emailIcon"/>
         <div>
            <h3 id="h3Icon">E-mail</h3>
            <p>githubconta2021@gmail.com</p>
         </div>
      </div>
      <div className="inforCard">
        <AiFillPhone id="foneIcon"/>
         <div>
            <h3 id="h3Icon">Telefone</h3>
            <p>(92) 99164 - 2641</p>
         </div>
      </div>
      <div className="inforCard">
        <AiFillEnvironment id="pinIcon"/>
         <div>
            <h3 id="h3Icon">Localizaçao</h3>
            <p>Manaus /  AM </p>
         </div>
      </div>
    </section>
  )
}

export default InformationConatiner
