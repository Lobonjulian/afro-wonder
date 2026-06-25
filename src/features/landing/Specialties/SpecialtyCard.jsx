import Heading from "@/shared/ui/Heading/Heading";
import styles from "./Specialties.module.css";

export default function SpecialtyCard({ title, image, href, color }) {
  return (
    <article
      className={`${styles.specialtyCard} ${styles[`specialty-${color}`]}`}
    >
      <a href={href} className={styles.specialtyLink}>
        <div className={styles.specialtyContent}>
          <Heading level={4} className={styles.specialtyTitle}>
            {title}
          </Heading>
          <div className={styles.specialtyImage}>
            <img
              src={image}
              alt={`Especialidad: ${title}`}
              className={styles.specialtyImg}
            />
          </div>
        </div>
      </a>
    </article>
  );
}
