import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  const { logOut, isLoading } = useFirebase();
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Navigation />
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default Home;
