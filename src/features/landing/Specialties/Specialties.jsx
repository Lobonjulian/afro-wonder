import { specialtiesData } from "@/features/landing/Specialties/specialties.data";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";
import SpecialtyCard from "./SpecialtyCard";

import Container from "@/shared/ui/Container/Container";
import styles from "./Specialties.module.css";

export default function SpecialtiesSection() {
  return (
    <section className={styles.specialtiesSection}>
      <Container>
        <SectionTitle
          title="Nuestras Especialidades"
          subtitle="Servicios seleccionados y técnicas especializadas en cabello afro"
          viewAllLink="Ver Todo"
        />

        <div className={styles.specialtiesGrid}>
          {specialtiesData.map((specialty) => (
            <SpecialtyCard key={specialty.id} {...specialty} />
          ))}
        </div>
      </Container>
    </section>
  );
}
