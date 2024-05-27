import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashboardHome from "../../../../components/global/navigation/DashboardHome";
import DashboardHome from "../../../../screens/HomePage";

import EventsCalender from "../../../../components/global/navigation/EventsCalender";
import NewsFeeds from "../../../../components/global/navigation/NewsFeed";
import Reports from "../../../../components/global/navigation/Reports";
import Students from "../../../../components/global/navigation/Students";
import ProtectedRoute from "../../../../components/protected_route_component/ProtectedRoutes";

const Authroutes = () => {
  return (
    <>
      {/* <Route path="/" element={<Dashboard userRole={userRole} />} > */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                conditions={authConditions}
                profileRequired={true}
                roleBaseRouting={true}
                Component={Dashboard}
              />
            }
          >
            <Route path="/" element={<DashboardHome />} />
            <Route path="news" element={<NewsFeeds />} />
            <Route path="students" element={<Students />} />
            <Route path="calender" element={<EventsCalender />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Authroutes;
