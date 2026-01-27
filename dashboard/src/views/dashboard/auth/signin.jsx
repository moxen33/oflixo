import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Button, Form } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

import logofull from "/assets/images/logo-full.png";

const SignIn = memo(() => {
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
            <Col lg={5} md={12} className="align-self-center">
              <div className="sign-user_card">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">{t("authentication.sign_in")}</h3>
                    <Form>
                      <Form.Group className="form-group">
                        <Form.Label
                          htmlFor="exampleInputEmail1"
                          className="mb-2"
                        >
                         {t("authentication.username&email")}{" "}
                        </Form.Label>
                        <Form.Control
                          placeholder={t("authentication.enter_email")}
                          autocomplete="off"
                          required
                          type="email"
                          id="exampleInputEmail1"
                          className="mb-0 form-control"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label
                          htmlFor="exampleInputPassword2"
                          className="mb-2"
                        >
                          {t("authentication.password")}{" "}
                        </Form.Label>
                        <div className="input-group custom-input-group mb-3">
                          <Form.Control
                            placeholder={t("authentication.password")}
                            required
                            type="password"
                            id="exampleInputPassword2"
                            className="mb-0 form-control"
                          />
                          <span className="input-group-text">
                            <i
                              className="ph ph-eye-slash"
                              id="togglePassword"
                            ></i>
                          </span>
                        </div>
                      </Form.Group>
                      <div className="forgot-password">
                        <Link
                          to="/auth/recoverpw"
                        >
                          {t("authentication.forgot_your_password")}{" "}
                        </Link>
                      </div>
                      <div className="submit">
                        <input
                          type="hidden"
                          name="action"
                          value="streamit_login"
                        />
                        <Button
                          variant="primary"
                          className="w-100 custom-sign-btn"
                        >
                          {t("authentication.log_in")}
                        </Button>
                      </div>
                      <div className="login-form-bottom">
                        <div className="d-flex justify-content-center align-items-center gap-2 links my-3">
                        {t("authentication.if-you-are-new")}
                          <Link
                            to="/auth/sign-up"
                            sign_up className="st-sub-card setting-dropdown"
                          >
                            <h6 className="text-primary m-0">{t("authentication.sign_up")} </h6>
                          </Link>
                        </div>
                      </div>
                      <div className="css_prefix-separator">
                        <span className="or-section"> OR </span>
                      </div>
                      <div className="css_prefix-social-login-section">
                        <div>
                        {t("authentication.no-app-config")}
                        </div>
                      </div>
                    </Form>
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

SignIn.displayName = "SignIn";
export default SignIn;
