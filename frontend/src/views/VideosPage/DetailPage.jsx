import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Container} from "react-bootstrap";


//components
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import VideoJS from "../../components/plugins/VideoJs";

//function
import {  VideoDetail_Upcoming } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

//fslightbox
import FsLightbox from "fslightbox-react";


// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";
import Review_Details from "../../components/review_details";
import Details_Part from "../../components/details_part";

const VideoDetail = memo(() => {
  const [toggler, setToggler] = useState(false);
  const handleToggle = () => {
    setToggler(!toggler);
  };
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
        src: "https://www.youtube.com/watch?v=eq_aKPXuOTg",
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
    poster: "/assets/images/images/media/minions.webp",
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
    });

    player.on("dispose", () => {
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
              <Details_Part title={"streamMovies.minions"} subsribe_to_watch={true} isplaylist={true} isdownload={true} year="Feb 2017" views={84} time="50mins" language="language.eng" lenguagecountry="New Zealand" />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
    
          <div className="section-padding-top">
          <UpcomingMovies
            data={VideoDetail_Upcoming}
            viewAll={false}
            title="sectionTitle.upcoming"
            slideMedium={3}
            slides={6}
          />
          </div>
          <section className="mb-5">
          <div className="show-episode ">
            <Review_Details />
          </div>
          </section>
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

VideoDetail.displayName = "VideoDetail";
export default VideoDetail;