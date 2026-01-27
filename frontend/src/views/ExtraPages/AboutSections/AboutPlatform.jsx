import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutPlatform = () => {
     const { t } = useTranslation();
  return (
    <>
      <section className="custom-site-main">
        <div className="e-con-inner">
          <Container className="px-3 px-sm-0">
            <Row className="justify-content-center">
              {/* <!-- Text Content --> */}
              <Col md={12} className="text-center">
                <h3 className="about-title">{t("streamAbout.about_streamit")}</h3>
                <p>
                 {t("streamAbout.about_streamit_desc")}
                </p>
              </Col>
            </Row>

            {/* <!-- Additional Text Section --> */}
            <Row className="justify-content-center">
              <Col md={12} className="text-center">
              <p className="custom-about-decs">
                {t("streamAbout.about_streamit_desc_two")}
              </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default AboutPlatform;
