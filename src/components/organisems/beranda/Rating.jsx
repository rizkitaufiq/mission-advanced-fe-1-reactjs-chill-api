import { toast } from "react-toastify";

import topRating from "../../../store/beranda/topRating";
import myList from "../../../store/profil/myList";

import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Rating = () => {
  const { movies } = topRating();
  const { addToMyList } = myList();

  const handleAddToMyList = (id) => {
    const movie = movies.find((movie) => movie.id === id);
    if (movie) {
      addToMyList(movie);
    } else {
      toast.error("Film Tidak Ditemukan!");
    }
  };

  return (
    <div>
      <section className="relative p-2 text-white overflow-hidden">
        <div className="p-4">
          <h3 className="text-white font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
            Top Rating Film dan Series Hari ini
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

export default Rating;
