import axios from "axios";

export const getRequest = axios.create({
  baseURL: "https://hive.bcp.net.pk/api/v1",
});
