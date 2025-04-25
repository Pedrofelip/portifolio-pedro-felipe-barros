import styles from "./cardProject.module.css";

type Project = {
  image: string;
  title: string;
  description: string;
  url_rep?: string;
  url_project?: string;
};

type CardProps = {
  project: Project;
};

export default function CardProject({ project }: CardProps) {
  return (
    <article className={styles.project}>
      <div className={styles.grid_project}>
        <div className={styles.content_img_project}>
          <img src={project.image} alt="" />
        </div>
        <div className={styles.content_text_project}>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className={styles.grid_button}>
            <a href={project.url_rep} className={styles.red_btn}>
              Repositorio <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={project.url_project}
              className={styles.transparent_btn_black}
            >
              Ver o projeto
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
