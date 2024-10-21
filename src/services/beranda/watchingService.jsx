// import axiosInstance from "../axiosInstance";
import axios from "axios";

const fetchMovies = async () => {
  const BASE_URL = import.meta.env.REACT_APP_BASE_URL;
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    // const response = await axiosInstance.get("/movies");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export default fetchMovies;
