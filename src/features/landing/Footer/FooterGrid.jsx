import Heading from "@/shared/ui/Heading/Heading";
import NavLinks from "@/shared/ui/NavLinks/NavLinks";

import styles from "./Footer.module.css";

export default function FooterGrid({ links }) {
  return (
    <div className={styles.footerGrid}>
      {links.map((column) => (
        <div key={column.title} className={styles.footerColumn}>
          <Heading level={3} className={styles.columnTitle}>
            {column.title}
          </Heading>
          <NavLinks links={column.links} direction="vertical" />
        </div>
      ))}
    </div>
  );
}
