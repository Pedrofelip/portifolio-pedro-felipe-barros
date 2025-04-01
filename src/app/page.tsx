import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import ScrollDownButton from "./components/ScrollDownButton/ScrollDownButton";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.first_section}`}>
          <Header></Header>
          <div className={`${styles.grid_container} ${styles.content_first_section}`}>
            <div className={styles.text_content}>
              <h3>Prazer, eu sou o</h3>
              <h1>pedro felipe</h1>
              <h2>
                Desenvolvedor <span>Full-stack</span>
              </h2>
              <div className={styles.grid_button}>
                <a href="#" className={styles.send_message_btn}>Envie uma mensagem</a>
                <a href="#" className={styles.about_btn}>Sobre mim</a>
              </div>
            </div>
            <div className={styles.img_content}>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
          </div>
          <ScrollDownButton />
        </section>
        <section className={styles.second_section}>
          <div className={`${styles.grid_container} ${styles.content_second_section}`}>
            <div>

            </div>
            <div className={styles.text_content_second_section}>
              <h2>Sobre mim</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum laudantium quae pariatur similique repudiandae voluptas sint dolorum ullam nostrum tenetur fuga numquam eveniet, consequuntur rem cupiditate vero explicabo dicta a neque rerum natus non necessitatibus ducimus temporibus! Rerum odit repellat reiciendis ipsa iste amet ipsum deserunt maxime sed, adipisci aperiam.</p>
              <a href="#" className={styles.send_message_btn}>Baixar currículo</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
