import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { isLoading } = useFirebase();
  const location = useLocation();
  console.log(location);

  if (isLoading) {
    return (
      <div className="text-center mx-auto py-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  if (!user.email && !isLoading) {
    navigate("/account/login", { state: { id: 7, color: "green" } });
  }

  return children;
};

export const AuthenticationPrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.auth.user);
  const { isLoading } = useFirebase();
  if (isLoading) {
    return (
      <div className="text-center mx-auto py-5">
        <Spinner animatio n="border" variant="danger" />
      </div>
    );
  }
  return Object.keys(user).length === 0 ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
    />
  );
};
export default PrivateRoute;
