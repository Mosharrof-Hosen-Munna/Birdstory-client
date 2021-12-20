import React, { useEffect, useState } from "react";
import { Container, Form, Row, Button, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import { setIsLoading, setUser } from "../../../store/actions/authActions";

const Login = () => {
  useEffect(() => {
    document.title = "Login your account | Birdstory";
  }, []);

  const [loginData, setLoginData] = useState({});
  const { loginEmailPassword } = useFirebase();
  const dispatch = useDispatch();

  const location = useLocation();

  // console.log(location);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginEmailPassword(loginData)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((err) => console.log(err.message))
      .finally(() => dispatch(setIsLoading(false)));
  };

  return (
    <section>
      <Container>
        <Row xs={1} md={2} lg={2} className="g-5">
          <Col className="d-none d-md-block">
            <div className="vh-100 w-100 d-flex align-items-center">
              <div>
                <h1
                  className="text-blue-green birdstory-logo"
                  style={{ fontSize: "50px" }}
                >
                  Birdstory
                </h1>
                <h3>
                  Birdstory helps you to share your daily life story and
                  fantastic blogs for Entertainment
                </h3>
                <p className="text-muted">
                  Connect with us by creating new account!
                </p>
              </div>
            </div>
          </Col>
          <Col className="mx-auto">
            <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
              <div className="w-100">
                <h1
                  className="text-blue-green d-block d-md-none mb-4 text-center birdstory-logo"
                  style={{ fontSize: "30px" }}
                >
                  Birdstory
                </h1>
                <Card className="w-100 p-4 shadow-sm border-0">
                  <Form onSubmit={handleSubmit}>
                    <h3 className="text-blue-green text-center">
                      WELCOME BACK!
                    </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <button
                      type="submit"
                      className="btn-blue-green w-100 fw-bold"
                    >
                      Login
                    </button>
                  </Form>
                  <p className="text-center text-blue-green mt-2">
                    Forgotten Password
                  </p>
                  <hr className="m-0 mb-3 w-75 mx-auto" />
                  <Link to="/account/register" className="text-center">
                    <button className="btn-blue-green w-auto fw-bold bg-info">
                      Create New Account
                    </button>
                  </Link>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
