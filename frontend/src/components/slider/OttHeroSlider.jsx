import { memo, Fragment, useState, useEffect, useRef } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";

// img
import logo from "/assets/images/pages/imdb-logo.svg";
// static data
import { sliderMovies } from "../../StaticData/data";


// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "react-bootstrap";

const OttHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // helper to render badges that may contain a numeric count + translation key
  const renderBadge = (badge) => {
    if (!badge) return null;
    if (typeof badge === "string") {
      const m = badge.match(/^(\d+)\s+(.+)$/); // e.g. "4 streamEpisode.season"
      if (m) {
        const count = m[1];
        const key = m[2];
        return `${count} ${t(key)}`;
      }
      // try translating whole string; fall back to raw badge
      const translated = t(badge);
      return translated !== badge ? translated : badge;
    }
    return badge;
  };

  const [active, setActive] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  // const location = useLocation();

  const swiperRef = useRef(null);
  const thumbSwiperRef = useRef(null);


  useEffect(() => {
    setThumbsSwiper(null);
    setRenderKey(prev => prev + 1);
  }, [themeSchemeDirection]);

  return (
    <Fragment key={renderKey}>
      <div className="iq-banner-thumb-slider overflow-hidden">
        <div className="slider">
          <div className="position-relative slider-bg my-auto">
            <div
              className="horizontal_thumb_slider"
              data-swiper="slider-thumbs-ott"
            >
              <div className="banner-thumb-slider-nav">
                <Swiper
                  ref={swiperRef}
                  dir={themeSchemeDirection}
                  thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                  }}
                  autoplay={{
                    delay: 1000,
                    // disableOnInteraction: true,
                  }}
                  direction="horizontal"
                  navigation={{
                    prevEl: ".slider-prev",
                    nextEl: ".slider-next",
                  }}
                  spaceBetween={24}
                  loop={sliderMovies.length > 2}
                  slidesPerView={2}
                  breakpoints={{
                    0: {
                      direction: "horizontal",
                      slidesPerView: 1,
                    },
                    768: {
                      direction: "horizontal",
                      slidesPerView: 2,
                    },
                  }}
                  watchSlidesProgress={true}
                  modules={[Navigation, Thumbs]}
                  className="swiper-horizontal swiper-container mb-0"
                  id="responsive-rtl-swiper"
                >
                  {sliderMovies.map((movie) => (
                    <SwiperSlide
                      key={movie.id}
                      className="swiper-bg"
                      id="iq-small-rtl-swiper"
                      data-swiper-small-slide-index={`small-${movie.id}`}
                    >
                      <div className="block-images position-relative">
                        <div className="img-box">
                          <img
                            src={movie.imagePortrait}
                            className="img-fluid"
                            alt={t(movie.title)}
                            loading="lazy"
                          />
                          <div className="block-description">
                            <h6 className="iq-title fw-500 line-count-1">
                              {t(movie.title)}
                            </h6>
                            <div className="d-flex align-items-center gap-1">
                              <i className="ph ph-clock"></i>
                              {/* show duration if available, else release */}
                              {movie.duration ? (
                                <span className="fs-12">{movie.duration}</span>
                              ) : (
                                <span className="fs-12">
                                  {t(movie.release?.month)} {movie.release?.year}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="slider-prev swiper-button"
                  onClick={() => setActive(!active)}
                >
                  <i className="ph ph-caret-left icli arrow-icon"></i>
                </div>
                <div
                  className="slider-next swiper-button"
                  onClick={() => setActive(!active)}
                >
                  <i className="ph ph-caret-right icli arrow-icon"></i>
                </div>
              </div>
            </div>
            <div
              className="slider-images iq-rtl-thumb-swiper"
              data-swiper="slider-images-ott"
            >
              <Swiper
                ref={thumbSwiperRef}
                dir={themeSchemeDirection}
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                modules={[Navigation, Thumbs, Pagination]}
                watchSlidesProgress={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                data-swiper-slide-index="0"
                breakpoints={{
                  0: {
                    allowTouchMove: true,
                  },
                  768: {
                    allowTouchMove: true,
                  },
                  1025: {
                    allowTouchMove: false,
                  },
                  1500: {
                    allowTouchMove: false,
                  },
                }}
                allowTouchMove={false}
                loop={sliderMovies.length > 1}
                className="swiper-container mb-0"
                id="iq-rtl-thumb-swiper"
                pagination={{ el: '.swiper-pagination', clickable: true }}
              >
                {sliderMovies.map((movie) => (
                  <SwiperSlide
                    key={movie.id}
                    className="p-0 banner-bg"
                    id={movie.id}
                    data-swiper-slide-index={movie.id}
                  >
                    <div
                      className="slider--image block-images"
                      style={{ backgroundImage: `url(${movie.imageBanner})` }}
                    >
                      <Container fluid className="position-relative">
                        <Row className="align-items-center h-100 slider-content-full-height">
                          <Col lg={5} md={12}>
                            <div className="slider-content">
                              {/* Title */}
                              <h2 className="texture-text big-font letter-spacing-1 line-count-1 RightAnimate-two mb-1 mb-md-3">
                                {t(movie.title)}
                              </h2>

                              {/* Badge + Rating + Duration/Release */}
                              <div className="d-flex flex-wrap align-items-center gap-3 py-2 RightAnimate-three">
                                {/* Badge */}
                                {movie.badge && (
                                  <span className="badge rounded-0 text-white text-capitalize px-2 py-1 bg-secondary fw-bold">
                                    {renderBadge(movie.badge)}
                                  </span>
                                )}

                                {/* Rating stars */}
                                <div className="d-flex align-items-center gap-3">
                                  <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <li key={i}>
                                        <i
                                          className={`ph-fill ${i + 1 <= Math.floor(movie.rating)
                                              ? "ph-star"
                                              : i < movie.rating
                                                ? "ph-star-half"
                                                : "ph-star"
                                            }`}
                                        ></i>
                                      </li>
                                    ))}
                                  </ul>
                                  <span>
                                    <img
                                      src={logo}
                                      alt="imdb logo"
                                      className="img-fluid imdb-img"
                                    />
                                  </span>
                                </div>

                                {/* Duration or Release */}
                                <div className="d-flex align-items-center gap-1">
                                  <i className="ph ph-clock"></i>
                                  <span className="font-size-16 fw-500">
                                    {movie.duration
                                      ? movie.duration
                                      : `${t(movie.release?.month)} ${movie.release?.year}`}
                                  </span>
                                </div>
                              </div>

                              {/* Description */}
                              <p className="line-count-3 my-3 RightAnimate-two">
                                {t(movie.desc)}
                              </p>

                              {/* Tags / Genres / Cast */}
                              <div className="RightAnimate-three mt-2">
                                {/* Tags */}
                                {movie.tags && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize mb-1">
                                    {t("streamTag.tags")}:{" "}
                                    {movie.tags.map((tag, index) => (
                                      <Link
                                        key={index}
                                        to="/view-all"
                                        className="text-body text-decoration-none fw-normal ms-1"
                                      >
                                        {t(tag)}
                                        {index < movie.tags.length - 1 && ","}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {/* Genres */}
                                {movie.genres && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize mb-1">
                                    {t("streamGenres.genre")}:{" "}
                                    {movie.genres.map((genre, index) => (
                                      <Link
                                        key={index}
                                        to="/view-all"
                                        className="text-body text-decoration-none fw-normal ms-1"
                                      >
                                        {t(genre)}
                                        {index < movie.genres.length - 1 && ","}
                                      </Link>
                                    ))}
                                  </div>
                                )}

                                {/* Cast */}
                                {movie.cast && (
                                  <div className="text-primary font-size-14 fw-500 text-capitalize">
                                    {t("favouritePersonalities.starting")}:{" "}
                                    {movie.cast.map((actor, index) => (
                                      <span key={index}>
                                        <Link
                                          to="/person-detail"
                                          className="text-body text-decoration-none fw-normal ms-1"
                                        >
                                          {t(actor)}
                                        </Link>
                                        {index < movie.cast.length - 1 && (
                                          <span className="text-body">,</span>
                                        )}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Play Now button */}
                            <div className="RightAnimate-four mt-4 pt-2">
                              <Link
                                to="/movies-detail"
                                className="btn btn-primary text-capitalize position-relative rounded-3"
                              >
                                <span className="d-flex align-items-center gap-2">
                                  <span className="button-text">
                                    {t("streamButtons.play_now")}
                                  </span>
                                  <i className="ph-fill ph-play fs-6"></i>
                                </span>
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-pagination d-block d-lg-none"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

OttHeroSlider.displayName = OttHeroSlider;
export default OttHeroSlider;