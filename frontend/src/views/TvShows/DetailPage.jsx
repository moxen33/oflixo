import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container, Nav, Tab } from "react-bootstrap";

//function
import {
  crew,
  tvshow_detail_episode,
  tvshow_detail_episode2,
  TVshowDetail_recommendedforYou,
  upcoming_related_video,
} from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

import Review_Details from "../../components/review_details";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import VideoJS from "../../components/plugins/VideoJs";
import Details_Part from "../../components/details_part";
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";
//fslightbox
import FsLightbox from "fslightbox-react";
import EpisodeCard from "../../components/cards/EpisodeCard";
import SectionSlider from "../../components/slider/SectionSlider";


const TvShowsDetail = memo(() => {
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);

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
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part subsribe_to_watch={true} year={2021}
                title={"streamMovies.vikings"}
                time={"2hr : 6m"}
                views={"284"}
                imdbratting={7}
                language={"language.eng"}
                lenguagecountry={"UK"}
                redirectTo={"/episodes"}
              />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
          <div className="show-episode section-padding-top">
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
                <Tab.Pane eventKey="season1">
                  <SectionSlider
                    title={""}
                    list={tvshow_detail_episode}
                    className="recommended-block"
                    slidesPerView={5}
                    wrapperClass={true}
                    viewAll={false}
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
            title={"sectionTitle.recommended"}
            data={TVshowDetail_recommendedforYou}
            slides={6}
            viewAll={false}
            slideMedium={3}
          />
          <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
          <YourFavouritePersonality
            title={"sectionTitle.crew"}
            data={crew}
            slidePerView={11}
          />
          <UpcomingMovies
            data={upcoming_related_video}
            viewAll={false}
            title="sectionTitle.upcoming"
            slideMedium={3}
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
        sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
      />
    </Fragment>
  );
});

TvShowsDetail.displayName = "TvShowsDetail";
export default TvShowsDetail;
