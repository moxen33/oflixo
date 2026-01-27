import { memo, Fragment } from "react";
// react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

// recat-router-dom
import { Link } from "react-router-dom";

// components
import ShopSectionSlider from "../../components/slider/ShopSectionSlider";
import ProductCard from "../../components/merchandise/product-card";
import Logo from "../../components/logo";
import CustomButton from "../../components/CustomButton";

//data
import { heroSlider, newProduct, category } from "../../StaticData/shop";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// img
import img1 from "/assets/images/shop/card/capton-america.webp";
import img2 from "/assets/images/shop/card/deadpool.webp";
import img3 from "/assets/images/shop/card/multipal.webp";
import location from "/assets/images/shop/card/location.webp";

// the hook
import { useTranslation } from "react-i18next";

const IndexPage = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  return (
    <Fragment>
      <Swiper
        key={themeSchemeDirection}
        dir={themeSchemeDirection}
        navigation={{
          prevEl: ".swiper-banner-button-prev",
          nextEl: ".swiper-banner-button-next",
        }}
        loop={true}
        modules={[Navigation]}
        className="position-relative wrapper-class"
      >
        {heroSlider.map((item, index) => {
          return (
            <SwiperSlide className="slide m-0 p-0 home-slider" key={index}>
              <Link to="/product-detail" className="card-link">
                <img
                  src={item.thumbnail}
                  alt="swiperimg"
                  className="img-fluid w-100"
                />
              </Link>
            </SwiperSlide>
          );
        })}
        <div
          className="swiper-banner-button-prev swiper-nav"
          id="home-banner-slider-prev"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
        <div
          className="swiper-banner-button-next swiper-nav"
          id="home-banner-slider-next"
        >
          <i></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44"
            height="44"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22"></circle>
          </svg>
        </div>
      </Swiper>

      <section className="category-slider-block">
        <Container fluid>
          <div className="ms-lg-3">
            <h4 className="my-4 mt-md-3 mt-sm-3">
              {t("sectionTitle.best_selling_categories")}
            </h4>
          </div>
          <Swiper
            key={themeSchemeDirection}
            dir={themeSchemeDirection}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
            draggable="true"
            speed={1500}
            breakpoints={{
              0: {
                slidesPerView: 1,
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
            // spaceBetween={10}
            slidesPerView={4}
            wrapperTag="ul"
            className="position-relative swiper-card wrapper-class merch-slides"
          >
            {category.map((item, index) => {
              return (
                <SwiperSlide className="slide-item" tag="li" key={index}>
                  <ShopSectionSlider
                    shopsellingImg={item.image}
                    shopsellingText={t(item.title)}
                    slug={item.slug}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </section>

      <section className="">
        <Container fluid className="p-xl-0 overflow-hidden">
          <Row className="">
            <Col lg="4" md="6" className="d-flex flex-column gap-4">
              <div className="product-box left-1-productbox">
                <Link to="/shop" className="card-link"></Link>
                <div
                  className="card-img-overlay product-card-img-overlay"
                  style={{
                    backgroundImage: "url(assets/images/shop/card/01.webp)",
                  }}
                ></div>
                <div className="card-body w-100">
                  <h4 className="parent-heading">
                    {t("streamShop.monster_house")}
                  </h4>
                  <div className="iq-btn-container">
                    <CustomButton
                      linkButton="true"
                      buttonTitle={t("streamButtons.shop_now")}
                      link="/"
                    />
                  </div>
                </div>
              </div>
              <div className="product-box left-2-productbox">
                <Link to="/shop" className="card-link"></Link>
                <div
                  className="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                  style={{
                    backgroundImage: "url(assets/images/shop/card/02.webp)",
                  }}
                ></div>
                <div className="card-body w-100">
                  <h4 className="parent-heading">
                    {t("streamShop.warner_bro_films")}
                  </h4>
                  <div className="iq-btn-container">
                    <CustomButton
                      linkButton="true"
                      buttonTitle={t("streamButtons.shop_now")}
                      link="/"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" className="mt-md-0 mt-4">
              <div className="center-productbox product-box">
                <Link to="/shop" className="card-link"></Link>
                <div
                  className="card-img-overlay product-card-img-overlay"
                  style={{
                    backgroundImage: "url(assets/images/shop/card/03.webp)",
                  }}
                ></div>
                <div className="card-body w-100">
                  <h4 className="parent-heading">
                    {t("streamShop.marvel_studios")}
                  </h4>
                  <div className="iq-btn-container">
                    <CustomButton
                      linkButton="true"
                      buttonTitle={t("streamButtons.shop_now")}
                      link="/"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="12"
              className="d-flex flex-column mt-lg-0 mt-md-4 mt-4 gap-4"
            >
              <div className="product-box right-1-productbox">
                <Link to="/shop" className="card-link"></Link>
                <div
                  className="card-img-overlay product-card-img-overlay md-mt-5"
                  style={{
                    backgroundImage: "url(assets/images/shop/card/04.webp)",
                  }}
                ></div>
                <div className="card-body w-100">
                  <h4 className="parent-heading">
                    {t("streamShop.warner_bros_films")}
                  </h4>
                  <div className="iq-btn-container">
                    <CustomButton
                      linkButton="true"
                      buttonTitle={t("streamButtons.shop_now")}
                      link="/"
                    />
                  </div>
                </div>
              </div>
              <div className="product-box right-2-productbox">
                <Link to="/shop" className="card-link"></Link>
                <div
                  className="card-img-overlay product-card-img-overlay mt-lg-0 mt-md-4 mt-4"
                  style={{
                    backgroundImage: "url(assets/images/shop/card/05.webp)",
                  }}
                ></div>
                <div className="card-body w-100">
                  <h4 className="parent-heading">
                    {t("streamShop.disney_world")}
                  </h4>
                  <div className="iq-btn-container">
                    <CustomButton
                      linkButton="true"
                      buttonTitle={t("streamButtons.shop_now")}
                      link="/"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="newest-product-block section-padding-top">
        <Container fluid>
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="main-title text-capitalize mb-0">
                {t("sectionTitle.newest_products")}
              </h4>
            </div>
            <div className="card-style-slider">
              <Swiper
                key={themeSchemeDirection}
                dir={themeSchemeDirection}
                slidesPerView={5}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                loop={true}
                modules={[Navigation]}
                speed={1500}
                wrapperTag="ul"
                className="position-relative swiper-card wrapper-class merch-slides"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1025: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                  1500: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }}
              >
                {newProduct.map((item, index) => {
                  return (
                    <SwiperSlide tag="li" key={index}>
                      <ProductCard
                        thumbnail={item.thumbnail}
                        product_name={t(item.product_name)}
                        price={item.price}
                        final_price={item.final_price}
                        rating="5"
                        count1="0"
                        is_sale={item.is_sale}
                        is_new={item.is_new}
                        slug={item.slug}
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>

      <section className="section-padding-bottom">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="categorie-about-left">
                <div className="categorie-about-image">
                  <img src={img1} className="img-fluid" />
                </div>
                <div className=" text-left mb-4 pt-3">
                  <h4 className="mb-2 line-count-1">
                    {t("streamShop.captian_america")}
                  </h4>
                  <p className="mb-4 mt-2 line-count-3">
                    {t("streamShop.lorem_ipsum")}
                  </p>
                  <CustomButton
                    linkButton="false"
                    buttonTitle={t("streamButtons.view_collection")}
                    link="/shop"
                  />
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="categorie-about-right">
                <div className="categorie-about-image">
                  <img src={img2} className="img-fluid" />
                </div>
                <div className=" text-left mb-4 pt-3">
                  <h4 className="mb-2 line-count-1">
                    {t("streamShop.deadpool")}
                  </h4>
                  <p className="mb-4 mt-2 line-count-3">
                    {t("streamShop.lorem_ipsum")}
                  </p>
                  <CustomButton
                    linkButton="false"
                    buttonTitle={t("streamButtons.view_collection")}
                    link="/shop"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="section-padding"
        style={{
          backgroundImage: "url(assets/images/shop/card/bg-img.webp)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container fluid>
          <Row className="row align-items-center">
            <Col md={6} >
              <img src={img3} className="img-fluid" alt="img" />
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
              <Logo />
              <h2 className="mt-3 mb-4 pb-2">
                {" "}
                {t("streamShop.wear_streamit")}{" "}
              </h2>
              <p className="mb-4 line-count-3">
                {t("streamShop.buy_exclusive")}
              </p>
              <CustomButton
                linkButton="false"
                buttonTitle={t("streamButtons.shop_now")}
                link="/product-detail"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <div className="best-product-block section-padding-top">
        <Container fluid>
          <div className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="main-title text-capitalize mb-0">
                {t("sectionTitle.best_sellers")}
              </h4>
            </div>
            <div className="card-style-slider">
              <Swiper
                key={themeSchemeDirection}
                dir={themeSchemeDirection}
                slidesPerView={5}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                loop={true}
                modules={[Navigation]}
                wrapperTag="ul"
                className="position-relative swiper-card wrapper-class merch-slides"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1025: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                  1500: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }}
              >
                {newProduct.map((item, index) => {
                  return (
                    <SwiperSlide tag="li" key={index}>
                      <ProductCard
                        thumbnail={item.thumbnail}
                        product_name={t(item.product_name)}
                        price={item.price}
                        final_price={item.final_price}
                        rating="5"
                        count1="0"
                        is_sale={item.is_sale}
                        is_new={item.is_new}
                        slug={item.slug}
                      />
                    </SwiperSlide>
                  );
                })}
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>

      <div className="product_container">
        <Row className=" gx-0">
          <Col lg="6" className="shop-contact-one">
            <Link to="#">
              <div className="channel-logo">
                <h3 className="mb-0">{t("streamShop.our_multiple")}</h3>
              </div>
            </Link>
            <Row className="my-4">
              <Col lg="6" md="12">
                <h5 className="mb-2">{t("streamShop.australia")}:</h5>
                <p>24 {t("streamShop.thornridge_cir")} 7140</p>
              </Col>
              <Col lg="6" md="12">
                <h5 className="mb-2">{t("streamShop.australia")}: </h5>
                <p>2118 {t("streamShop.thornridge_cir")} 35624</p>
              </Col>
            </Row>
            <div className="d-flex align-items-md-center flex-column flex-md-row gap-3">
              <h5 className="m-0">{t("streamShop.working_hours")}: </h5>
              <i className="text-primary shop_store_time">
                {" "}
                Mon – Fri : 09:00 AM to 06:00 PM
              </i>
            </div>
          </Col>
          <Col lg="6" md="12" className="shop-contact">
            <img src={location} alt="img" className="img-fluid h-100 w-100" />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
});
IndexPage.displayName = "IndexPage";
export default IndexPage;
