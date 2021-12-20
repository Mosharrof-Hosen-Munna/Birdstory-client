import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import MobileNavigation from "../Shared/Navigation/MobileNavigation";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  const { logOut } = useFirebase();
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Navigation />
      <MobileHeader />
      <button onClick={logOut}>Logout</button>
      <MobileNavigation />
    </>
  );
};

export default Home;
