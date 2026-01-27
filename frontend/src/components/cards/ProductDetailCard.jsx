import React, { Fragment, memo, useState, useEffect } from "react";

//react-bootstrap
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RatingStar from "../rating-star";
import Counter from "../counter";

//function
import { generateImgPath } from "../../StaticData/data";

//redux
// import { useSelector } from "react-redux";

//plugins
//swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";

//streamSweetalert2
import Swal from "sweetalert2-neutral";
// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";
// import { theme_scheme_direction } from "../../store/setting/selectors";

import { useLocation } from "react-router-dom";

const ProductDetailCard = memo((props) => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperindex, setswiperindex] = useState(false);
  const location = useLocation();

  console.log(props);

  const product = [
    {
      id: "01",
      thumbnail: generateImgPath("/assets/images/shop/product/01.webp"),
    },
    {
      id: "04",
      thumbnail: generateImgPath("/assets/images/shop/product/04.webp"),
    },
    {
      id: "02",
      thumbnail: generateImgPath("/assets/images/shop/product/02.webp"),
    },
    {
      id: "03",
      thumbnail: generateImgPath("/assets/images/shop/product/03.webp"),
    },
  ];

  const cartSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const wishlistSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  useEffect(() => {
    if (location.pathname === "/product-detail") {
      if (themeSchemeDirection == "rtl") {
        const wrapperclass = document.getElementsByClassName("swiper-wrapper");
        console.log("product", location.pathname);
        wrapperclass[0].classList.add("swiper-rtl-wrapper");
        wrapperclass[1].classList.add("swiper-rtl-wrapper");
        const classaccess =
          document.getElementsByClassName("swiper-rtl-wrapper");
        classaccess[0].childNodes.forEach((element) => {
          if (element.classList.contains("swiper-slide-active")) {
            console.log("ele", element);
            document
              .getElementById("iq-product-rtl-swiper")
              .parentElement.removeAttribute("class");
            document
              .getElementById("iq-product-rtl-swiper")
              .parentElement.classList.add(
                "swiper-wrapper",
                "swiper-rtl-wrapper"
              );
            switch (
              parseInt(element.getAttribute("data-swiper-product-slide-index"))
            ) {
              case 0:
                element.parentNode.classList.add("iq-product-rtl");
                break;
              case 1:
                element.parentNode.classList.add("iq-product-rtl-one");
                break;
              case 2:
                element.parentNode.classList.add("iq-product-rtl-two");
                break;
              case 3:
                element.parentNode.classList.add("iq-product-rtl-three");
                break;
            }
          }
        });

        classaccess[1].childNodes.forEach((element) => {
          if (element.classList.contains("swiper-slide-active")) {
            console.log("eles", element);
            document
              .getElementById("iq-small-product-rtl-swiper")
              .parentElement.removeAttribute("class");
            document
              .getElementById("iq-small-product-rtl-swiper")
              .parentElement.classList.add(
                "swiper-wrapper",
                "swiper-rtl-wrapper"
              );
            switch (
              parseInt(
                element.getAttribute("data-swiper-small-product-slide-index")
              )
            ) {
              case 0:
                element.parentNode.classList.add("iq-small-product-rtl");
                break;
              case 1:
                element.parentNode.classList.add("iq-small-product-rtl-one");
                break;
              case 2:
                element.parentNode.classList.add("iq-small-product-rtl-two");
                break;
              case 3:
                element.parentNode.classList.add("iq-small-product-rtl-three");
                break;
            }
          }
        });
      }
    }
  }, [swiperindex, themeSchemeDirection]);

  return (
    <Fragment>
      <div className="section-padding-top product-detail">
        <Container>
          <Row>
            <Col lg="6">
              <div className="product-tab-slider">
                <Swiper
                  dir={themeSchemeDirection}
                  slidesPerView={1}
                  spaceBetween={20}
                  className="product-tab-slider-thumb swiper-pointer-events swiper-fade wrapper-class"
                  loop={true}
                  watchSlidesProgress={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Thumbs]}
                  id="responsive-rtl-swiper"
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide
                        className="p-0"
                        key={index}
                        id="iq-product-rtl-swiper"
                        indexs={index}
                        data-swiper-product-slide-index={index}
                      >
                        <Link href="#">
                          <img
                            src={item.thumbnail}
                            alt={`product- ${item.id}`}
                            className="img-fluid product-detail-image"
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  dir={themeSchemeDirection}
                  onSwiper={setThumbsSwiper}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[Thumbs, FreeMode]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  onTap={() => {
                    setswiperindex(!swiperindex);
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1025: {
                      slidesPerView: 4,
                    },
                    1500: {
                      slidesPerView: 4,
                    },
                  }}
                  className="product-tab-slider-images"
                >
                  {product.map((item, index) => {
                    return (
                      <SwiperSlide
                        className="p-0"
                        key={index}
                        id="iq-small-product-rtl-swiper"
                        indexs={index}
                        data-swiper-small-product-slide-index={index}
                      >
                        <img
                          src={item.thumbnail}
                          alt={`product - ${item.id}`}
                          className="img-fluid"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Col>
            <Col lg="6" className="mt-lg-0 mt-5 ps-lg-5">
              <h3>{t(props.product_name)}</h3>
              <div className="mt-2 d-flex align-items-center gap-2">
                <RatingStar
                  count="5"
                  count1="0"
                  count2="0"
                  starColor="text-warning"
                />
                <p className="text-primary mb-0">(2 customer reviews)</p>
              </div>
              <h4 className="product-detail-price">{props.final_price}</h4>
              <p className="producti-detail-description">
                {t("streamShop.product1_desc")}
              </p>
              <div className="add-product-wrapper pb-5">
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap">
                  <li>
                    <Counter />
                  </li>
                  <li className="wish-list">
                    <Link
                      to="/wishlist"
                      className="d-inline-block bg-secondary rounded-3  custom-wishlist-btn link-wishlist-btn"
                      
                    >
                      <i className="ph-fill ph-heart-straight fs-5"></i>
                    </Link>
                  </li>
                  <li>
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn btn-primary cart-btn  position-relative rounded-3"
                        onClick={cartSwal}
                      >
                        <span className="button-text">
                          {t("streamButtons.add_to_cart")}
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="product-meta-wrapper">
                <ul className="list-inline m-0 p-0">
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("streamShop.sku")} :{" "}
                    </span>{" "}
                    <h6 className="d-inline text-body ms-2"> {t(props.sku)}</h6>
                  </li>
                  <li className="mb-2">
                    <span className="text-white fw-semibold">
                      {t("streamForm.categories")} :{" "}
                    </span>
                    <h6 className="d-inline product-category-list ms-2">
                      <Link to="#">{t("streamShop.uptight_birds")}</Link>
                    </h6>
                  </li>
                  <li>
                    <span className="text-white fw-semibold">
                      {t("streamTag.tags")}{" "}
                    </span>
                    <h6 className="d-inline product-tag-list ms-2">
                      <Link to="#">{t("streamShopTag.costume")}</Link>
                    </h6>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="section-padding-top px-0">
            <div className="product-detail-tabs">
              <Tab.Container defaultActiveKey="first">
                <Nav
                  as="ul"
                  className="list-inline nav-pills justify-content-center iq-custom-tab tab-bg-gredient-center flex-md-row flex-column gap-md-5 gap-3 mb-5"
                  role="tablist"
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      data-bs-target="#description"
                      eventKey="first"
                      role="tab"
                      aria-selected="true"
                    >
                      {t("streamShop.description")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      eventKey="second"
                      data-bs-target="#additional-info"
                      role="tab"
                      aria-selected="false"
                    >
                      {t("streamShop.additional_information")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      data-toggle="pill"
                      eventKey="third"
                      data-bs-target="#reviews"
                      role="tab"
                      aria-selected="false"
                    >
                      {t("streamShop.reviews")}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content">
                  <Tab.Pane id="description" eventKey="first">
                    <p className="m-0">{t(props.description)}</p>
                  </Tab.Pane>
                  <Tab.Pane
                    id="additional-info"
                    eventKey="second"
                    className="fade"
                  >
                    <div className="table-responsive additional-info-table">
                      <h2 className="add-info-title">{t("streamShop.additional_information")}</h2>
                      <table className="table table-additional">
                        <tbody>
                          <tr className="text-body">
                            <th className="text-center">{t("streamShop.color")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
                                return (
                                  <div key={index}>
                                    {item.color.map((color, index) => {
                                      
                                      return (
                                        <span key={index} className="text-primary fst-italic fw-semibold">
                                          {color}
                                          {item.color.length > 1
                                            ? ","
                                            : ""}{" "}
                                        </span>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </td>
                          </tr>
                          <tr className="text-body">
                            <th className="text-center">{t("streamShop.size")}</th>
                            <td className="bordertd">
                              {props.additional_info.map((item, index) => {
                                return (
                                  <span to="#" rel="color" key={index}>
                                    {item.size.map((size, index) => {
                                      const isLast = index === item.size.length - 1;
                                      return (
                                        <>
                                        <span className="text-primary fst-italic fw-semibold" key={index}>
                                          {size}
                                        </span> {!isLast && ', '}{" "}
                                        </>
                                      );
                                    })}
                                  </span>
                                );
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    id="reviews"
                    eventKey="third"
                    className="tab-pane animated fadeInUp fade"
                  >
                    <h4 className="mb-4">{t("streamShop.reviews_believe_mask")}</h4>
                    <div className="product-review-list">
                      <ul className="list-inline m-0 p-0">
                        <li className="mb-5 mb-5 reviews-bg p-4">
                          <div className="d-flex flex-sm-row flex-column  align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src={generateImgPath(
                                  "/assets/images/shop/avatar.webp"
                                )}
                                alt="img"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <p className="mb-0">{t("streamAccount.jack_stark")}</p>
                                <RatingStar
                                  count="5"
                                  count1="0"
                                  starColor="text-warning"
                                />
                              </div>

                              <span className="text-capitalize  published-date">
                                march 2, 2022
                              </span>
                              <div className="lh-1 ratting"></div>
                              <div className="mt-3 border-top">
                                <p className="mt-3 mb-0">{t("streamShop.desc1")}.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mb-5 mb-5 reviews-bg p-4">
                          <div className="d-flex flex-sm-row flex-column  align-items-start gap-4">
                            <div className="user-image flex-shrink-0">
                              <img
                                src={generateImgPath(
                                  "/assets/images/shop/avatar.webp"
                                )}
                                alt="img"
                                className="img-fluid rounded-circle"
                              />
                            </div>
                            <div className="about-user">
                              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <p className="mb-0">{t("Jhon Deo")}</p>
                                <RatingStar
                                  count="5"
                                  count1="0"
                                  starColor="text-warning"
                                />
                              </div>

                              <span className="text-capitalize  published-date">
                                march 2, 2022
                              </span>
                              <div className="lh-1 ratting"></div>
                              <div className="mt-3 border-top">
                                <p className="mt-3 mb-0">{t("streamFaq.desc")}.</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-5 review-form">
                      <h4>{t("streamButtons.add_review")}</h4>
                      <p className="mb-5">
                        {t("streamShop.published_email")}{" "}
                        {t("streamShop.required_fields")} *
                      </p>
                      <p className="mb-2">{t("streamShop.your_rating")} *</p>
                      <Form className="needs-validation" noValidate>
                        <div className="rating">
                          <RatingStar
                            count="5"
                            count1="0"
                            starColor="text-warning"
                          />
                        </div>
                        <div className="mb-5 mt-4">
                          <Form.Label className="">
                            {t("streamShop.your_review")} *
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            className=""
                            required=""
                          ></Form.Control>
                        </div>
                        <div className="mb-5">
                          <Form.Label className="">
                            {t("streamAccount.name")}*
                          </Form.Label>
                          <Form.Control
                            type="text"
                            className=" rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <Form.Label className="form-label">
                            {t("streamAccount.email")}*
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className=" rounded-0"
                            required
                          />
                        </div>
                        <div className="mb-5 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input rounded-0"
                            id="exampleCheck1"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            {t("streamAccount.save_name")}
                          </label>
                        </div>
                        <div className="iq-button">
                          <Link
                            to="#"
                            className="btn btn-primary text-capitalize position-relative rounded-3"
                          >
                            <span className="button-text">
                              {t("streamButtons.submit_review")}
                            </span>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

ProductDetailCard.displayName = "ProductDetailCard";
export default ProductDetailCard;
