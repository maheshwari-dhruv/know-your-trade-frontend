import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const App = () => {
  return (
    <main className="bg-white main">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
