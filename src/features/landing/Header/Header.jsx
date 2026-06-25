import Button from "@/shared/ui/Button/Button";
import Container from "@/shared/ui/Container/Container";
import { navLinks } from "./header.data";
import NavLinks from "@/shared/ui/NavLinks/NavLinks";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src="https://placehold.co/60x60.png" alt="logo provisional" />
          <NavLinks
            links={navLinks}
            ariaLabel="Navegación principal"
            direction="horizontal"
          />
        </div>
        <div className={styles.headerActions}>
          <Button variant="Ghost">INICIAR SESIÓN</Button>
          <Button>RESERVA TU CITA</Button>
        </div>
        {/* TODO: Implementar menú hamburguesa para móvil */}
      </Container>
    </header>
  );
}
