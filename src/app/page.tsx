"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import ScrollDownButton from "./components/ScrollDownButton/ScrollDownButton";
import Footer from "./components/Footer/Footer";
import CarouselCards from "./components/CarouselCards/CarouselCards";
import { EmblaOptionsType } from "embla-carousel";
import { useContext } from "react";
import Context from "@/data/context/Context";
import CarouselSkills from "./components/CarouselSkills/CarouselSkills";
import CardProject from "./components/CardProject/CardProject";

export default function Home() {
  const { certificates, skills, projects } = useContext(Context);

  const OPTIONS: EmblaOptionsType = { align: "start", loop: true};

  const OPTIONS_SKILLS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  const SLIDES = skills;

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
                <a href="#about_section" className={styles.transparent_btn_white}>
                  Sobre mim
                </a>
              </div>
            </div>
            <div className={styles.img_content}>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
          </div>
          <ScrollDownButton url={"#about_section"} />
        </section>
        <section className={styles.second_section} id="about_section">
          <div
            className={`${styles.grid_container} ${styles.content_second_section}`}
          >
            <div className={styles.img_content_second_section}>
              <img src="./developer-activity-animate.svg" alt="" />
            </div>
            <div className={styles.text_content_second_section}>
              <div>
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
              </div>
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
          <div
            className={`${styles.grid_container} ${styles.content_third_section}`}
          >
            <h2 className={styles.h2_normal_section}>Certificados</h2>
            <i className="fa-solid fa-graduation-cap"></i>
            <CarouselCards options={OPTIONS}></CarouselCards>
          </div>
        </section>
        <section className={styles.fourth_section}>
          <div
            className={`${styles.grid_container} ${styles.content_fourth_section}`}
          >
            <div className={styles.fourth_section_txt}>
              <h2 className={styles.h2_normal_section}>Habilidades</h2>
              <i className="fa-solid fa-gears"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
                ullam laboriosam provident perferendis eligendi voluptatum optio
                ducimus, nostrum sapiente libero officiis quia unde vero quae
                quisquam dolore dolorem quo quidem aut nihil sint velit.
                Voluptates nobis tenetur maiores explicabo quo ratione
                exercitationem quibusdam dignissimos. Obcaecati iusto odio a
                nobis cupiditate!
              </p>
            </div>
            <div className={styles.fourth_section_grid_carousel}>
              <CarouselSkills slides={SLIDES} options={OPTIONS_SKILLS} />
              <CarouselSkills slides={SLIDES} options={OPTIONS_SKILLS} />
            </div>
          </div>
        </section>
        <section className={styles.fiveth_section}>
          <div
            className={`${styles.grid_container} ${styles.content_fiveth_section}`}
          >
            <h2 className={styles.h2_normal_section}>Projetos</h2>
            <i className="fa-solid fa-pen-to-square"></i>
            <div className={styles.grid_projects}>
              {projects.map((item: any) => (
                <CardProject project={item}></CardProject>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
