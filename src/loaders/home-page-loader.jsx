const api = "http://localhost:8080/api/v1/post/all";

export const homePageLoader = async () => {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(
        `API response indicated failure (resultCode: ${data.resultCode}, resultStatus: ${data.resultStatus}, resultMsg: ${data.resultMsg})`
      );
    }

    return data.data.postDTO || [];
  } catch (error) {
    console.error(error.message);
  }
};
