import Heading from "@/shared/ui/Heading/Heading";
import Logo from "@/shared/ui/Logo/Logo";

import styles from "./Footer.module.css";

export default function FooterTagline() {
  return (
    <div className={styles.footerTagline}>
      <Heading className={styles.taglineTitle}>
        Hecho con amor por el equipo de AfroWonder
      </Heading>
      <div className={styles.taglineLogo}>
        <Logo variant="icon" />
      </div>
    </div>
  );
}
