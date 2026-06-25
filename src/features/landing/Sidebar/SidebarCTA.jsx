import Button from "@/shared/ui/Button/Button";
import Heading from "@/shared/ui/Heading/Heading";
import styles from "./Sidebar.module.css";

export default function SidebarCTA({
  title,
  description,
  buttonText,
  buttonHref,
}) {
  return (
    <section className={styles.sidebarCta}>
      <Heading level={3} className={styles.ctaTitle}>
        {title}
      </Heading>
      <p className={styles.ctaDescription}>{description}</p>
      <Button as="a" href={buttonHref} className={styles.ctaButton}>
        {buttonText}
      </Button>
    </section>
  );
}
