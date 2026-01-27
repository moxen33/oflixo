import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

import { generateImgPath } from "../../StaticData/data";
import { Col, Container, Row } from "react-bootstrap";

const ParallexSection = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        id="parallex"
        className="wrapper-class parallax-window bg-attachment-fixed"
        style={{
          background: "url(assets/images/pages/Movieof-the-year.webp) fixed",
        }}
      >
        <Container fluid className="h-100">
          <Row className="align-items-center justify-content-center h-100 parallaxt-details flex-column-reverse flex-lg-row gap-4 gap-lg-0">
            <Col  className="r-mb-23">
              <div className="parallax-window-detail">
                <h2 className="parallaxt-details-heading text-capitalize mb-0">
                  {t("streamMovies.godzilla")}
                </h2>
                <div className="d-flex flex-column flex-md-row gap-2 flex-wrap align-items-center r-mb-23 mt-2 mb-3 gap-md-3 justify-content-center justify-content-lg-start">
                  <div className="slider-ratting d-flex align-items-center">
                     <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                        <li>
                           <i className="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                           <i className="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                           <i className="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                           <i className="ph-fill ph-star" aria-hidden="true"></i>
                        </li>
                        <li>
                           <i className="ph ph-star" aria-hidden="true"></i>
                        </li>
                     </ul>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                     <span>5
                     </span>
                     <img src={generateImgPath("/assets/images/pages/imdb-logo.svg")} alt="imdb logo" className="img-fluid" />
                  </div>
                  <div className="d-flex align-items-center gap-1">
                     <i className="ph ph-clock"></i>
                     <span className="">2h : 30m</span>
                  </div>
                </div>
                <h4 className="iq-title mb-2 pb-1 pb-lg-0 mb-lg-3 fw-medium">
                  {t("streamMovies.movie_year")}
                </h4>
                <p className="mb-4 pb-2 parallaxt-details-descripttion ">
                  {t("streamMovies.godzilla_desc")}
                </p>
                <div className="iq-button">
                  <Link
                    to="/movies-detail"
                    className="btn btn-primary text-capitalize position-relative rounded-3"
                  >
                    <div className="d-flex align-items-center gap-2">
                    <span className="button-text">
                      {t("streamButtons.play_now")}
                    </span>{" "}
                    <i className="ph-fill ph-play fs-6"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} className=" mt-0 mt-lg-5 mt-xl-0">
              <div className="parallax-img">
                <Link to="/movies-detail">
                  <img
                    src={generateImgPath("/assets/images/pages/Movieof-the-year.webp")}
                    className="img-fluid w-100"
                    loading="lazy"
                    alt="bailey"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

ParallexSection.displayName = "ParallexSection";
export default ParallexSection;
