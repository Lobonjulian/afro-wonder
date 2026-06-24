import Header from "@/features/landing/Header/Header";
import Sidebar from "@/features/landing/Sidebar/Sidebar";
import NewServices from "@/features/NewServices/NewServices";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-layout">
        <Sidebar />
        <NewServices />
      </main>
    </div>
  );
}

export default App;
