import style from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

 
const projects = [
  {
    title: "CandyTrack",
    description: "Sistema web completo desenvolvido para uma docearia local. Permite o cadastro de ingredientes e" + 
    " a criação de produtos com base nos insumos utilizados, calculando automaticamente o custo de cada item.",
    techs: ["Node.js", "React", "PostGre", "Next.js ",  "JavaScript"],
    github: "https://github.com/RenatoPiresFilogenio/sistemaDocearia",
    deploy:"https://sistema-docearia-81an.vercel.app/",
    img: " "
  },
  {
    title: "SolarSmart",
    description: "Sistema desenvolvido em Java para cálculo de energia solar, baseado no consumo do imóvel ou de  " +
    "cômodos específicos. Desenvolvido para a feira científica , Congresso Científico da Fundação Hermínio Ometto (FHO).",
    techs: ["Java"],
    github: "https://github.com/RenatoPiresFilogenio/SolarSmart",
    deploy:"",
    img: " "
  },
   {
    title: "TarefasHoje",
    description: "Uma aplicação simples e funcional de lista de tarefas, "+
    "desenvolvida em React Native. Ideal para quem quer manter o dia organizado de"+
    " forma leve e prática, tanto no Android quanto no iOS.",
    techs: ["React Native", "JavaScript"],
    github: "https://github.com/RenatoPiresFilogenio/TarefasHoje/blob/main/README.md",
    deploy:"",
    img: " "
  },
  
];

export default function Projects() {
  return (
     <section className={style.introductionProjects}>
      <h1>Projetos</h1>

      <p>
        Aqui estão alguns dos projetos que venho desenvolvendo nos últimos tempos, sejam acadêmicos, pessoais ou fruto da minha curiosidade por aprender mais.
        Trabalho principalmente com Node.js e React, além de bancos de dados como MariaDB e PostgreSQL.
      </p>

      <div className={style.projectsGrid}>
        {projects.map((proj, index) => {
         
          const loginsValidos = (proj.loginTeste || []).filter(
            (login) => login.email || login.senha
          );

          return (
            <div key={index} className={style.projectCard}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className={style.techList}>
                {proj.techs.map((tech, i) => (
                  <span key={i} className={style.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <Link href={proj.github} target="_blank" rel="noopener noreferrer">
                <button className={style.motionBtn}>Ver no GitHub</button>
              </Link>

              {proj.deploy && (
                <Link href={proj.deploy} target="_blank" rel="noopener noreferrer">
                  <button className={style.motionBtn}>Acessar projeto</button>
                </Link>
              )}

             
              {loginsValidos.length > 0 && (
                <div className={style.loginContainer}>
                  <h4>Login para teste</h4>
                  {loginsValidos.map((login, i) => (
                    <div key={i}>
                      <p>
                        <strong>Login:</strong> {login.email}
                      </p>
                      <p>
                        <strong>Senha:</strong> {login.senha}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}