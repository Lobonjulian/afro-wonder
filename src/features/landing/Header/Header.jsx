import Button from "@/shared/ui/Button/Button";
import Container from "@/shared/ui/Container/Container";
import Logo from "@/shared/ui/Logo/Logo";
import NavLinks from "@/shared/ui/NavLinks/NavLinks";
import { navLinks } from "./header.data";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Logo />
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
