const postApi = "http://localhost:8080/api/v1/post/individual/";

// fetchPost.js
export const fetchPost = async (id) => {
  try {
    const response = await fetch(postApi + `${id}`);

    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(
        `API response indicated failure (resultCode: ${data.resultCode}, resultStatus: ${data.resultStatus}, resultMsg: ${data.resultMsg})`
      );
    }

    return data.data.postDTO[0];
  } catch (error) {
    console.log(error.message);
  }
};
