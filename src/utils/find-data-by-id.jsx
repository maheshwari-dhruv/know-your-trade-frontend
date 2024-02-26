import data from "../assets/data/data.json";

const findPostById = (postId) => {
  const filteredPosts = data.filter((post) => post.postId === postId);

  if (filteredPosts.length > 0) {
    return filteredPosts[0];
  } else {
    return null;
  }
};

export default findPostById;
