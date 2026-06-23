import Button from "@/shared/ui/Button/Button";
import Container from "@/shared/ui/Container/Container";
import Heading from "@/shared/ui/Heading/Heading";
import Input from "@/shared/ui/Input/Input";
import { sidebarCTA, sidebarLinks } from "./sidebar.data";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Container className={styles.sidebarContainer}>
        <Input
          label="Buscar en AfroWonder"
          id="search-input"
          className={styles.searchInput}
          classNameLabel={styles.searchLabel}
          placeholder="Buscar..."
        />

        <nav aria-label="navegación lateral" className={styles.sidebarNav}>
          <ul className={styles.sidebarLinks}>
            {sidebarLinks.map((link) => (
              <li key={link.id} className={styles.sidebarLink}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sidebarCta}>
          <Heading level={3} className={styles.ctaTitle}>
            {sidebarCTA.title}
          </Heading>
          <p className={styles.ctaDescription}>{sidebarCTA.description}</p>
          <Button
            as="a"
            href={sidebarCTA.buttonHref}
            className={styles.ctaButton}
          >
            {sidebarCTA.buttonText}
          </Button>
        </div>
      </Container>
    </aside>
  );
}

export default Sidebar;
