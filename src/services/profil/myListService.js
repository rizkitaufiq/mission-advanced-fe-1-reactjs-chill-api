import { toast } from "react-toastify";

import { apiClient } from "../apiClient";

// export const moviesData = async () => {
//   try {
//     const response = await fetch("/movies");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//     return [];
//   }
// };

// export const myListData = async () => {
//   try {
//     const response = await fetch("/myList");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching mylist:", error);
//     return [];
//   }
// };

export const fetchMovies = async () => {
  try {
    // const movies = await moviesData();
    // const fetchMyList = myList.map((item) => {
    //   const movieDetails = movies.find((data) => data.id === item.movieId);
    //   return {
    //     ...item,
    //     movieDetails: movieDetails || {},
    //   };
    // });

    // const myList = await myListData();
    // const movieId = myList.map((item) => item.movieId);

    const response = await apiClient.get(`/myList`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const createMovie = async (movie) => {
  try {
    const movies = await fetchMovies();
    const exists = movies.find((item) => item.movieId === movie.id);
    // const exists = movie.categoryId !== 1;

    if (!exists) {
      await apiClient.post(`/myList`, {
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster,
        status: movie.status,
        trending: movie.trending,
        rating: movie.rating,
      });
      toast.success(`${movie.title} berhasil di tambahkan ke daftar anda!`);
    } else {
      toast.error(`${movie.title} sudah ada di daftar anda!`);
    }
  } catch (error) {
    console.error("Error data:", error);
    throw error;
  }
};

export const deleteMovies = async (id, categoryId) => {
  try {
    await apiClient.delete(`category/${categoryId}/movies/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Gagal menghapus film:", error);
  }
};
