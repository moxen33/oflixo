import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const FAQPage = memo(() => {
  const { t } = useTranslation();
  const [faq, setfaq] = useState("1");
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamPages.faq")} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              <div className="iq-accordian iq-accordian-square">
                <div
                  className={`iq-accordian-block ${faq === "1" ? "iq-active" : ""
                    }`}
                  onClick={() => {
                    setfaq("1");
                  }}
                >
                  <div className="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="ph ph-minus active"></i>
                      <i aria-hidden="true" className="ph ph-plus inactive"></i>
                    </div>
                    <span className="mb-0 accordian-title">
                      {t("streamFaq.what_is_streamit")}
                    </span>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "1" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("streamFaq.desc")} </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 2  ${faq === "2" ? "iq-active" : ""
                    }`}
                  onClick={() => {
                    setfaq("2");
                  }}
                >
                  <div className="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="ph ph-minus active"></i>
                      <i aria-hidden="true" className="ph ph-plus inactive"></i>
                    </div>
                    <span className="mb-0 accordian-title text-capitalize">
                      {t("streamFaq.will_account")}
                    </span>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "2" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("streamFaq.desc")} </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 3  ${faq === "3" ? "iq-active" : ""
                    }`}
                  onClick={() => {
                    setfaq("3");
                  }}
                >
                  <div className="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="ph ph-minus active"></i>
                      <i aria-hidden="true" className="ph ph-plus inactive"></i>
                    </div>
                    <span className="mb-0 accordian-title text-capitalize">
                      {t("streamFaq.video_issue")}
                    </span>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "3" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("streamFaq.desc")} </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 4 ${faq === "4" ? "iq-active" : ""
                    }`}
                  onClick={() => {
                    setfaq("4");
                  }}
                >
                  <div className="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="ph ph-minus active"></i>
                      <i aria-hidden="true" className="ph ph-plus inactive"></i>
                    </div>
                    <span className="mb-0 accordian-title text-capitalize">
                      {t("streamFaq.manage_notification")}
                    </span>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "4" ? "d-block" : "d-none"
                      }`}
                  >
                    <p className="mb-0"> {t("streamFaq.desc")} </p>
                  </div>
                </div>

                <div
                  className={`iq-accordian-block 5 ${faq === "5" ? "iq-active" : ""
                    }`}
                  onClick={() => {
                    setfaq("5");
                  }}
                >
                  <div className="iq-accordian-title text-capitalize d-flex justify-content-between align-items-center">
                    <div className="iq-icon-right">
                      <i aria-hidden="true" className="ph ph-minus active"></i>
                      <i aria-hidden="true" className="ph ph-plus inactive"></i>
                    </div>
                    <span className="mb-0 accordian-title text-capitalize">
                      {t("streamFaq.what_benefits")}
                    </span>
                  </div>
                  <div
                    className={`iq-accordian-details ${faq === "5" ? "d-block" : "d-none"
                      }`}

                  >
                    <p className="mb-0"> {t("streamFaq.desc")} </p>
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

FAQPage.displayName = "FAQPage";
export default FAQPage;
