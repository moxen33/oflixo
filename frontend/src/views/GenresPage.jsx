import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//react router-dom
import { Link } from "react-router-dom";

// components
import GenersCard from "../components/cards/GanresCard";
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// data
import { geners, tvShowGenres, videoGenres } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const GenresPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamGenres.genre")} />
      <section className="section-padding">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.movie_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {geners.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.tv_show_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {tvShowGenres.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid >
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.video_genres")}
            </h4>
          </div>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 genres-grid gy-4">
            {videoGenres.map((item, index) => (
              <Col key={index} className="mb-4">
                <GenersCard
                  slug={item.slug}
                  title={t(item.title)}
                  image={item.thumbnail}
                  type={item.type}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

GenresPage.displayName = "GenresPage";
export default GenresPage;
