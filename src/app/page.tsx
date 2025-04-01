import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import ScrollDownButton from "./components/ScrollDownButton/ScrollDownButton";
import Footer from "./components/Footer/Footer";
import CarouselCards from "./components/CarouselCards/CarouselCards";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  
  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.first_section}`}>
          <Header></Header>
          <div
            className={`${styles.grid_container} ${styles.content_first_section}`}
          >
            <div className={styles.text_content}>
              <h3>Prazer, eu sou o</h3>
              <h1>pedro felipe</h1>
              <h2>
                Desenvolvedor <span>Full-stack</span>
              </h2>
              <div className={styles.grid_button}>
                <a href="#" className={styles.red_btn}>
                  Envie uma mensagem
                </a>
                <a href="#" className={styles.transparent_btn_white}>
                  Sobre mim
                </a>
              </div>
            </div>
            <div className={styles.img_content}>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
          </div>
          <ScrollDownButton />
        </section>
        <section className={styles.second_section}>
          <div
            className={`${styles.grid_container} ${styles.content_second_section}`}
          >
            <div className={styles.img_content_second_section}>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
            <div className={styles.text_content_second_section}>
              <h2 className={styles.h2_normal_section}>Sobre mim</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                laudantium quae pariatur similique repudiandae voluptas sint
                dolorum ullam nostrum tenetur fuga numquam eveniet, consequuntur
                rem cupiditate vero explicabo dicta a neque rerum natus non
                necessitatibus ducimus temporibus! Rerum odit repellat
                reiciendis ipsa iste amet ipsum deserunt maxime sed, adipisci
                aperiam.
              </p>
              <div className={styles.grid_button}>
                <a href="#" className={styles.red_btn}>
                  Baixar currículo
                </a>
                <a href="#" className={styles.transparent_btn_black}>
                  Vídeo apresentação
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.third_section}>
          <div className={`${styles.grid_container} ${styles.content_third_section}`}>
            <h2 className={styles.h2_normal_section}>Certificados</h2>
            <i className="fa-solid fa-graduation-cap"></i>
            <CarouselCards slides={SLIDES} options={OPTIONS}></CarouselCards>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
