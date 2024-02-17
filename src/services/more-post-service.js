const getMorePostData = (data) => {
  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  // Take the top 5 posts
  const top5Posts = sortedData.slice(6, 12);
  console.log(top5Posts);
  return top5Posts;
};

export default getMorePostData;
