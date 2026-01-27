import React, { Fragment, memo, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

// Components
import DetailMetaList from "../../components/blog/DetailMetaList";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data
import { blogs } from "../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";
import CardBlogList from "../../components/cards/CardBlogList";

const SidebarList = memo(() => {
  const { t } = useTranslation();
  let _class, title;
  const { position } = useParams();

  switch (position) {
    case "left":
      _class = "flex-lg-row-reverse flex-column-reverse";
      title = "streamPages.left_sidebar";
      break;
    case "right":
      _class = " ";
      title = "streamPages.right_sidebar";
      break;

    default:
      break;
  }

  return (
    <Fragment>
      <BreadCrumbWidget title={t(title)} />
      <div className="section-padding">
        <Container>
          <Row className={`gap-5 gap-lg-0 ${_class}`}>
            <Col lg="8" sm="12">
              <Row className="gy-5">
                {blogs.slice(0, 8).map((item, index) => {
                  return (
                    <Col md={6}  key={index}>
                      <CardBlogList
                        key={index}
                        slug={item.slug}
                        title={t(item.title)}
                        thumbnail={item.thumbnail}
                        blogDate={item.blogDate}
                        username={t(item.username)}
                        categories={t(item.categories)}
                        // tags={item.tags}
                        description={t(item.description)}
                        link_button={true}
                        button_icon={true}
                      />
                    </Col>
                  );
                })}
              </Row>
              <div className="iq-button text-center mt-3">
                <Link
                  to="#"
                  className="btn btn-primary text-capitalize position-relative rounded-3"
                >
                  <span className="button-text">
                    {t("streamButtons.load_more")}{" "}
                  </span>
                </Link>
              </div>
            </Col>
            <Col lg="4" sm="12">
              <DetailMetaList></DetailMetaList>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

SidebarList.displayName = "SidebarList";
export default SidebarList;
