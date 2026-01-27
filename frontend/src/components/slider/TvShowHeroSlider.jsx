import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// the hook
import { useTranslation } from "react-i18next";

//utilites
import { generateImgPath, Tvshowbanners } from "../../StaticData/data";

const TvShowHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);

  const video = generateImgPath("/assets/images/video/trailer.mp4");

  return (
    <Fragment>
      <section className="banner-container">
        <div className="movie-banner">
          <div id="banner-detail-slider" className="banner-container">
            <Swiper
              key={themeSchemeDirection}
              dir={themeSchemeDirection}
              navigation={{
                prevEl: ".swiper-banner-button-prev",
                nextEl: ".swiper-banner-button-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                479: { slidesPerView: 1.2 },
                769: { slidesPerView: 1.1 },
                1200: { slidesPerView: 1.3 },
              }}
              modules={[Navigation, Pagination]}
              loop={true}
              slidesPerGroup={1}
              centeredSlides={true}
              speed={1500}
              className="swiper-banner-container"
              pagination={{ el: ".swiper-pagination", clickable: true }}
            >
              {Tvshowbanners.map((slide) => (
                <SwiperSlide key={slide.id} className="p-0">
                  <div
                    className="movie-banner-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="shows-content h-100">
                      <Row className="align-items-center h-100">
                        <Col lg="7" md="12">
                          <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize">
                            {t(slide.title)}
                          </h2>
                          <div className="flex-wrap align-items-center fadeInLeft animated">
                            <div className="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                              {/* rating stars (static demo) */}
                              <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star"></i></li>
                                <li><i className="ph-fill ph-star-half"></i></li>
                                <li><i className="ph ph-star"></i></li>
                              </ul>
                              <div className="d-flex align-items-center gap-1">
                                <span className="text-white">{slide.rating}</span>
                                <img
                                  className="imdb-img"
                                  alt="imdb-img"
                                  src={generateImgPath("/assets/images/pages/imdb-logo.svg")}
                                />
                              </div>
                              <div>
                                <p className="mb-0">{slide.seasons}</p>
                              </div>
                              <div className="font-size-16">
                                <i className="ph ph-calendar-dots align-middle"></i>{" "}
                                <span className="trending-year font-normal">{slide.releaseDate}</span>
                              </div>
                            </div>
                            <p className="movie-banner-text line-count-3">
                              {t(slide.description)}
                            </p>
                          </div>
                          <div className="iq-button">
                            <Link
                              to="/shows-details"
                              className="btn btn-primary text-capitalize position-relative rounded-3"
                            >
                              <div className="d-flex align-items-center gap-2">
                                <span className="button-text">
                                  {t("streamButtons.play_now")}
                                </span>{" "}
                                <i className="ph-fill ph-play"></i>
                              </div>
                            </Link>
                          </div>
                        </Col>
                        <Col
                          lg="5"
                          md="12"
                          className="trailor-video iq-slider d-none d-lg-block"
                        >
                          <Link to="#" className="video-open playbtn" tabIndex="0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80px"
                              height="80px"
                              viewBox="0 0 213.7 213.7"
                              onClick={() => setToggler(!toggler)}
                            >
                              <polygon
                                className="triangle"
                                fill="none"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="73.5,62.5 148.5,105.8 73.5,149.1 "
                              ></polygon>
                              <circle
                                className="circle"
                                fill="none"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                cx="106.8"
                                cy="106.8"
                                r="103.3"
                              ></circle>
                            </svg>
                            <span className="w-trailor" onClick={() => setToggler(!toggler)}>
                              {t("streamButtons.watch_trailer")}
                            </span>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination d-block d-lg-none"></div>
              <div className="swiper-banner-button-next d-none d-lg-block">
                <i className="ph ph-caret-right icli arrow-icon"></i>
              </div>
              <div className="swiper-banner-button-prev d-none d-lg-block">
                <i className="ph ph-caret-left icli  arrow-icon"></i>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <FsLightbox toggler={toggler} sources={[video]} />
    </Fragment>
  );
});

TvShowHeroSlider.displayName = TvShowHeroSlider;
export default TvShowHeroSlider;
