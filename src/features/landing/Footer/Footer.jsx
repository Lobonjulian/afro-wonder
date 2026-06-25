import {
  footerColumns,
  socialLinks,
} from "@/features/landing/Footer/footer.data";
import Container from "@/shared/ui/Container/Container";
import FooterBottom from "./FooterBottom";
import FooterGrid from "./FooterGrid";
import FooterTagline from "./FooterTagline";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <FooterTagline />

        <FooterGrid links={footerColumns} />

        <FooterBottom links={socialLinks} />
      </Container>
    </footer>
  );
}

export default Footer;
