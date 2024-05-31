// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ServiceAPI = createApi({
  reducerPath: "hiveapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hive.bcp.net.pk,api/v1" }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/auth/me",
    }),
  }),
});
