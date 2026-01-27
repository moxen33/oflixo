import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Form, Button } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

import logofull from "/assets/images/logo-full.png";

const SignUp = memo(() => {
  const { t } = useTranslation();
  let history = useNavigate();

  return (
    <Fragment>
      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg={7} md={12} className="align-self-center">
              <div className="sign-user_card ">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Link to="/">
                      <img className="img-fluid logo" src={logofull} alt="#" />
                    </Link>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.username")}</Form.Label>
                            <Form.Control
                              placeholder={t("authentication.enter_full_name")}
                              autocomplete="off"
                              required=""
                              type="text"
                              id="exampleInputEmail2"
                              className="mb-0 form-control"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.e_mail")}</Form.Label>
                            <Form.Control
                              placeholder={t("authentication.enter_email")}
                              autocomplete="off"
                              required=""
                              type="email"
                              id="exampleInputEmail3"
                              className="mb-0 form-control"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.first_name")}</Form.Label>
                            <Form.Control
                              placeholder={t("authentication.first_name")}
                              autocomplete="off"
                              required=""
                              type="text"
                              id="exampleInputEmail4"
                              className="mb-0 form-control"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.last_name")}</Form.Label>
                            <Form.Control
                              placeholder={t("authentication.last_name")}
                              autocomplete="off"
                              required=""
                              type="email"
                              id="exampleInputEmail5"
                              className="mb-0 form-control"
                            />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.password")}</Form.Label>
                            <div className="input-group custom-input-group mb-3">
                              <Form.Control
                                placeholder={t("authentication.password")}
                                required=""
                                type="password"
                                id="exampleInputPassword6"
                                className="mb-0 form-control"
                              />
                              <span className="input-group-text">
                                <i
                                  className="ph ph-eye-slash"
                                  id="togglePassword"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Form.Label className="form-label">{t("authentication.repeat_password")}</Form.Label>
                            <div className="input-group custom-input-group mb-3">
                              <Form.Control
                                placeholder={t("authentication.repeat_password")}
                                required=""
                                type="password"
                                id="exampleInputPassword7"
                                className="mb-0 form-control"
                              />
                              <span className="input-group-text">
                                <i
                                  className="ph ph-eye-slash"
                                  id="reset-togglePassword"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                        <Form.Check
                          type="radio"
                          id="customRadio1"
                          name="customRadio"
                           label={t("authentication.premium")}
                        />
                        <Form.Check
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          label={t("authentication.basic")}
                        />
                        <Form.Check
                          type="radio"
                          id="customRadio3"
                          name="customRadio"
                          label={t("authentication.free-free")}
                        />
                      <div className="submit mt-3">
                        <Button
                          className="w-100 custom-sign-btn"
                        >
                          {t("authentication.sign_up")}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <div className="d-flex justify-content-center links">
                      {t("authentication.already_have_an_account")}{" "}
                        <Link
                        to="/auth/sign-in"
                          className="text-primary ms-2"
                        >
                          {t("authentication.sign_in")}
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

SignUp.displayName = "SignUp";
export default SignUp;
