"use client";

// import Image from "next/image";
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
import DownloadBtn from "./components/DownloadBtn/DownloadBtn";
import ScrollBtn from "./components/ScrollBtn/ScrollBtn";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  url_rep?: string;
  url_project?: string;
};

export default function Home() {
  const { skills, projects, skills_sl } = useContext(Context);

  const OPTIONS: EmblaOptionsType = { align: "center", loop: true };

  const OPTIONS_SKILLS: EmblaOptionsType = {
    align: "start",
    dragFree: true,
    loop: true,
  };
  const SLIDES = skills;

  const SLIDES_SL = skills_sl;

  return (
    <>
      <ScrollBtn></ScrollBtn>
      <main className={styles.main}>
        <section className={`${styles.first_section}`}>
          <Header></Header>
          <div
            className={`${styles.grid_container} ${styles.content_first_section}`}
            id="home"
          >
            <div className={styles.text_content}>
              <h3>Prazer, eu sou o</h3>
              <h1>pedro felipe</h1>
              <h2>
                Desenvolvedor <span></span>
              </h2>
              <div className={styles.grid_button}>
                <a href="#contact" className={styles.red_btn}>
                  Envie uma mensagem
                </a>
                <a
                  href="#about_section"
                  className={styles.transparent_btn_white}
                >
                  Sobre mim
                </a>
              </div>
            </div>
            <div className={styles.img_content}>
              <img src="./Source code-bro (1).svg" alt="" />
            </div>
          </div>
          <ScrollDownButton url={"#about_section"} />
        </section>
        <section className={styles.second_section} id="about_section">
          <div
            className={`${styles.grid_container} ${styles.content_second_section}`}
          >
            <div className={styles.img_content_second_section}>
              {/* <img src="./Code typing-bro.svg" alt="" /> */}
              <img src="./pedro-blobs-dois (3).jpeg" alt="" />
            </div>
            <div className={styles.text_content_second_section}>
              <div>
                <h2 className={styles.h2_normal_section}>Sobre mim</h2>
                <p>
                  Olá, me chamo Pedro Felipe Barros da Silva, tenho 22 anos e
                  sou um desenvolvedor Full-stack recém-graduado em “Análise e
                  Desenvolvimento de Sistemas” pela FIAP, com formação técnica
                  em “Análise e Desenvolvimento de Sistemas” e “Desenhista de
                  Páginas para Web” pelo SENAI.
                  <br />
                  <br />
                  Moro em São Paulo, capital, e sou motivado por novos desafios,
                  sempre buscando evoluir e agregar valor por onde passo, com
                  foco em colaboração e entrega de resultados.
                  <br />
                  <br />
                  Um pensamento que me resume como pessoa é que todo dia é um
                  bom dia para aprender algo novo e se aprimorar, estou em
                  constante evolução e sempre buscando a minha melhor versão
                  então independente da situação acredito que sempre existirá
                  algo bom que podemos aprender.
                </p>
              </div>
              <div
                className={`${styles.grid_button} ${styles.grid_button_center}`}
              >
                <DownloadBtn></DownloadBtn>
                <a
                  href="#about_section"
                  className={styles.transparent_btn_black}
                >
                  Vídeo apresentação
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.third_section} id="certificates">
          <div
            className={`${styles.grid_container} ${styles.content_third_section}`}
          >
            <h2 className={styles.h2_normal_section}>Certificados</h2>
            <i className="fa-solid fa-graduation-cap"></i>
            <CarouselCards options={OPTIONS}></CarouselCards>
          </div>
        </section>
        <section className={styles.fourth_section} id="skills">
          <div
            className={`${styles.grid_container} ${styles.content_fourth_section}`}
          >
            <div className={styles.fourth_section_txt}>
              <h2 className={styles.h2_normal_section}>Habilidades</h2>
              <i className="fa-solid fa-gears"></i>
              <p>
                Ao longo da minha jornada como desenvolvedor, venho construindo
                uma base sólida em diversas tecnologias. Tenho experiência com
                <span>
                  HTML5, CSS3, JavaScript, React, React Native, Next.js e
                  Angular
                </span>
                , além de conhecimento em criações e manutenções de APIs com
                <span>C#, .NET, Entity Framework, Java e Spring Boot.</span>{" "}
                Também trabalho com
                <span>PL/SQL e SQL (SQL Server, MySQL, Oracle SQL)</span> para a
                interação e manipulação em bancos de dados.
                <br />
                <br />
                Utilizo <span>Git e GitHub</span> para versionamento e controle
                de versão e para apoiar no design de interfaces mais intuitivas
                e funcionais atuo com <span>Figma</span>.
                {/* <br />
                <br />
                No lado pessoal, sou comunicativo, proativo, tenho facilidade
                para trabalhar em equipe e estou sempre buscando aprender e
                evoluir. Gosto de ambientes colaborativos e de contribuir com
                soluções práticas e eficientes. */}
              </p>
            </div>
            <div className={styles.fourth_section_grid_carousel}>
              <CarouselSkills
                slides={SLIDES}
                options={OPTIONS_SKILLS}
                directionSlide={"forward"}
              />
              <CarouselSkills
                slides={SLIDES_SL}
                options={OPTIONS_SKILLS}
                directionSlide={"backward"}
              />
            </div>
          </div>
        </section>
        <section className={styles.fiveth_section} id="projects">
          <div
            className={`${styles.grid_container} ${styles.content_fiveth_section}`}
          >
            <h2 className={styles.h2_normal_section}>Projetos</h2>
            <i className="fa-solid fa-pen-to-square"></i>
            <div className={styles.grid_projects}>
              {projects.map((item: ProjectProps, index) => (
                <CardProject project={item} key={index}></CardProject>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.sixth_section} id="contact">
          <div
            className={`${styles.grid_container} ${styles.content_sixth_section}`}
          >
            <h2 className={styles.h2_normal_section}>Entre em contato</h2>
            <p>Estou disponivel atraves de todos os links abaixo</p>
            <nav className={styles.contact_links}>
              <ul>
                <li>
                  <a href="mailto:pedrofelipbarros@gmail.com" target="_blank">
                    <i className="fa-brands fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/pedro-felipe-barros-da-silva/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Pedrofelip" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511982835090"
                    target="_blank"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
