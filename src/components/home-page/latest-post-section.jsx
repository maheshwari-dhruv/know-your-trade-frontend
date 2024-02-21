import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const LatestPostSection = ({ posts }) => {
  const [firstPostData, setFirstPostData] = useState({});
  const [restOfPostsData, setRestOfPostsData] = useState([]);

  useEffect(() => {
    const firstPost = posts[0];
    const restOfPosts = posts.slice(1, 5);

    setFirstPostData(firstPost);
    setRestOfPostsData(restOfPosts);
  }, [posts]);

  return firstPostData == undefined ? (
    <p>Loading</p>
  ) : (
    <section className="mt-4">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-3/4">
            <Link
              to={`/post/${firstPostData.postTitle}`}
              state={{ postId: firstPostData.postId }}
            >
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem]"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80"
                alt="main-post"
              />
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase">{firstPostData.category}</p>
                <h1 className="max-w-lg text-2xl font-semibold leading-tight">
                  {firstPostData.postTitle}
                </h1>
                <p className="text-sm uppercase">{firstPostData.createdAt}</p>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/4">
            {restOfPostsData.map((post) => (
              <div key={post.postId}>
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/post/${post.postTitle}`}
                    state={{ postId: post.postId }}
                  >
                    <h3 className="capitalize">{post.category}</h3>
                    <span>{post.postTitle}</span>
                    <p className="capitalize">{post.createdAt}</p>
                  </Link>
                </div>

                <hr className="my-4 border-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

LatestPostSection.propTypes = {
  posts: PropTypes.array,
};
