import React from "react";

import bg_aboutus from "/assets/images/pages/bg-aboutus-min.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const UltimateExp = () => {
    const { t } = useTranslation();
  return (
    <>
      <section className="about-section-padding-bottom">
        <div
          className="streaming-section text-center"
          style={{
            backgroundImage: `url(${bg_aboutus})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container>
            <div className="streaming-section-spacing">
              <Row className="justify-content-center align-items-center">
                <Col xl={6} md={8}>
                  {/* <!-- Title --> */}
                  <div className="">
                    <h3 className="mt-0 streaming-title">{t("streamAbout.ultimate_exp")}
                    </h3>
                  </div>

                  {/* <!-- Subtitle --> */}
                  <div className="">
                    <p className="description-trail mb-0 fw">
                      {t("streamAbout.ultimate_exp_dec")} <strong>$7.49/{t("streamAbout.month")}</strong>{" "}
                     {t("streamAbout.no_commitment")}
                    </p>
                  </div>
                  {/* <!-- CTA Button --> */}
                  <div className="streaming-section-btn">
                    <div className="iq-button">
                      <Link
                        to="/pricing"
                        className="btn btn-primary rounded-3"
                      >
                        <span className="d-flex align-items-center justify-content-center gap-2 fw-semibold">
                          {t("streamAbout.start_free_trail")}
                          <i className="ph-fill ph-play fs-6 ms-0"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default UltimateExp;
