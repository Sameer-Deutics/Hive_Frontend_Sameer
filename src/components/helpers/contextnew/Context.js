import { createContext } from "react";

const initialAuthContext = {
  profile: true, 
  isFetching: true, 
};

export const ContextAuthenticator = createContext(initialAuthContext);