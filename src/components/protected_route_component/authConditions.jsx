import { ContextAuthenticator } from "../../components/helpers/contextnew/Context";
import axiosInstance from "../../utils/apiCalls/axiosInstance";
// import { fetchProfile } from "../redux/userSlice";

const accessTokenCheckExistence = () => {
  const access_token = window.localStorage.getItem("access_token");

  if (access_token === null) {
    window.localStorage.setItem("refresh_token", null);
    return false;
  }
  return true;
};

export const isGuest = async function (userProfileContext, dispatch) {
  if (accessTokenCheckExistence()) {
    return await axiosInstance()
      .get(get_profile())
      .then((response) => false)
      .catch((err) => true);
  }
  return true;
};

const validContext = (Context) => {
  const { profile, isFetching } = Context;

  return profile && !isFetching;
};

export const isAuthenticated = async function (userProfileContext, dispatch) {
  if (validContext(userProfileContext)) {
    return true;
  } else {
    if (accessTokenCheckExistence()) {
      return true;
    }
    return false;
  }
};

export const authConditions = {
  "/signin": isAuthenticated,
};
