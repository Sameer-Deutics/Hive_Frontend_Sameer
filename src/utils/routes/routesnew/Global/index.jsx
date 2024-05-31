import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authroutes from "./Authroutes";
import Noauthroutes from "./Noauthroutes";

const RoutesIndex = () => {
  return (
    <>
      <Authroutes />
    </>
  );
};

export default RoutesIndex;
