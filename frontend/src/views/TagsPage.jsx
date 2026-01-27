import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router
import { Link, useNavigate } from "react-router-dom";

// components
import TagsCard from "../components/cards/TagsCard";
import BreadcrumbWidget from "../components/BreadcrumbWidget";

// data
import { movieTags, tvShowsTags, videoTags } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { selected_item } from "../store/shop/actions";

const TagsPage = memo(() => {
   const dispatch = useDispatch();
  const navigate = useNavigate()
  const { t } = useTranslation();

  const handleClick = (tag) => {
  // console.log("hello");

  // Dispatch Redux action
  dispatch(selected_item(tag));

sessionStorage.setItem("Tag", JSON.stringify(tag));
  // Now navigate
  navigate('/view-all-tags');
};


  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamTag.tags")} />
      <section className="section-padding">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">
              {t("streamPages.movie_tag")}
            </h4>
            <Link
                className="text-primary text-decoration-none"
                onClick={() => handleClick('movieTag')}
              >
                View All
              </Link>
          </div>
          <Row as="ul" className="mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {movieTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>    
              </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="main-title text-capitalize mb-0">{t("streamPages.tv_show_tag")}</h4>
            <Link
                className="text-primary text-decoration-none"
                onClick={() => handleClick('TVShowTag')}
              >
                View All
              </Link>
          </div>
          <Row as="ul" className="row mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {tvShowsTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section-padding-bottom">
        <Container fluid>
          <div className="iq-main-header d-flex align-items-center justify-content-between mb-4">
            <h4 className="text-capitalize mb-0 main-title">{t("streamPages.video_tag")}</h4>
            <Link
                className="text-primary text-decoration-none"
                onClick={() => handleClick('VideoTag')}
              >
                View All
              </Link>
          </div>
          <Row as="ul" className="mb-0 list-inline g-3 g-lg-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            {videoTags.map((item, index) => (
              <Col as="li" xl="2" lg="3" md="4" sm="6" key={index}>
                <TagsCard
                  slug={t(item.slug)}
                  title={t(item.title)}
                  type={t(item.type)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

TagsPage.displayName = "TagsPage";
export default TagsPage;
