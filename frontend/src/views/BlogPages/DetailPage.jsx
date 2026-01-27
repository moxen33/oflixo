import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//react-router
import { Link } from "react-router-dom";

//static data
import { blogs } from "../../StaticData/blogs";

//components
import FormWidget from "../../components/blog/FormWidget";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const BlogDetail = memo(() => {
  const { t } = useTranslation();
  const slug = "the-most-anticipated-movies";
  const blog = blogs.find((item) => item.slug === slug);
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamBlog.blog1")} />
      <div className="section-padding blog-section">
        <Container>
          <Row>
            <Col sm="12">
              <div className="iq-blog blog-detail blog-single ">
                <Link to="" className="blog-image d-block overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    loading="lazy"
                    alt="img"
                    className="img-fluid w-100 mb-5"
                  />
                </Link>
                <div className="iq-blog-box ">
                  <div className="iq-blogs-meta">
                    <ul className="iq-blogtag list-inline d-flex align-items-center flex-wrap mb-0">
                      <li>
                        <Link href="/blogs-author" className="iq-user">
                          <i className="ph ph-user me-1" aria-hidden="true"></i>{" "}
                          {t(blog.username)}
                        </Link>
                      </li>
                      <li>
                        <Link rel="bookmark" to="/blogs-date">
                          <i
                            className="icon icon-calendar-2"
                            aria-hidden="true"
                          ></i>{" "}
                          {blog.blogDate}{" "}
                        </Link>
                      </li>
                      {blog.category !== undefined &&
                        blog.category !== null &&
                        blog.category.map((categories, index) => {                          
                          return (
                            <li className="blog-category" key={index}>
                              <Link to="/blogs-tag">{t(categories)},</Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <h3 className="mb-3">{t(blog.title)} </h3>
                  <div>
                    <div>
                          <h6 className="text-white my-3">{t("streamBlog.blog2_desc")}</h6>
                          <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog3_desc")}</p>
                          <p className="blog-gallery-desc">{t("streamBlog.blog4_desc")}</p>

                          <blockquote className="block-quote text-white py-2">
                            <p className="mb-0 blog-gallery-desc">{t("streamBlog.quotes")}</p>
                            <cite>
                              <a href="#">{t("streamBlog.quotes_author")}</a>
                            </cite>
                          </blockquote>

                          <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog7_desc")}</p>
                          <p className="mb-0 blog-gallery-desc">{t("streamBlog.blog8_desc")}</p>
                          <p className="blog-gallery-desc">{t("streamBlog.blog7_desc")}</p>
                        </div>
                  </div>
                  {blog.tags !== undefined &&
                    blog.tags !== null && (
                      <ul className="iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product text-capitalize">
                        {blog.tags.map((tags, index) => {
                          return (
                            <li key={index}>
                              <Link
                                to="/blogs-tag"
                                className="position-relative"
                              >
                                {t(tags)}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  <div className="iq-blog-tag ">
                    <FormWidget></FormWidget>
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

BlogDetail.displayName = "BlogDetail";
export default BlogDetail;