import Button from "../Button/Button";
import styles from "./NavLinks.module.css";

export default function NavLinks({
  links,
  direction = "horizontal",
  ariaLabel,
  className = "",
}) {
  return (
    <nav aria-label={ariaLabel} className={`${styles.navLink} ${className}`}>
      <ul className={` ${styles.navList}  ${styles[direction]}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Button as="a" href={link.href} variant="Ghost">
              {link.label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
