import SocialIcons from "@/shared/ui/Icons/Icons";
import styles from "./Footer.module.css";

export default function FooterBottom({ links }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerBottom}>
      <div className={styles.footerSocial}>
        {links.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className={styles.socialLink}
            aria-label={`Visitar ${social.name}`}
          >
            <SocialIcons name={social.name} />
          </a>
        ))}
      </div>

      <p className={styles.copyright}>AFROWONDER © {currentYear}</p>
    </div>
  );
}
