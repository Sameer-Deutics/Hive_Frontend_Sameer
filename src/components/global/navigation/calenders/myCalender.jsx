import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled, { css } from "styled-components";

// Utility functions to generate dates and get month names
const generateDate = (month, year) => {
  const startDate = dayjs(`${year}-${month + 1}-01`);
  const endDate = startDate.endOf("month");
  const dates = [];

  for (let i = startDate.date(); i <= endDate.date(); i++) {
    const date = dayjs(`${year}-${month + 1}-${i}`);
    dates.push({
      date,
      currentMonth: true,
      today: date.isSame(dayjs(), "date"),
    });
  }

  const prevMonthEndDate = startDate.subtract(1, "month").endOf("month");
  for (
    let i = prevMonthEndDate.date() - startDate.day() + 1;
    i <= prevMonthEndDate.date();
    i++
  ) {
    const date = dayjs(`${year}-${month}-${i}`);
    dates.unshift({
      date,
      currentMonth: false,
      today: false,
    });
  }

  // const nextMonthStartDate = endDate.add(1, "month").startOf("month");
  for (let i = 1; dates.length < 42; i++) {
    const date = dayjs(`${year}-${month + 2}-${i}`);
    dates.push({
      date,
      currentMonth: false,
      today: false,
    });
  }

  return dates;
};

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

const YearSelector = ({ selectedYear, onSelectYear }) => {
  const years = [];
  for (let year = 2000; year <= 2100; year++) {
    years.push(year);
  }

  return (
    <select
      value={selectedYear}
      onChange={(e) => onSelectYear(parseInt(e.target.value))}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

// const cn = (...classes) => classes.filter(Boolean).join(" ");

const MyCalendar = ({ onSelectDate }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedYear, setSelectedYear] = useState(today.year());
  const [showYearSelector, setShowYearSelector] = useState(false);

  // Extract day, month, and year from the today state
  const day = today.date();
  const month = months[today.month()];
  const year = today.year();

  const handlePreviousMonth = () => {
    const prevMonth = today.subtract(1, "month");
    setToday(prevMonth);
    setSelectedDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = today.add(1, "month");
    setToday(nextMonth);
    setSelectedDate(nextMonth);
  };

  const handleYearIconClick = () => {
    setShowYearSelector(!showYearSelector);
  };

  // const handleYearSelect = (year) => {
  //   setSelectedYear(year);
  //   setShowYearSelector(false);
  // };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setShowYearSelector(false);
    setToday(today.year(year)); // Update the current date to the selected year
  };

  return (
    <CalenderWrapper>
      <div className="">
        <RelativeDiv>
          <DivFlex>
            <DivDate>
              <h6>Date</h6>
            </DivDate>

            <DivForDayYear>
              <h4>
                {month} {day} ,{/* , {year} */}
                <YearSelector
                  selectedYear={selectedYear}
                  onSelectYear={handleYearSelect}
                  style={{ backgroundColor: "gray" }}
                />
              </h4>

              <DivForIcons>
                <IconButton onClick={handlePreviousMonth}>
                  <GrFormPrevious />
                </IconButton>
                <IconButton onClick={handleNextMonth}>
                  <GrFormNext />
                </IconButton>

                {/*  */}
              </DivForIcons>
              {/*  */}

              {/*  */}
            </DivForDayYear>
          </DivFlex>
        </RelativeDiv>

        {/*  */}
        <DivForDays>
          <DivForMapingDays className="w-full grid grid-cols-7 text-gray-500">
            {days.map((day, index) => (
              <h1 style={{ cursor: "pointer" }} key={index}>
                {day}
              </h1>
            ))}
          </DivForMapingDays>
          {/*  */}
          <DivForDate>
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <RenderingDate key={index}>
                  {/*  */}
                  <DateItem
                    currentMonth={currentMonth}
                    today={today}
                    selected={selectedDate.isSame(date, "date")}
                    onClick={() => {
                      if (currentMonth) {
                        setSelectedDate(date);
                        setToday(date); // Update today state to the selected date
                        onSelectDate(date.format("YYYY-MM-DD"));
                      }
                    }}
                  >
                    {date.date()}
                  </DateItem>
                </RenderingDate>
              )
            )}
          </DivForDate>
        </DivForDays>
      </div>
    </CalenderWrapper>
  );
};

export default MyCalendar;

const CalenderWrapper = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  border-style: none;
`;

// border-top-right-radius: 0.5rem /* 8px */;
const RelativeDiv = styled.div`
  position: relative;
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  border-top-left-radius: 0.5rem /* 8px */;
`;

const DivFlex = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  @media (min-width: 1024px) {
    width: 25vw;
    justify-content: flex-start;
  }
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
  }
  @media (min-width: 640px) {
    align-items: center;
    justify-content: flex-start;
  }
`;

const DivDate = styled.div`
  width: 8rem /* 128px */;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  @media (min-width: 640px) {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
  @media (min-width: 768px) {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
  margin-top: 0.75rem /* 12px */;
  margin-left: 0.5rem /* 8px */;
`;

const DivForDayYear = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 1024px) {
    width: 25vw;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  align-items: center;
  @media (min-width: 640px) {
    align-items: center;
  }
  margin-left: 0.5rem /* 8px */;

  h4 {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    font-weight: 600;
  }
`;

const DivForIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem /* 12px */;
`;

const IconButton = styled.div`
  width: 1.25rem; /* Equivalent to 'w-5' */
  height: 1.25rem; /* Equivalent to 'h-5' */
  cursor: pointer;
`;

const DivForDays = styled.div`
  border-width: 1px;
  height: 20%;
  border-bottom-right-radius: 0.5rem /* 8px */;
  border-bottom-left-radius: 0.5rem /* 8px */;
  margin-top: 1.75rem /* 28px */;
  width: 100%;
  @media (min-width: 1024px) {
    width: 85%;
  }
  margin-left: auto;
  margin-right: auto;
  padding: 0.75rem /* 12px */;
`;

const DivForMapingDays = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));

  h1 {
    height: 1.75rem /* 28px */;
    display: grid;
    place-content: center;
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;
    @media (min-width: 768px) {
      font-size: 0.875rem /* 14px */;
      line-height: 1.25rem /* 20px */;
    }
  }
`;

const DivForDate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;

const RenderingDate = styled.div`
  height: 2.5rem /* 40px */;
  border-top-width: 1px;
  display: grid;
  place-content: center;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  @media (min-width: 768px) {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
`;

// Styled component for DateItem
const DateItem = styled.h1`
  ${(props) =>
    props.currentMonth &&
    css`
      height: 1.5rem; /* 24px */
      width: 1.5rem; /* 24px */
      display: grid;
      place-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: black;
        color: white;
      }
    `}

  ${(props) =>
    !props.currentMonth &&
    css`
      color: #9ca3af; /* Equivalent to 'text-gray-400' */
      cursor: not-allowed;
    `}

${(props) =>
    props.today &&
    css`
      background-color: #; /* Equivalent to 'bg-red-600' */
      color: black;
    `}

${(props) =>
    props.selected &&
    css`
      background-color: #dc2626; /* Equivalent to 'bg-red-600' */
      color: white;
    `}
`;

const CurrentYearButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
