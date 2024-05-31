import React from "react";

const NewsFeedCreatePost = () => {
  return (
    <>
      <div className="flex bg-[#F2F2F2] h-16 rounded-2xl items-center mt-3 lg:w-5/6">
        <div className="mx-5">
          <div className="relative w-10 h-10 overflow-hidden bg-[#F2F2F2] rounded-full ml-2">
            <img
              className="absolute w-12 h-12 text-gray-400 bg-cover bg-no-repeat object-cover "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkwS4plhmRHFyTuBM5LcRE92T1nGUwGun4w&s"
            />
          </div>
        </div>

        <div className="flex items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex justify-center w-[95%] h-10 rounded-2xl cursor-pointer bg-[#FFFFFF]"
          >
            <div className="flex items-center gap-1">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 000-6h-.025A5.56 5.56 0 0016 6.5 5.5 5.5 0 005.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 000 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Create a Post</span>
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </>
  );
};

export default NewsFeedCreatePost;
