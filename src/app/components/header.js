"use client";

import style from "./page.module.scss";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Header() {
  return (
    <header className={style.header}>
      <motion.div
        initial={{ opacity: 0.8, scale: 0.8 }}
        animate={{ opacity: 1 , scale: 1}}
        className={style.headerContent}
      >
        <div className={style.me}>
          <h1>Seja bem vindo ao meu portifolio </h1>
        </div>
        <div className={style.headerBtns}>
          
        <Link href="/">
            <motion.button
                className={style.motionBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
            
                Sobre Mim
            
            </motion.button>
        </Link>
        <Link href="/projects">
            <motion.button
                className={style.motionBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
            
                Projetos
            
            </motion.button>
        </Link> 

         <Link href="/certifieds">
            <motion.button
                className={style.motionBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
            
                Certificados
            
            </motion.button>
        </Link>

         <Link href="/contacts">
            <motion.button
                className={style.motionBtn}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
            
                Contatos
            
            </motion.button>
        </Link>
        </div>
      </motion.div>
    </header>
  );
}
