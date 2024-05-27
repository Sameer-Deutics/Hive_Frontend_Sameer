import React from "react";
import styled from "styled-components";

const TimeHeader = ({ currentTime }) => {
  return (
    <div>
      <FormattedTime>
        <h6>Time</h6>
        <h1>{currentTime.format("hh:mm A")}</h1>
      </FormattedTime>
    </div>
  );
};

export default TimeHeader;

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
