import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Col, Row, Button } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// img
import logofull from "/assets/images/logo-full.png";
// the hook
import { useTranslation } from "react-i18next";

const ConfirmMail = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>

      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col sm={12} md={6}>
              <div className="sign-user_card ">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <h3 className="mb-3 text-center">{t("authentication.success")}</h3>
                  <p className="text-body">
                  {t("authentication.email_send")}{" "}
                    <a
                      role="button"
                      tabindex="0"
                      href="#"
                       onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                        }}
                      className="__cf_email__ bg-dark border-0 p-0 btn btn-primary"
                    >
                      [email&nbsp;protected]
                    </a>{" "}
                    {t("authentication.email_check")}
                  </p>
                  <Link
                    className="btn btn-primary w-100 custom-sign-btn mt-2"
                    to="/"
                  >
                    {t("authentication.back_to_home")}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

ConfirmMail.displayName = "ConfirmMail";
export default ConfirmMail;
