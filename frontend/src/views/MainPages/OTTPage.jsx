import { memo, Fragment } from "react";
// hero slider
import OttHeroSlider from "../../components/slider/OttHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import OnlyOnStreamit from "../../components/sections/OnlyOnStreamit";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";
import PopularMovies from "../../components/sections/PopularMovies";
import TabSlider from "../../components/sections/TabSlider";
import RecommendedForYou from "../../components/sections/RecommendedForYou";
import TopPicsForYou from "../../components/sections/TopPicsForYou";
import GenreSlider from "../../components/sections/GenreSlider";

//static data
import { best_in_tv, ottVerticleLatestMovies } from "../../StaticData/data";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import { Container } from "react-bootstrap";

import { top_ten_movie, upcommingMovie , recommendedforYou} from "../../StaticData/data";
import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies";

const HomePage = memo(() => {
  return (
    <Fragment>
      <OttHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <ContinueWatching slidesPerView={6} />
          <TopTenMoviesToWatch data={top_ten_movie} title={"sectionTitle.top_10_movies_to_watch"} viewAll={false}/>
          <OnlyOnStreamit />
          <SpecialsLatestMovies list={best_in_tv} title = "sectionTitle.fresh_picks" loop={false}/>
          <UpcomingMovies data={upcommingMovie} title={"sectionTitle.upcoming_movies"}/>
        </div>
      </Container>
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <Container fluid>
        <div className="overflow-hidden">
          <YourFavouritePersonality  />
          <PopularMovies  />
        </div>
      </Container>
      <TabSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <GenreSlider />
          <RecommendedForYou data={recommendedforYou} />
          <TopPicsForYou />
        </div>
      </Container>
    </Fragment>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
