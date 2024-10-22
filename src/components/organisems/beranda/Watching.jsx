import { useState, useEffect } from "react";
// import axios from "axios";

// import watchingMovies from "../../../store/beranda/watchingMovies";
import { fetchMovies } from "../../../services/beranda/watchingService";

import Star from "../../../assets/images/beranda/icon/star.svg";
import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

function Watching() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  });

  const fetchMoviesData = async () => {
    try {
      const data = await fetchMovies();
      console.log("Fetched Movies:", data);
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

  return (
    <div>
      <section className="relative p-2 text-white w-full overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-0 mb-4">
            Melanjutkan Tonton Film
          </h3>

          <div className="relative flex gap-3 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="relative">
                <h6 className="absolute bottom-3 left-4 text-[14px] md:text-[18px]">
                  {movie.title}
                </h6>
                <div className="w-[309px] md:w-[302px]">
                  <img src={movie.poster} alt={`${movie.titles}`} />
                </div>
                <img
                  src={Star}
                  alt="image"
                  className="absolute bottom-3 right-14"
                />
                <p className="absolute bottom-3 right-4">{movie.rating}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex justify-between w-full top-[9rem] md:top-[9rem]">
          <div className="flex w-[44px] -ml-2">
            <img src={leftArrow} alt="image" />
          </div>

          <div className="flex w-[44px] mr-2">
            <img src={rightArrow} alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Watching;
