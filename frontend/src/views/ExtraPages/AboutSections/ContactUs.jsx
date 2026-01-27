import { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col, } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../../StaticData/data";

const ContactUs = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bs-gray-900)" }}
      >
        <div className="container">
          <Row className="about-us-row align-items-center">
            <Col lg={6} md={5}>
              <div className="text-center">
                <img
                  width="497"
                  height="477"
                  src={generateImgPath("/assets/images/pages/map.webp")}
                  className=" img-fluid attachment-large size-large"
                  alt="img"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg={6} md={7}>
              <h3 className="text-capitalize text-start mb-4">
                Connect with Us
              </h3>
              <p className="mb-0 text-start">
                {t("streamAbout.streamit_located")} <a href="mailto:info@medyapim.com">{t("streamAbout.streamit_mail")}</a>{t("streamAbout.tech_related")}
              </p>
              <div className="mt-4">
                <div className="text-capitalize mb-1 d-flex gap-2">
                  <h6>Company:</h6>
                  <h6 className="text-decoration-none ms-1">{t("streamKeyword.iqonic_design")}</h6>
                </div>
                <div className="text-capitalize mb-1 d-flex gap-2">
                  <h6>Product:</h6>
                  <h6 className="text-decoration-none ms-1">{t("streamProfile.pay_to_value")}</h6>
                </div>
                <div>
                  Contact Us:{" "}
                  <Link to="#" className="text-decoration-none ms-1">
                    {t("streamAbout.streamit_mail")}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  );
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
