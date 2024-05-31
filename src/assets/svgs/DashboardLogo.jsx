const DashboardLogo = ({ flagMenu }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:stroke-white stroke-[#08A5DE]"
      >
        <path
          d="M3.16992 7.44L11.9999 12.55L20.7699 7.47M11.9999 21.61V12.54"
          className="md:stroke-white stroke-[#08A5DE]"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.93014 2.48001L4.59014 5.44001C3.38014 6.11001 2.39014 7.79001 2.39014 9.17001V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17001C21.6201 7.79001 20.6301 6.11001 19.4201 5.44001L14.0801 2.47001C12.9301 1.84001 11.0701 1.84001 9.93014 2.48001Z"
          stroke={flagMenu ? "#08A5DE" : "white"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:stroke-white stroke-[#08A5DE]"
        />
      </svg>
    </>
  );
};

export default DashboardLogo;
