// import DashboardBtnInputs from "./DashboardBtnInputs"
import { useState } from "react";
// import DashboardFilters from "./Dashboard/DashboardFilters"
import University from "../../../assets/University.png";
import { AiOutlineLike } from "react-icons/ai";
import { SlDislike } from "react-icons/sl";
import DeleteSvg from "../../../assets/svgs//DeleteSvg";
import UpdateSvg from "../../../assets/svgs/UpdateSvg";

const NewsFeeds = () => {
  const [activeButton, setActiveButton] = useState(false);
  const [disLike, setDisLike] = useState(false);

  return (
    <div className="">
      <div className="lg:block md:block sm:hidden hidden mt-5 w-11/12">
        {/* md:w-full sm:w-full w-full */}
        <div className="flex md:w-full sm:w-full w-full items-center gap-2 lg:flex-row md:flex-row  sm:flex-col flex-col">
          <h4>Filters</h4>

          {/* lg:flex-row md:flex-row sm:flex-col flex-col */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2  ">
            {/* 1 */}
            <form className="max-w-sm mx-auto  ">
              <select
                id="countries"
                className="border lg:w-40 md:w-32 sm:w-40 w-28 border-gray-300  text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-1 bg-white text-black "
              >
                <option selected>Nationwide</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
                <option value="3">France</option>
                <option value="4">Germany</option>
              </select>
            </form>

            {/* 2 */}
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-40 md:w-32 sm:w-40 w-28 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-1 bg-white text-black "
              >
                <option selected>Region</option>
                <option value="1">North</option>
                <option value="2">South</option>
                <option value="3">East</option>
                <option value="4">West</option>
              </select>
            </form>

            {/* 3 */}
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-40 md:w-32 sm:w-40 w-28 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-1 bg-white text-black  "
              >
                <option selected>City</option>
                <option value="1">Lahore</option>
                <option value="2">Islamabad</option>
                <option value="3">Karachi</option>
                <option value="4">Multan</option>
              </select>
            </form>

            {/* 4 */}
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-40 md:w-32 sm:w-40 w-28 border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block p-1 bg-white text-black "
              >
                <option selected>Campus</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
                <option value="3">France</option>
                <option value="4">Germany</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      {/* <DashboardFilters/> */}

      <div className="flex bg-white h-16 rounded-2xl  items-center mt-3 w-11/12">
        <div className="mx-5">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center w-full  ">
          <label
            for="dropzone-file"
            className="flex justify-center w-[95%] h-10 border-2 border-gray-300  rounded-2xl cursor-pointer bg-[#F9F9F9] "
          >
            <div className="flex items-center gap-1 ">
              <svg
                className="w-6 h-6  text-gray-500 dark:text-gray-400"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeHinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-gray-500 ">
                <span className="font-semibold">Create a Post</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white mt-2 rounded-2xl py-3 w-11/12 ">
        {/*  */}
        <div className="flex justify-between items-center p-2">
          <div className="flex mx-3 gap-3 ">
            <div className="relative  w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="flex flex-col  ">
              <h6 className="text-md cursor-pointer">Awaiz Ali Khan</h6>
              <h6 className="text-xs font-lighter">20h</h6>
            </div>
          </div>
          {/*  */}
          <div className="flex mx-5">
            <h6 className="text-xs font-lighter mx-3">
              <DeleteSvg />
            </h6>
            <h6 className="text-xs font-lighter">
              <UpdateSvg />
            </h6>
          </div>
        </div>

        {/* heading */}
        <div className="mx-6">
          <p className="text-md font-light w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            lorem sed sem?
          </p>
        </div>

        {/* img */}
        <div className="mx-6 mt-5 ">
          <img src={University} alt="" className="w-[80vw]" />
        </div>

        <div className="mx-6  flex gap-2 mt-5 ">
          <button
            className={`${
              activeButton ? "bg-[#CCF0FD]" : ""
            }  border border-[#09A5E0] px-5 py-2  rounded-2xl flex items-center gap-2`}
            onClick={() => setActiveButton(!activeButton)}
          >
            <AiOutlineLike
              className={` ${
                activeButton ? "text-blue-500" : "text-black"
              } h-5 w-5 `}
            />
            21
          </button>
          {/*  */}
          <button
            className={`${
              disLike ? "bg-[#CCF0FD] border border-[#09A5E0]" : ""
            }   px-5 py-2  rounded-2xl flex items-center gap-2`}
            onClick={() => setDisLike(!disLike)}
          >
            <SlDislike
              className={` ${
                disLike ? "text-blue-500 " : "text-black "
              } h-5 w-5`}
            />
            7
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
