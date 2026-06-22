import Button from "@/shared/ui/Button/Button";
import Container from "@/shared/ui/Container/Container";
import { navLinks } from "./header.data";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src="https://placehold.co/60x60.png" alt="logo provisional" />
          <nav aria-label="Navegación principal" className={styles.headerNav}>
            <ul className={styles.headerList}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
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

export default Header;
