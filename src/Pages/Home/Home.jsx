import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  const { logOut } = useFirebase();
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Navigation />
      <Container>
        <h1 className="text-blue-green text-center">
          Welcome! We always rememer you!
        </h1>
        <button className="btn-blue-green " onClick={logOut}>
          Logout
        </button>

        <div
          d-inline
          className="birdstory-logo text-center p-3 m-5 text-white rounded-circle bg-blue-green d-inline-block d-flex align-items-center justify-content-center "
          style={{ fontSize: "200px", width: "200px", height: "200px" }}
        >
          B
        </div>
      </Container>
    </>
  );
};

export default Home;
