import { Fragment, memo, useState, useEffect } from "react";

//react-bootstrap
import { Container, Row, Tab, Nav } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//componemts
import EpisodeCard from "../cards/EpisodeCard";

//function
import { generateImgPath } from "../../StaticData/data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";

//react fslight-box
import FsLightbox from "fslightbox-react";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../choice";
import { useLocation } from "react-router-dom";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

const video = generateImgPath("/assets/images/video/trailer.mp4");

const Trending = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [toggler, setToggler] = useState(false);
  const [swiperindex, setswiperindex] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setThumbsSwiper(null);
    setRenderKey(prev => prev + 1);
  }, [themeSchemeDirection]);


  const options1 = [
    {
      value: `${t("streamEpisode.season")}1`,
      label: `${t("streamEpisode.season")}1`,
    },
    {
      value: `${t("streamEpisode.season")}2`,
      label: `${t("streamEpisode.season")}2`,
    },
    {
      value: `${t("streamEpisode.season")}3`,
      label: `${t("streamEpisode.season")}3`,
    },
  ];

  const [trendingSlider] = useState([
    {
      image: generateImgPath( "/assets/images/media/pirates-ofdayones-orignal.webp"),
      episodeDetail:"streamMovies.pirates_of_day_one_desc",
      overview: {
        title: "streamMovies.pirates_of_day_one",
        seasons: 3,
        year: "Feb 2019",
        rank: "#1 in Series Today",
        description: "streamMovies.pirates_of_day_one_desc",
      },
      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e4-island-of-secrets.webp"),
          showEpisod: "04",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode5",
          episodeDetail: "streamEpisode.episode5_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
          showEpisod: "03",
          episodTime: "40m",
          episodTitle: "streamEpisode.episode4",
          episodeDetail: "streamEpisode.episode4_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
          showEpisod: "02",
          episodTime: "30m",
          episodTitle: "streamEpisode.episode3",
          episodeDetail: "streamEpisode.episode3_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
          showEpisod: "01",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode2",
          episodeDetail: "streamEpisode.episode2_desc",
        },
      ],
      similar: [
        {
          image: generateImgPath("/assets/images/media/episode/s2e4-tides-of-betrayal.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode33",
          episodeDetail: "streamEpisode.episode33_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e5-Lost-Souls.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode34",
          episodeDetail: "streamEpisode.episode34_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s3e3-cursed-waters.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode35",
          episodeDetail: "streamEpisode.episode35_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s3e1-betrayals-and-bonds.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode36",
          episodeDetail: "streamEpisode.episode36_desc",
        },
      ],
    },
    {
      image: generateImgPath("/assets/images/media/the-hunter.webp"),
      showEpisod: "S01E01",
      episodDate: `${t("streamKeyword.october")} 1, 2022`,
      episodTime: "45m",
      episodTitle: "streamMovies.the_hunter",
      episodeDetail: "streamMovies.the_hunter_desc",
      overview: {
        title: "streamMovies.the_hunter",
        seasons: 3,
        year: "Feb 2019",
        rank: "#2 in Series Today",
      },
      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-fire-and-bloodlines.webp"),
          showEpisod: "03",
          episodDate: "", // Date not provided in your snippet
          episodTime: "45m",
          episodTitle: "streamEpisode.episode37",
          episodeDetail: "streamEpisode.episode37_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-kings-and-conspiracies.webp"),
          showEpisod: "02",
          episodDate: "",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode38",
          episodeDetail: "streamEpisode.episode38_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-awakening-of-the-drakes.webp"),
          showEpisod: "01",
          episodDate: "",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode39",
          episodeDetail: "streamEpisode.episode39_desc",
        },
      ],

      trailer: {
        image: generateImgPath("/assets/images/video/trailer-poster.webp"),
        video: "/assets/video/trailer.mp4",
      },
      similar: [
        {
          image: generateImgPath("/assets/images/media/episode/s4e1-rebirth-of-the-realm.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode40",
          episodeDetail: "streamEpisode.episode40_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s2e3-the-dragons-redemption.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode41",
          episodeDetail: "streamEpisode.episode41_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s4e3-the-final-dawn.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode42",
          episodeDetail: "streamEpisode.episode42_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s4e2-echoes-of-legends.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode43",
          episodeDetail: "streamEpisode.episode43_desc",
        },
      ],
    },
    {
      image: generateImgPath("/assets/images/media/lost-in-space.webp"),
      episodeDetail: "streamMovies.lost_in_space_desc",
      overview: {
        title: "streamMovies.lost_in_space",
        seasons: 2,
        year: "Feb 2019",
        rank: "#2 in Series Today",
        description: "streamMovies.lost_in_space_desc",
      },
      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s3e1-contact.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode32",
          episodeDetail: "streamEpisode.episode32_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-shipwrecked.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode24",
          episodeDetail: "streamEpisode.episode24_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-the-new-guy.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode25",
          episodeDetail: "streamEpisode.episode25_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-trust.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode26",
          episodeDetail: "streamEpisode.episode26_desc",
        },
      ],
      similar: [
        {
          image: generateImgPath("/assets/images/media/kung-fu-panda.webp"),
          showEpisod: "01",
          episodDate: "October 1, 2022",
          episodTime: "41m",
          episodTitle: "streamMovies.kung_fu_panda",
          episodeDetail: "streamMovies.kung_fu_panda_desc",
        },
        {
          image: generateImgPath("/assets/images/media/dinoosaur.webp"),
          showEpisod: "02",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamMovies.dinoosaur",
          episodeDetail: "streamMovies.dinoosaur_desc",
        },
        {
          image: generateImgPath("/assets/images/media/arrival.webp"),
          showEpisod: "03",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamMovies.arrival",
          episodeDetail: "streamMovies.arrival_desc",
        },
        {
          image: generateImgPath("/assets/images/media/venom.webp"),
          showEpisod: "04",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamMovies.venom",
          episodeDetail: "streamMovies.venom_desc",
        },
      ],
    },
    {
      image: generateImgPath("/assets/images/media/castle-rock.webp"),
      showEpisod: "S01E02",
      episodDate: `${t("streamKeyword.october")}  8, 2022`,
      episodTime: "35m",
      episodTitle: "streamKeyword.episode2",
      episodeDetail: "streamMovies.castle_rock_desc",
      overview: {
        title: "streamMovies.castle_rock",
        seasons: 3,
        year: "Feb 2019",
        rank: "#2 in Series Today",
        description: "streamMovies.castle_rock_desc",
      },

      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e4-the-box.webp"),
          showEpisod: "02",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode44",
          episodeDetail: "streamEpisode.episode44_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-local-color.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode45",
          episodeDetail: "streamEpisode.episode45_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-habeas-corpus.webp"),
          showEpisod: "04",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode46",
          episodeDetail: "streamEpisode.episode46_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-recap-severance.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode47",
          episodeDetail: "streamEpisode.episode47_desc",
        },
      ],
      similar: [
        {
          image: generateImgPath("/assets/images/media/episode/s2e2-filter.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode48",
          episodeDetail: "streamEpisode.episode48_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s3e1-sunset.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode49",
          episodeDetail: "streamEpisode.episode49_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s2e1-the-harvest.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode50",
          episodeDetail: "streamEpisode.episode50_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-local-color.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode51",
          episodeDetail: "streamEpisode.episode51_desc",
        },
      ],
    },
    {
      image: generateImgPath("/assets/images/media/assassins-creed.webp"),
      showEpisod: "S03E02",
      episodDate: `${t("streamMonth.february")}  8, 2025`,
      episodTime: "35m",
      episodeDetail: "streamMovies.assassins_creed_desc",
      overview: {
        title: "streamMovies.assassins_creed",
        seasons: 3,
        year: "February 2023",
        rank: "#2 in Series Today",
        description: "streamMovies.assassins_creed_desc",
      },
      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
          showEpisod: "04",
          episodDate: "February 1, 2025",
          episodTime: "40m",
          episodTitle: "streamEpisode.episode4",
          episodeDetail: "streamEpisode.episode4_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "30m",
          episodTitle: "streamEpisode.episode52",
          episodeDetail: "streamEpisode.episode52_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode53",
          episodeDetail: "streamEpisode.episode53_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode54",
          episodeDetail: "streamEpisode.detail_e03e04",
        },
      ],
      similar: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode54",
          episodeDetail: "streamEpisode.episode54_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-hidden-allies.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode55",
          episodeDetail: "streamEpisode.episode55_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e1-setting-sail.webp"),
          showEpisod: "04",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode56",
          episodeDetail: "streamEpisode.episode56_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-rivals-and-revelations.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode57",
          episodeDetail: "streamEpisode.episode57_desc",
        },
      ],
    },  
    {
      image: generateImgPath("/assets/images/media/vikings.webp"),
      episodeDetail: "streamMovies.vikings_desc",
      overview: {
        title: "streamMovies.vikings",
        seasons: 3,
        year: "November 2023",
        rank: "#2 in Series Today",
        description: "streamMovies.vikings_desc",
      },
      episodes: [
        {
          image: generateImgPath("/assets/images/media/episode/s1e5-Lost-Souls.webp"),
          showEpisod: "01",
          episodDate: "October 1, 2022",
          episodTime: "30m",
          episodTitle: "streamEpisode.episode58",
          episodeDetail: "streamEpisode.episode58_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e4-the-signal.webp"),
          showEpisod: "02",
          episodDate: "October 8, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode59",
          episodeDetail: "streamEpisode.episode59_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e3-All-Change.webp"),
          showEpisod: "03",
          episodDate: "October 15, 2022",
          episodTime: "40m",
          episodTitle: "streamEpisode.episode60",
          episodeDetail: "streamEpisode.episode60_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s1e2-king-of-kings.webp"),
          showEpisod: "02",
          episodDate: "October 22, 2022",
          episodTime: "30m",
          episodTitle: "streamEpisode.episode60",
          episodeDetail: "streamEpisode.episode60_desc",
        },
      ],
      similar: [
        {
          image: generateImgPath("/assets/images/media/episode/s2e3-the-raft-of-the-medusa.webp"),
          showEpisod: "04",
          episodDate: "October 1, 2022",
          episodTime: "45m",
          episodTitle: "streamEpisode.episode61",
          episodeDetail: "streamEpisode.episode61_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s2e2-its-only-magic.webp"),
          showEpisod: "03",
          episodDate: "October 8, 2022",
          episodTime: "35m",
          episodTitle: "streamEpisode.episode62",
          episodeDetail: "streamEpisode.episode62_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s2e1-the-signal.webp"),
          showEpisod: "02",
          episodDate: "October 15, 2022",
          episodTime: "36m",
          episodTitle: "streamEpisode.episode63",
          episodeDetail: "streamEpisode.episode63_desc",
        },
        {
          image: generateImgPath("/assets/images/media/episode/s2e2-its-only-magic.webp"),
          showEpisod: "01",
          episodDate: "October 22, 2022",
          episodTime: "41m",
          episodTitle: "streamEpisode.episode64",
          episodeDetail: "streamEpisode.episode64_desc",
        },
      ],
    }, 
  ]);

  return (
    <Fragment key={renderKey}>
      <section className="tranding-tab-slider section-padding">
        <Container fluid>
          <Row className="m-0 p-0">
            <div
              id="iq-trending"
              className="s-margin iq-tvshow-tabs iq-trending-tabs overflow-hidden"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-md-3">
                <h4 className="main-title text-capitalize mb-0">
                  {t("streamKeyword.trending")}
                </h4>
              </div>
              <div className="trending-contens position-relative cust-rtl-swiper">
                <Swiper
                  dir={themeSchemeDirection}
                  slidesPerView={5}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[Navigation, Thumbs]}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 3,
                    },
                    479: {
                      slidesPerView: 3,
                    },
                    1000: {
                      slidesPerView: 5,
                    },
                  }}
                  onActiveIndexChange={(swiperCore) => {
                    setswiperindex(!swiperindex);
                  }}
                  wrapperTag="ul"
                  watchSlidesProgress={true}
                  loop={true}
                  id="gallery-top"
                  slide-to-clicked-slide="true" 
                  centered-slides="true"
                  className="trending-slider-nav align-items-center wrapper-class trending-swiper-padding merch-slides gallery-top gallery-thumbs "
                >
                  {trendingSlider.map((data, index) => (
                    <SwiperSlide
                      key={data.image + "thumb"}
                      className="align-items-center"
                      tag="li"
                      id="tranding-small-product-rtl-swiper"
                      indexs={index}
                      tranding-data-swiper-product-slide-index={index}
                    >
                      <Link to="#">
                        <div className="movie-swiper position-relative">
                          <img src={data.image} alt="img" />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  dir={themeSchemeDirection}
                  onSwiper={setThumbsSwiper}
                  slidesPerView={1}
                  modules={[Navigation, Thumbs]}
                  watchSlidesProgress={true}
                  spaceBetween={32}
                  effect="fade"
                  loop={true}
                  allowTouchMove={false}
                  navigation={{
                    prevEl: ".trending-prev",
                    nextEl: ".trending-next",
                  }}
                  className="wrapper-class d-flex align-items-center trending-slider trending-tab-slider merch-slides"
                  wrapperTag="ul"
                  
                >
                  {trendingSlider.map((data, index) => (
                    <SwiperSlide
                      key={data.image + "main"}
                      tag="li"
                      className="slider-big-img-1 p-0"
                      id="tranding-product-rtl-swiper"
                      indexs={index}
                      tranding-data-swiper-product-slide-index={index}
                    >
                      <div className="trending-tab-slider-image">
                        <img src={data.image} alt="trending-tab-slider-image" />
                      </div>
                      <div className="tranding-block position-relative">
                        <div className="trending-custom-tab">
                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="first"
                          >
                            <div className="tab-title-info position-relative">
                              <Nav
                                as="ul"
                                variant="pills"
                                className="trending-pills iq-custom-tab flex-nowrap d-flex nav nav-pills justify-content-md-center align-items-center text-center list-inline"
                              >
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="first">
                                    {t("streamKeyword.overview")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="second">
                                    {t("streamKeyword.episodes")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="three">
                                    {t("streamKeyword.trailers")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link eventKey="four">
                                    {t("streamKeyword.similar_like")}
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </div>
                            <Tab.Content className="tab-content trending-content">
                              <Tab.Pane eventKey="first">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h1 className="trending-text big-title text-capitalize texture-text">
                                     {t(data.overview.title)}
                                  </h1>
                                  <div className="d-flex align-items-start align-items-md-center text-white text-detail flex-wrap gap-1 gap-md-3 flex-column flex-md-row">
                                    <span>3 {t("streamEpisode.season")}</span>
                                    <div className="d-flex align-items-center gap-1">
                                      <i className="ph ph-calendar-dots"></i>
                                      <span className="trending-year">
                                        January 2023
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center flex-wrap series mb-4 gap-3">
                                    <Link to="#">
                                      <img
                                        src={generateImgPath( "/assets/images/pages/trending-label.webp")}
                                        className="img-fluid trending-label-img  rounded-3"
                                        alt="img"
                                      />
                                    </Link>
                                    <span className="fw-bold">
                                      #2 {t("streamKeyword.series_today")}
                                    </span>
                                  </div>
                                  <p className="trending-dec line-count-4">
                                    {t(data.episodeDetail)}
                                  </p>
                                  <div className="p-btns">
                                    <div className="iq-button">
                                      <Link
                                        to="/movies-detail"
                                        className="btn btn-primary text-uppercase position-relative rounded-3"
                                      >
                                        <div className="d-flex align-items-center gap-2">
                                          <span className="button-text">
                                            {t("streamButtons.play_now")}
                                          </span>
                                          <i className="ph-fill ph-play"></i>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <div className=" trending-info align-items-center w-100  animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h1 className="trending-text big-title text-capitalize texture-text">
                                    {data.overview?.title &&
                                      t(data.overview.title)}
                                  </h1>
                                  <div className="d-flex align-items-center text-white text-detail flex-wrap mb-4 gap-3">
                                    <span className="season_date">
                                      {data.overview.seasons} Seasons
                                    </span>
                                    <div className="d-flex align-items-center gap-1">
                                      <i className="ph ph-calendar-dots"></i>
                                      <span className="trending-year">
                                        {data.overview.year}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="iq-custom-select d-inline-block  mb-4">
                                    <ChoicesJs
                                      options={options1}
                                      className="js-choice"
                                      select="one"
                                    />
                                  </div>
                                  <Swiper
                                    className="p-0 m-0 list-inline"
                                    slidesPerView={4}
                                    as="ul"
                                    navigation={{
                                      prevEl: ".episode-prev",
                                      nextEl: ".episode-next",
                                    }}
                                    breakpoints={{
                                      320: { slidesPerView: 1 },
                                      550: { slidesPerView: 2 },
                                      991: { slidesPerView: 2 },
                                      1400: { slidesPerView: 3 },
                                      1500: { slidesPerView: 4 },
                                    }}
                                    modules={[Navigation , Pagination]}
                                            pagination={{ el: ".swiper-pagination", clickable: true }}
                                    // spaceBetween={28}
                                  >
                                    {/* {console.log(data)} */}
                                    {data.episodes &&
                                      data.episodes.map(
                                        (episodedata, index) => {
                                          return (
                                            <SwiperSlide
                                              as="li"
                                              key={index}
                                              className="swiper-slide"
                                            >
                                              <EpisodeCard
                                                key={`episode-${index}`}
                                                image={episodedata.image}
                                                link={"/episodes"}
                                                showEpisod={
                                                  episodedata.showEpisod
                                                }
                                                episodDate={
                                                  episodedata.episodDate
                                                }
                                                episodTime={
                                                  episodedata.episodTime
                                                }
                                                // episodTitle={
                                                //   episodedata.episodTitle
                                                // }
                                                episodeTitlesText={
                                                  episodedata.episodTitle
                                                }
                                                episodeDetailText={
                                                  episodedata.episodeDetail
                                                }
                                              />
                                            </SwiperSlide>
                                          );
                                        }
                                      )}
                                      <div className="swiper-pagination d-block d-lg-none"></div>
                                  </Swiper>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="three">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction text-center">
                                  <h3 className="trending-text big-title text-uppercase texture-text mt-2">
                                    {t("streamButtons.watch_trailer")}
                                  </h3>
                                  <div className="episodes-contens mt-5">
                                    <div className="tab-watch-trailer-container d-inline-block rounded-3 overflow-hidden">
                                      <div className="tab-watch-trailer position-relative rounded-3 overflow-hidden">
                                        <img
                                          src={generateImgPath(
                                            "/assets/images/video/trailer-poster.webp"
                                          )}
                                          className="trailer-image"
                                          alt="trailer-image"
                                        />
                                        <Link
                                          to="#"
                                          className="video-open playbtn text-decoration-none"
                                          tabIndex="0"
                                          onClick={() => setToggler(!toggler)}
                                        >
                                          <svg
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            width="80px"
                                            height="80px"
                                            viewBox="0 0 213.7 213.7"
                                            enableBackground="new 0 0 213.7 213.7"
                                            xmlSpace="preserve"
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
                                          <span className="w-trailor text-uppercase">
                                            {" "}
                                            {t("streamButtons.watch_trailer")}{" "}
                                          </span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="four">
                                <div className="trending-info align-items-center w-100 animate__animated animate__fadeInUp iq-ltr-direction">
                                  <h3 className="trending-text big-title text-uppercase texture-text mb-5">
                                    {t("sectionTitle.recommended_for_you")}
                                  </h3>
                                  <div className="position-relative swiper swiper-card streamit-block">
                                    <Swiper
                                      className="p-0 swiper-wrapper m-0 list-inline"
                                      slidesPerView="4"
                                      tag="ul"
                                      breakpoints={{
                                        320: { slidesPerView: 1 },
                                        550: { slidesPerView: 2 },
                                        991: { slidesPerView: 2 },
                                        1400: { slidesPerView: 3 },
                                        1500: { slidesPerView: 4 },
                                      }}
                                      modules={[Navigation, Pagination]}
                                      navigation={false}
                                      speed={1500}
                                      loop={true}
                                      pagination={{ el: ".swiper-pagination", clickable: true }}
                                    >
                                      {data.similar &&
                                        data.similar.map(
                                          (episodedata, index) => {
                                            // console.log(episodedata.episodeDetail);
                                            return (
                                              <SwiperSlide
                                                tag="li"
                                                key={index}
                                                className="swiper-slide"
                                              >
                                                <EpisodeCard
                                                  key={`episode-${index}`}
                                                  image={episodedata.image}
                                                  link={"/episodes"}
                                                  showEpisod={
                                                    episodedata.showEpisod
                                                  }
                                                  episodDate={
                                                    episodedata.episodDate
                                                  }
                                                  episodTime={
                                                    episodedata.episodTime
                                                  }
                                                  // episodTitle={
                                                  //   episodedata.episodTitle
                                                  // }
                                                  episodeTitlesText={
                                                    episodedata.episodTitle
                                                  }
                                                  episodeDetailText={
                                                    episodedata.episodeDetail
                                                  }
                                                />
                                              </SwiperSlide>
                                            );
                                          }
                                        )}
                                        <div className="swiper-pagination d-block d-lg-none"></div>
                                    </Swiper>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Row>
        </Container>
      </section>
       <FsLightbox toggler={toggler} sources={[video]} />
    </Fragment>
  );
});

Trending.displayName = "Trending";
export default Trending;
