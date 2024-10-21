// import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

import newRelease from "../../../store/beranda/newRelease";
import myList from "../../../store/profil/myList";
// import newRelease from "../../../databases/beranda/newRelease.json";
// import myList from "../../../databases/profil/myList.json";

import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Realese = () => {
  const { movies } = newRelease();
  const { addToMyList } = myList();
  // const navigate = useNavigate();
  // const [movies, setMovies] = useState([]);
  // const [myList, setMyList] = useState([]);

  // useEffect(() => {
  //   setMovies(newRelease);
  // }, []);

  const handleAddToMyList = (id) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      addToMyList(movie);
      // navigate("/profil");
    } else {
      toast.error("Film Tidak Ditemukan!");
    }
  };

  return (
    <div>
      <section className="relative p-2 text-white overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
            Rilis Baru
          </h3>

          <div className="relative flex gap-5 md:gap-8 mb-4 w-full overflow-scroll md:overflow-hidden">
            {movies.map((movie) => (
              <div key={movie.id} className="relative">
                <div className="w-[95px] md:w-[234px]">
                  <img src={movie.poster} alt="image" />
                </div>

                <button
                  onClick={() => handleAddToMyList(movie.id)}
                  className="z-10 cursor-pointer absolute bg-info hover:bg-infoHover w-[44.56px] md:w-[120px] h-[14px] md:h-[35px] rounded-[12px] md:rounded-[24px] top-16 md:top-40 left-7 md:left-16 flex justify-center items-center"
                >
                  <p className="text-[5.74px] md:text-[14px]">+ Daftar Saya</p>
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
        <div className="absolute flex justify-between w-full top-[9rem] md:top-[18rem]">
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
};

export default Realese;
