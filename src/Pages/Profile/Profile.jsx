import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Shared/Navigation/Navigation";
import Post from "../Shared/Post/Post";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <Navigation />
      <ProfileHeader />
      <Container>
        <div className=" my-2 mx-0 mx-md-5">
          <Row className="g-4">
            <Col xs={12} md={7}>
              <Post />
              <Post />
            </Col>
            <Col>
              <ProfileInfo />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
