import TopBlogSection from "../components/home/header/top-blog-section";
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
    </div>
  );
};
