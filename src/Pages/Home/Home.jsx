import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Home = () => {
  const { logOut, isLoading } = useFirebase();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
