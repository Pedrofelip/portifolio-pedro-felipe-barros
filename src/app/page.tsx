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
            <div>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
          </div>
          <ScrollDownButton />
        </section>
      </main>
    </>
  );
}
