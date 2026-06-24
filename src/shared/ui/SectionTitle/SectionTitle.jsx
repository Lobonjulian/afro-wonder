import Button from "@/shared/ui/Button/Button";
import Heading from "../Heading/Heading";
import styles from "./SectionTitle.module.css";

function SectionTitle({ title, subtitle, viewAllLink, onViewAll }) {
  return (
    <div className={styles.sectionTitleContainer}>
      <hgroup className={styles.sectionTitleGroup}>
        <Heading level={2} className={styles.sectionTitle}>
          {title}
        </Heading>
        <p className={styles.sectionSubtitle}>{subtitle}</p>
      </hgroup>

      {viewAllLink && (
        <Button variant="Ghost" onClick={onViewAll} className={styles.btnView}>
          {viewAllLink}
        </Button>
      )}
    </div>
  );
}

export default SectionTitle;
