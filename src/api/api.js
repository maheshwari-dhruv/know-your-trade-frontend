import axios from "axios";

async function fetchData(url) {
  try {
    const response = await axios.get(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }

    if (!response.success) {
      throw new Error(
        `API response indicated failure (resultCode: ${response.data.resultCode}, resultStatus: ${response.data.resultStatus}, resultMsg: ${response.data.resultMsg})`
      );
    }

    return response.data.postDTO;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default fetchData;
