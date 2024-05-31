import moment from "moment";

const Profile = ({ item }) => {
  const added = item ? item.date_added : "";

  const getRelativeTime = (date) => {
    const now = moment();
    const duration = moment.duration(now.diff(date));

    const minutes = duration.asMinutes();
    const hours = duration.asHours();
    const days = duration.asDays();
    const weeks = duration.asWeeks();
    const months = duration.asMonths();
    const years = duration.asYears();

    if (minutes < 60) {
      return `${Math.floor(minutes)}m`;
    } else if (hours < 24) {
      return `${Math.floor(hours)}h`;
    } else if (days < 7) {
      return `${Math.floor(days)}d`;
    } else if (weeks < 4) {
      return `${Math.floor(weeks)}w`;
    } else if (months < 12) {
      return `${Math.floor(months)} mon`;
    } else {
      return `${Math.floor(years)}y`;
    }
  };

  const relativeTime = getRelativeTime(moment.utc(added));

  return (
    <div className="flex mx-3 gap-3">
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <img
          className="absolute w-12 h-12 text-gray-400 bg-cover bg-no-repeat object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s"
          alt="Profile"
        />
      </div>

      <div className="flex flex-col">
        <h6 className="text-md cursor-pointer">Awaiz Ali Khan</h6>
        <h6 className="text-xs font-lighter">{relativeTime}</h6>
      </div>
    </div>
  );
};

export default Profile;
