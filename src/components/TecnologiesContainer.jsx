import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/TecnologiesContainer.sass";

 const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, paragrafo: "" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, paragrafo: "" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> , paragrafo: "ECMAScript 2022 (junho de 2021)" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, paragrafo: "" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, paragrafo: "" },
  { id: "react", name: "React", icon: <DiReact />, paragrafo: "" },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologiesContainer">
      <h2>Tecnologias</h2>
       <div className="technologiesGrid">
        {technologies.map((tec) => ( 
          <div className="technologiesCard" id={tec.id} key={tec.id}>
            {tec.icon}
             <div className="technologiesInfor">
               <h3>{tec.name}</h3>
              <p>{tec.paragrafo}</p>
             </div>
          </div>
        ))}
       </div>
    </section>
  )
}

export default TecnologiesContainer; 