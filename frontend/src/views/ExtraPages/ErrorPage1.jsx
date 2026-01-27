import React, { Fragment, memo } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ErrorPage1 = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="section-padding vh-100 error-404-section">
        <Container className="h-100">
          <div className="error-404-position">
            <Row className="h-100 align-items-center">
              <Col lg="2"></Col>
              <Col lg="8">
                <img
                  src={generateImgPath("/assets/images/pages/new-404.png")}
                  alt="404"
                  loading="lazy"
                  className="error-404-img mb-4 pb-2"
                />
                <h4 className="fw-semibold mb-0 text-center">
                  {t("streamError.something_wrong")}
                </h4>
                <p className="text-center">{t("streamError.requested_page")}</p>
                <div className="text-center mt-4 pt-3">
                   <Link to="/" className="btn btn-link error-404-btn text-capitalize">{t("streamError.back_home")}</Link>
                </div>
              </Col>
              <Col lg="2"></Col>
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ErrorPage1.displayName = "ErrorPage1";
export default ErrorPage1;
