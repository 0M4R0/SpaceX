const API_URL = "https://api.spacexdata.com/v3";

// Fetch data
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// Get all launches (`${API_URL}/launches`)
export const getAllLaunches = () => fetchData(`${API_URL}/launches`);

// Get a specific launch by ID (`${API_URL}/launches/${id}`)
export const getLaunchById = (id) => fetchData(`${API_URL}/launches/${id}`);
