import { useEffect, useState } from "react";
import { LatestPostSection } from "../components/home-page/latest-post-section";
import { MorePostSection } from "../components/home-page/more-post-section";
import { SubscribEmailSection } from "../components/home-page/subscribe-email";
import jsonData from "../assets/data/data.json";
import sortPostData from "../utils/sort-json-data";

export const Home = () => {
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    const sortedData = sortPostData(jsonData);

    setSortData(sortedData);
  }, []);

  if (!sortData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <LatestPostSection posts={sortData} />
      <MorePostSection posts={sortData} />
      <SubscribEmailSection />
    </div>
  );
};
