import { useState } from "react";
import styles from "./ResponsiveMenu.module.css";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e:any) => {
    if (e.target.id === "sidebar-overlay") {
      closeSidebar();
    }
  };

  return (
    <div className={styles.sidebar_resposive}>
      {/* Botão para abrir a sidebar */}
      <button className={styles.sidebarToggle} onClick={openSidebar}>
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Overlay para fechar a sidebar ao clicar fora */}
      {isOpen && (
        <div
          id="sidebar-overlay"
          className={styles.overlay}
          onClick={handleClickOutside}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={closeSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
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
      </div>
    </div>
  );
};

export default ResponsiveMenu;
