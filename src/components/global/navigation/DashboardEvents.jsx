import { useState, useEffect, useRef } from "react";
import moment from "moment";
import axiosInstance from "../../../utils/apiCalls/axiosInstance";
import clsx from "clsx";
import useLazyLoad from "./Hooks/useLazyLoad";
import { LoadingPosts } from "./LoadingPosts";

const DashbordEvents = ({ events, aciveEventsIndex }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const triggerRef = useRef(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    aciveEventsIndex(index);
  };

  const accessToken = "your-access-token";

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance(accessToken).get(
        "/events/activity/"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const NUM_PER_PAGE = 6;
  const TOTAL_PAGES = Math.ceil(events.length / NUM_PER_PAGE);

  const onGrabData = (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIdx = (page - 1) * NUM_PER_PAGE;
        const endIdx = startIdx + NUM_PER_PAGE;
        const dataToLoad = events.slice(startIdx, endIdx);
        resolve(dataToLoad);
      }, 1000);
    });
  };

  const { data, loading } = useLazyLoad({
    triggerRef,
    onGrabData,
    currentPage,
    setCurrentPage,
    totalPages: TOTAL_PAGES,
  });

  return (
    <div className="bg-white rounded-xl p-2">
      <div className="mx-auto max-w-7xl pt-2">
        <div className="grid grid-cols-2 px-6 border-b-2 pb-3">
          <div>
            <h2 className="text-3xl font-semibold text-black">Events</h2>
          </div>
          <div className="rounded-2xl flex items-center justify-around gap-2">
            <button
              className={`pt-0.1 pb-1 rounded-l-2xl ${
                activeButton === 0 ? "text-white" : "text-black"
              } w-28 ${activeButton === 0 ? "bg-[#08A5DE]" : "bg-white"}`}
              onClick={() => handleButtonClick(0)}
            >
              Active
            </button>
            <button
              className={`pt-0.1 pb-1 rounded-r-2xl ${
                activeButton === 0 ? "text-black" : "text-white"
              } w-28 ${activeButton === 1 ? "bg-[#08A5DE]" : "bg-white"}`}
              onClick={() => handleButtonClick(1)}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className="mx-auto overflow-y-auto lg:h-[48vh] md:h-[50vh] h-[250px] example scrollbar">
          {data.map((value, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 px-6 pt-3">
                <div>
                  <h2 className="text-base font-medium text-black">
                    {value.heading}
                  </h2>
                  <h2 className="text-sm font-light text-black">
                    {moment().format("MMMM Do YYYY, h:mm:ss a")}
                  </h2>
                </div>
                <div className="rounded-2xl flex place-items-center justify-end">
                  <button className="border border-[#08A5DE] pt-0.1 pb-1 rounded-2xl text-[#08A5DE] w-[110px]">
                    {activeButton === 0 ? "Active" : "Upcoming"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 place-items-center justify-between pt-5 border-b-2 pb-3">
                <div>
                  <button className="border border-[#08A5DE] text-black bg-[#CCF0FD] sm:px-8 px-6 py-1.5 text-semibold rounded-xl pb-2">
                    {value.attending}
                  </button>
                  <h2 className="text-center text-sm pt-1">Attending</h2>
                </div>
                <div>
                  <button className="border border-[#A2C73B] text-black bg-[#E9FAB9] sm:px-8 px-6 py-1.5 text-semibold rounded-xl pb-2">
                    {value.maybe}
                  </button>
                  <h2 className="text-center text-sm pt-1">Maybe</h2>
                </div>
                <div>
                  <button className="border border-[#F29200] text-black bg-[#FFDCA8] sm:px-8 px-6 py-1.5 text-semibold rounded-xl pb-2">
                    {value.undecided}
                  </button>
                  <h2 className="text-center text-sm pt-1">Undecided</h2>
                </div>
              </div>
            </div>
          ))}
          <div
            ref={triggerRef}
            className={clsx("trigger", { visible: loading })}
          >
            <LoadingPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordEvents;
