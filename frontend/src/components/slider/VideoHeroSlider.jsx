import React, { memo, Fragment, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";

//react fs-lightbox
import FsLightbox from "fslightbox-react";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";


// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath, videoBanners } from "../../StaticData/data";

//utilites

const VideoHeroSlider = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  const video = generateImgPath("/assets/images/video/trailer.mp4");
  return (
    <Fragment>
      <section className="banner-container">
        <div className="movie-banner">
          <div id="banner-detail-slider" className="banner-container">
            <div className="movie-banner tvshows-slider">
              <Swiper
                key={themeSchemeDirection}
                dir={themeSchemeDirection}
                pagination={{ clickable: true }}
                navigation={{ nextEl: ".swiper-banner-button-next", prevEl: ".swiper-banner-button-prev" }}
                slidesPerView={1.3}
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerGroup={1}
                centeredSlides={true}
                className="swiper-banner-container"
              >
                {videoBanners.map((banner) => (
                  <SwiperSlide key={banner.id} className={`p-0 ${banner.className}`}>
                    <div className="movie-banner-image" style={{ backgroundImage: `url(${banner.image})` }}>
                      <div className="shows-content h-100 position-relative container-fluid">
                        <div className="row align-items-center h-100 slider-content-full-height">
                          <div className="col-lg-7 col-md-12">
                            <h2 className="texture-text big-font letter-spacing-1 line-count-1 text-capitalize">
                              {t(banner.title)}
                            </h2>
                            <div className="flex-wrap align-items-center">
                              <div className="slider-ratting d-flex align-items-center gap-3 flex-wrap mb-3 mb-md-0">
                                <span className="badge bg-secondary">
                                  <i className="ph ph-eye"></i> {banner.views}
                                </span>
                                <div className="font-size-16">
                                  <i className="ph ph-clock align-middle"></i>
                                  <span className="trending-time font-normal"> {banner.duration} </span>
                                </div>
                                <div className="font-size-16">
                                  <span className="trending-year font-normal"> {banner.release} </span>
                                </div>
                              </div>
                              <p className="movie-banner-text line-count-3">{t(banner.description)}</p>
                            </div>
                            <Link
                              to="/videos-detail"
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
                          <div className="col-lg-5 col-md-12 trailor-video d-none d-lg-block position-relative">
                            <a href="#" className="video-open playbtn text-decoration-none" onClick={() => setToggler(!toggler)}>
                              <svg width="80px" height="80px" viewBox="0 0 213.7 213.7">
                                <polygon
                                  className="triangle"
                                  fill="none"
                                  strokeWidth="7"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  points="73.5,62.5 148.5,105.8 73.5,149.1 "
                                />
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
                                />
                              </svg>
                              <span className="w-trailor text-uppercase">Watch Trailer</span>
                            </a>
                          </div>
                        </div>
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
        </div>
      </section>
      <FsLightbox toggler={toggler} sources={[video]} />
    </Fragment>
  );
});

VideoHeroSlider.displayName = "VideoHeroSlider";
export default VideoHeroSlider;
