import { useState, useEffect } from "react";

import CalenderDots from "../../../assets/svgs/CalenderDotsSvg";
import CalenderThreeDots from "../../../assets/svgs/CalenderDotsSvg";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  const [activeButton, setActiveButton] = useState(0); // State to track active button
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Current month
  const [currentDate, setCurrentDate] = useState(new Date().getDate()); // Current date

  const handleButtonClick = (index) => {
    setActiveButton(index); // Update active button index
  };

  // Function to get days for a specific month and year
  const getDaysForMonth = (year, month) => {
    const daysInThisMonth = daysInMonth[month - 1];
    const daysArray = [];

    for (let i = 1; i <= daysInThisMonth; i++) {
      const date = `${year}-${month.toString().padStart(2, "0")}-${i
        .toString()
        .padStart(2, "0")}`;
      const isCurrentMonth = month === currentMonth;
      const isCurrentDate = isCurrentMonth && i === currentDate;
      daysArray.push({ date, isCurrentMonth, isCurrentDate, events: [] });
    }

    return daysArray;
  };

  useEffect(() => {
    // Scroll to the current month when the page reloads
    const calendarContainer = document.querySelector(".calendar-container");
    const currentMonthIndex = currentMonth - 1;
    const currentMonthElement = calendarContainer.children[currentMonthIndex];
    if (currentMonthElement) {
      currentMonthElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentMonth]);

  return (
    <div className="bg-white rounded-xl mx-auto max-w-7xl h-[400px] p-2 overflow-y-auto scrollbar example calendar-container">
      {/* Render calendars for each month */}
      {months.map((month, index) => (
        <div key={month} className="mb-8">
          <header className="flex justify-between px-6 py-4">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              <time dateTime={`2024-${index + 1}`}>{month}</time>
            </h1>
            <div className="flex items-center ml-5">
              <div className="relative flex gap-2 rounded-md bg-white shadow-sm md:items-stretch">
                <button
                  className={`bg-[#08A5DE] px-4 py-1 rounded-l-2xl ${
                    activeButton === 0 ? "bg-[#08A5DE]" : "bg-white"
                  } ${activeButton === 0 ? "text-white" : "text-black"}`}
                  onClick={() => handleButtonClick(0)}
                >
                  <CalenderDots activeButton={activeButton} />
                </button>

                <button
                  className={`white px-2 py-1 rounded-r-2xl ${
                    activeButton === 1 ? "bg-[#08A5DE]" : "bg-white"
                  } ${activeButton === 0 ? "text-white" : "text-black"}`}
                  onClick={() => handleButtonClick(1)}
                >
                  <CalenderThreeDots activeButton={activeButton} />
                </button>
              </div>
            </div>
          </header>

          {/* Days grid */}
          <div className="lg:flex lg:flex-auto lg:flex-col">
            <div className="grid grid-cols-7 rounded-[50px] bg-[#CCF0FD] text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
              {/* Days of the week */}
              {["M", "T", "W", "T", "F", "S", "S"].map((day, dayIndex) => (
                <div
                  key={`${day}-${dayIndex}`}
                  className="bg-[#CCF0FD] text-black py-2 rounded-[50px]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
              <div className="w-full grid grid-cols-7 grid-rows-6 gap-px">
                {/* Render days for the current month */}
                {getDaysForMonth(2024, index + 1).map((day) => (
                  <div
                    key={day.date}
                    className={classNames(
                      day.date ? "bg-white" : "bg-gray-50 text-gray-500",
                      "relative px-3 py-2"
                    )}
                  >
                    {day.date && (
                      <time
                        dateTime={day.date}
                        className={classNames(
                          day.isCurrentDate
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white current-date"
                            : null
                        )}
                        data-date={day.date.split("-").pop().replace(/^0/, "")}
                      >
                        {day.date.split("-").pop().replace(/^0/, "")}
                      </time>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
