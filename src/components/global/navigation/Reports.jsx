import { useState, useEffect } from "react";
import Calendar from "./calenders/myCalender";
import TimePicker from "./TimePicker";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import styled from "styled-components";
import dayjs from "dayjs";
import moment from "moment";

const Reports = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("YYYY-MM-DD HH:mm");
  const [showLeft, setShowLeft] = useState(true);

  const handleDateTimeClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateTimeSelect = (date, time) => {
    const formattedDateTime = `${date} ${time}`;
    setSelectedDateTime(formattedDateTime);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  useEffect(() => {
    if (selectedDate && selectedTime) {
      handleDateTimeSelect(selectedDate, selectedTime);
    }
  }, [selectedDate, selectedTime]);

  return (
    <Container>
      <input
        type="text"
        placeholder="Select Date and Time"
        readOnly
        value={
          selectedDateTime
            ? dayjs(selectedDateTime).format(selectedFormat)
            : moment().format("MMMM DD, YYYY  HH:mma")
        }
        onClick={handleDateTimeClick}
        className="px-4 py-2 mt-5 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
      />
      {showCalendar && (
        <ShowCalendars>
          <WidthFull>
            <ButtonForSmallDevices>
              <Button onClick={() => setShowLeft(true)}>
                <SlCalender />
              </Button>
              <Button onClick={() => setShowLeft(false)}>
                <IoTimeOutline />
              </Button>
            </ButtonForSmallDevices>
            <CalendarContainer show={showLeft}>
              <Calendar
                onSelectDate={handleSelectDate}
                dateFormat={"YYYY-MM-DD"}
              />
            </CalendarContainer>
            <TimePickerContainer show={showLeft}>
              <TimePicker onSelectTime={handleSelectTime} />
            </TimePickerContainer>
          </WidthFull>
        </ShowCalendars>
      )}
    </Container>
  );
};

export default Reports;

const Container = styled.div`
  margin-top: 12px;
  input {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const ShowCalendars = styled.div`
  margin-top: 20px;
  background-color: white;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 50vh;

  @media (min-width: 1024px) {
    height: 60vh;
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const WidthFull = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  flex-direction: column;
`;

const ButtonForSmallDevices = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Button = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(59 130 246 / 1);
  color: rgb(255 255 255 / 1);
  border-radius: 0.25rem;
`;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "block" : "none")};

  @media (min-width: 1024px) {
    width: 70%;
    display: block;
  }
`;

const TimePickerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? "none" : "block")};

  @media (min-width: 1024px) {
    width: 30%;
    display: block;
  }
`;

{
  /* <div>
        <h1>Select your time format</h1>
        <select
          value={selectedFormat}
          onChange={handleFormatChange}
          className="px-4 py-2  rounded focus:outline-none focus:border-blue-500 cursor-pointer mt-1"
        >
          <option value="YYYY-MM-DD HH:mm">Year-Month-Date Hour-minutes</option>
          <option value="DD-MM-YYYY HH:mm">Day-Month-Year Hour-minutes</option>
          <option value="MM-DD-YYYY HH:mm">Month-Day-Year Hour-minutes</option>
          <option value="HH:mm">Hour-minutes</option>
        </select>
      </div> */
}
