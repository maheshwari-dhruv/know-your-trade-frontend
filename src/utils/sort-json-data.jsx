const sortPostData = (data) => {
  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  return sortedData;
};

export default sortPostData;
