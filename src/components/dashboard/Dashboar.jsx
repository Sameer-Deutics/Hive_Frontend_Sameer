const DashboardFilters = () => {
  const data = [
    {
      title: "Head Office",
    },
    {
      title: "Central Region",
    },
    {
      title: "North Region",
    },
    {
      title: "South Region",
    },
    {
      title: "ESL",
    },
    {
      title: "8-BPS (Pvt). Ltd",
    },
    {
      title: "Multan Region (Edu)",
    },
    {
      title: "International",
    },
    {
      title: "Faislabad Reg.",
    },
  ];
  return (
    <>
      {/* md:w-full sm:w-full w-full */}
      <div className="flex  md:w-full sm:w-full w-full items-center lg:flex-row md:flex-row  sm:flex-col flex-col">
        {/* lg:flex-row md:flex-row sm:flex-col flex-col */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2  w-full">
          {/* 1 */}
          <div className="grid grid-cols-2 sm:flex sm:gap-4 gap-5 w-[80vw] sm:w-[50vw] ">
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-36  sm:w-32 p-2.5 w-32 border-gray-300 text-gray-900 text-xs rounded-3xl focus:ring-blue-500 focus:border-blue-500 block  bg-white text-black "
              >
                <option selected>Region</option>
                <option value="1">North</option>
                <option value="2">South</option>
                <option value="3">East</option>
                <option value="4">West</option>
              </select>
            </form>

            {/* 2 */}
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-36 md:w-28 sm:w-28 p-2.5 w-32 border-gray-300 text-gray-900 text-xs rounded-3xl focus:ring-blue-500 focus:border-blue-500 block  bg-white text-black  "
              >
                <option selected>City</option>
                <option value="1">Lahore</option>
                <option value="2">Islamabad</option>
                <option value="3">Karachi</option>
                <option value="4">Multan</option>
              </select>
            </form>

            {/* 3 */}
            <form className="max-w-sm mx-auto ">
              <select
                id="countries"
                className=" border lg:w-36 md:w-28 sm:w-28 p-2.5 w-32 border-gray-300 text-gray-900 text-xs rounded-3xl focus:ring-blue-500 focus:border-blue-500 block  bg-white text-black "
              >
                <option selected>Campus</option>
                <option value="1">United States</option>
                <option value="2">Canada</option>
                <option value="3">France</option>
                <option value="4">Germany</option>
              </select>
            </form>

            {/* button */}
            <button className="bg-[#08A5DE] text-white py-0 rounded-[50px] px-10 sm:w-44 w-32 mx-auto text-xs w-42 ">
              Show Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardFilters;
