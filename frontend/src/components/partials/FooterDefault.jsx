import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// components
import Logo from "../logo";

// image
import apple from "/assets/images/footer/app-store.webp";
import playstore from "/assets/images/footer/play-store.webp";

// the hook
import { useTranslation } from "react-i18next";

const FooterMega = memo(() => {
  const { t } = useTranslation();
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 250) {
      setAnimationClass("animate__fadeIn");
    } else {
      setAnimationClass("animate__fadeOut");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return (
    <>
      <Fragment>
        <footer className="footer footer-default">
            <div className="footer-top">
          <Container fluid>
              <Row className="gy-4">
                <Col lg={3} sm={6}>
                  <div className="footer-logo">
                    <Logo></Logo>
                  </div>
                  <div className="">
                    {t("streamAccount.email_us")}:{" "}
                    <span className="text-white">
                      {t("streamAccount.customer\\@stremit")}
                    </span>
                  </div>
                  <p className="mt-0 mb-2
                  ">
                    {t("streamAccount.helpline_number")}
                  </p>
                  <Link to="tel:+4805550103" className="helpline">+(480) 555-0103</Link>
                </Col>
                <Col lg={2} sm={6} >
                  <h4 className="footer-link-title text-capitalize">
                    {t("sectionTitle.movies_to_watch")}
                  </h4>
                  <ul className="list-unstyled footer-menu mb-0">
                    <li className="">
                      <Link to="/view-all">
                        {t("sectionTitle.top_trending")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/view-all">
                        {t("sectionTitle.recommended")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/view-all">
                        {t("sectionTitle.popular")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={2} sm={6} >
                  <h4 className="footer-link-title text-capitalize">
                    {t("sectionTitle.quick_links")}
                  </h4>
                  <ul className="list-unstyled footer-menu mb-0">
                    <li className="">
                      <Link to="/contact-us">
                        {t("streamPages.contact_us")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="./pricing">
                        {t("streamPages.pricing_plan")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/blogs">
                        {t("streamPages.blog")}
                      </Link>
                    </li>
                    <li>
                      <Link to="./faq">
                        {t("streamPages.faq")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={2} sm={6} >
                  <h4 className="footer-link-title text-capitalize">
                    {t("sectionTitle.about_company")}
                  </h4>
                  <ul className="list-unstyled footer-menu mb-0">
                    <li className="">
                      <Link to="./about-us">
                        {t("streamPages.about_us")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/shop">
                        {t("streamPages.shop")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use">
                        {t("sectionTitle.terms_and_use")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/PrivacyPolicy">
                        {t("sectionTitle.privacy_policy")}
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} sm={6}>
                  <h4 className="footer-link-title">
                    {t("sectionTitle.newsletter")}
                  </h4>
                  <div className="mailchimp mailchimp-dark">
                    <div className="input-group mb-3 mt-4">
                      <input
                        type="text"
                        className="form-control mb-0"
                        placeholder={t("streamAccount.email")}
                        aria-describedby="button-addon2"
                      />
                      <div className="iq-button">
                        <button
                          type="submit"
                          className="btn btn-primary st-subscribe-btn"
                          id="button-addon2"
                        >
                          {t("streamAccount.subscribe")}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 widget-streamit-social-media mt-4">
                    <h3 className="font-size-14 widget-streamit-social-media-title">
                      {t("streamButtons.follow_us")}
                    </h3>
                    <ul className="m-0 d-inline list-unstyled widget_social_media d-flex gap-2 flex-wrap">
                      <li className="">
                        <Link
                          to="https://www.facebook.com/"
                          className="position-relative"
                        >
                          <i className="icon icon-facebook-share"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://twitter.com/"
                          className="position-relative"
                        >
                          <i className="ph ph-x-logo"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://github.com/"
                          className="position-relative"
                        >
                          <i className="ph ph-instagram-logo"></i>
                        </Link>
                      </li>
                      {" "}
                      <li className="">
                        <Link
                          to="https://www.instagram.com/"
                          className="position-relative"
                        >
                          <i className="ph-fill ph-linkedin-logo"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
          </Container>
            </div>
            <div className="footer-bottom border-top">
              <Container fluid>
              <Row className="align-items-center">
                <Col md={6}>
                  <p className="font-size-14 mb-0">
                    © <span className="currentYear">2025</span>{" "}
                    <span className="text-primary">STREAMIT.</span>{" "}
                    {t("streamAccount.desc")}
                  </p>
                </Col>
                <Col md={6} className="mt-md-0 mt-5">
                <div className="d-flex flex-column align-items-start align-items-md-end widget-iq-download-app">
                  <h6 className="mb-3 fw-bold">
                    {t("streamAccount.download_app")}
                  </h6>
                  <div className="d-flex align-items-center">
                    <Link className="app-image" to="#">
                      <img src={playstore} loading="lazy" alt="play-store" />
                    </Link>
                    <br />
                    <Link className="ms-3 app-image" to="#">
                      <img src={apple} loading="lazy" alt="app-store" />
                    </Link>
                  </div>
                </div>
                </Col>
              </Row>
          </Container>
            </div>
        </footer>
        <div
          id="back-to-top"
          style={{ display: "none" }}
          className={`animate__animated ${animationClass}`}
          onClick={scrollToTop}
        >
          <Link
            className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle"
            id="top"
            to="#top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </Link>
        </div>
      </Fragment>
    </>
  );
});
FooterMega.displayName = "FooterMega";
export default FooterMega;
