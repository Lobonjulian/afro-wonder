import Container from "@/shared/ui/Container/Container";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import { newServices } from "./newServices.data";
import ServiceCard from "./ServiceCard";

import styles from "./NewServices.module.css";

export default function NewServices() {
  return (
    <section className={styles.newServices}>
      <Container>
        <SectionTitle
          title={"nuevo en el salon"}
          subtitle={
            "Servicios recién añadidos: tratamientos, técnicas y productos especializados "
          }
          viewAllLink={"ver todo"}
        />
        <div className={styles.servicesGrid}>
          {newServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
