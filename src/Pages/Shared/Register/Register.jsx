import { sendEmailVerification } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import { setUser } from "../../../store/actions/actions";
import { emailPasswordValidation } from "../../../validations/authValidation";
import UserBirthDate from "./UserBirthDate";
import UserInfo from "./UserInfo";
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
    phone: Number,
  });

  useEffect(() => {
    document.title = "Register your new account | Birdstory";
    console.log("ggggg");
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
                  userData={userData}
                />
              )}
              {count === 3 && (
                <UserInfo
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  userData={userData}
                />
              )}
              {count === 4 && (
                <UserEmailPassword
                  handleUserData={handleUserData}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  userData={userData}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
const UserEmailPassword = ({ handlePrev, handleUserData, userData }) => {
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});
  const { registerEmailPassword, auth } = useFirebase();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      handleUserData({ email: value });
    } else if (field === "password") {
      handleUserData({ password: value });
    } else {
      setConfirmPass(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsMessage = emailPasswordValidation({
      password: userData.password,
      email: userData.email,
      confirmPassword: confirmPass,
    });
    if (Object.keys(errorsMessage).length > 0) {
      setErrors(errorsMessage);
    } else {
      setErrors({});
      // adfsdf
      registerEmailPassword(userData).then((result) => {
        const user = result.user;
        sendEmailVerification(auth.currentUser);
        navigate("/account/login");
      });
    }
  };

  return (
    <Card className="p-3 border-0 shadow">
      <div className="text-center">
        <h3 className="">New Email and Password</h3>
        <p className="text-muted">Please Enter a valid email and password</p>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter new email"
            value={userData.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter New Password"
            value={userData.password}
            required
          />
          {errors.password && (
            <Form.Text className="text-danger">{errors.password}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Enter Confirm Password"
            required
          />
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              {errors.confirmPassword}
            </Form.Text>
          )}
        </Form.Group>

        <div className="d-flex mb-3 align-items-center justify-content-between">
          <h4
            onClick={() => handlePrev()}
            className="fw-bold text-start d-inline-block shadow-sm text-hover pointer text-danger h4"
          >
            Prev
          </h4>
          <button
            type="submit"
            className="btn-blue-green fw-bold shadow py-2 px-5"
          >
            Register
          </button>
        </div>
      </Form>
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
