import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "../../../components/dashboard/Dashboar";
import LoginPage from "../pages/LoginPage";
import NewsFeeds from "../components/NewsFeeds";
import DashboardHome from "../components/DashboardHome";
import Students from "../components/Students";
import EventsCalender from "../components/EventsCalender";
import Reports from "../components/Reports";
// import { useSelector } from "react-redux";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "../components/ProtectedRoute";
import { authConditions } from "../protected/authConditions";
import ParentDashboard from "../components/Dashboard/ParentDashboard";


const Routers = () => {
  // let user=useSelector((state)=>state.users.user)


  // const userRole = "SCHOOL_HEAD";



  return (
    <BrowserRouter>
    <Routes>
        <Route path="/signin" element={<LoginPage/>} />
        <Route  path="/test" element={<ParentDashboard/>} />
      

        {/* <Route path="/" element={<Dashboard userRole={userRole} />} > */}
        <Route path="/" element={<ProtectedRoute conditions={authConditions} profileRequired={true} roleBaseRouting={true}  Component={Dashboard} />} >
        <Route path="/" element={<DashboardHome/>} />       
        <Route path="news" element={ <NewsFeeds/>} />       
        <Route path="students" element={<Students/>} />       
        <Route path="calender" element={<EventsCalender/>} />       
        <Route path="reports" element={<Reports/>} />       
        </Route>
      

        <Route path="*" element={<NotFoundPage/>} />

      
    </Routes>
    </BrowserRouter>
  )
}

export default Routers


{/* <Route
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
      /> */}

