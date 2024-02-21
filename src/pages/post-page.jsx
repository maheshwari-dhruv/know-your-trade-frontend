import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import findPostById from "../utils/find-data-by-id";

export const PostPage = () => {
  let { postId } = useLocation().state;
  const [post, setPost] = useState({});

  useEffect(() => {
    const postData = findPostById(postId);

    setPost(postData);
  }, [postId]);

  if (post == null) {
    return <p>Loading...</p>;
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
      <div className="text-center">
        <p>{post.postContent}</p>
      </div>
    </section>
  );
};
