"use client"

import styles from "./header.module.css";
import container from "../../page.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${container.grid_container} ${styles.grid_header}`}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png"
          alt=""
        />
        <nav className={styles.header_nav}>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Habilidades</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
