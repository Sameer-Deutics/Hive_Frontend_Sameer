import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHome from "../../../../components/global/navigation/DashboardHome";
import EventsCalender from "../../../../components/global/navigation/EventsCalender";
import NewsFeeds from "../../../../components/global/navigation/NewsFeed";
import Reports from "../../../../components/global/navigation/Reports";
import Students from "../../../../components/global/navigation/Students";
import ProtectedRoutes from "../../../../components/protected_route_component/ProtectedRoutes";
import { authConditions } from "../../../../components/protected_route_component/authConditions";
import Dashboard from "../../../../components/global/navigation/Dashboard";
import NotFound from "../../../../screens/NotFound";
import HomePage from "../../../../screens/HomePage";

const Authroutes = () => {
  return (
        <Routes>
          {/* <Route path="/" element={<Dashboard userRole={userRole} />} > */}
          <Route
            path="/"
            element={
              <ProtectedRoutes
                conditions={authConditions}
                profileRequired={true}
                roleBaseRouting={true}
              >
                <Dashboard />
              </ProtectedRoutes>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="news" element={<NewsFeeds />} />
            <Route path="students" element={<Students />} />
            <Route path="calender" element={<EventsCalender />} />
            <Route path="reports" element={<Reports />} />
           
          </Route>
          
          <Route path='*' element={<NotFound/>} />
          <Route path='/signin' element={<HomePage/>} />
        </Routes>
      
  );
};

export default Authroutes;

{
  /* <Route
        index
        path="/"
        exact={true}
        element={
          <RoutingStyling>
            <div className="MainContainer">
              <div className="outletContainer">
                <ProtectedRouteComponent
                  conditions={authPagesConditions}
                  roleBasedRouting={true}
                  roleBasedRoutingFieldName={"account_type"}
                  roleBasedRoutingElementMapping={
                    roleBasedDashboardRoutesMapping
                  }
                />
              </div>
            </div>
          </RoutingStyling>
        }
      /> */
}
