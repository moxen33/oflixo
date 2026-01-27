import React, { memo, Fragment } from "react";

// react-bootsrap
import { Container, Col, Row, Form } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

import logofull from "/assets/images/logo-full.png";

// the hook
import { useTranslation } from "react-i18next";

const LockScreen = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100 row">
            <Col lg={6} md={7} sm={12} xs={12}>
              <div className="sign-user_card ">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">{t("authentication.michael_smith")}</h3>
                    <p className="text-body text-center">
                    {t("authentication.admin_password")}
                    </p>
                    <Form className="mt-4">
                      <div className="mb-3">
                        <Form.Control
                          placeholder={t("authentication.password")}
                          autocomplete="off"
                          required=""
                          type="email"
                          id="exampleInputEmail2"
                          className="mb-0"
                        />
                      </div>
                    </Form>
                    <Link
                      className="btn btn-primary w-100 custom-sign-btn mt-2"
                      to="/"
                    >
                      {t("authentication.log_in")}
                    </Link>
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

LockScreen.displayName = "LockScreen";
export default LockScreen;
