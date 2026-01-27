import React, { Fragment, memo } from "react";

//react-bootstrap
import { Row, Col, Container, Nav, Tab } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import ReviewComponent from "../../components/ReviewComponent";
import RatingStar from "../../components/rating-star";
import FsLightBox from "../../components/fslight-box";
import Sources from "../../components/Sources";
import VideoJS from "../../components/plugins/VideoJs";

//function
import { Episode_MoreLike, generateImgPath, tvshow_detail_episode, tvshow_detail_episode2, TVshowDetail_recommendedforYou } from "../../StaticData/data";

//utilites
import { useEnterExit } from "../../utilities/usePage";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";
import Details_Part from "../../components/details_part";
import SectionSlider from "../../components/slider/SectionSlider";
import EpisodeCard from "../../components/cards/EpisodeCard";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import Review_Details from "../../components/review_details";

const TvShowsDetail = memo(() => {
  const { t } = useTranslation();

  const playerRef = React.useRef(null);
  const themeSchemeDirection = useSelector(theme_scheme_direction);

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
    poster: "/assets/images/player/player-poster.webp",
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log("player is waiting");
      // console.log("hello");
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
      </div>
      <div className="details-part">
        <Container fluid >
          <Row>
            <Col lg="12">
              <div className="trending-info  pt-0 pb-0">
                <Row className="justify-content-between">
                  <Col sm="12" className="mb-auto">
                    <Details_Part isplaylist={true} isdownload={true} 
                      year={2025}
                      title={"Hidden Allies"}
                      time={"30m"}
                      views={"1.2k"}/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid>
              <div className="overflow-hidden">
                <div className="show-episode">
                  <div className="d-flex align-items-center justify-content-between px-1 mb-2 pb-1 mb-md-4 pb-md-2">
                <h5 className="main-title text-capitalize mb-0 fw-medium">{t("streamKeyword.episodes")}</h5>
            </div>
                <Tab.Container id="tvshow_episode_season" defaultActiveKey="season1">
                <Nav as="ul" variant="pills" className="custom-tab-slider episode-nav-btn gap-3 mb-4 pb-2" role="tablist">
                      <Nav.Item as="li">
                          <Nav.Link eventKey="season1" className="" 
                              aria-selected="true">
                              Season 1
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                          <Nav.Link eventKey="season2" >
                              Season 2
                          </Nav.Link>
                      </Nav.Item>
                  </Nav>
                <Tab.Content>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="season1">
                <SectionSlider
                  title={""}
                  list={tvshow_detail_episode}
                  className="recommended-block"
                  slidesPerView={5}
                  wrapperClass={true}
                  viewAll={false}
                  // slideMedium={props.slideMedium}
                  // paddingY={props.paddingY}
                  loop={true}
                  speed={1500}
                >
                  {(data) => (
                    <EpisodeCard
                      link={data.link}
                      image={data.image}
                      showEpisod={data.showEpisod}
                      episodDate={data.episodDate}
                      episodTime={data.episodTime}
                      episodTitle={data.episodTitle}
                      episodeTitlesText={data.episodeTitlesText}
                      episodeDetailText={data.episodeDetailText}
                    ></EpisodeCard>
                  )}
                </SectionSlider>
                  </Tab.Pane>
                  <Tab.Pane eventKey="season2">
                  <SectionSlider
                  title={""}
                  list={tvshow_detail_episode2}
                  className="recommended-block"
                  slidesPerView={5}
                  wrapperClass={true}
                  viewAll={false}
                  speed={1500}
                >
                  {(data) => (
                    <EpisodeCard
                      link={data.link}
                      image={data.image}
                      showEpisod={data.showEpisod}
                      episodDate={data.episodDate}
                      episodTime={data.episodTime}
                      episodTitle={data.episodTitle}
                      episodeTitlesText={data.episodeTitlesText}
                      episodeDetailText={data.episodeDetailText}
                    ></EpisodeCard>
                  )}
                </SectionSlider>
                  </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </div>
      
                <MoviesRecommendedForYou
                  title={"sectionTitle.more_like_this"}
                  data={Episode_MoreLike}
                  slides={6}
                  viewAll={false}
                  slideMedium={3}
                  loop={true}
                />
              </div>
              <div className="show-episode section-padding-bottom">
                <Review_Details />
              </div>
      </Container>

    </Fragment>
  );
});

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
