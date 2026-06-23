import Header from "@/features/landing/Header/Header";
import Sidebar from "@/features/landing/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-layout">
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
