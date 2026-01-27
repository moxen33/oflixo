import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Form, Button } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

import logofull from "/assets/images/logo-full.png";

const RecoverPassword = memo(() => {
  const { t } = useTranslation();
  let history = useNavigate();

  return (
    <Fragment>
      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center row">
            <Col lg={5} md={12} className="align-self-center">
              <div className="sign-user_card">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">{t("authentication.reset_password")}</h3>
                    <p className="text-body">
                    {t("authentication.email_address")}
                    </p>
                    <Form className="mt-4">
                      <div className="input-group custom-input-group mb-3">
                        <Form.Control
                          type="password"
                          name="password"
                          id="password"
                          placeholder={t("authentication.enter_password")}
                          required=""
                        />
                        <span className="input-group-text">
                          <i
                            className="ph ph-eye-slash"
                            id="togglePassword"
                          ></i>
                        </span>
                      </div>
                    </Form>
                    <div className="sign-info">
                      <Button
                        type="button"
                        variant="primary"
                        className="w-100 custom-sign-btn mt-2"
                      >
                        {t("authentication.reset")}
                      </Button>
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

RecoverPassword.displayName = "RecoverPassword";
export default RecoverPassword;
