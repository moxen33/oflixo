import React from "react";
import { generateImgPath } from "../../../StaticData/data";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ChooseStreamit = () => {
     const { t } = useTranslation();
  return (
    <>
      <div className="about-section-padding-bottom">
        <Container fluid>
          <Row className="align-items-center">
            {/* <!-- Image Section --> */}
            <Col xl={6}>
              <img
                className="img-fluid rounded mb-4 mb-xl-0 about-content-image"
                src={generateImgPath(
                  "/assets/images/pages/content-Image-min.png"
                )}
                alt="content-image"
              />
            </Col>

            {/* <!-- Text and Features Section --> */}
            <Col xl={6}>
              <h3 className="about-title">{t("streamAbout.why_choose_streamit")}</h3>
              <p className="text-light">
               {t("streamAbout.why_choose_streamit_desc")}
              </p>

              <div className="divider"></div>
              <div className="d-flex flex-column flex-wrap w-100 gap-3 mt-3">
                <div className="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
                  <img
                    src={generateImgPath(
                      "/assets/images/pages/lab-test-icon.png"
                    )}
                    alt="Movies"
                  />
                  <div className="feature-content">
                    <h5 className="feature-title">
                      <span className="text-primary">10,000+</span> {t("streamAbout.why_choose_streamit_list_one")} 
                    </h5>
                    <p className="mb-0 font-size-14">
                      {t("streamAbout.why_choose_streamit_list_one_desc")}
                    </p>
                  </div>
                </div>
                <div className="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
                  <img
                    src={generateImgPath("/assets/images/pages/ai-powered.png")}
                    alt="AI Powered"
                  />
                  <div className="feature-content">
                    <h5 className="feature-title">{t("streamAbout.why_choose_streamit_list_two")}</h5>
                    <p className="mb-0 font-size-14">
                      {t("streamAbout.why_choose_streamit_list_two_desc")}
                    </p>
                  </div>
                </div>

                <div className="feature-box mb-3 d-flex align-items-center flex-column flex-md-row">
                  <img
                    src={generateImgPath(
                      "/assets/images/pages/buffer-free.png"
                    )}
                    alt="Buffer-Free"
                  />
                  <div className="feature-content">
                    <h5 className="feature-title">
                     {t("streamAbout.why_choose_streamit_list_three")}
                    </h5>
                    <p className="mb-0 font-size-14">
                      {t("streamAbout.why_choose_streamit_list_three_desc")}
                    </p>
                  </div>
                </div>

                <div className="feature-box d-flex align-items-center flex-column flex-md-row">
                  <img
                    src={generateImgPath(
                      "/assets/images/pages/secure-payment.png"
                    )}
                    alt="Secure Payment"
                  />
                  <div className="feature-content">
                    <h5 className="feature-title">
                      {t("streamAbout.why_choose_streamit_list_four")}
                    </h5>
                    <p className="mb-0 font-size-14">
                      {t("streamAbout.why_choose_streamit_list_four_desc")}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ChooseStreamit;
