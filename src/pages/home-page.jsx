import TopBlogSection from "../components/home/header/top-blog-section";
// import { LatestPostSection } from "../components/home-page/latest-post-section";
// import { MorePostSection } from "../components/home-page/more-post-section";
import { SubscribEmailSection } from "../components/home-page/subscribe-email";
import { useLoaderData, useNavigation } from "react-router-dom";
import RecentBlogSection from "../components/home/recent-blog/recent-blog-section";

export const Home = () => {
  const result = useLoaderData();
  const navigation = useNavigation();

  console.log(result);

  if (navigation.state === "loading") {
    return <p>Loading...</p>;
  }

  if (navigation.state === "error") {
    return <p>Error: {navigation.text}</p>;
  }

  return (
    <div className="flex flex-col gap-16">
      <TopBlogSection />
      <RecentBlogSection />
      {/* <LatestPostSection posts={result} /> */}
      {/* <MorePostSection posts={result} /> */}
      <SubscribEmailSection />
    </div>
  );
};
