"use client";
import * as motion from "motion/react-client";
import style from "./page.module.scss"
import Image from 'next/image';
import Link from "next/link";
export default function Home() {
  return (
<main className={style.aboutMe}>
  <section className={style.introduction}>
    <p>
      Oi, eu sou o Renato, tenho 20 anos e venho me dedicando ao desenvolvimento de software há cerca de 3 anos. Nesse tempo, tive a oportunidade de trabalhar 
      em projetos pessoais e acadêmicos usando tecnologias como React, React Native e Next.js. Também tenho experiência com bancos de dados relacionais como MariaDB e PostgreSQL,
      além de versionamento com Git e metodologias ágeis, especialmente Scrum. Sou alguém que gosta de aprender na prática, buscando sempre aprimorar minhas habilidades e aplicar soluções eficientes. 
      Estou aberto a novos desafios e oportunidades para crescer profissionalmente e contribuir com projetos que realmente façam a diferença.
    </p>
      <br/>
    <p>
      Atualmente, curso Sistemas de Informação na Fundação Hermínio Ometto (FHO), 
      onde venho fortalecendo minha base teórica e prática em desenvolvimento de software. 
      Meu principal foco está no back-end, especialmente em aplicações web com Node.js, 
      mas também gosto de explorar o front-end para entregar soluções completas.
      Estou em busca de uma oportunidade de estágio onde eu possa evoluir como desenvolvedor, 
      colaborar com times engajados e contribuir com projetos reais que impactem positivamente as pessoas e os negócios.
    </p>
  </section>

  <section className={style.MyPhoto}>
    <Image
      src="/img/eu.png"
      alt="Minha foto"
      width={100}
      height={100}
    />
  </section>

    <section className={style.MySocialMidias}>
      <h2>Redes Sociais:</h2>
       
      <motion.div>
                  <a
                    href="https://github.com/RenatoPiresFilogenio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.motionBtn}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ display: 'inline-block' }}
                    >
                      Github
                    </motion.span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/renato-pires-filogenio-774434262/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.motionBtn}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ display: 'inline-block' }}
                    >
                      Linkedin
                    </motion.span>
                  </a>
      </motion.div>
    </section>
</main>

  );
}
