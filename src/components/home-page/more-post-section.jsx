import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const MorePostSection = ({ posts }) => {
  const [morePostData, setMorePostData] = useState([]);

  useEffect(() => {
    const moreData = posts.slice(5, 11);
    setMorePostData(moreData);
  }, [posts]);

  if (!morePostData) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-black capitalize lg:text-3xl">
          More Blogs
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-4 md:mt-8 md:grid-cols-2">
          {morePostData.map((post) => (
            <div key={post.postId} className="lg:flex">
              <img
                className="object-cover w-full h-56 lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="post-post"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <span className="text-sm text-black">{post.category}</span>
                <a
                  href={`/post/${post.postTitle}`}
                  className="text-xl font-semibold text-black"
                >
                  {post.postTitle}
                </a>
                <span className="text-sm text-black">{post.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

MorePostSection.propTypes = {
  posts: PropTypes.array,
};
