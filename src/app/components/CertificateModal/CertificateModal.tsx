"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./certificate.module.css";

interface CertificateModalProps {
  isOpen: boolean;
  title: string;
  institution: string;
  description: string;
  image: string;
  tags: string[];
  onClose: () => void;
}

const languageClassMap: { [key: string]: string } = {
  javascript: styles.javascript,
  typescript: styles.typescript,
  react: styles.react,
  "react-native": styles["react-native"],
  angular: styles.angular,
  vue: styles.vue,
  html: styles.html,
  css: styles.css,
  nodejs: styles.nodejs,
  java: styles.java,
  python: styles.python,
  php: styles.php,
  csharp: styles.csharp,
  ruby: styles.ruby,
  go: styles.go,
  swift: styles.swift,
  kotlin: styles.kotlin,
  mysql: styles.mysql,
  postgresql: styles.postgresql,
  mongodb: styles.mongodb,
  docker: styles.docker,
  sql: styles.sql,
  git: styles.git,
  github: styles.github,
  next: styles.next,
  vite: styles.vite,
  aws: styles.aws,
};

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  title,
  institution,
  description,
  image,
  tags,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || typeof window === "undefined") return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerModal}>
          <p>{title}</p>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.content}>
          <img src={image} alt={title} className={styles.modalImage} />
          <div>
            <h2>{title}</h2>
            <p><strong>Instituição:</strong> {institution}</p>

            {/* <h4>Competências</h4> */}
            <div className={styles.grid_tags}>
              {tags.map((item: string, index) => {
                const className =
                  languageClassMap[item.toLowerCase()] || styles.default;
                return (
                  <article
                    className={`${styles.tags} ${className}`}
                    key={index}
                  >
                    {item}
                  </article>
                );
              })}
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CertificateModal;
