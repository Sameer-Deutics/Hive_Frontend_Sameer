import React from "react";
import { useFetchDataQuery } from "./apiService";

const FetchData = ({ endpoint }) => {
  const { data, error, isLoading } = useFetchDataQuery(endpoint);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
