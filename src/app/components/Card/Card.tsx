import styles from "./Card.module.css";

export default function Card({ product }) {

  //Você pode usar spread operator (...) para espalhar os elementos dentro do novo array:
  //Isso garante que tags sempre seja um array válido, mesmo se product.tags não estiver definido.
  const tags = [...(product.tags || [])];

  console.log(tags);

  return (
    <a href="#">
      <article className={styles.card}>
        <div className={styles.grid_card}>
          <img src={product.image[0]} alt={product.name} />
          <div className={styles.grid_tags}>
            {tags.map((item: any, index) => (
              <article className={styles.tags} key={index}>
                {item}
              </article>
            ))}
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </article>
    </a>
  );
}
