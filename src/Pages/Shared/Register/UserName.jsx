import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { nameValidation } from "../../../validations/authValidation";

const UserName = ({ handleNext, handleUserData, userData }) => {
  const [errors, setErrors] = useState({});
  const [nameData, setNameData] = useState({
    firstName: "",
    lastName: "",
  });
  const [isNext, setIsNext] = useState(false);

  //set nameData to state
  const handleChange = (e) => {
    const newNameData = { ...nameData };
    newNameData[e.target.name] = e.target.value;
    setNameData(newNameData);
  };

  // setExits nameData from userData
  useEffect(() => {
    if (userData.firstName && userData.lastName) {
      setNameData({
        firstName: userData.firstName,
        lastName: userData.lastName,
      });
    } else if (userData.firstName) {
      setNameData({ firstName: userData.firstName, lastName: "" });
    } else if (userData.lastName) {
      setNameData({ firstName: "", lastName: userData.lastName });
    }
  }, []);

  // check validation every time when nameData changes
  useEffect(() => {
    const newErrors = nameValidation(nameData);
    setErrors(newErrors);

    handleUserData(nameData);
    if (Object.keys(newErrors).length === 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [nameData]);

  // set Errors object emty and set isNext false for first time rendering
  useEffect(() => {
    setErrors({});
    setIsNext(false);
  }, []);

  const goNext = () => {
    if (isNext) {
      handleNext();
    }
  };
  return (
    <Card className="p-3 border-0 shadow">
      <div className="text-center">
        <h3 className="">What is your name?</h3>
        <p className="text-muted">Please Enter Your Real Life name</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="Enter Your First name"
            value={userData.firstName ? userData.firstName : ""}
          />
          {errors.firstName && (
            <Form.Text className="text-danger">{errors.firstName}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="lastName"
            placeholder="Enter Your Last Name"
            value={userData.lastName ? userData.lastName : ""}
          />
          {errors.lastName && (
            <Form.Text className="text-danger">{errors.lastName}</Form.Text>
          )}
        </Form.Group>
      </Form>
      <div className="text-end pb-2">
        <div
          onClick={goNext}
          className={`fw-bold d-inline-block pointer shadow-sm text-hover  ${
            !isNext ? "text-muted" : "text-blue-green"
          } h4`}
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

export default UserName;
