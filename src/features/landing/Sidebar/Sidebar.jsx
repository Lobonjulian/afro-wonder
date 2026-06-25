import Container from "@/shared/ui/Container/Container";
import Input from "@/shared/ui/Input/Input";
import NavLinks from "@/shared/ui/NavLinks/NavLinks";
import { sidebarCTA, sidebarLinks } from "./sidebar.data";
import SidebarCTA from "./SidebarCTA";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
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

        <NavLinks
          links={sidebarLinks}
          ariaLabel="Navegación lateral"
          direction="vertical"
        />

        <SidebarCTA {...sidebarCTA} />
      </Container>
    </aside>
  );
}
