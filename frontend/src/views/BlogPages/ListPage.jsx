import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardBlogList from "../../components/cards/CardBlogList";
import DetailMetaList from "../../components/blog/DetailMetaList";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data
import { blogs } from "../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const BlogList = memo((props) => {
  // console.log(props.title)
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t(props.title)} />
      <div className=" section-padding">
        <Container>
          <Row className="gy-5">
            <Col lg="8" sm="12">
              {blogs.slice(0, 14).map((item, index) => {
                return (
                  <div className="blog-custom-box" key={index}>
                    <CardBlogList
                      slug={item.slug}
                      title={t(item.title)}
                      thumbnail={item.thumbnail}
                      blogDate={item.blogDate}
                      username={t(item.username)}
                      categories={t(item.categories)}
                      tags={item.tags}
                      category={item.category}
                      description={t(item.description)}
                      link_button={true}
                      button_icon={true}
                    />
                  </div>
                );
              })}
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

BlogList.displayName = "BlogList";
export default BlogList;