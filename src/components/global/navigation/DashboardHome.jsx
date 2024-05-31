import { useState, useEffect, useRef, useCallback } from "react";
import DashboardFilters from "../../dashboard/DashboardFilters";
import DashbordEvents from "./DashboardEvents";
import Calender from "./Calender";
import axiosInstance from "../../../utils/apiCalls/axiosInstance";

const DashboardHome = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeEventsIndex, setActiveEventsIndex] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [dataToMap, setDataToMap] = useState([]);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreEvents, setHasMoreEvents] = useState(true);

  const NUM_PER_PAGE = 4;

  const fetchEvents = useCallback(async () => {
    const offset = (page - 1) * NUM_PER_PAGE;
    const endpoint = `/event/activity?limit=${NUM_PER_PAGE}&offset=${offset}`;
    setLoading(true);
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axiosInstance(access_token).get(endpoint);
      console.log(response.data.results, "offset data");
      setNewData(response.data.results);
      if (response.data.results.length === 0) {
        // If no more events are fetched, set hasMoreEvents to false
        setHasMoreEvents(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  useEffect(() => {
    if (filtered.length > 0) {
      setDataToMap(filtered);
    } else {
      setDataToMap((prevData) => [...prevData, ...newData]);
    }
  }, [filtered, newData]);

  const filterFunc = (array) => {
    const result = newData?.filter((event) => {
      return (
        (!array[0]?.label || event?.campus === array[0]?.label) &&
        (!array[1]?.label || event?.city === array[1]?.label) &&
        (!array[2]?.label || event?.region === array[2]?.label)
      );
    });
    setFiltered(result);
  };

  return (
    <div className="lg:w-full md:w-full sm:w-full w-full">
      <div className="mt-3">
        <DashboardFilters setFilters={filterFunc} />
      </div>

      <div className="w-full flex gap-5 mt-4 lg:flex-row md:flex-row flex-row">
        <button
          className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
            activeButton === 0
              ? "bg-[#08A5DE] text-white"
              : "bg-gray-100 text-gray-400"
          }`}
          onClick={() => setActiveButton(0)}
        >
          Ace Coordinator Report
        </button>
        <button
          className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
            activeButton === 1
              ? "bg-[#08A5DE] text-white"
              : "bg-zinc-300 text-zinc-400"
          }`}
          onClick={() => setActiveButton(1)}
        >
          Career Advisor Report
        </button>
      </div>

      <div className="mt-3 flex gap-3 lg:hidden md:hidden sm:flex mx-10">
        <button
          className={`px-10 py-1.5 ml-2 rounded-[50px] text-xs font-light ${
            activeEventsIndex === 0
              ? "bg-[#08A5DE] text-white"
              : "bg-gray-100 text-gray-400"
          }`}
          onClick={() => setActiveEventsIndex(0)}
        >
          Events
        </button>
        <button
          className={`px-10 py-1.5 ml-8 rounded-[50px] text-xs font-light ${
            activeEventsIndex === 1
              ? "bg-[#08A5DE] text-white"
              : "bg-zinc-300 text-zinc-400"
          }`}
          onClick={() => setActiveEventsIndex(1)}
        >
          Calendar
        </button>
      </div>

      <div className="lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid gap-3 mt-5 h-[60vh]">
        {activeEventsIndex === 0 && (
          <div className={`lg:block md:block`}>
            <DashbordEvents
              aciveEventsIndex={setActiveEventsIndex}
              events={dataToMap}
              setPage={setPage}
              loading={loading && hasMoreEvents} // Show loading only if there are more events to load
            />
          </div>
        )}

        <div
          className={`lg:block md:block ${
            activeEventsIndex === 1 ? "block" : "hidden"
          }`}
        >
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

//
// import { useState, useEffect, useRef, useCallback } from "react";
// import DashboardFilters from "../../dashboard/DashboardFilters";
// import DashbordEvents from "./DashboardEvents";
// import Calender from "./Calender";
// import axiosInstance from "../../../utils/apiCalls/axiosInstance";

// const DashboardHome = () => {
//   const [activeButton, setActiveButton] = useState(0);
//   const [activeEventsIndex, setActiveEventsIndex] = useState(0);
//   const [filtered, setFiltered] = useState([]);
//   const [dataToMap, setDataToMap] = useState([]);
//   const [page, setPage] = useState(1);
//   const [newData, setNewData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasMoreEvents, setHasMoreEvents] = useState(true);

//   const NUM_PER_PAGE = 4;

//   const fetchEvents = useCallback(async () => {
//     const offset = (page - 1) * NUM_PER_PAGE;
//     const endpoint = `/event/activity?limit=${NUM_PER_PAGE}&offset=${offset}`;
//     setLoading(true);
//     try {
//       const access_token = localStorage.getItem("access_token");
//       const response = await axiosInstance(access_token).get(endpoint);
//       console.log(response.data.results, "offset data");
//       setNewData(response.data.results);
//       if (response.data.results.length === 0) {
//         // If no more events are fetched, set hasMoreEvents to false
//         setHasMoreEvents(false);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }, [page]);

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   useEffect(() => {
//     if (filtered.length > 0) {
//       setDataToMap(filtered);
//     } else {
//       setDataToMap((prevData) => [...prevData, ...newData]);
//     }
//   }, [filtered, newData]);

//   const filterFunc = (array) => {
//     const result = newData?.filter((event) => {
//       return (
//         (!array[0]?.label || event?.campus === array[0]?.label) &&
//         (!array[1]?.label || event?.city === array[1]?.label) &&
//         (!array[2]?.label || event?.region === array[2]?.label)
//       );
//     });
//     setFiltered(result);
//   };

//   return (
//     <div className="lg:w-full md:w-full sm:w-full w-full">
//       <div className="mt-3">
//         <DashboardFilters setFilters={filterFunc} />
//       </div>

//       <div className="w-full flex gap-5 mt-4 lg:flex-row md:flex-row flex-row">
//         <button
//           className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
//             activeButton === 0
//               ? "bg-[#08A5DE] text-white"
//               : "bg-gray-100 text-gray-400"
//           }`}
//           onClick={() => setActiveButton(0)}
//         >
//           Ace Coordinator Report
//         </button>
//         <button
//           className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
//             activeButton === 1
//               ? "bg-[#08A5DE] text-white"
//               : "bg-zinc-300 text-zinc-400"
//           }`}
//           onClick={() => setActiveButton(1)}
//         >
//           Career Advisor Report
//         </button>
//       </div>

//       <div className="mt-3 flex gap-3 lg:hidden md:hidden sm:flex mx-10">
//         <button
//           className={`px-10 py-1.5 ml-2 rounded-[50px] text-xs font-light ${
//             activeEventsIndex === 0
//               ? "bg-[#08A5DE] text-white"
//               : "bg-gray-100 text-gray-400"
//           }`}
//           onClick={() => setActiveEventsIndex(0)}
//         >
//           Events
//         </button>
//         <button
//           className={`px-10 py-1.5 ml-8 rounded-[50px] text-xs font-light ${
//             activeEventsIndex === 1
//               ? "bg-[#08A5DE] text-white"
//               : "bg-zinc-300 text-zinc-400"
//           }`}
//           onClick={() => setActiveEventsIndex(1)}
//         >
//           Calendar
//         </button>
//       </div>

//       <div className="lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid gap-3 mt-5 h-[60vh]">
//         {activeEventsIndex === 0 && (
//           <div className={`lg:block md:block`}>
//             <DashbordEvents
//               aciveEventsIndex={setActiveEventsIndex}
//               events={dataToMap}
//               setPage={setPage}
//               loading={loading && hasMoreEvents} // Show loading only if there are more events to load
//             />
//           </div>
//         )}

//         <div
//           className={`lg:block md:block ${
//             activeEventsIndex === 1 ? "hidden" : "block"
//           }`}
//         >
//           <Calender />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
