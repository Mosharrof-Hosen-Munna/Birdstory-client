import React from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const location = useLocation();

  if (isLoading) {
    console.log("loding");
    return (
      <div className="text-center vh-100 d-flex justify-content-center align-items-center mx-auto py-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  // if (!user.emailVerified) {
  //   return (
  //     <h3 className="text-center text-blue-green vh-100 d-flex align-items-center justify-content-center">
  //       Verification Email sent successfully! Please check your mail inbox for
  //       verify your account.
  //     </h3>
  //   );
  // }

  return user.email ? (
    children
  ) : (
    <Navigate to="/account/login" replace={true} />
  );
};

export const AuthenticationPrivateRoute = ({ children, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  const isLoading = useSelector((state) => state.auth.isLoading);
  if (isLoading) {
    return (
      <div className="text-center vh-100 d-flex justify-content-center align-items-center mx-auto py-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  return Object.keys(user).length === 0 ? children : <Navigate to="/" />;
};
export default PrivateRoute;
