import { blogs } from "../../StaticData/blogs";
import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//component
import CardBlogGrid from "../../components/cards/CardBlogGrid";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data

// the hook
import { useTranslation } from "react-i18next";

const BlogGrid = memo(() => {
  const { t } = useTranslation();
  const { grid } = useParams();
  let _column, title, data;
  switch (grid) {
    case "single":
      _column = "12";
      title = "streamPages.1_column_blog";
      break;
    case "double":
      _column = "6";
      title = "streamPages.2_column_blog";
      break;
    case "large-grid":
      _column = "4";
      title = "streamPages.3_column_blog";
      break;
    case "small-grid":
      _column = "3";
      title = "streamPages.4_column_blog";
      break;
    default:
      break;
  }

  const grid_data = data !== undefined && data !== null ? data.slice(0 , 10) : blogs.slice(0, 9)

  return (
    <Fragment>
      <BreadCrumbWidget title={t(title)} />
      <div className="blog-column-pages section-padding">
        <Container>
          <Row>
            {grid_data.map((item, index) => {
              return (
                <Col lg={_column} md={_column} sm="12" key={index}>
                  <CardBlogGrid
                    title={t(item.title)}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    description={t(item.description)}
                    username={t(item.username)}
                    blogDate={item.blogDate}
                    categories={t(item.categories)}
                    link_button={true}
                    button_icon={true}
                  ></CardBlogGrid>
                </Col>
              );
            })}
          </Row>
          <div className="iq-button text-center mt-3">
            <Link
              to="#"
              className="btn btn-primary text-capitalize position-relative rounded-3"
            >
              <span className="button-text">{t("streamButtons.load_more")} </span>
            </Link>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

BlogGrid.displayName = "BlogGrid";
export default BlogGrid;
