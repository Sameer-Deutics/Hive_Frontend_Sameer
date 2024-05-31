import { Navigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ContextAuthenticator } from "../../components/helpers/Context/Context";

const ProtectedRoutes = ({
  children,
  conditions,
  profileRequired = true,
  roleBasedRouting = true,
  Component,
}) => {
  const context = useContext(ContextAuthenticator);
  const { profile, isFetching } = context;
  const [status, setStatus] = useState(null);
  const renderedOnce = useRef(false);
  const redirectPath = useRef("");

  useEffect(() => {
    const evaluateCondition = async () => {
      let tempStatus = true;
      for (let key of Object.keys(conditions)) {
        const condition = conditions[key];
        if (typeof condition === "function") {
          if (!(await condition(context))) {
            redirectPath.current = key;
            tempStatus = false;
            break;
          }
        } else if (typeof condition === "boolean") {
          if (!condition) {
            redirectPath.current = key;
            tempStatus = false;
            break;
          }
        }
      }
      setStatus(tempStatus);
    };

    evaluateCondition();
  }, []);

  if (status === null) {
    return null;
  }

  if (!status || !profileRequired || !roleBasedRouting) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoutes;
