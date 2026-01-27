import { Fragment, memo } from "react";

//react bootstrap
import { Container } from "react-bootstrap";

// components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const PrivacyPolicy = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamPages.privacy_policy")} />
      <div className="section-padding privacy-policy">
        <Container>
          <div className="title-box privacy-title-gap">
            <h4 className="mb-3">1. {t("streamPrivacy_Policy.waht_personal")}</h4>
            <p className="mb-0">{t("streamPrivacy_Policy.desc1")}</p>
          </div>
          <div className="title-box privacy-title-gap">
            <h4 className="mb-3">2. {t("streamPrivacy_Policy.cookies_web")}</h4>
            <p className="">{t("streamPrivacy_Policy.desc2")} 
              <br></br><br></br>
            {t("streamPrivacy_Policy.desc3")}
            </p>
            {/* <p className="mb-0">{t("streamPrivacy_Policy.desc3")}</p> */}
          </div>
          <div className="title-box privacy-title-gap">
            <h4 className="mb-3">3. {t("streamPrivacy_Policy.third_party")}</h4>
            <p className="mb-0">{t("streamPrivacy_Policy.desc1")}</p>
          </div>
          <div className="title-box privacy-title-gap">
            <h4 className="mb-3">4. {t("streamPrivacy_Policy.disclousure")}</h4>
            <p className="mb-0">{t("streamPrivacy_Policy.desc1")}</p>
          </div>
          <div className="title-box privacy-title-gap">
            <h4 className="mb-3">
              5. {t("streamPrivacy_Policy.transfer_storage")}{" "}&amp;{" "}
              {t("streamPrivacy_Policy.processing_globally")}
            </h4>
            <p className="mb-0">{t("streamPrivacy_Policy.desc1")}</p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

PrivacyPolicy.displayName = "PrivacyPolicy";
export default PrivacyPolicy;
