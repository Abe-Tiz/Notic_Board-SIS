import { Navigate, useLocation } from "react-router-dom";
import useLoggedInUser from "../Hooks/useLoggedInUser";
import { useEffect, useState } from "react";
import LoadingCircle from './../components/LoadingCircle';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, getLoggedInUser } = useLoggedInUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      await getLoggedInUser();
      setIsLoading(false);
    };

    checkUser();
  }, [getLoggedInUser]);

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
