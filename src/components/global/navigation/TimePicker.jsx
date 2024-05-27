import { useState } from "react";
import moment from "moment";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

const TimePicker = ({ onSelectTime, onAdd }) => {
  const [currentTime, setCurrentTime] = useState(moment());

  const increaseHour = () => {
    const newTime = currentTime.clone().add(1, "hour");
    setCurrentTime(newTime);
  };

  const decreaseHour = () => {
    const newTime = currentTime.clone().subtract(1, "hour");
    setCurrentTime(newTime);
  };

  const increaseMinute = () => {
    const newTime = currentTime.clone().add(1, "minute");
    setCurrentTime(newTime);
  };

  const decreaseMinute = () => {
    const newTime = currentTime.clone().subtract(1, "minute");
    setCurrentTime(newTime);
  };

  const handleAddClick = () => {
    onSelectTime(currentTime.format("hh:mm"));
    onAdd();
  };

  return (
    <div>
      <Container>
        <FormattedTime>
          <h6>Time</h6>
          <h1>{currentTime.format("hh:mm A")}</h1>
        </FormattedTime>
      </Container>

      {/* time side */}
      <TimeSideContainer>
        <DivWrapBtnTime>
          <DivWrapingButons1>
            <button onClick={increaseHour}>
              <FaChevronUp style={{ color: "blue" }} />
            </button>
            <button onClick={increaseMinute}>
              <FaChevronUp style={{ color: "blue" }} />
            </button>
          </DivWrapingButons1>

          {/*  */}
          <DivWrapForMatedTime>
            <input
              type="time"
              value={currentTime.format("HH:mm")}
              onChange={(e) => setCurrentTime(moment(e.target.value, "HH:mm"))}
            />
          </DivWrapForMatedTime>
          <DivWrapIcon>
            <button onClick={decreaseHour}>
              <FaChevronDown />
            </button>
            <button onClick={decreaseMinute}>
              <FaChevronDown />
            </button>
          </DivWrapIcon>
        </DivWrapBtnTime>

        <DivForAddButton onClick={handleAddClick}>
          <button style={{ textAlign: "center" }}>Ok</button>
        </DivForAddButton>
      </TimeSideContainer>
    </div>
  );
};

export default TimePicker;

// border-top-left-radius: 0.5rem /* 8px */;
const Container = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));

  border-top-right-radius: 0.5rem /* 8px */;
  height: 10vh;
  border-width: 1px;
  width: 100%;
  position: relative;
`;

const FormattedTime = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 3.5rem /* 56px */;
  justify-content: center;
  width: 8rem /* 128px */;

  h6 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem /* 20px */;
    width: 8rem /* 128px */;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
  h1 {
    display: flex;
    align-items: center;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    justify-content: center;
    width: 8rem /* 128px */;
  }
`;

const TimeSideContainer = styled.div`
  border-left-width: 1px;
  height: 100%;
`;

const DivWrapBtnTime = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  margin-bottom: 5rem /* 80px */;
  justify-content: center;
  gap: 1.25rem /* 20px */;
  align-items: center;
  margin-top: 2.5rem /* 40px */;
`;

const DivWrapingButons1 = styled.div`
  width: 7rem /* 112px */;
  margin-left: 0.1rem /* 28px */;
  gap: 0.75rem /* 12px */;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  display: flex;
  justify-content: flex-start;

  button {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
  }
`;

const DivWrapForMatedTime = styled.div`
  display: flex;
  width: 14rem /* 224px */;
  justify-content: center;

  h1 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
  }

  input {
    padding-left: 30px;
    font-size: 1.25rem /* 20px */;
  }
`;

const DivWrapIcon = styled.div`
  width: 7rem /* 112px */;
  margin-left: 0.1rem /* 28px */;
  gap: 0.75rem /* 12px */;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  display: flex;
  justify-content: flex-start;

  button {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
  }
`;

const DivForAddButton = styled.div`
  border-radius: 30px;
  width: 85%;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgb(29 78 216 / var(--tw-border-opacity));
  padding-top: 0.375rem /* 6px */;
  padding-bottom: 0.375rem /* 6px */;
  text-align: center;

  @media (min-width: 300px) {
    margin-left: 20px;
  }

  @media (min-width: 400px) {
    margin-left: 30px;
  }

  @media (min-width: 640px) {
    margin-left: 40px;
  }
  @media (min-width: 758px) {
    margin-left: 20px;
  }
  .ml-6 {
    margin-left: 1.5rem /* 24px */;
  }
  @media (min-width: 1024px) {
    margin-left: 0.75rem /* 12px */;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
