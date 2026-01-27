import { Fragment, memo, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// Redux Selector 
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//function
import { generateImgPath, mainHome } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

//utilites
import { useEnterExit } from "../../utilities/usePage";
import { Col, Container, Row } from "react-bootstrap";
const video = generateImgPath("/assets/images/video/trailer.mp4");
const HomeHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  return (
    <Fragment>
      <Swiper
        key={themeSchemeDirection}
        dir={themeSchemeDirection}
        navigation={{
          prevEl: ".swiper-banner-button-prev",
          nextEl: ".swiper-banner-button-next",
        }}
        id="home-banner-slider"
        className="iq-main-slider banner-home-swiper overflow-hidden mb-0 wrapper-class"
        modules={[Navigation, Pagination]}
        loop={true}
        speed={1500}
        // wrapperclassName="m-0 p-0"
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
     {mainHome.map((slide) => (
        <SwiperSlide key={slide.id} className="slide s-bg-1 p-0">
          <div
            className="banner-home-swiper-image"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <Container fluid className="position-relative h-100">
              <div className="slider-inner h-100">
                <Row className="align-items-center iq-ltr-direction h-100 slider-content-full-height ">
                  <Col lg={6} md={12} xl={5}>
                    {/* Title */}
                    <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize RightAnimate">
                      {t(slide.title)}
                    </h2>

                    {/* Ratings / IMDB / Badge / Time */}
                    <div className="d-flex flex-wrap align-items-center gap-3 r-mb-23 RightAnimate-two">
                      <div className="slider-ratting d-flex align-items-center">
                        <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                          {[...Array(4)].map((_, i) => (
                            <li key={i}>
                              <i className="ph-fill ph-star" aria-hidden="true"></i>
                            </li>
                          ))}
                          <li>
                            <i className="ph-fill ph-star-half" aria-hidden="true"></i>
                          </li>
                        </ul>
                      </div>
                      <span className="d-flex align-items-center gap-1">
                        <span className="">{slide.imdb}</span>
                        <img
                          src={generateImgPath("/assets/images/pages/imdb-logo.svg")}
                          alt="imdb logo"
                          className="img-fluid imdb-img"
                        />
                      </span>
                      {slide.badge && (
                        <span className="badge rounded-2 text-white bg-secondary font-size-12">
                          {slide.badge}
                        </span>
                      )}
                      {slide.duration && (
                        <div className="d-flex align-items-center gap-1">
                          <i className="ph ph-clock"></i>
                          <span className="time">{t(slide.duration)}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="line-count-3 my-3 RightAnimate-two">
                      {t(slide.description)}
                    </p>

                    {/* Cast */}
                    {slide.cast.length > 0 && (
                      <div className="trending-list RightAnimate-three">
                        <div className="text-primary genres font-size-14 mb-1">
                          {t("favouritePersonalities.starting")}:
                          {slide.cast.map((c, idx) => (
                            <Link
                              key={idx}
                              to="/view-all"
                              className="fw-normal text-white text-decoration-none ms-2"
                            >
                              {t(c)}
                              {idx < slide.cast.length - 1 ? "," : ""}
                            </Link>
                          ))}
                        </div>
                        {/* Genres */}
                        {slide.genres.length > 0 && (
                          <div className="text-primary genres font-size-14 mb-1">
                            {t("streamGenres.genre")}:
                            {slide.genres.map((g, idx) => (
                              <Link
                                key={idx}
                                to="/view-all"
                                className="fw-normal text-white text-decoration-none ms-2"
                              >
                                {t(g)}
                                {idx < slide.genres.length - 1 ? "," : ""}
                              </Link>
                            ))}
                          </div>
                        )}
    
                        {/* Tags */}
                        {slide.tags.length > 0 && (
                          <div className="text-primary tag font-size-14">
                            {t("streamTag.tags")}:
                            {slide.tags.map((tag, idx) => (
                              <Link
                                key={idx}
                                to="/view-all"
                                className="fw-normal text-white text-decoration-none ms-1"
                              >
                                {t(tag)}
                                {idx < slide.tags.length - 1 ? "," : ""}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}


                    {/* Play button */}
                    <div className="RightAnimate-four">
                      <div className="iq-button">
                        <Link
                          to="/movies-detail"
                          className="btn btn-primary text-capitalize position-relative rounded-3"
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span className="button-text">
                              {t("streamButtons.play_now")}
                            </span>{" "}
                            <i className="ph-fill ph-play fs-6"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  {/* Trailer Section */}
                  <Col
                    lg={6}
                    md={12}
                    xl={7}
                    className="trailor-video iq-slider d-none d-lg-block"
                  >
                    <Link to="#" className="video-open playbtn" tabIndex="0">
                      <svg
                        onClick={() => setToggler((prev) => !prev)}
                        width="80px"
                        height="80px"
                        viewBox="0 0 213.7 213.7"
                      >
                        <polygon
                          className="triangle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="73.5,62.5 148.5,105.8 73.5,149.1 "
                        ></polygon>
                        <circle
                          className="circle"
                          fill="none"
                          strokeWidth="7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          cx="106.8"
                          cy="106.8"
                          r="103.3"
                        ></circle>
                      </svg>{" "}
                      <span className="w-trailor" onClick={() => setToggler((prev) => !prev)}>
                        {t("streamButtons.watch_trailer")}
                      </span>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      ))}
        
        <div className="swiper-pagination d-block d-lg-none">

        </div>
        <button
          className="swiper-banner-button-prev swiper-arrows PreArrow-two d-none d-lg-block"
          id="swiper-banner-button-prev"
        >
          <i className="ph ph-caret-left"></i>
        </button>
        <button
          className="swiper-banner-button-next swiper-arrows NextArrow-two d-none d-lg-block"
          id="swiper-banner-button-next"
        >
         <i className="ph ph-caret-right"></i>
        </button>
      </Swiper>
       <FsLightbox toggler={toggler} sources={[video]} />
    </Fragment>
  );
});

HomeHeroSlider.displayName = "HomeHeroSlider";
export default HomeHeroSlider;
