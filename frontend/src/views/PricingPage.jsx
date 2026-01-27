import { Fragment, memo } from "react";

// react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const PricingPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamPages.pricing_plan")} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="4" md="6" className="mb-3 mb-lg-0">
              <div className="pricing-plan-wrapper">
                <div className="pricing-plan-header">
                        <div className="plan-wrapper">
                            <h4 className="plan-name">{t("streamPricing.basic_plan")}</h4>
                        </div>
                        <div className="pricing-plan-details">
                            <span className="plan-main-price">$10</span>{" "}
                            <span className="plan-period-time">/ {t("streamPricing.lifetime")}</span>
                        </div>
                    </div>
                <div className="pricing-details">
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-x fw-bold text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-x fw-bold text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-x fw-bold text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn btn-primary fw-semibold rounded-3"
                      >
                        <span className="button-text">
                          {t("streamShop.checkout")}
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mb-3 mb-lg-0">
              <div className="pricing-plan-wrapper">
                <div className="pricing-plan-discount bg-primary p-2 text-center">
                  <span className="text-white">{t("streamPricing.save")} 20%</span>
                </div>
                <div className="pricing-plan-header">
                        <div className="plan-wrapper d-flex align-items-center justify-content-between">
                            <h4 className="plan-name">{t("streamPricing.premium_plan")}</h4>
                            <span className="badge bg-primary rounded-2">
                                <small>{t("streamPricing.active")}</small>
                            </span>
                        </div>
                        <div className="pricing-plan-details">
                            <span className="sale-price text-decoration-line-through text-primary">
                                <span>$267</span>
                            </span>{" "}
                            <span className="plan-main-price">$180</span>{" "}
                            <span className="plan-period-time">/ 3 {t("streamPricing.month")}</span>
                        </div>
                    </div>
                
                <div className="pricing-details">
                  <div className="description">
                            <p className="m-0">{t("streamPricing.benifits_of_streamit")}</p>
                        </div>
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                       <Link
                        to="#"
                        className="btn btn-primary fw-semibold rounded-3"
                      >
                        <span className="button-text">
                          {t("streamShop.checkout")}
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="pricing-plan-wrapper">
             <div className="pricing-plan-header">
                        <div className="plan-wrapper">
                            <h4 className="plan-name">{t("streamPricing.standard_plan")}</h4>
                        </div>
                        <div className="pricing-plan-details">
                            <span className="plan-main-price">$79</span>{" "}
                            <span className="plan-period-time">/ 1 {t("streamPricing.month")}</span>
                        </div>
                    </div>
                <div className="pricing-details">
                  <div className="pricing-plan-description">
                    <ul className="list-inline p-0">
                      <li>
                        <i className="ph ph-check fw-bold "></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.free_movies")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.watch_on_tv")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-check fw-bold"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.streamit_special")}
                        </span>
                      </li>
                      <li>
                        <i className="ph ph-x fw-bold text-primary"></i>
                        <span className="font-size-18 fw-500">
                          {t("streamPricing.video_quality")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-plan-footer">
                    <div className="iq-button">
                       <Link
                        to="#"
                        className="btn btn-primary fw-semibold rounded-3"
                      >
                        <span className="button-text">
                          {t("streamShop.checkout")}
                        </span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

PricingPage.displayName = "PricingPage";
export default PricingPage;
