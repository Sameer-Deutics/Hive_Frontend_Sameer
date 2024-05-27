import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Hive from "../../../assets/Hive.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// logos
import DashboardLogo from "../../../assets/svgs/DashboardLogo";
import NewsFeedLogo from "../../../assets/svgs/NewsFeedLogo";
import StudentsLogo from "../../../assets/svgs/StudentsLogo";
import CalenderLogo from "../../../assets/svgs/CalenderLogo";
import ReportsLogo from "../../../assets/svgs/ReportsLogo";
import LogoutLogo from "../../../assets/svgs/LogoutLogo";
import LogoutMobile from "../../../assets/svgs/LogoutLogo";
import { logoutUser } from "../../../store/Redux";

const userNavigation = [
  { name: "Your profile", href: "/" },
  { name: "Sign out", href: "signin" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard({ userRole }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [flagMenu, setFlagMenu] = useState(false);
  const [userRoles, setUserRoles] = useState("");
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);

  const [selectedItem, setSelectedItem] = useState("");

  const dispatch = useDispatch();

  const userdata = useSelector((state) => state.user);
  console.log(userdata.user.email);

  // On component mount, check if there's a selected item in localStorage
  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(storedItem);
    } else if (data.length > 0) {
      // Set to first item if no item in localStorage
      setSelectedItem(data[0].link);
    }
  }, [data]);

  // On selectedItem change, update localStorage
  useEffect(() => {
    localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const navigate = useNavigate();
  // let user=useSelector((state)=>state.users.user)
  // console.log(user,"state user");

  //   useEffect(() => {
  //    const roles=localStorage.getItem("account_type")
  //    setUserRoles(roles)
  //    console.log(roles,"roles");

  //    const users = localStorage.getItem('user-name');
  //   // Check if the user exists
  // if (user !== null) {
  //   // Item exists, do something with it
  //   console.log('Retrieved user:', user);
  //   setUserName(user)
  //   console.log(userName,"user Name set user");
  // } else {
  //   // Item doesn't exist
  //   console.log('Item not found');
  // }
  //   }, [])

  const LogoutUser = () => {
    // user=null;
    localStorage.removeItem("account_type");
    localStorage.removeItem("access_token");
    localStorage.removeItem("user-name");
    localStorage.removeItem("email");

    dispatch(logoutUser(null));

    navigate("/signin");
    toast.success("logout successfully");
  };

  let dataSide = [
    {
      id: 1,
      title: "Dashboard",
      link: "/",
      logo: <DashboardLogo flagMenu={flagMenu} />,
    },
    {
      id: 2,
      title: "News Feed",
      link: "news",
      logo: <NewsFeedLogo flagMenu={flagMenu} />,
    },
    {
      id: 3,
      title: "Students",
      link: "students",
      logo: <StudentsLogo flagMenu={flagMenu} />,
    },
    {
      id: 4,
      title: "Events Calender",
      link: "calender",
      logo: <CalenderLogo flagMenu={flagMenu} />,
    },
    {
      id: 5,
      title: "Reports",
      link: "reports",
      logo: <ReportsLogo flagMenu={flagMenu} />,
    },
  ];

  // Function to handle item click
  const handleItemClick = (link) => {
    setSelectedItem(link);
    localStorage.setItem("link", link);
  };

  return (
    <>
      <div className="grid lg:gird-cols-2 bg-[#F9F9F9] ">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    {/* flag */}
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      {/* <button type="button" className="-m-2.5 p-2.5" onClick={()=> setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button> */}
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col bg-white gap-y-5 overflow-y-auto  pb-4 ring-1 ring-white/10">
                    <div
                      className="flex h-32 w-full shrink-0 justify-start bg-gradient-to-r from-[#08A5DE] to-[#00739C]
                    rounded-b-[50px]"
                    >
                      <div className="flex mt-[40px] gap-3 items-center ml-8">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50 "
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        {/* sm image */}
                        <span className=" flex flex-col justify-center mt-3 ">
                          <span
                            className=" flex text-sm font-semibold leading-6 text-white"
                            aria-hidden="true"
                          >
                            {/* userName */}
                            {/* {user? user : "Awais Ali Khan"} */}
                            Awais Ali Khan
                            {/* Awais Ali Khan */}
                          </span>
                          <span className="underline text-white text-sm cursor-pointer">
                            Click to view
                          </span>
                          {/* <ChevronDownIcon className="ml-2 mt-5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                        </span>
                      </div>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul
                        role="list"
                        className="flex flex-1 items-center flex-col gap-y-7"
                      >
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {dataSide?.map((item) => (
                              <li
                                key={item.id}
                                className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                                onClick={() => setSidebarOpen(false)}
                              >
                                <Link to={`${item.link}`}>
                                  <div
                                    className="flex gap-2"
                                    onClick={() => handleItemClick(item.link)}
                                  >
                                    <div className="h-[24px] w-[24px] text-black">
                                      {item.logo}
                                    </div>
                                    <h4 className="text-lg text-black">
                                      {item.title}
                                    </h4>
                                  </div>
                                </Link>
                              </li>
                            ))}

                            <hr className="bg-black w-48 h-[2px] mt-5" />

                            <li className="mt-auto mt-3 ml-3">
                              <h4
                                className="group cursor-pointer -mx-2 flex items-center gap-x-2 rounded-md p-2 text-lg leading-6 text-black hover:text-black"
                                onClick={LogoutUser}
                              >
                                <LogoutMobile />
                                Log out
                              </h4>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="flex h-screen ">
          {/* lg:inset-y-0 */}
          {/*  */}
          {/*  */}
          <div className="hidden  md:inset-y-0 lg:w-[30vw] h-full md:z-50 md:flex md:w-80 md:flex-col lg:z-50 lg:flex md:w-96 md:h-[100vh] lg:flex-col ">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F9F9F9] px-6 pb-4 ">
              <div className="flex h-16 shrink-0  ">
                <img
                  className="h-16 w-auto  mt-2 "
                  src={Hive}
                  alt="Your Company"
                />
              </div>
              <nav className="flex flex-1 flex-col h-full ">
                <ul
                  role="list"
                  className="flex flex-1 flex-col  gap-y-7 pt-4  rounded-l-lg bg-gradient-to-r from-[#08A5DE] to-[#00739C] h-full"
                >
                  <li className="flex justify-start ">
                    <ul role="list" className="-mx-2 space-y-1 ">
                      {dataSide?.map((item) => (
                        <li
                          key={item.id}
                          className="group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold"
                        >
                          <Link to={`${item.link}`}>
                            <div
                              className={` flex gap-2  ${
                                selectedItem === item.link
                                  ? "sidecolor"
                                  : "border-l-[4px] border-[#08A5DE] "
                              } `}
                              onClick={() => handleItemClick(item.link)}
                            >
                              <div className="h-[24px] w-[24px] text-black md:pl-6 lg:pl-4">
                                {item.logo}
                              </div>
                              <h4 className="lg:text-lg md:text-md sm:text-sm text-sm  text-white md:pl-5 lg:pl-3">
                                {item.title}
                              </h4>
                            </div>
                          </Link>

                          <hr className="bg-white w-32 absolute top-[88%] left-[5%]  " />

                          <li className="mt-auto absolute  top-[88%] left-[6%]">
                            <h4
                              className="group flex items-center cursor-pointer -mx-2 flex gap-x-2 rounded-md p-3 text-sm font-semibold leading-6 text-white  hover:text-white"
                              onClick={LogoutUser}
                            >
                              <LogoutLogo />
                              Log out
                            </h4>
                          </li>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* main div right bar + Navbar */}
          <div className="w-full  bg-[#F9F9F9]">
            {/* sticky navbar position */}
            <div className="top-0 z-40 flex h-16 shrink-0 items-center ">
              {/* gap-x-4  px-4  sm:gap-x-6 sm:px-6 lg:px-8 */}

              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon
                  className="h-6 w-6"
                  aria-hidden="true"
                  onClick={() => setFlagMenu(true)}
                />
              </button>

              {/* Separator */}
              <div className="h-6 w-px  lg:hidden" aria-hidden="true" />

              <div className="flex flex-1 justify-between self-stretch lg:gap-x-6">
                <div className="flex items-center text-xl">
                  <span className="text-black cursor-pointer lg:pt-5 pl-2  lg:text-xl md:text-xl sm:text-xl text-lg ">
                    {selectedItem === ""
                      ? "Dashboard"
                      : dataSide.find((item) => item.link === selectedItem)
                          ?.title}
                  </span>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-6">
                  {/* Separator */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="m-5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50 mt-5 hidden lg:block md:block "
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden lg:flex lg:items-center">
                        <span
                          className="ml-4 mt-5 text-sm font-semibold leading-6 text-gray-900"
                          aria-hidden="true"
                        >
                          {/* userName */}

                          {userdata ? userdata.user.email : "Awais Ali Khan"}
                          {/* Awais Ali Khan */}
                        </span>
                        {/* <ChevronDownIcon className="ml-2 mt-5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                      </span>
                    </Menu.Button>
                    {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition> */}
                  </Menu>
                </div>
              </div>
            </div>

            <main className=" md:w-full sm:w-full overflow-y-auto bg-[#F9F9F9]">
              <div className="p-2">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
