"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./certificate.module.css";

interface CertificateModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClose: () => void;
}

const languageClassMap: { [key: string]: string } = {
  javascript: styles.javascript,
  typescript: styles.typescript,
  react: styles.react,
  angular: styles.angular,
  java: styles.java,
  python: styles.python,
};

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  title,
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
