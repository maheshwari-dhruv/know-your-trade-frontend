import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { fetchPost } from "../api/fetch-post";

export const PostPage = () => {
  const { state } = useLocation();
  const { postId } = state || {};
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (postId) {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const postData = await fetchPost(postId);
          setPost(postData);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [postId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!post) {
    return <p>No post found.</p>;
  }

  const { postTitle, category, createdAt, postContent } = post;

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <span className="text-4xl font-bold">{postTitle}</span>
      </div>
      <div>
        <span className="text-xl font-semibold">
          {category} | {createdAt}
        </span>
      </div>
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </section>
  );
};
