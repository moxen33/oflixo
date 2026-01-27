import { Fragment } from "react";

//hero-slider
import VideoHeroSlider from "../../components/slider/VideoHeroSlider";

//sections
import PopularVideos from "../../components/sections/PopularVideos";
import SpecialsLatestVideos from "../../components/sections/Specials&LatestVideos";
import VideosRecommendedForYou from "../../components/sections/VideosRecommendedForYou";
import { Container } from "react-bootstrap";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import UpcomingMovies from "../../components/sections/UpcomingMovies";


//data
import { top_ten_video, upcomingVideo , video_recommendedforYou , latestVideo} from "../../StaticData/data";

const VideosPage = () => {
  return (
    <Fragment>
      <VideoHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <TopTenMoviesToWatch data={top_ten_video} viewAll={false} title={"sectionTitle.top_10_video_to_watch"} />
          <PopularVideos slideMedium={3} viewAll={false}/>
          <UpcomingMovies viewAll={false} data={upcomingVideo} loop={false}/>
          <SpecialsLatestVideos slideMedium={3} data={latestVideo} viewAll={false}/>
          <VideosRecommendedForYou slideMedium={3} data={video_recommendedforYou} viewAll={false}/>
        </div>
      </Container>
    </Fragment>
  );
};

VideosPage.DisplayName = VideosPage;
export default VideosPage;
