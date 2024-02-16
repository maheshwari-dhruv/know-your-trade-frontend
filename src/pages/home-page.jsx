import { FooterSection } from "../components/footer-section";
import { NavbarSection } from "../components/navbar-section";
import { CategorySection } from "../components/home-page/category-section";
import { LatestPostSection } from "../components/home-page/latest-post-section";
import { MorePostSection } from "../components/home-page/more-post-section";
import { SubscribEmailSection } from "../components/home-page/subscribe-email";

export const Home = () => {
  return (
    <div className="w-full h-full px-5 py-5 bg-zinc-900 main">
      <div className="flex flex-col w-full h-full gap-4 px-40 text-black bg-white border-2 rounded-md">
        <NavbarSection />
        <LatestPostSection />
        <CategorySection />
        <MorePostSection />
        <SubscribEmailSection />
        <FooterSection />
      </div>
    </div>
  );
};
