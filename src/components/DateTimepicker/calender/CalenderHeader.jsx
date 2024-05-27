import React from "react";
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const CalenderHeader = ({
  handleNextMonth,
  handlePreviousMonth,
  handleYearSelect,
  selectedYear,
  YearSelector,
  month,
  day,
  year,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default CalenderHeader;

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
  width: 14rem /* 128px */;
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
    width: 18vw;
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
