import { useState, useEffect } from "react";
import { getRequest } from "../../../utils/apiCalls/axiosAPI";
import Calender from "./Calender";
import DashboardFilters from "../../dashboard/DashboardFilters";
import DashbordEvents from "./DashboardEvents";
import axiosInstance from "../../../utils/apiCalls/axiosInstance";
import { active, upcoming } from "../../../dummyData";

const DashboardHome = () => {
  const [gettingData, setGettingData] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [activeEventsIndex, setActiveEventsIndex] = useState(0);
  const [events, setEvents] = useState(active);
  const [filtered, setFiltered] = useState([]);
  const [dataToMap, setDataToMap] = useState(active);

  useEffect(() => {
    setEvents(activeEventsIndex === 1 ? upcoming : active);
  }, [activeEventsIndex]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const getData = async () => {
    const response = await getRequest.get("/posts");
    setGettingData(response.data);
    console.log(response.data);
  };

  let accessToken = "your-access-token";

  const getEvents = async () => {
    const response = await axiosInstance(accessToken).get("/event/avtivity");
    console.log(response, "new api response");
  };

  useEffect(() => {
    getData();
    getEvents();
  }, []); // Run only once on component mount

  useEffect(() => {
    setDataToMap(filtered.length ? filtered : events);
  }, [filtered, events]);

  const filterFunc = (array) => {
    console.log("selections Array: ", array);
    console.log("Events to filter: ", events);

    const result = events?.filter((event) => {
      return (
        (!array[0]?.label || event?.campus === array[0]?.label) &&
        (!array[1]?.label || event?.city === array[1]?.label) &&
        (!array[2]?.label || event?.region === array[2]?.label)
      );
    });
    console.log(result, "Filtered events");
    setFiltered(result);
  };

  return (
    <div className=" lg:w-full md:w-full sm:w-full w-full ">
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
          onClick={() => handleButtonClick(0)}
        >
          Ace Coordinator Report
        </button>
        <button
          className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
            activeButton === 1
              ? "bg-[#08A5DE] text-white"
              : "bg-zinc-300 text-zinc-400"
          }`}
          onClick={() => handleButtonClick(1)}
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
          Calender
        </button>
      </div>

      <div className="lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid gap-3 mt-5 h-[60vh] ">
        {events && (
          <div
            className={`lg:block md:block ${
              activeEventsIndex === 1 ? "hidden" : "block"
            }`}
          >
            <DashbordEvents
              aciveEventsIndex={setActiveEventsIndex}
              events={dataToMap}
            />
          </div>
        )}

        <div
          className={`lg:block md:block ${
            activeEventsIndex === 0 ? "hidden" : "block"
          }`}
        >
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

// // import DashboardBtnInputs from "./DashboardBtnInputs"
// import { useState, useEffect } from "react";
// import { getRequest } from "../../../utils/apiCalls/axiosAPI";
// import Calender from "./Calender";
// // import Dashboardbuttons from "./Dashboard/Dashboardbuttons"
// import DashboardFilters from "../../dashboard/DashboardFilters";
// import DashbordEvents from "./DashboardEvents";
// import axiosInstance from "../../../utils/apiCalls/axiosInstance";
// import { active, upcoming } from "../../../dummyData";

// const DashboardHome = () => {
//   const [gettingData, setGettingData] = useState([]);

//   const [activeButton, setActiveButton] = useState(0);

//   const [activeEventsIndex, setActiveEventsIndex] = useState(0);

//   const [events, setEvents] = useState(
//     activeEventsIndex === 1 ? upcoming : active
//   );

//   const handleButtonClick = (index) => {
//     setActiveButton(index); // Update active button index
//   };

//   useEffect(() => {
//     setEvents(activeEventsIndex === 1 ? upcoming : active);
//   }, [activeEventsIndex]);

//   const EventsChange = (index) => {
//     setEvents(index); // Update active button index
//   };

//   const getData = async () => {
//     const response = await getRequest.get("/posts");
//     setGettingData(response.data);
//     console.log(gettingData);
//   };

//   let accessToken =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1OTQwMTM0LCJpYXQiOjE3MTUzMzUzMzQsImp0aSI6ImUwZjJlMjFjMzc2MjRjYzE5YWQ1Y2YyNTg3YzIyNzk5IiwidXNlcl9pZCI6MX0.1bsao2pNM-oLmSTMeQ20Bu6zvBXyh9fHuhZNJ37rI5I";

//   const getEvents = async () => {
//     const response = await axiosInstance(accessToken).get("/event/avtivity");
//     console.log(response, "new api response");
//   };

//   useEffect(() => {
//     getData();

//     getEvents();
//   }, [eventsToshow]);

//   const [filtered, setFiltered] = useState([]);
//   const [dataToMap, setDataToMap] = useState(events);

//   useEffect(() => {}, [dataToMap]);

//   const filterFunc = (array) => {
//     console.log("selections Array: ", array);
//     console.log("Events to filter: ", events);

//     const result = events?.filter((event) => {
//       return (
//         (!array[0]?.label || event?.campus === array[0]?.label) &&
//         (!array[1]?.label || event?.city === array[1]?.label) &&
//         (!array[2]?.label || event?.region === array[2]?.label)
//       );
//     });
//     console.log(result, "Filtered events");
//     setFiltered(result);
//     setDataToMap(filtered);
//   };

//   var eventsToshow = filtered === null ? active : filtered;

//   return (
//     <div className="lg:w-full md:w-full sm:w-full w-full ">
//       <div className="mt-3">
//         <DashboardFilters setFilters={filterFunc} />
//       </div>

//       {activeButton === 0 ? (
//         <>
//           {/* <Dashboardbuttons/> */}
//           <div className="w-full flex gap-5 mt-4 lg:flex-row md:flex-row  flex-row  ">
//             <button
//               className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
//                 activeButton === 0
//                   ? "bg-[#08A5DE] text-white"
//                   : "bg-gray-100 text-gray-400"
//               }`}
//               onClick={() => handleButtonClick(0)}
//             >
//               Ace Coordinator Report
//             </button>
//             <button
//               className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
//                 activeButton === 1
//                   ? "bg-[#08A5DE] text-white"
//                   : "bg-zinc-300 text-zinc-400"
//               }`}
//               onClick={() => handleButtonClick(1)}
//             >
//               Career Advisor Report
//             </button>
//           </div>

//           {/*  */}
//           <div className="mt-3 flex gap-3 lg:hidden md:block sm:block mx-10  ">
//             <button
//               className={` px-10 py-1.5 ml-2 rounded-[50px] text-xs font-light ${
//                 events === 0
//                   ? "bg-[#08A5DE] text-white"
//                   : "bg-gray-100 text-gray-400"
//               }`}
//               onClick={() => EventsChange(0)}
//             >
//               Events
//             </button>
//             <button
//               className={`px-10 py-1.5 ml-8 rounded-[50px] text-xs font-light ${
//                 events === 1
//                   ? "bg-[#08A5DE] text-white"
//                   : "bg-zinc-300 text-zinc-400"
//               }`}
//               onClick={() => EventsChange(1)}
//             >
//               Calender
//             </button>
//           </div>

//           <div className="grid lg:grid-cols-2 md:grid-col sm:grid-col grid-col  mt-5">
//             {events && (
//               <DashbordEvents
//                 // events={events}
//                 aciveEventsIndex={setActiveEventsIndex}
//                 events={dataToMap}
//               />
//             )}
//             <Calender />
//           </div>

//           {/* <div className='grid lg:grid-cols-2 md:grid-col sm:grid-col grid-col gap-4 mt-5'> */}
//           {/* {!events && (
//             <div className="lg:grid hidden lg:grid-cols-2 md:grid-col sm:grid-col grid-col gap-4 mt-5">
//               <DashbordEvents events={events} />

//               <div className=" ">
//                 <Calender />
//               </div>
//             </div>
//           )} */}

//           {/* {events === 0 ? (
//             <>
//               <div className="grid lg:grid-cols-2 lg:hidden sm:grid-col grid-col gap-4 mt-5 ">
//                 <DashbordEvents events={events} />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="mt-3">
//                 <Calender />
//               </div>
//             </>
//           )} */}
//         </>
//       ) : (
//         <>
//           {/* <DashboardFilters/> */} <h1>hello</h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default DashboardHome;
