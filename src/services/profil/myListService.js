import { apiClient } from "../apiClient";

export const fetchMovies = async () => {
  try {
    const response = await apiClient.get(`/category/1/movies`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const deleteMovies = async (id, categoryId) => {
  try {
    await apiClient.delete(`category/${categoryId}/movies/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
};
