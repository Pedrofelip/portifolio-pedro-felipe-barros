import { useState } from "react";
import styles from "./Card.module.css";
import CertificateModal from "../CertificateModal/CertificateModal";

type Certificate = {
  name: string;
  institution: string;
  description: string;
  image: string[];
  tags?: string[];
};

type CardProps = {
  certificate: Certificate;
};

export default function Card({ certificate }: CardProps) {
  //Você pode usar spread operator (...) para espalhar os elementos dentro do novo array:
  //Isso garante que tags sempre seja um array válido, mesmo se product.tags não estiver definido.
  const tags = [...(certificate.tags || [])];

  const [isOpen, setIsOpen] = useState(false);

  //mapa de classes: Isso diz: "Se a linguagem for 'python', aplique a classe `.python' que está no CSS."
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

  return (
    <>
      <div onClick={() => setIsOpen(true)} className={styles.link}>
        <article className={styles.card}>
          <div className={styles.grid_card}>
            <img src={certificate.image[0]} alt={certificate.name} />
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
            <h3>{certificate.name}</h3>
            <p>{certificate.description}</p>
          </div>
        </article>
      </div>

      {isOpen && (
        <CertificateModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={certificate.name}
          institution={certificate.institution}
          description={certificate.description}
          image={certificate.image[0]}
          tags={tags}
        />
      )}
    </>
  );
}
