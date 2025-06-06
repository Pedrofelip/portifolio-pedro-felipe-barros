"use client";

import styles from "./header.module.css";
import container from "../../page.module.css";
import ResponsiveMenu from "../responsive_menu/ResponsiveMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${container.grid_container} ${styles.grid_header}`}>
        <a href="#" className={styles.logo}>
          {"<"}
          <strong>P</strong>f{" />"}
        </a>
        <nav className={styles.header_nav}>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#about_section">Sobre</a>
            </li>
            <li>
              <a href="#certificates">Certificados</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`${styles.grid_header_responsive} ${container.grid_container}`}
      >
        <a href="#" className={styles.logo}>
          {"<"}
          <strong>P</strong>f{" />"}
        </a>

        <ResponsiveMenu></ResponsiveMenu>
      </div>
    </header>
  );
}
