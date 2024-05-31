import { createContext } from "react";

const initialAuthContext = {
  profile: true,
  isFetching: false,
};

export const ContextAuthenticator = createContext(initialAuthContext);
