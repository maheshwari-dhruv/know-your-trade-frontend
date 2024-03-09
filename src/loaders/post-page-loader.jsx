const postApi = "http://localhost:8080/api/v1/post/individual/";

export const postPageLoader = async ({ params, request, state }) => {
  const { postTitle, postId } = params;
  console.log(params);
  console.log(postTitle);
  console.log(postId);
  console.log(request);
  console.log(state);

  try {
    const response = await fetch(postApi + postId);

    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(
        `API response indicated failure (resultCode: ${data.resultCode}, resultStatus: ${data.resultStatus}, resultMsg: ${data.resultMsg})`
      );
    }

    console.log("Loader Result: ", data.data.postDTO[0]);

    return data.data.postDTO[0] || [];
  } catch (error) {
    console.error(error.message);
  }
};
