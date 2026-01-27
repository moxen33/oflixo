import { Fragment } from "react";

//hero-slider
import TvShowHeroSlider from "../../components/slider/TvShowHeroSlider";

//sections
import TVPopularShows from "../../components/sections/TVPopularShows";
import BestOfInternationalShows from "../../components/sections/BestOfInternationalShows";
import ShowsWeRecommend from "../../components/sections/ShowsWeRecommend";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import { Container } from "react-bootstrap";


import { top_ten_tvshow, upcoming_related_video, TVshowDetail_recommendedforYou, TvShow_Best_Of_International, popular_tv_show} from "../../StaticData/data";

const TvShowsPage = () => {
  return (
    <Fragment>
      <TvShowHeroSlider />
      <Container fluid>
      <div className="overflow-hidden">
      <TopTenMoviesToWatch data={top_ten_tvshow} viewAll={false} title={"sectionTitle.top_10_tvshow_to_watch"}/>
      <TVPopularShows slideMedium={3}  data={popular_tv_show} loop={false}/>
       <UpcomingMovies  data={upcoming_related_video} title={"sectionTitle.tv_upcoming_title"}/>
      <BestOfInternationalShows loop={false} slideMedium={3}  data={TvShow_Best_Of_International}/>
      <ShowsWeRecommend slideMedium={3}  data={TVshowDetail_recommendedforYou} loop={false}/>
      </div>
      </Container>
    </Fragment>
  );
};

TvShowsPage.DisplayName = TvShowsPage;
export default TvShowsPage;
