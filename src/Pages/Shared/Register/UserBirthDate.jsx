import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserBirthDate = ({
  handleNext,
  handlePrev,
  handleUserData,
  userData,
}) => {
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    if (userData.birthDate) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [userData.birthDate]);

  const handleBirthdate = (e) => {
    handleUserData({ birthDate: e.target.value });
  };

  const handleBlur = (e) => {
    if (userData.birthDate) {
      setIsNext(true);
    } else {
      setIsNext(false);
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
        <h3 className="">What is your Bithdate?</h3>
        <p className="text-muted">Please Select your original birthdate</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Your Birthdate</Form.Label>
          <Form.Control
            onChange={handleBirthdate}
            onBlur={handleBlur}
            name="birthDate"
            type="date"
            value={userData.birthDate}
            required
          />
        </Form.Group>
      </Form>
      <div className="d-flex mb-3 justify-content-between">
        <div
          onClick={() => handlePrev()}
          className="fw-bold text-start shadow-sm text-hover d-inline-block pointer text-danger h4"
        >
          Prev
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

export default UserBirthDate;
