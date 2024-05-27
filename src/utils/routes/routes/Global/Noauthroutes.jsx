import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../../../screens/HomePage";
import NotFound from "../../../../screens/NotFound";

const Noauthroutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Noauthroutes;
