import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MobileHeader from "../Shared/MobileHeader/MobileHeader";
import MobileNavigation from "../Shared/Navigation/MobileNavigation";
import Navigation from "../Shared/Navigation/Navigation";
import Post from "../Shared/Post/Post";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <MobileHeader />
      <ProfileHeader />
      <Container>
        <div className=" my-2 mx-0  mx-md-5">
          <Row className="g-4">
            <Col xs={12} md={7}>
              <Post />
              <Post />
            </Col>
            <Col className="d-none d-md-block">
              <div
                style={{
                  position: " -webkit-sticky" /* Safari */,
                  position: "sticky",
                  top: "100px",
                }}
              >
                <ProfileInfo />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
