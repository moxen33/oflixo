import { memo, Fragment } from "react";

//react-bootstrap
import { Container, Col, Row } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../../StaticData/data";


const WorkSection = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <h3 className="text-capitalize text-center">
            {t("streamAbout.work_best")}
          </h3>
          <div className="image-box-container">
         <div className="image-box-1">
            <img className="img-fluid" src={generateImgPath("/assets/images/pages/about-us1.svg")} alt="content-image" />
         </div>

         <div className="image-box-1">
            <img className="img-fluid" src={generateImgPath("/assets/images/pages/about-us2.svg")} alt="content-image" />
         </div>

         <div className="image-box-1">
            <img className="img-fluid" src={generateImgPath("/assets/images/pages/about-us3.svg")} alt="content-image" />
         </div>

         <div className="image-box-1">
            <img className="img-fluid" src={generateImgPath("/assets/images/pages/about-us4.svg")} alt="content-image" />
         </div>

         <div className="image-box-1">
            <img className="img-fluid" src={generateImgPath("/assets/images/pages/about-us5.svg")} alt="content-image" />
         </div>
      </div>
        </Container>
      </div>
    </Fragment>
  );
});

WorkSection.displayName = "WorkSection";
export default WorkSection;
