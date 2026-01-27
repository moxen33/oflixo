import React, { Fragment, memo } from "react";

//react-bootstrap
import { Container } from "react-bootstrap";

//function
import {
  crew,
  detailpage_related_video,
  MovieDetail_recommendedforYou,
  upcoming_recommended_movies,
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
import poster_img from "/assets/images/media/chosfies.webp";

const DownloadMovie = memo(() => {
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
    poster: { poster_img },
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
    <>
      {/* <Fragment> */}
        <div className="poition-relative">
          <div className="iq-main-slider site-video position-relative">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
          <div className="movie-detail-part position-relative">
            <div className="trending-info pt-0 pb-0">
              <div className="details-parts">
                <Details_Part
                  title={"streamMovies.chosfies"}
                  subsribe_to_watch={true}
                  isplaylist={true}
                  isdownload={true}
                  year={2021}
                  time={"2hr : 6m"}
                  views={"1.4k"}
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
                slides={6}
                viewAll={false}
                slideMedium={3}
              />
            </div>
            <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
            <YourFavouritePersonality
              title={"sectionTitle.crew"}
              data={crew}
              slidePerView={11}
            />
            <MoviesRecommendedForYou
              data={upcoming_recommended_movies}
              title={"sectionTitle.recommended_movie"}
              viewAll={false}
              loop={false}
            />
            <MoviesRecommendedForYou
              data={detailpage_related_video}
              title={"sectionTitle.related_videos"}
              viewAll={false}
              loop={false}
            />
            <UpcomingMovies
              data={upcoming_related_video}
              viewAll={false}
              title="sectionTitle.upcoming"
              slideMedium={3}
              slides={6}
            />
            <section className="mb-5">
              <div className="show-episode">
                <Review_Details />
              </div>
            </section>
          </div>
        </Container>
        <FsLightbox
          maxYoutubeVideoDimensions={{ width: 1000, height: 600 }}
          exitFullscreenOnClose={true}
          sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
        />
      {/* </Fragment> */}
    </>
  );
});

DownloadMovie.displayName = "DownloadMovie";
export default DownloadMovie;