import Heading from "@/shared/ui/Heading/Heading";
import styles from "./NewServices.module.css";

function ServiceCard({ title, badges, image, href, description }) {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <a href={href} className={styles.cardLink}>
            <div className={styles.cardImage}>
              <img
                src={image}
                alt={`imagen de ${title}`}
                className={styles.cardImg}
              />
            </div>

            <span
              className={`${styles.cardCategory} ${styles[`cardCategory-${badges.toLowerCase()?.replace(/ /g, "-")}`]} `}
            >
              {badges}
            </span>

            <div className={styles.cardContent}>
              <Heading level={3} className={styles.cardTitle}>
                {title}
              </Heading>
            </div>
          </a>
        </div>
        <div className={styles.cardBack}>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
