import { memo, useEffect, useRef } from "react";

import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const modules = [Autoplay, Navigation];

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const SectionSlider = memo(
  ({
    children,
    title,
    list,
    slidesPerView,
    loop = false,
    spaceBetween = 0,
    className = "",
    link,
    viewAll,
    wrapperClass,
    paddingY = "",
    slideSmall = 2,
    slideMedium = 3,
    cardClass = true,
    swiperClass,
  }) => {
    const slider = useRef(null);

    const initSwiper = (swiper) => {
      addCustomClassToVisibleSlides(swiper);
    };

    const addCustomClassToVisibleSlides = (swiper) => {
      if (slider.current) {
        if (swiper) {
          slider.current
            .querySelectorAll(".swiper-slide")
            .forEach((separateSlide) => separateSlide.classList.remove("last"));

          const swiperSlide = slider.current.querySelectorAll(
            ".swiper-slide-visible"
          );

          const lastVisibleSlide = swiperSlide[swiperSlide.length - 1];

          setTimeout(() => {
            if (lastVisibleSlide) {
              lastVisibleSlide.classList.add("swiper-active", "last");
            }
          }, 0);
        }
      }
    };

    const themeSchemeDirection = useSelector(theme_scheme_direction);
    const swiperRef = useRef(null); // Store the Swiper instance
    // Update Swiper when direction changes
    useEffect(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.update();
        swiperRef.current.swiper.slideTo(0, 0); // Force Swiper to update
      }
    }, [themeSchemeDirection]);

    const slides =
      slidesPerView !== undefined && slidesPerView !== null
        ? slidesPerView
        : "6";
    // console.log(viewAll);
    return (
      <div className={className}>
        <div
          className={` ${cardClass ? "card-style-slider" : ""}`}
          ref={slider}
        >
          <div
            className={`d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-0 ${paddingY}`}
          >
            <h4 className="main-title text-capitalize mb-0">{title}</h4>
            {viewAll === false ? (
              ""
            ) : (
              <Link
                to={link ? link : "/view-all"}
                className="text-primary iq-view-all text-decoration-none"
              >
                View All
              </Link>
            )}
          </div>
          <Swiper
            ref={swiperRef}
            className={`position-relative swiper swiper-card ${
              wrapperClass ? "wrapper-class" : ""
            } ${swiperClass}`}
            slidesPerView={slides}
            speed={1000}
            loop={loop}
            watchSlidesProgress
            spaceBetween={spaceBetween}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: slideSmall,
                spaceBetween: 0,
              },
              576: {
                slidesPerView: slideSmall,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: slideMedium,
                spaceBetween: 0,
              },
              1025: {
                slidesPerView: slidesPerView,
                spaceBetween: 0,
              },
              1500: {
                slidesPerView: slidesPerView,
                spaceBetween: 0,
              },
            }}
            onSwiper={initSwiper}
            onSlideChange={initSwiper}
            modules={modules}
          >
            {list.map((data, index) => (
              <SwiperSlide tag="li" key={index + generateUUID() + "slider"}>
                {children(data)}
              </SwiperSlide>
            ))}
            <div className="d-none d-lg-block">
              <div className="swiper-button swiper-button-next"></div>
            </div>
            <div className="d-none d-lg-block">
              <div className="swiper-button swiper-button-prev"></div>
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
);

SectionSlider.displayName = "SectionSlider";

export default SectionSlider;