import { memo, Fragment } from "react";

//React-bootstrap
import { Row, Col, Container, Form, Button } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logofull from "/assets/images/logo-full.png";

const AccountDeactive = memo(() => {
  // const appName = useSelector(SettingSelector.app_name)
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className="sign-in-page"
        style={{ backgroundImage: 'url("../assets/images/login/login.webp")' }}
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center form-padding">
              <div className="sign-user_card">
                <Link to="/">
                  <img className="img-fluid logo" src={logofull} alt="#" />
                </Link>
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h3 className="mb-3 text-center">{t("authentication.account_de_activate")}</h3>
                    <p className="text-body text-center">
                    {t("authentication.details")}
                    </p>

                    <Form className="mt-4">
                      <Form.Group className="form-group">
                        <Form.Label htmlFor="email">{t("authentication.account_email")}</Form.Label>
                        <Form.Control
                          id="email"
                          type="email"
                          aria-describedby="email"
                          placeholder="xyz@example.com"
                        />
                      </Form.Group>
                      <Form.Group className="form-group mt-3">
                        <Form.Label htmlFor="name">{t("authentication.account_username")}</Form.Label>
                        <Form.Control
                          id="name"
                          type="text"
                          aria-describedby="name"
                          placeholder="XYZ"
                        />
                      </Form.Group>
                    </Form>
                    <Button
                      variant="primary"
                      className="w-100 custom-sign-btn mt-2"
                    >
                      {t("authentication.de_activate")}
                    </Button>
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

AccountDeactive.displayName = "AccountDeactive";
export default AccountDeactive;
