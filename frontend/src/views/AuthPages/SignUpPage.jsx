import React, { Fragment, memo } from "react";

//react-bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//hooks
import { useTranslation } from "react-i18next";
// img
import img1 from "/assets/images/logo.png";

const SignUpPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <main className="main-content sign-in-page vh-100">
        <div
          className="vh-100"
          style={{
            backgroundImage: "url(assets/images/pages/01.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Container>
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="8" md="12" className="align-self-center">
                <div className="user-login-card rounded-3">
                  <div className="text-center">
                     <Link className="text-primary me-0" to="/">
                              <img
                                className="img-fluid logo"
                                src={img1}
                                loading="lazy"
                                alt="streamit"
                              />
                            </Link>
                  </div>
                  <h4 className="text-center mb-5">
                    {t("streamForm.create_account")}
                  </h4>
                  <Row lg="2" className="row-cols-1 g-2 g-lg-5 sign-in-page-data">
                    <Col>
                      <label className="custom-form-label mb-2">
                        {t("streamAccount.first_name")}
                      </label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        required
                      />
                    </Col>
                    <Col>
                      <label className="custom-form-label mb-2">
                        {t("streamAccount.last_name")}
                      </label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        required
                      />
                    </Col>
                    <Col>
                      <label className="custom-form-label  mb-2">
                        {t("streamAccount.username")} *
                      </label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        required
                      />
                    </Col>
                    <Col>
                      <label className="custom-form-label mb-2">
                        {t("streamAccount.email")} *
                      </label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        required
                      />
                    </Col>
                    <Col>
                      <label className="custom-form-label mb-2">
                        {t("streamAccount.password")} *
                      </label>
                     <div className="input-group custom-input-group mb-3">
                        <Form.Control
                          placeholder={t("streamAccount.password")}
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
                    </Col>
                    <Col>
                      <label className="custom-form-label mb-2">
                        {t("streamAccount.confirm_password")} *
                      </label>
                      <div className="input-group custom-input-group mb-3">
                        <Form.Control
                          placeholder={t("streamAccount.password")}
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
                    </Col>
                  </Row>
                  <label className="list-group-item d-flex align-items-center mt-5 mb-3 text-white">
                    <Form.Check.Input className="m-0 me-2" type="checkbox" />
                    I've read and accept the{" "}
                    <Link to="/terms-of-use" className="ms-1">
                     terms & conditions*
                    </Link>
                  </label>
                  <Row className="text-center">
                    <Col lg="3"></Col>
                    <Col lg="6">
                      <div className="full-button">
                        <div className="iq-button">
                          <Link
                            to="#"
                            className="btn btn-primary text-Capitailize position-relative my-3 rounded-3"
                          >
                            <span className="button-text">
                              {t("streamButtons.sign_up")}
                            </span>
                          </Link>
                        </div>
                        <p className="mt-2 mb-0 fw-normal">
                          {t("streamButtons.already_account")}?
                          <Link to="/login" className="ms-1">
                            {t("streamButtons.login")}
                          </Link>
                        </p>
                      </div>
                    </Col>
                    <Col lg="3"></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

SignUpPage.displayName = "SignUpPage";
export default SignUpPage;
