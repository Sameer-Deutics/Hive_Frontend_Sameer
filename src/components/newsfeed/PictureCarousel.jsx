import { useState } from "react";
import University from "../../assets/University.png";

const PictureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-64 overflow-hidden rounded-lg ">
        {/* Item 1 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 0 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src={University}
            className="absolute block w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-cover bg-no-repeat object-contain   "
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 1 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s"
            className="absolute block w-[100%]  h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-cover bg-no-repeat object-contain "
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 2 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkwS4plhmRHFyTuBM5LcRE92T1nGUwGun4w&s"
            className="absolute block w-[100%] h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-cover bg-no-repeat object-contain  "
            alt="..."
          />
        </div>
        {/* Item 4 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 3 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s"
            className="absolute block w-[100%]  h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-cover bg-no-repeat object-contain "
            alt="..."
          />
        </div>
        {/* Item 5 */}
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 4 ? "" : "hidden"
          }`}
          data-carousel-item
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tiBRwyGODtpBUM-7BcJoZNxbJqK84BqtZg&s"
            className="absolute block w-[100%]  h-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-cover bg-no-repeat object-contain "
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={currentSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default PictureCarousel;
