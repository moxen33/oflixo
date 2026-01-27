import React, { Fragment, memo } from "react";

//react bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import Logo from "../../components/logo";

// the hook
import { useTranslation } from "react-i18next";

const LoginPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* <SettingOffCanvas /> */}

      <section
        className="sign-in-page vh-100"
        style={{
          backgroundImage: 'url("assets/images/pages/01.webp")',
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center vh-100">
            <Col lg={5} md={12} className="align-self-center">
              <div className="user-login-card rounded-3">
                <Logo />
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <Form>
                      <Form.Group className="form-group">
                        <Form.Label
                          htmlFor="exampleInputEmail1"
                          className="mb-2 custom-form-label"
                        >
                          {t("streamAccount.username_or_email")}{" "}
                        </Form.Label>
                        <Form.Control
                          placeholder={t("streamAccount.placeholder_enter_email")}
                          autoComplete="off"
                          required
                          type="email"
                          id="exampleInputEmail1"
                          className="mb-0 form-control"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label
                          htmlFor="exampleInputPassword2"
                          className="mb-2 custom-form-label"
                        >
                          {t("streamAccount.password")}{" "}
                        </Form.Label>
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
                      </Form.Group>
                      <div className="submit">
                        <input
                          type="hidden"
                          name="action"
                          value="streamit_login"
                        />
                        <Button
                          variant="primary"
                          className="text-capitalize position-relative w-100 my-3 rounded-3"
                        >
                          {t("streamButtons.login")}
                        </Button>
                      </div>
                      <div className="login-form-bottom">
                        <div className="d-flex justify-content-center align-items-center gap-2 links my-3">
                          {t("streamForm.if-you-are-new")}
                          <Link
                            to="/register"
                            className="st-sub-card setting-dropdown"
                          >
                            <h6 className="text-primary m-0">
                              {t("streamButtons.sign_up")}{" "}
                            </h6>
                          </Link>
                        </div>
                      </div>
                      <div className="seperator d-flex justify-content-center align-items-center">
                        <span className="line"></span>
                        <span className="mx-2">OR</span>
                        <span className="line"></span>
                      </div>
                      <div className="css_prefix-social-login-section text-center">
                        <div>{t("streamForm.no-app-config")}</div>
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

LoginPage.displayName = "LoginPage";
export default LoginPage;