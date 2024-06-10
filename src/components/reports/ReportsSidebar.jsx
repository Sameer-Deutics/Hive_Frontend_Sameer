import React from "react";
import { Link } from "react-router-dom";

const ReportsSidebar = ({ dataSide, selectedItem }) => {
  return (
    <>
      <div className="hidden  md:inset-y-0 lg:w-[25vw] md:w-[25vw] h-full md:z-50 md:flex md:w-80 md:flex-col lg:z-50 lg:flex md:w-96 md:h-[100vh] lg:flex-col ">
        <div className="flex grow flex-col gap-y-5   pb-4 ">
          <div className="flex h-16 shrink-0  flex items-center justify-center text-2xl font-semibold pt-7 ">
            {/* <img className="h-16 w-auto  mt-2 " alt="Your Company" /> */}
            {selectedItem === ""
              ? "Dashboard"
              : dataSide.find((item) => item.link === selectedItem)?.title}
          </div>
          <nav className="flex flex-1 flex-col h-full">
            <ul
              role="list"
              className="flex flex-1 flex-col gap-y-7 pt-4 rounded-r-2xl bg-[#CCF0FD] h-full"
            >
              <li className="flex justify-start">
                <ul role="list" className="-mx-2 space-y-1">
                  {dataSide?.map((item) => (
                    <li
                      key={item.id}
                      className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                    >
                      <Link to={`${item.link}`}>
                        <div
                          className={`flex gap-2 ${
                            selectedItem === item.link
                              ? "sidecolor"
                              : "border-l-[4px] border-[#F29200]"
                          }`}
                        >
                          <h4 className="lg:text-lg md:text-md sm:text-sm text-sm  md:pl-5 lg:pl-3">
                            {item.title}
                          </h4>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ReportsSidebar;
