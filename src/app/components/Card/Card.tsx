import styles from "./Card.module.css";

export default function Card({ certificate }) {

  //Você pode usar spread operator (...) para espalhar os elementos dentro do novo array:
  //Isso garante que tags sempre seja um array válido, mesmo se product.tags não estiver definido.
  const tags = [...(certificate.tags || [])];

  return (
    <a href="#">
      <article className={styles.card}>
        <div className={styles.grid_card}>
          <img src={certificate.image[0]} alt={certificate.name} />
          <div className={styles.grid_tags}>
            {tags.map((item: any, index) => (
              <article className={styles.tags} key={index}>
                {item}
              </article>
            ))}
          </div>
          <h3>{certificate.name}</h3>
          <p>{certificate.description}</p>
        </div>
      </article>
    </a>
  );
}
