import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container } from "react-bootstrap";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const TermsofUse = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamPages.terms_and_use")} />
      <div className="terms-of-use section-padding">
    <Container >
        <div className="title-box privacy-title-gap">
            <h4 className="head-title fw-500">{t("stream_terms_of_uses.terms_1_title")}</h4>
            <p className="terms-desc">
                {t("stream_terms_of_uses.terms_1_p1")}
            </p>
            <p>
            {t("stream_terms_of_uses.terms_1_p2")}
            </p>
            <p>
                {t("stream_terms_of_uses.terms_1_p3")}
            </p>
        </div>
        <div className="title-box privacy-title-gap">
            <h4 className="head-title fw-500 mb-3">{t("stream_terms_of_uses.streamit_website")}:</h4>
            <ul className="ps-3">
                <li className="d-flex">{t("stream_terms_of_uses.google_chrome")}</li>
                <li className="d-flex">{t("stream_terms_of_uses.firefox")}</li>
                <li className="d-flex">{t("stream_terms_of_uses.safari")}</li>
                <li className="d-flex">{t("stream_terms_of_uses.cookies_enabled")}</li>
            </ul>
        </div>
        <div className="title-box privacy-title-gap">
            <h4 className="head-title fw-500">{t("stream_terms_of_uses.terms_2_title")}</h4>
            <p className="terms-desc">
                {t("stream_terms_of_uses.terms_2_p1")}
            </p>
            <p>
                {t("stream_terms_of_uses.terms_2_p2")}
            </p>
            <p>
               {t("stream_terms_of_uses.terms_2_p3")}
            </p>
        </div>
        <div className="title-box privacy-title-gap">
            <h4 className="mb-4 fw-500">{t("stream_terms_of_uses.terms_3_title")}</h4>
            <p>{t("stream_terms_of_uses.terms_3_p1")}</p>
            <p>{t("stream_terms_of_uses.terms_3_p2")}</p>
            <p>{t("stream_terms_of_uses.terms_3_p3")}</p>
        </div>
        <div className="title-box privacy-title-gap">
            <h4 className="mb-4 fw-500">{t("stream_terms_of_uses.terms_4_title")}</h4>
            <p>{t("stream_terms_of_uses.terms_4_p1")}</p>
            <p>{t("stream_terms_of_uses.terms_4_p2")}</p>
            <p>{t("stream_terms_of_uses.terms_4_p3")}</p>
        </div>
        <div className="title-box privacy-title-gap">
            <h4 className="mb-4 fw-500">{t("stream_terms_of_uses.terms_5_title")}</h4>
            <p>{t("stream_terms_of_uses.terms_5_p1")}</p>
            <p>{t("stream_terms_of_uses.terms_5_p2")}</p>
            <p className="mb-0">{t("stream_terms_of_uses.terms_5_p3")}</p>
        </div>
    </Container>
</div>
    </Fragment>
  );
});

export default TermsofUse;
