import Image from "next/image";
import style from "./page.module.scss"
export default function Certifieds(){

    const certifieds = [
        {
            img: "/img/CertificadoReact.jpg",
            alt: "Certificado do curso de React",
           
        },
        {
            img: "/img/CertificadoPHP.jpg",
            alt: "Certificado do curso de PHP",
         },
    ]

    return(
        <section className={style.certifiedSection}>
     

      <div className={style.MyCertifieds}>
        {certifieds.map((cert, i) => (
          <div className={style.certCard} key={i}>
            <Image
              src={cert.img}
              alt={cert.alt}
              width={400}
              height={280}
              className={style.certImage}
            />
            
          </div>
        ))}
      </div>
    </section>
    );
}