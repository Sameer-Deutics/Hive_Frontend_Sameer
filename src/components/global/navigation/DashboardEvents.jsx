import { useState, useEffect, useRef } from "react";
import moment from "moment";
import { LoadingPosts } from "./LoadingPosts";

const DashboardEvents = ({ events, setPage, loading, hasMoreEvents }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const containerRef = useRef(null);

  let filteredData = () => {
    const formattedDate = events.map((each) => {
      return moment(each.date).format("MMMM DO YYYY");
    });
    const filteredEvents =
      activeButton === 0
        ? events.filter((event) =>
            moment(event.date).isBetween(
              moment().startOf("day"), // Start of today
              moment().add(30, "days").endOf("day"), // End of 30th day from today
              undefined,
              "[]"
            )
          )
        : events.filter(
            (event) => moment(event.date).isBefore(moment().startOf("day")) // Events older than today
          );

    // Sort events by priority: events within 1 to 30 days at the top
    filteredEvents.sort((a, b) => {
      const aIsWithinRange = moment(a.date).isBetween(
        moment(),
        moment().add(30, "days")
      );
      const bIsWithinRange = moment(b.date).isBetween(
        moment(),
        moment().add(30, "days")
      );

      if (aIsWithinRange && !bIsWithinRange) {
        return -1;
      } else if (!aIsWithinRange && bIsWithinRange) {
        return 1;
      } else {
        // Reverse the order for "Upcoming" button
        return moment(b.date).diff(moment(a.date));
      }
    });

    setFilteredEvents(filteredEvents);
  };

  useEffect(() => {
    filteredData();
  }, [activeButton, events]);

  useEffect(() => {
    // Update active button when data is fetched
    if (events.length > 0 && filteredEvents.length === 0) {
      // If no events available in filteredEvents, set activeButton to 1 (Upcoming)
      setActiveButton(1);
    }
  }, [events, filteredEvents]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // handle scrolling
  const handleScroll = () => {
    if (hasMoreEvents && containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const bottomOffset = scrollHeight - (scrollTop + clientHeight);
      if (bottomOffset < 100) {
        // Trigger setPage to fetch more events
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div className="bg-[#F9F9F9] rounded-xl p-2">
      <div className="mx-auto max-w-7xl pt-2">
        <div className="grid grid-cols-2 px-6 border-b-2 pb-3">
          <div>
            <h2 className="text-3xl lg:font-semibold md:text-lg text-black">
              Events
            </h2>
          </div>
          <div className="rounded-2xl flex items-center justify-around gap-2">
            <button
              className={`pt-0.1 pb-1 rounded-l-2xl ${
                activeButton === 0 ? "text-white" : "text-black"
              } w-24 ${
                events.length === 0 && activeButton === 0
                  ? "bg-[#08A5DE] w-48"
                  : activeButton === 0
                  ? "bg-[#08A5DE]"
                  : "bg-white"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              {events.length === 0 && activeButton === 0
                ? "Active (no data)"
                : "Active"}
            </button>
            <button
              className={`pt-0.1 pb-1 rounded-r-2xl ${
                activeButton === 0 ? "text-black" : "text-white"
              } w-24 ${
                events.length === 0 && activeButton === 1
                  ? "bg-red-300 w-48"
                  : activeButton === 1
                  ? "bg-[#08A5DE]"
                  : "bg-white"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              {events.length === 0 && activeButton === 1
                ? "Upcoming (No Data)"
                : "Upcoming"}
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="mx-auto overflow-y-auto lg:h-[55vh] md:h-[50vh] sm:h-[45vh] h-[40vh] example scrollbar"
        >
          {events.map((value, index) => {
            const attendingStudents = value.attending_students || 0;
            const nonAttendingStudents = value.non_attending_students || 0;
            const skepticalStudents = value.skeptical_students || 0;
            const totalStudents =
              attendingStudents + nonAttendingStudents + skepticalStudents;

            const attendingPercentage =
              totalStudents > 0
                ? ((attendingStudents / totalStudents) * 100).toFixed(1)
                : "0";
            const nonAttendingPercentage =
              totalStudents > 0
                ? ((nonAttendingStudents / totalStudents) * 100).toFixed(1)
                : "0";
            const skepticalPercentage =
              totalStudents > 0
                ? ((skepticalStudents / totalStudents) * 100).toFixed(1)
                : "0";

            return (
              <div key={index}>
                <div className="grid grid-cols-2 px-6 pt-3">
                  <div>
                    <h2 className="text-base font-medium text-black">
                      {value.name}
                      {value.id.toString()}
                    </h2>
                    <h2 className="text-sm font-light text-black">
                      {moment(value.date).format("MMMM Do YYYY, h a")}
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
                    <button className="border border-[#08A5DE] text-black bg-[#CCF0FD] text-center lg:px-9 md:px-5 sm:px-10 px-7 py-1.5 text-semibold rounded-xl pb-2">
                      {attendingPercentage}%
                    </button>
                    <h2 className="text-center text-sm pt-1">Attending</h2>
                  </div>
                  <div>
                    <button className="border border-[#A2C73B] text-black bg-[#E9FAB9] text-center lg:px-9 md:px-5 sm:px-10 px-7 py-1.5 text-semibold rounded-xl pb-2">
                      {nonAttendingPercentage}%
                    </button>
                    <h2 className="text-center text-sm pt-1">Maybe</h2>
                  </div>
                  <div>
                    <button className="border border-[#F29200] text-black bg-[#FFDCA8] text-center lg:px-9 md:px-5 sm:px-10 px-7 py-1.5 text-semibold rounded-xl pb-2">
                      {skepticalPercentage}%
                    </button>
                    <h2 className="text-center text-sm pt-1">Undecided</h2>
                  </div>
                </div>
              </div>
            );
          })}
          {/* loading */}
          {loading && <LoadingPosts />}
        </div>
      </div>
    </div>
  );
};

export default DashboardEvents;
