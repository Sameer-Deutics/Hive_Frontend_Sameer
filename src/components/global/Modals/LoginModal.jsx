import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Hive from "../../../assets/Hive.svg";
import Modal from "react-modal"; // Import the modal library
import axiosInstance from "../../../utils/apiCalls/axiosInstance";

import CancelModel from "../../../assets/svgs/CancelModel";

import { useFetchDataWithTokenQuery } from "../../../store/Redux/apiService";

Modal.setAppElement("#root"); // Set the root element for accessibility

const rules = [
  {
    required: true,
    message: "required",
  },
];

const credentials = [
  {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjU2MzQ1LCJpYXQiOjE3MTcwNTE1NDUsImp0aSI6IjFiYzdiM2Q0MDk5YTQxOWZiYjhhMDg0MzEzMTkxZjQyIiwidXNlcl9pZCI6NH0.eUAWTb6q9aok7Om6V0cdJgq5T6o1hLkFf9kHFk7aqOc",
    email: "bcpadmin@hive.com",
    password: "BCP@test123",
  },
  {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjU2NDA0LCJpYXQiOjE3MTcwNTE2MDQsImp0aSI6IjgxMWI5OTM3YTUzNTQ0MTNhM2Y3NGJkYzMzYjBjZThhIiwidXNlcl9pZCI6MX0.EE6mIO_WiERWRO19BpnbhaJxG9DyNql2-P0U3o6y1E8",
    email: "schoolhead.test@hive.com",
    password: "BCP@test123",
  },
  {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1OTQwMTkwLCJpYXQiOjE3MTUzMzUzOTAsImp0aSI6IjdjM2E0N2IwOWNhMTQ1NWJhZjg1ZTlmZDIxNzNkYjlkIiwidXNlcl9pZCI6M30.MzncFDWukOTNZqMTVwUeW8Xc3oMc2fDstP1SYcD4eHU",
    email: "acecoordinator@hive.com",
    password: "BCP@test123",
  },
  {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1OTQwMzExLCJpYXQiOjE3MTUzMzU1MTEsImp0aSI6IjBhMmE5NWEyOTc4MzQ2ODlhY2I3MzNmMmJhNGM5ZWY3IiwidXNlcl9pZCI6Nn0.ArPLVBpSDAkR_sJoLYHnbeyrBAXTFbZe2LJmxKYLIao",
    email: "careeradvisor@hive.com",
    password: "BCP@test123",
  },
];

const LoginModal = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // navigate("/");
      const user = credentials.find(
        (cred) => cred.email === email && cred.password === password
      );
      if (user) {
        // Extract the access token from the user object
        const { access_token } = user;
        // Make sure to replace `accessToken` with `access_token` in your code
        const response = await axiosInstance(access_token).get("/auth/me/");
        if (response) {
          // Store user details in localStorage
          console.log(response, "response");
          localStorage.setItem("account_type", response.data.account_type);
          localStorage.setItem("access_token", access_token);
          localStorage.setItem(
            "user-name",
            response.data.account_data.extra.employee_name
          );
          localStorage.setItem("email", response.data.email);
          // Show success toast
          toast.success("Login successful!");
          // Navigate to the desired location
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      // Handle error
      toast.error("Error occurred during login");
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="sm:w-[400px] w-[80%] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="relative bg-white rounded-lg p-8">
          <div className="absolute top-0 right-0 pt-2 pr-4">
            <button onClick={closeModal} className="p-2">
              <CancelModel />
            </button>
          </div>

          <div>
            {/* Modal Content */}
            <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <img
                className="text-gray-900 text-lg font-medium title-font mb-5 text-center h-16"
                src={Hive}
                alt=""
              />
              <form onSubmit={handleFormSubmit}>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md text-black font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="full-name"
                    className="w-full bg-white rounded-[50px] border border-gray-300 focus:border-indigo-500 focus:ring-2 
                    focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                    duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md text-black font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white rounded-[50px] border border-gray-300 focus:border-indigo-500 focus:ring-2 
                    focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors 
                    duration-200 ease-in-out"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white w-full bg-[#08A5DE] border-0 py-2 px-8 rounded-[50px] text-lg"
                >
                  Button
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
