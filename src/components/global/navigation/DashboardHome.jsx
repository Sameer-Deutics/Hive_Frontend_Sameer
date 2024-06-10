import { useState, useEffect } from "react";
import DashboardFilters from "../../dashboard/DashboardFilters";
import DashboardEvents from "./DashboardEvents";
import Calendar from "./Calender";
import axiosInstance from "../../../utils/apiCalls/axiosInstance";
import createQueryParams from "../../helpers/QueryFormatter/createQueryParams";

const DashboardHome = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [activeEventsIndex, setActiveEventsIndex] = useState(0);
  const [filtered, setFiltered] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMoreEvents, setHasMoreEvents] = useState(true);
  const [eventsList, setEventsList] = useState([]);

  //
  const [filteredEvents, setFilteredEvents] = useState([]);

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

  const NUM_PER_PAGE = 10;

  const fields = [
    "id",
    "owner",
    "name",
    "attending_students",
    "skeptical_students",
    "non_attending_students",
    "date",
  ];

  // fetching events
  const fetchEvents = async () => {
    if (hasMoreEvents) {
      const offset = (page - 1) * NUM_PER_PAGE;
      const region_id = filtered;

      const endpoint = `/event/activity?limit=${NUM_PER_PAGE}&offset=${offset}${
        region_id ? `&region_id=${region_id}` : ""
      }&${createQueryParams(fields)}`;

      console.log(
        `Fetching events with offset ${offset}, page ${page}, filtered by region ${region_id}`
      );

      try {
        setLoading(true);
        const response = await axiosInstance().get(endpoint);
        const newData = response.data.results;

        setEventsList((prevEventsList) => {
          const uniqueData = newData.filter((newItem) => {
            const newKey = `${newItem.id}-${newItem.timestamp}`;
            const isDuplicate = prevEventsList.some((existingItem) => {
              const existingKey = `${existingItem.id}-${existingItem.timestamp}`;
              return existingKey === newKey;
            });
            return !isDuplicate;
          });
          return [...prevEventsList, ...uniqueData];
        });

        if (!response.data.next) {
          setHasMoreEvents(false);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page, filtered]);

  // filter function
  const filterFunc = (array) => {
    const region_id = array[2]?.value || null;
    setFiltered(region_id);
    setPage(1);
    setEventsList([]);
    setHasMoreEvents(true);
  };

  console.log(eventsList, "event list");

  return (
    <div className="lg:w-full md:w-full sm:w-full w-full">
      <div className="mt-3 w-[90%]">
        {/* filters */}
        <DashboardFilters setFilters={filterFunc} />
      </div>

      <div className="w-full flex gap-5 mt-4 lg:flex-row md:flex-row flex-row">
        <button
          className={`px-5 md:py-1.5 rounded-[50px] h-8 text-xs font-light ${
            activeButton === 0
              ? "bg-[#08A5DE] text-white"
              : "bg-zinc-300 text-gray-400"
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

      <div className="lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid lg:gap-3 mt-5 h-full">
        {activeEventsIndex === 0 && (
          <div className={`lg:block md:block p-1`}>
            <DashboardEvents
              aciveEventsIndex={setActiveEventsIndex}
              events={eventsList}
              filtered={filtered}
              setPage={setPage}
              hasMoreEvents={hasMoreEvents}
              loading={loading && hasMoreEvents}
            />
          </div>
        )}

        <div
          className={`lg:block md:block  ${
            activeEventsIndex === 1 ? "block" : "hidden"
          }`}
        >
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
