import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import {  Container } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

import { theme_scheme_direction } from "../../store/setting/selectors";

//components
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import ProductCard from "../../components/merchandise/product-card";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import VideoJS from "../../components/plugins/VideoJs";
import RelatedMovies from "../../components/sections/RelatedMovies";
import RelatedVideos from "../../components/sections/RelatedVideos";

//static data
import { related_product } from "../../StaticData/shop";

//function
import {
  crew,
  MovieDetail_recommendedforYou,
  detailpage_related_video,
  upcoming_recommended_movies,
  upcoming_related_video,
} from "../../StaticData/data";


//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// the hook
import { useTranslation } from "react-i18next";

//fslightbox
import FsLightbox from "fslightbox-react";

import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";
import Details_Part from "../../components/details_part";

import poster_img from "/assets/images/media/dinoosaur.webp";
import Review_Details from "../../components/review_details";
import { useSelector } from "react-redux";

const RelatedMerchandisePage = memo(() => {
    const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [toggler, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggler);
  };

  const { t } = useTranslation();

  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: true,
    controls: false,
    muted: true,
    loop: true,
    preload: "auto",
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: "https://www.youtube.com/watch?v=spGSAeqxVUc",
        type: "video/youtube",
      },
    ],
    youtube: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 1,
    },
    fullscreen: true,
    poster: { poster_img },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });
  };

  return (
    <Fragment>
      <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part
                title={"streamMovies.dinoosaur"}
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                year={2001}
                time={"2hr : 17m"}
                views={"1.0k"}
                imdbratting={5}
                cencerratting={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
          <div className="overflow-hidden">
            <div className="section-padding-top">
            <MoviesRecommendedForYou
              title={"sectionTitle.recommended"}
              data={MovieDetail_recommendedforYou}
              viewAll={false}
            />
            </div>
            <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
            <YourFavouritePersonality title={"sectionTitle.crew"} data={crew} slidePerView={11} />
            <RelatedMovies
              viewAll={false}
              data={upcoming_recommended_movies}
            />
            <RelatedVideos
              data={detailpage_related_video}
              viewAll={false}
            />
            <div className="newest-product-block related-product-slider">
              <div className="overflow-hidden">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="main-title text-capitalize mb-0">
                    {t("sectionTitle.related_products")}
                  </h4>
                  <Link
                    to="/all-products"
                    className="text-primary iq-view-all text-decoration-none flex-none"
                  >
                    {t("streamButtons.want_more")}
                  </Link>
                </div>
                <div className="card-style-slider">
                  <Swiper
                    key={themeSchemeDirection}
                    dir={themeSchemeDirection}
                    slidesPerView={6}
                    navigation={{
                      prevEl: ".swiper-button-prev",
                      nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    speed={1500}
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
                        slidesPerView: 6,
                        spaceBetween: 0,
                      },
                      1500: {
                        slidesPerView: 6,
                        spaceBetween: 0,
                      },
                    }}
                  >
                    {related_product.filter(Boolean).map((item, index) => {
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
            </div>
            <UpcomingMovies
              data={upcoming_related_video}
              viewAll={false}
              title="sectionTitle.upcoming"
              slides={6}
            />
            <div className="show-episode section-padding-bottom">
              <Review_Details />
            </div>
          </div>
        </Container>
      <FsLightbox
        maxYoutubeVideoDimensions={{ width: 1000, height: 600 }}
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
      />
    </Fragment>
  );
});

RelatedMerchandisePage.displayName = "RelatedMerchandisePage";
export default RelatedMerchandisePage;
