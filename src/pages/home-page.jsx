import { useEffect, useState } from "react";
import { LatestPostSection } from "../components/home-page/latest-post-section";
import { MorePostSection } from "../components/home-page/more-post-section";
import { SubscribEmailSection } from "../components/home-page/subscribe-email";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/post/all");

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          `API response indicated failure (resultCode: ${data.resultCode}, resultStatus: ${data.resultStatus}, resultMsg: ${data.resultMsg})`
        );
      }

      setPosts(data.data.postDTO || []);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(posts.length);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <LatestPostSection posts={posts} />
      <MorePostSection posts={posts} />
      <SubscribEmailSection />
    </div>
  );
};
