import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { FooterSection } from "./components/footer-section";
// import { NavbarSection } from "./components/navbar-section";

export const App = () => {
  return (
    // <main className="w-full px-5 py-5 bg-zinc-900">
    //   <div className="flex flex-col w-full h-full gap-8 px-40 text-black bg-white border-2 rounded-md">
    //     <NavbarSection />
    //     <Outlet />
    //     <FooterSection />
    //   </div>
    // </main>
    <main className="bg-white main">
      <Navbar />
      <Outlet />
      <FooterSection />
    </main>
  );
};
