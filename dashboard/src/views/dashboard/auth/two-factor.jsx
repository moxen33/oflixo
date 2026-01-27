import { memo, Fragment } from "react";

//React-bootstrap
import { Row, Col, Container, Form, Button } from "react-bootstrap";

//router-dom
import { useNavigate, Link } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

import logofull from "/assets/images/logo-full.png";

const TwoFactor = memo(() => {
  const { t } = useTranslation();
  // const appName = useSelector(SettingSelector.app_name)
  let history = useNavigate();
  return (
    <Fragment>
      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg={5} md={12} className="align-self-center form-padding">
              <div className="sign-user_card">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">
                    {t("authentication.verification")}
                    </h3>
                    <p className="text-body">
                    {t("authentication.instructions_to_reset")}
                    </p>

                    <Form className="mt-4">
                      <Form.Group className="form-group floating-label">
                        <Form.Label htmlFor="email">{t("authentication.phone_number")}</Form.Label>
                        <Form.Control
                          id="email"
                          type="email"
                          aria-describedby="email"
                          placeholder="+1 123456789"
                        />
                      </Form.Group>
                      <Button
                        varient="primary"
                        className="w-100 custom-sign-btn mt-2"
                      >
                        {t("authentication.reset")}
                      </Button>

                      <Form.Group className="form-group mt-3">
                        <Form.Label for="email">
                        {t("authentication.OTP")}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          aria-describedby="email"
                          placeholder="0000"
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="w-100 custom-sign-btn mt-2"
                      >
                        {t("authentication.verify")}
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-center links">
                  {t("authentication.dont_have_an_account")}{" "}
                    <a href="/auth/sign-up" className="text-primary ms-2">
                    {t("authentication.sign_up")}
                    </a>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link to="/auth/recoverpw" className="f-link">
                    {t("authentication.forgot_your_password")}
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

TwoFactor.displayName = "TwoFactor";
export default TwoFactor;
