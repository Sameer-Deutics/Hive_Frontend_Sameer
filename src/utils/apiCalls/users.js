// import { axiosInstance } from "./axiosInstance";
import axiosInstance from "./axiosInstance";

// login user
export const LoginUser= async (payload) => {
    try {
        const response=await axiosInstance.get("/auth/me/",payload)
        return response.data
    } catch (error) {
        return error.message;
    }
};


export const AuthUser= async () => {
    try {
        const response=await axiosInstance.get("/auth/me/")
        console.log(response,"response");
        return response.data
    } catch (error) {
        console.log(error);
        return error.message;
    }
};


export const get_profile= async () => {
    try {
        const response=await axiosInstance.get("")
        console.log(response,"response");
        return response.data
    } catch (error) {
        console.log(error);
        return error.message;
    }
};