import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Authroutes from "./Global/Authroutes";
import Noauthroutes from "./Global/Noauthroutes";


const RoutesIndex = () => {
  return (
    <>
          <Noauthroutes />
          <Authroutes />  
    </>
  );
};

export default RoutesIndex;
