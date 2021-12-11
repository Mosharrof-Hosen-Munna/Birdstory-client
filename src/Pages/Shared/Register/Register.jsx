import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nameValidation } from "../../../validations/authValidation";
import UserName from "./UserName";

const Register = () => {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    document.title = "Register your new account | Birdstory";
  }, []);

  // add new data to userData state of object
  const handleUserData = (data) => {
    const newUserData = { ...userData };
    for (const d in data) {
      newUserData[d] = data[d];
    }
    setUserData(newUserData);
  };

  // increase count value 1
  const handleNext = () => {
    setCount(count + 1);
  };

  // decrease count value 1
  const handlePrev = () => {
    setCount(count - 1);
  };

  return (
    <section className="py-4">
      <Container>
        <Row>
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <div>
              <h2 className="mb-4 text-center">
                Create New Account{" "}
                <span
                  className="text-blue-green  mt-3 rounded-3 birdstory-logo"
                  style={{ fontSize: "40px" }}
                >
                  Birdstory
                </span>
              </h2>
              {count === 1 && (
                <UserName
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  userData={userData}
                />
              )}
              {count === 2 && (
                <UserBirthDate
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
              {count === 3 && (
                <UserAddress
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
              {count === 4 && (
                <UserEmailPassword
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const UserEmailPassword = ({ handlePrev, handleNext }) => {
  return (
    <Card className="p-3 border-0 shadow">
      <div className="text-center">
        <h3 className="">New Email and Password</h3>
        <p className="text-muted">Please Enter a valid email and password</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter new email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter New Password"
            required
          />
          <Form.Text className="text-muted">
            Password Must Be At Least 6 Characters
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirm Password"
            required
          />
        </Form.Group>
      </Form>
      <div className="d-flex mb-3 align-items-center justify-content-between">
        <h4
          onClick={() => handlePrev()}
          className="fw-bold text-start d-inline-block pointer text-danger h4"
        >
          Prev
        </h4>
        <button className="btn-blue-green fw-bold shadow py-2 px-5">
          Register
        </button>
      </div>
      <hr className="m-0 mb-3 w-75 mx-auto" />
      <Link
        to="/account/login"
        className="text-blue-green text-center text-decoration-none"
      >
        Already have an account?{" "}
        <span className="text-decoration-underline">login here</span>
      </Link>
    </Card>
  );
};

const UserBirthDate = ({ handleNext, handlePrev }) => {
  const [isNext, setIsNext] = useState(false);
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    setBirthDate(new Date(e.target.value).toDateString());
    setAge(new Date() - new Date(birthDate));
  };
  console.log(birthDate);
  console.log(age);

  return (
    <Card className="p-3 border-0 shadow">
      <div className="text-center">
        <h3 className="">What is your Bithdate?</h3>
        <p className="text-muted">Please Select your original birthdate</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Your Birthdate</Form.Label>
          <Form.Control onChange={handleChange} type="date" required />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-between">
        <div
          onClick={() => handlePrev()}
          className="fw-bold text-start d-inline-block pointer mb-3 text-danger h4"
        >
          Prev
        </div>
        <div
          onClick={() => handleNext()}
          className="fw-bold text-end d-inline-block pointer mb-3 text-blue-green h4"
        >
          Next
        </div>
      </div>
      <hr className="m-0 mb-3 w-75 mx-auto" />
      <Link
        to="/account/login"
        className="text-blue-green text-center text-decoration-none"
      >
        Already have an account?{" "}
        <span className="text-decoration-underline">login here</span>
      </Link>
    </Card>
  );
};

const UserAddress = ({ handlePrev, handleNext }) => {
  return (
    <Card className="p-3 border-0 shadow">
      <div className="text-center">
        <h3 className="">What is your address and Phone number?</h3>
        <p className="text-muted">
          <span className="text-warning">Notice:</span> You can add it later,
          You can skip it..{" "}
        </p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Your Address</Form.Label>
          <Form.Control type="text" placeholder="Enter a address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Your Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-between align-items-center">
        <div
          onClick={() => handlePrev()}
          className="fw-bold text-start d-inline-block pointer mb-3 text-danger h4"
        >
          Prev
        </div>
        <div
          onClick={() => handleNext()}
          className="fw-bold text-end d-inline-block pointer mb-3 text-info h5"
        >
          Skip
        </div>
        <div
          onClick={() => handleNext()}
          className="fw-bold text-end d-inline-block pointer mb-3 text-blue-green h4"
        >
          Next
        </div>
      </div>
      <hr className="m-0 mb-3 w-75 mx-auto" />
      <Link
        to="/account/login"
        className="text-blue-green text-center text-decoration-none"
      >
        Already have an account?{" "}
        <span className="text-decoration-underline">login here</span>
      </Link>
    </Card>
  );
};

export default Register;
