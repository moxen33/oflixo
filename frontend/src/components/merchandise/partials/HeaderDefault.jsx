import React, { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import {
  Row,
  Col,
  Container,
  Nav,
  Button,
  Dropdown,
  Form,
  Offcanvas,
  Collapse,
  Navbar,
} from "react-bootstrap";

// react-router-dom
import { Link, useLocation } from "react-router-dom";

// components
import Logo from "../../logo";
import CustomToggle from "../../CustomToggle";
import Counter from "../../counter";

// the hook
import { useTranslation } from "react-i18next";

//redux
import { useDispatch } from "react-redux";

import { theme_scheme_direction } from "../../../store/setting/actions";
import { generateImgPath } from "../../../StaticData/data";

const HeaderMerchandise = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();

  //for translation
  const { t, i18n } = useTranslation();

  // Initialize language and direction on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      // Set direction based on stored language
      if (storedLang === "ar") {
        dispatch(theme_scheme_direction("rtl"));
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      } else {
        dispatch(theme_scheme_direction("ltr"));
        document.documentElement.dir = "ltr";
        document.documentElement.lang = storedLang;
      }
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Store in localStorage instead of sessionStorage
    localStorage.setItem("i18nextLng", lng);

    if (lng === "ar") {
      dispatch(theme_scheme_direction("rtl"));
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      dispatch(theme_scheme_direction("ltr"));
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lng;
    }
  };

  const cart = [
    {
      thumbnail: generateImgPath("/assets/images/shop/product/02.webp"),
      name: "streamShop.product2",
      price: "$13.00",
      class: "mb-4 pb-4 ",
    },
    {
      thumbnail: generateImgPath("/assets/images/shop/product/04.webp"),
      name: "streamShop.product4",
      price: "$18.00",
      class: "mb-4 pb-4 ",
    },
    {
      thumbnail: generateImgPath("/assets/images/shop/product/05.webp"),
      name: "streamShop.product5",
      price: "$18.00",
      class: "",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow2(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const [shopOffcanvas, setshopOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setshopOffcanvas(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Fragment>
        <header
          className="header-center-home header-merchandise "
          id="default-header"
        >
          <div className="header-top d-xl-block d-none">
            <Container fluid>
              <Row className="align-items-center">
                <Col md="3">
                  <div className="d-flex align-items-center gap-2 gap-md-3">
                    {/* <Nav className="navbar navbar-expand-lg navbar-light justify-content-between m-0 p-0"> */}
                    {/* <Link className="navbar-brand m-0 p-0" to="/"> */}
                    <Logo />
                    {/* </Link> */}
                    {/* </Nav> */}
                    <div>
                      <Link
                        to="/pricing"
                        className="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                      >
                        <span className="d-flex align-items-center gap-2 text-warning">
                          <i className="ph ph-fill ph-crown align-middle fs-6"></i>
                          <span className="d-xl-block d-none">
                            {t("streamButtons.subscribe")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md="9">
                  <div className="navbar-right menu-right">
                    <ul className="d-flex align-items-center justify-content-end gap-3 list-inline mb-0">
                      <li className="me-0">
                        <div className="search-box-2">
                          <Form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={t("streamAccount.search_dot")}
                            />
                            <i className="search-btn">
                              <svg
                                width="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="11.7669"
                                  cy="11.7666"
                                  r="8.98856"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></circle>
                                <path
                                  d="M18.0186 18.4851L21.5426 22"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </i>
                          </Form>
                        </div>
                      </li>
                      <Dropdown as="li" className="nav-items me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          href="#"
                          variant=" nav-link d-flex align-items-center text-white"
                          id="langDropdown"
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-translate fs-5 px-0"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end border-0 p-0 m-0"
                        >
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("en")}
                          >
                            en
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("ar")}
                          >
                            ar
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("de")}
                          >
                            de
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("fr")}
                          >
                            fr
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("gr")}
                          >
                            gr
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <li className="me-0">
                        <Link
                          className="text-white"
                          to="#"
                          onClick={handleShow}
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-handbag fs-5"></i>
                          </span>
                        </Link>
                      </li>
                      <Dropdown as="li" className="nav-item nav-icon me-0">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          variant="text-white d-flex align-items-center"
                        >
                          <span className="btn-icon rounded-pill user-icons">
                            <i className="ph ph-user-plus fs-5"></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end dropdown-user border-0 p-0 m-0"
                        >
                          <li className="user-info mb-3">
                            <Link to="/profile-marvin" className="d-flex align-items-center gap-3 me-0">
                            <img
                              src="/assets/images/user/user6.jpg"
                              className="img-fluid"
                              alt="img"
                              loading="lazy"
                            />
                              <span className="font-size-14 fw-500 text-capitalize text-white">
                                {t("streamAccount.jenny")}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/account"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                            <i className="ph ph-user"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.my_account")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/watchlist-detail"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                              <i className="ph ph-plus fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.watchlist")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/pricing"
                              className="iq-sub-card d-flex align-items-center gap-3"
                            >
                             <i className="ph ph-star fw-bold"></i>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.subscription")}
                              </h6>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/login"
                              className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <h6 className="mb-0 font-size-14 fw-normal">
                                {t("streamAccount.logout")}
                              </h6>
                            </Link>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className={`header-bottom header-sticky ${
              isSticky ? "sticky" : ""
            }`}
          >
            <Navbar
              expand="xl"
              className="nav navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0 py-3"
            >
              <Container fluid className="navbar-inner">
                <div className="d-flex align-items-center justify-content-between w-100 landing-header">
                  <div className="d-xl-none d-flex gap-3 gap-xl-0 align-items-center">
                    <div>
                      <button
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#navbar_main"
                        aria-controls="navbar_main"
                        className="d-xl-none bg-primary rounded-pill p-1 toggle-rounded-btn d-flex align-items-center"
                        onClick={() => setShow2(!show2)}
                      >
                        <i className="ph ph-arrow-right fs-5 fw-bold"></i>
                      </button>
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-md-3">
                      <Logo />
                      <div>
                        <Link
                          to="/pricing"
                          className="subscribe-btn btn btn-warning-subtle py-1 py-md-2 px-2 px-ms-3"
                        >
                          <span className="d-flex align-items-center gap-2 text-warning">
                            <i className="ph-fill ph-crown align-middle fs-6"></i>
                            <span className="d-xl-block d-none">
                              {t("streamAccount.subscribe")}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Navbar
                    expand="xl"
                    className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${
                      show2 === true ? "show" : ""
                    } `}
                    style={{
                      visibility: `${show2 === true ? "visible" : "hidden"}`,
                    }}
                  >
                    <Container fluid className="p-lg-0">
                      <Offcanvas.Header className="px-0">
                        <div className="navbar-brand ms-3 ">
                          <Logo />
                        </div>
                        <i className="ph ph-x" onClick={() => setShow2(!show2)}></i>
                      </Offcanvas.Header>
                      <ul
                        className="navbar-nav iq-nav-menu  list-unstyled"
                        id="header-menu"
                      >
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open}
                            href="#homePages"
                            onClick={() => setOpen(!open)}
                            className={`${
                              location.pathname === "/merchandise-store" ||
                              location.pathname === "/" ||
                              location.pathname === "/home" ||
                              location.pathname === "/movies" ||
                              location.pathname === "/tv-shows" ||
                              location.pathname === "/videos"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.home")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse in={open} className="sub-nav list-unstyled">
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  to="/"
                                  className={`${
                                    location.pathname === "/" ? "active" : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.ott_home")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/home"
                                  className={`${
                                    location.pathname === "/home"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.mainHome")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/movies"
                                  className={`${
                                    location.pathname === "/movies"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.movie")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/tv-shows"
                                  className={`${
                                    location.pathname === "/tv-shows"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.tv_show")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/videos"
                                  className={`${
                                    location.pathname === "/videos"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.video")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/merchandise-store"
                                  className={`${
                                    location.pathname === "/merchandise-store"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.merchandise_store")}{" "}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>{" "}
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open1}
                            href="#homePages"
                            onClick={() => setOpen1(!open1)}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.features")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open1}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  to="/download-movie"
                                  className={`${
                                    location.pathname === "/download-movie"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.download_movie")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/restricted-content"
                                  className={`${
                                    location.pathname === "/restricted-content"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.restricted_content")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/related-merchandise"
                                  className={`${
                                    location.pathname === "/related-merchandise"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.related_merchandise")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/geners"
                                  className={`${
                                    location.pathname === "/geners"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.geners")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/tags"
                                  className={`${
                                    location.pathname === "/tags"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.tags")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/cast"
                                  className={`${
                                    location.pathname === "/cast"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.cast")}{" "}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>{" "}
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open2}
                            href="#homePages"
                            onClick={() => setOpen2(!open2)}
                            className={`${
                              location.pathname === "/about-us" ||
                              location.pathname === "/contact-us" ||
                              location.pathname === "/fa1" ||
                              location.pathname === "/PrivacyPolicy" ||
                              location.path === "/pricing" ||
                              location.pathname === "/coming-soon"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.pages")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open2}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link to="/about-us" className="nav-link">
                                  {" "}
                                  {t("streamPages.about_us")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link to="/contact-us" className="nav-link">
                                  {" "}
                                  {t("streamPages.contact_us")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link to="/faq" className="nav-link">
                                  {" "}
                                  {t("streamPages.faq")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link to="/PrivacyPolicy" className="nav-link">
                                  {" "}
                                  {t("streamPages.privacy_policy")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link to="/pricing" className="nav-link">
                                  {" "}
                                  {t("streamPages.pricing_plan")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link to="/coming-soon" className="nav-link">
                                  {" "}
                                  {t("streamPages.coming_soon")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/error-page-one"
                                  aria-expanded={open3}
                                  href="#homePages"
                                  onClick={() => setOpen3(!open3)}
                                  className={`${
                                    location.pathname === "/error-page-one"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <span className="item-name">
                                    {t("streamPages.error_404")}
                                  </span>
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>{" "}
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open4}
                            href="#homePages"
                            onClick={() => setOpen4(!open4)}
                            className={`${
                              location.pathname === "/blogs" ||
                              location.pathname === "/blogs/single" ||
                              location.pathname === "/blogs/double" ||
                              location.pathname === "/blogs/large-grid" ||
                              location.pathname === "blogs/small-grid" ||
                              location.pathname === "/blogs-sidebar/left" ||
                              location.pathname === "/blogs-sidebar/right" ||
                              location.pathname === "/blogs-detail" ||
                              location.pathname === "/blog-single/audio" ||
                              location.pathname === "/blog-single/video" ||
                              location.pathname === "/blog-single/link" ||
                              location.pathname === "/blog-single/quote" ||
                              location.pathname === "/blog-single/gallery"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.blog")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open4}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  to="/blogs"
                                  className={`${
                                    location.pathname === "/blogs"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.listing")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open5}
                                  href="#homePages"
                                  onClick={() => setOpen5(!open5)}
                                  className={`${
                                    location.pathname === "/blogs/single" ||
                                    location.pathname === "/blogs/double" ||
                                    location.pathname === "/blogs/large-grid" ||
                                    location.pathname === "/blogs/small-grid"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="item-name">
                                      {t("streamPages.blog_grid")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open5}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/single"
                                        className={`${
                                          location.pathname === "/blogs/single"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        1 {t("streamPages.column")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/double"
                                        className={`${
                                          location.pathname === "/blogs/double"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        2 {t("streamPages.column")}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/large-grid"
                                        className={`${
                                          location.pathname ===
                                          "/blogs/large-grid"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        3 {t("streamPages.column")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/small-grid"
                                        className={`${
                                          location.pathname ===
                                          "/blogs/small-grid"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        4 {t("streamPages.column")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open6}
                                  href="#homePages"
                                  onClick={() => setOpen6(!open6)}
                                  className={`${
                                    location.pathname ===
                                      "/blogs-sidebar/left" ||
                                    location.pathname === "/blog-sidebar/right"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="item-name">
                                      {t("streamPages.blog_sidebar")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open6}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs-sidebar/left"
                                        className={`${
                                          location.pathname ===
                                          "/blog-sidebar/left"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.left_sidebar")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs-sidebar/right"
                                        className={`${
                                          location.pathname ===
                                          "/blog-sidebar/right"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.right_sidebar")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open7}
                                  href="#homePages"
                                  onClick={() => setOpen7(!open7)}
                                  className={`${
                                    location.pathname === "/blog-template" ||
                                    location.pathname === "/blogs-detail" ||
                                    location.pathname ===
                                      "/blog-single/audio" ||
                                    location.pathname ===
                                      "/blog-single/video" ||
                                    location.pathname === "/blog-single/link" ||
                                    location.pathname ===
                                      "/blog-single/quote" ||
                                    location.pathname === "/blog-single/gallery"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span className="item-name">
                                      {t("streamPages.blog_single")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open7}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs-detail"
                                        className={`${
                                          location.pathname === "/blogs-detail"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.standard")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blog-single/audio"
                                        className={`${
                                          location.pathname ===
                                          "/blog-single/audio"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.audio")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blog-single/video"
                                        className={`${
                                          location.pathname ===
                                          "/blog-single/video"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.video")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blog-single/link"
                                        className={`${
                                          location.pathname ===
                                          "/blog-single/link"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.link")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blog-single/quote"
                                        className={`${
                                          location.pathname ===
                                          "/blog-single/quote"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.quote")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blog-single/gallery"
                                        className={`${
                                          location.pathname ===
                                          "/blog-single/gallery"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.gallery")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link
                                  aria-expanded={open9}
                                  href="#homePages"
                                  onClick={() => setOpen9(!open9)}
                                  className={`${
                                    location.pathname ===
                                      "/blogs/blog-pagination" ||
                                    location.pathname ===
                                      "/blogs/blog-loadmore" ||
                                    location.pathname ===
                                      "/blogs/blog-infinite-scroll"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="item-name">
                                      {t("streamPages.pagination_style")}
                                    </span>
                                    <span className="menu-icon">
                                      <i
                                        className="ph ph-caret-down align-middle down-to-right"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </div>
                                </Nav.Link>
                                <Collapse
                                  in={open7}
                                  className="sub-nav list-unstyled"
                                >
                                  <ul>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/blog-pagination"
                                        className={`${
                                          location.pathname ===
                                          "/blogs/blog-pagination"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.blog_pagination")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/blog-loadmore"
                                        className={`${
                                          location.pathname ===
                                          "/blogs/blog-loadmore"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.blog_load_more")}{" "}
                                      </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                      <Link
                                        to="/blogs/blog-infinite-scroll"
                                        className={`${
                                          location.pathname ===
                                          "/blogs/blog-infinite-scroll"
                                            ? "active"
                                            : ""
                                        } nav-link`}
                                      >
                                        {" "}
                                        {t("streamPages.blog_infinite_scroll")}{" "}
                                      </Link>
                                    </Nav.Item>
                                  </ul>
                                </Collapse>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>{" "}
                        <Nav.Item as="li">
                          <Nav.Link
                            aria-expanded={open8}
                            href="#homePages"
                            onClick={() => setOpen8(!open8)}
                            className={`${
                              location.pathname === "/shop" ||
                              location.pathname === "/account" ||
                              location.pathname === "/cart" ||
                              location.pathname === "/wishlist" ||
                              location.pathname === "/checkout" ||
                              location.pathname === "/track-order"
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="item-name">
                                {t("streamPages.shop")}
                              </span>
                              <span className="menu-icon">
                                <i
                                  className="ph ph-caret-down align-middle"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </Nav.Link>
                          <Collapse
                            in={open8}
                            className="sub-nav list-unstyled"
                          >
                            <ul>
                              <Nav.Item as="li">
                                <Link
                                  to="/shop"
                                  className={`${
                                    location.pathname === "/shop"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.shop")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/account"
                                  className={`${
                                    location.pathname === "/account"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.my_account_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/cart"
                                  className={`${
                                    location.pathname === "/cart"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.cart_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/wishlist"
                                  className={`${
                                    location.pathname === "/wishlist"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.wishlist")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/checkout"
                                  className={`${
                                    location.pathname === "/checkout"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.checkout_page")}{" "}
                                </Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Link
                                  to="/track-order"
                                  className={`${
                                    location.pathname === "/track-order"
                                      ? "active"
                                      : ""
                                  } nav-link`}
                                >
                                  {" "}
                                  {t("streamPages.order_tracking")}{" "}
                                </Link>
                              </Nav.Item>
                            </ul>
                          </Collapse>
                        </Nav.Item>
                      </ul>
                    </Container>

                    <div className="navbar-right menu-right">
                      <ul className="d-flex align-items-center list-inline m-0">
                        <Dropdown
                          as="li"
                          className="nav-item nav-icon position-relative"
                        >
                          <Dropdown.Menu
                            className="search-box iq-search-bar d-search p-0 m-0"
                            align="right"
                          >
                            <Form action="#" className="search-form">
                              <div className="form-group position-relative">
                                <input
                                  type="search"
                                  className="text search-input font-size-12"
                                  placeholder={t("streamBlog.search")}
                                />
                                <Button type="submit" className="search-submit">
                                  <i className="ri-search-line d-flex justify-content-center"></i>
                                </Button>
                              </div>
                            </Form>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item nav-icon">
                          <Dropdown.Menu
                            className="iq-sub-dropdown iq-user-dropdown"
                            align="right"
                          >
                            <div className="iq-card shadow-none m-0">
                              <div className="iq-card-body p-0 ps-3 pe-3">
                                <Link
                                  to="/login"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 22"
                                        fill="none"
                                      >
                                        <path
                                          d="M10.543 8.01449H2.51562"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M8.58984 6.0708L10.5418 8.0148L8.58984 9.9588"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M5.67188 4.92614V4.30414C5.67188 2.94748 6.77121 1.84814 8.12854 1.84814H11.3845C12.7379 1.84814 13.8345 2.94481 13.8345 4.29814V11.7248C13.8345 13.0815 12.7345 14.1815 11.3779 14.1815H8.12121C6.76854 14.1815 5.67188 13.0841 5.67188 11.7315V11.1035"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">
                                        {t("streamAccount.logout")}
                                      </h6>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  to="/extra-pages/sign-up"
                                  className="iq-sub-card setting-dropdown"
                                >
                                  <div className="d-flex align-items-center">
                                    <div className="right-icon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58336 10.1377C4.0207 10.1377 1.83203 10.525 1.83203 12.077C1.83203 13.629 4.00736 14.0304 6.58336 14.0304C9.1467 14.0304 11.3347 13.6424 11.3347 12.091C11.3347 10.5397 9.16003 10.1377 6.58336 10.1377Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.58375 7.92416C8.26575 7.92416 9.62908 6.56083 9.62908 4.87883C9.62908 3.19683 8.26575 1.8335 6.58375 1.8335C4.90242 1.8335 3.53908 3.19683 3.53908 4.87883C3.53308 6.55483 4.88642 7.91816 6.56308 7.92416H6.58375Z"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M12.8021 5.77979V8.45312"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M14.1642 7.11605H11.4375"
                                          stroke="white"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="media-body ms-3">
                                      <h6 className="mb-0 ">
                                        {t("streamForm.register")}
                                      </h6>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ul>
                    </div>
                    {/* Myaccount navigate link */}
                  </Navbar>
                  <div className="right-panel">
                    <Button
                      id="navbar-toggle"
                      bsPrefix="navbar-toggler"
                      type="button"
                      aria-expanded={show1}
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      onClick={() => setShow1(!show1)}
                    >
                      <span className="navbar-toggler-btn">
                        <span className="navbar-toggler-icon"></span>
                      </span>
                    </Button>
                    <div
                      className={`p-3 navbar-collapse ${
                        show1 === true ? "collapse show" : "collapse"
                      }`}
                      id="navbarSupportedContent"
                    >
                      <div className="iq-meta-menu-container d-xl-block d-none">
                        <ul className="d-flex align-items-center m-0 list-inline iq-meta-menu">
                          <li>
                            <Link to="/account">{t("streamAccount.my_account")}</Link>
                          </li>
                          <li>
                            <Link to="https://iqonic.desky.support/">
                              {t("streamAccount.customer_support")}
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact-us">{t("streamAccount.help")}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="d-xl-none">
                        <ul className="d-flex align-items-center justify-content-end gap-1 gap-sm-3 list-inline mb-0">
                          <li>
                            <div className="search-box-2">
                              <form>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={t("streamAccount.search_dot")}
                                />
                                <button type="submit" className="search-btn">
                                  <i className="ph ph-magnifying-glass"></i>
                                </button>
                              </form>
                            </div>
                          </li>
                           <Dropdown as="li" className="">
                        <Dropdown.Toggle
                          as={CustomToggle}
                          href="#"
                          variant=" d-flex align-items-center text-white"
                          id="langDropdown"
                        >
                           <span className="btn-icon rounded-pill user-icons">
                          <i
                            className="ph ph-translate fs-5 px-0"
                          ></i>
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu-end border-0 p-0 m-0"
                        >
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("en")}
                          >
                            en
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("ar")}
                          >
                            ar
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("de")}
                          >
                            de
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("fr")}
                          >
                            fr
                          </Dropdown.Item>
                          <Dropdown.Item
                            to="#"
                            onClick={() => changeLanguage("gr")}
                          >
                            gr
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                          <li>
                            <a
                              className="btn-icon rounded-pill user-icons text-white"
                              onClick={() => setshopOffcanvas(!shopOffcanvas)}
                            >
                              <i className="ph ph-handbag p-0 fs-5"></i>
                            </a>
                          </li>
                          <Offcanvas
                            show={shopOffcanvas}
                            onHide={handleOffcanvasClose}
                            placement="end"
                            className="sidebar-cart border-0 on-rtl overflow-y-auto widget-shopping-cart-content border-0"
                            closeButton
                          >
                            <Offcanvas.Header className="py-4" closeButton>
                              <Offcanvas.Title as="h5" className="fw-medium">
                                Shopping cart ({" "}
                                <span
                                  className="streamit-cart-count"
                                  aria-live="polite"
                                >
                                  3
                                </span>{" "}
                                )
                              </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              <div className="product-list-content">
                                <ul className="list-unstyled mb-0">
                                  <li className="mini-cart-item d-flex align-items-start gap-3">
                                    <div className="cart-img">
                                      <Link to="/cart" aria-label="Bag Pack">
                                        <img
                                          src={generateImgPath(
                                            "/assets/images/shop/product/02.webp"
                                          )}
                                          className="img-fluid"
                                          width="300"
                                          height="400"
                                          alt="Bag Pack"
                                        />
                                      </Link>
                                    </div>
                                    <div className="cart-content flex-grow-1">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <Link
                                          className="d-block"
                                          to="./shop/product-detail"
                                          aria-label="Bag Pack"
                                        >
                                          <h6 className="fw-medium">
                                            {t("streamShop.product2")}
                                          </h6>
                                        </Link>
                                        <Link
                                          to="javascript:void(0)"
                                          className="delete-btn"
                                        >
                                          <i className="ph ph-trash text-primary"></i>
                                        </Link>
                                      </div>

                                      <div className="product-price text-muted">
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol fw-medium">
                                              ₹
                                            </span>
                                            11.05
                                          </span>
                                        </span>
                                      </div>
                                      <div
                                        className="btn-group iq-qty-btn custom-qty-btn rounded-3"
                                        data-qty="btn"
                                        role="group"
                                      >
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0"
                                        >
                                          <i className="ph ph-minus"></i>
                                        </button>{" "}
                                        <Form.Control
                                          type="text"
                                          className="btn btn-sm btn-outline-light input-display border-0"
                                          data-qty="input"
                                          pattern="^(0|[1-9][0-9]*)$"
                                          minLength="1"
                                          maxLength="2"
                                          value={2}
                                          title="Qty"
                                        />{" "}
                                        <button className="btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                          <i className="ph ph-plus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="mini-cart-item d-flex align-items-start gap-3">
                                    <div className="cart-img">
                                      <Link to="/cart" aria-label="Bag Pack">
                                        <img
                                          src={generateImgPath(
                                            "/assets/images/shop/product/04.webp"
                                          )}
                                          className="img-fluid"
                                          width="300"
                                          height="400"
                                          alt="Bag Pack"
                                        />
                                      </Link>
                                    </div>
                                    <div className="cart-content flex-grow-1">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <Link
                                          className="d-block"
                                          to="./shop/product-detail"
                                          aria-label="Bag Pack"
                                        >
                                          <h6 className="fw-medium">
                                            {t("streamShop.product1")}
                                          </h6>
                                        </Link>
                                        <Link
                                          to="javascript:void(0)"
                                          className="delete-btn"
                                        >
                                          <i className="ph ph-trash text-primary"></i>
                                        </Link>
                                      </div>

                                      <div className="product-price text-muted">
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol fw-medium">
                                              ₹
                                            </span>
                                            18.00
                                          </span>
                                        </span>
                                      </div>
                                      <div
                                        className="btn-group iq-qty-btn custom-qty-btn rounded-3"
                                        data-qty="btn"
                                        role="group"
                                      >
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0"
                                        >
                                          <i className="ph ph-minus"></i>
                                        </button>{" "}
                                        <Form.Control
                                          type="text"
                                          className="btn btn-sm btn-outline-light input-display border-0"
                                          data-qty="input"
                                          pattern="^(0|[1-9][0-9]*)$"
                                          minLength="1"
                                          maxLength="2"
                                          value={2}
                                          title="Qty"
                                        />{" "}
                                        <button className="btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                          <i className="ph ph-plus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="mini-cart-item d-flex align-items-start gap-3">
                                    <div className="cart-img">
                                      <Link to="/cart" aria-label="Bag Pack">
                                        <img
                                          src={generateImgPath(
                                            "/assets/images/shop/product/05.webp"
                                          )}
                                          className="img-fluid"
                                          width="300"
                                          height="400"
                                          alt="Bag Pack"
                                        />
                                      </Link>
                                    </div>
                                    <div className="cart-content flex-grow-1">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <Link
                                          className="d-block"
                                          to="./shop/product-detail"
                                          aria-label="Bag Pack"
                                        >
                                          <h6 className="fw-medium">
                                            {t("streamShop.product5")}
                                          </h6>
                                        </Link>
                                        <Link
                                          to="javascript:void(0)"
                                          className="delete-btn"
                                        >
                                          <i className="ph ph-trash text-primary"></i>
                                        </Link>
                                      </div>

                                      <div className="product-price text-muted">
                                        <span className="woocommerce-Price-amount amount">
                                          <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol fw-medium">
                                              ₹
                                            </span>
                                            18.00
                                          </span>
                                        </span>
                                      </div>
                                      <div
                                        className="btn-group iq-qty-btn custom-qty-btn rounded-3"
                                        data-qty="btn"
                                        role="group"
                                      >
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0"
                                        >
                                          <i className="ph ph-minus"></i>
                                        </button>{" "}
                                        <Form.Control
                                          type="text"
                                          className="btn btn-sm btn-outline-light input-display border-0"
                                          data-qty="input"
                                          pattern="^(0|[1-9][0-9]*)$"
                                          minLength="1"
                                          maxLength="2"
                                          value={2}
                                          title="Qty"
                                        />{" "}
                                        <button className="btn-sm btn-outline-light iq-quantity-plus text-white border-0">
                                          <i className="ph ph-plus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Offcanvas.Body>
                            <div className="offcanvas-footer border-top py-3 px-3">
                              <div className="d-flex align-items-center justify-content-between gap-3">
                                <strong>Subtotal:</strong>
                                <span className="st-woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-amount amount">
                                    <span className="woocommerce-Price-currencySymbol fw-medium">
                                      $
                                    </span>
                                    49.00
                                  </span>
                                </span>
                              </div>
                              <div className="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
                                <div className="iq-button w-100">
                                  <Link
                                    to="/checkout"
                                    className="btn btn-primary text-capitalize w-100 rounded-3"
                                  >
                                    <span className="button-text">Checkout</span>
                                  </Link>
                                </div>
                                <div className="w-100">
                                  <Link
                                    to="/cart"
                                    className="btn btn-secondary text-capitalize w-100 rounded-3"
                                  >
                                    <span className="button-text">View Cart</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Offcanvas>
                          <Dropdown as="li" className="nav-item dropdown" id="itemdropdown2">
                            <Dropdown.Toggle
                              as={CustomToggle}
                              id="navbarDropdown2"
                              className="text-white d-flex align-items-center"
                            >
                              <div className="btn-icon rounded-pill user-icons">
                                <span className="btn-inner d-flex">
                                  <i className="ph ph-user-plus fs-5 text-white"></i>
                                </span>
                              </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0" align="end">
                              <Link to="/profile-marvin" className="user-info d-flex align-items-center gap-3">
                                <img
                                  src="/assets/images/user/user6.jpg"
                                  className="img-fluid"
                                  alt="img"
                                  loading="lazy"
                                />
                                <span className="font-size-14 fw-500 text-capitalize text-white">
                                  {t("streamAccount.jenny")}
                                </span>
                              </Link>
                              <Link
                                to="/account"
                                className="iq-sub-card d-flex align-items-center gap-3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 22"
                                  fill="none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">
                                  {t("streamAccount.my_account")}
                                </h6>
                              </Link>
                              <Link
                                to="/playlist"
                                className="iq-sub-card d-flex align-items-center gap-3"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.425 13.75V7.575H0.25V6.425H6.425V0.25H7.575V6.425H13.75V7.575H7.575V13.75H6.425Z"
                                    fill="white"
                                  ></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">
                                  {t("streamAccount.watchlist")}
                                </h6>
                              </Link>
                              <Link
                                to="/pricing"
                                className="iq-sub-card d-flex align-items-center gap-3"
                              >
                                <i className="fa-regular fa-star"></i>
                                <h6 className="mb-0 font-size-14 fw-normal">
                                  {t("streamAccount.subscription")}
                                </h6>
                              </Link>
                              <Link
                                to="/login"
                                className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <h6 className="mb-0 font-size-14 fw-normal">
                                  {t("streamAccount.logout")}
                                </h6>
                              </Link>
                             </Dropdown.Menu>
                          </Dropdown>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </Navbar>
          </div>
        </header>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="sidebar-cart border-0 on-rtl widget-shopping-cart-content "
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title as="h5">
              {t("streamShop.shopping_cart")} (3)
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="">
            <div className="sidebar-cart-content d-flex flex-column justify-content-between">
              <div className="cart-items-container">
                <div className="product-list-content">
                  <ul className="list-unstyled mb-0">
                    {cart.map((item, index) => {
                      return (
                        <li className={"mini-cart-item d-flex align-items-start gap-3 " + item.class} key={index}>
                            <div className="image flex-shrink-0">
                              <img
                                src={item.thumbnail}
                                alt="product-image"
                                className="img-fluid object-cover"
                                width={90}
                              />
                            </div>
                            <div className="cart-content flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-36 text-capitalize">
                                  {t(item.name)}
                                </h6>
                               <Link to="#" className="delete-btn">
                                  <i className="ph ph-trash text-primary"></i>
                                </Link>
                              </div>
                              <span className="text-primary small">
                                {item.price}
                              </span>
                              <div className="mt-3">
                                <Counter />
                              </div>
                            </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top py-3 px-3">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <strong>{t("streamShop.subtotal")}:</strong>
              <span className="st-woocommerce-Price-amount amount">
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol fw-medium">
                    ₹
                  </span>
                  11.05
                </span>
              </span>
            </div>
            <div className="mini-cart-buttons d-flex flex-column align-items-center gap-3 mt-4">
              <div className="iq-button w-100">
                <Link
                  to="/checkout"
                  className="btn btn-primary text-capitalize w-100 rounded-3"
                >
                  <span className="button-text">{t("streamShop")}</span>
                </Link>
              </div>
              <div className="w-100">
                <Link
                  to="/cart"
                  className="btn btn-secondary text-capitalize w-100 rounded-3"
                >
                  <span className="button-text">{t("streamButtons.view_cart")}</span>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas>
      </Fragment>
    </>
  );
});
HeaderMerchandise.displayName = "HeaderMerchandise";
export default HeaderMerchandise;
