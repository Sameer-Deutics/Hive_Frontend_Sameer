import dayjs from "dayjs";
import moment from "moment";

const InputField = ({
  selectedDateTime,
  handleDateTimeClick,
  selectedFormat,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Select Date and Time"
        readOnly
        value={
          selectedDateTime
            ? dayjs(selectedDateTime).format(selectedFormat)
            : moment().format("MMMM DD, YYYY  HH:mma")
        }
        onClick={handleDateTimeClick}
        className="px-4 py-2 mt-5 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
      />
    </>
  );
};

export default InputField;
