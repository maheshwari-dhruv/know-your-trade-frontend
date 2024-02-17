const fetchData = async () => {
  try {
    const response = await fetch("../assets/data/data.json");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the components
  }
};

export default fetchData;
