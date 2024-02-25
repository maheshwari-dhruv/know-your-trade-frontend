import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const PostPage = () => {
  let { postId } = useLocation().state;
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDataById(postId);
  }, [postId]);

  const fetchDataById = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/post/individual/${postId}`
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          `API response indicated failure (resultCode: ${data.resultCode}, resultStatus: ${data.resultStatus}, resultMsg: ${data.resultMsg})`
        );
      }

      console.log(data.data.postDTO[0]);

      setPost(data.data.postDTO[0] || []);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <span className="text-4xl font-bold">{post.postTitle}</span>
      </div>
      <div>
        <span className="text-xl font-semibold">
          {post.category} | {post.createdAt}
        </span>
      </div>
      <ReactMarkdown>{post.postContent}</ReactMarkdown>
    </section>
  );
};
