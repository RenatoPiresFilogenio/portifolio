import style from "./page.module.scss";

export default function Contacts() {
  return (
    <section className={style.contactsSection}>
      <h1>Formas de contato</h1>

      <div className={style.contactItem}>
        <strong>Email:</strong>{" "}
        <a href="mailto:renato.filogenio@gmail.com">renato.filogenio@gmail.com</a>
      </div>

      <div className={style.contactItem}>
        <strong>WhatsApp:</strong> +55 (19) 99749-6459
      </div>

      <div className={style.contactItem}>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/renato-pires-filogenio-774434262/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/renato-pires-filogenio
        </a>
      </div>
    </section>
  );
}
