import Calender from "./Calender";
import DashboardBtnInputs from "../../dashboard/DashboardButtons";

const EventsCalender = () => {
  return (
    <div className="mt-3">
      <DashboardBtnInputs />

      <div className="mt-4">
        <Calender />
      </div>
    </div>
  );
};

export default EventsCalender;
