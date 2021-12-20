import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserInfo = ({ handlePrev, handleNext, userData, handleUserData }) => {
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    if (userData.address && userData.phone) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [userData.address, userData.phone]);

  const changeHandler = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    if (inputField === "address") {
      handleUserData({ address: value });
    } else if (inputField === "phone") {
      handleUserData({ phone: value });
    }
  };

  const goNext = () => {
    if (isNext) {
      handleNext();
    }
  };
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
          <Form.Control
            onChange={changeHandler}
            name="address"
            type="text"
            placeholder="Enter a address"
            value={userData.address}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Your Phone</Form.Label>
          <Form.Control
            onChange={changeHandler}
            name="phone"
            type="tel"
            placeholder="Enter Phone Number"
            value={userData.phone}
          />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-between align-items-center">
        <div
          onClick={() => handlePrev()}
          className="fw-bold text-start d-inline-block pointer shadow-sm text-hover mb-3 text-danger h4"
        >
          Prev
        </div>
        <div
          onClick={() => handleNext()}
          className="fw-bold text-end d-inline-block pointer shadow-sm text-hover mb-3 text-primary h6 text-decoration-underline"
        >
          Skip
        </div>
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

export default UserInfo;
