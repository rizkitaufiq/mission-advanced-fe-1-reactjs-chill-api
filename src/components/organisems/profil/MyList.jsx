import { useState, useEffect } from "react";

import {
  fetchMovies,
  deleteMovies,
} from "../../../services/profil/myListService";

const MyList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  });

  const fetchMoviesData = async () => {
    try {
      const data = await fetchMovies();
      // console.log("Fetched Movies:", data);
      setMovies(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching movies:", error);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleDeleteMovie = async (movie) => {
    const check = movies.find((data) => data.id === movie.id);
    if (
      check &&
      window.confirm("Yakin Menghapus Film Ini dari Daftar List Anda ?")
    ) {
      await deleteMovies(movie);
    }
  };

  return (
    <div>
      <section className="relative p-2 text-white overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
            Daftar Saya
          </h3>

          <div className="relative flex flex-wrap gap-2 md:gap-5 mb-4 w-full max-h-[300px] lg:max-h-max overflow-y-scroll md:overflow-hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="relative w-1/7">
                <div className="w-[95px] lg:w-[300px] h-[145px] lg:h-[300px]">
                  <img src={movie.poster} alt="image" />
                </div>

                <button
                  onClick={() => handleDeleteMovie(movie)}
                  className="z-10 cursor-pointer absolute bg-error hover:bg-gray w-[44.56px] md:w-[120px] h-[14px] md:h-[35px] rounded-[12px] md:rounded-[24px] top-8 md:top-24 left-7 md:left-24 flex justify-center items-center"
                >
                  <p className="text-[5.74px] md:text-[14px]">- Daftar Saya</p>
                </button>

                <div
                  className={`${
                    movie.status == "" ? "hidden" : ""
                  } absolute bg-info w-[44.56px] md:w-[104px] h-[14px] md:h-[28px] rounded-[12px] md:rounded-[24px] top-2 md:top-4 left-2 md:left-4 flex justify-center items-center`}
                >
                  <p className="text-[5.74px] md:text-[14px]">{movie.status}</p>
                </div>

                <div
                  className={`${
                    movie.trending == "" ? "hidden" : ""
                  } absolute bg-error w-[14.82px] md:w-[31px] h-[21.82px] md:h-[48px] rounded-tr-[1.91px] md:rounded-tr-[4px] rounded-bl-[1.91px] md:rounded-bl-[4px] top-0 md:top-0 right-1 md:right-3 flex justify-center items-center text-center`}
                >
                  <p className="text-[5.74px] md:text-[14px]">
                    {movie.trending}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyList;
