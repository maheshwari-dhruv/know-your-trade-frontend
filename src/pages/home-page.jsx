import { FooterSection } from "../components/footer-section";
import { HeaderSection } from "../components/header-section";
import { CategorySection } from "../components/home-page/category-section";
import { LatestPostSection } from "../components/home-page/latest-post-section";
import { MorePostSection } from "../components/home-page/more-post-section";
import { SubscribEmailSection } from "../components/home-page/subscribe-email";

export const Home = () => {
  return (
    <div className="w-full h-full px-5 py-5 bg-zinc-900 main">
      <div className="w-full h-full text-black border-2 rounded-md bg-slate-200 px-40 flex flex-col gap-4">
        <HeaderSection />
        <LatestPostSection />
        <CategorySection />
        <MorePostSection />
        <SubscribEmailSection />
        <FooterSection />
      </div>
    </div>
  );
};
