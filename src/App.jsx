import Header from "@/features/landing/Header/Header";
import Sidebar from "@/features/landing/Sidebar/Sidebar";
import SpecialtiesSection from "@/features/landing/Specialties/Specialties";
import NewServices from "@/features/NewServices/NewServices";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-layout">
        <Sidebar />
        <section>
          <NewServices />
          <SpecialtiesSection />
        </section>
      </main>
    </div>
  );
}

export default App;
