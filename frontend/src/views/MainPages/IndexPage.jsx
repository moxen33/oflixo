import { memo } from "react";

// hero slider
import HomeHeroSlider from "../../components/slider/HomeHeroSlider";

// sections
import ContinueWatching from "../../components/sections/ContinueWatching";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import LatestMovies from "../../components/sections/LatestMovies";
import VerticalSectionSlider from "../../components/slider/VerticalSectionSlider";
import TrendingSlider from "../../components/sections/Trending";
import SuggestedBlock from "../../components/sections/SuggestedBlock";
import RecommendedTVShow from "../../components/sections/RecommendedTVShow";
import ParallexSection from "../../components/sections/ParallexSection";

//static data
import {
  ottVerticleLatestMovies,
  latestMovie,
  best_in_tv, upcommingMovie , recommendedforYou
} from "../../StaticData/data";
import { Container } from "react-bootstrap";

import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies";

const HomePage = memo(() => {
  const showViewAllLink = true;
  return (
    <>
      <HomeHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <ContinueWatching slidesPerView={6} />
          <UpcomingMovies data={upcommingMovie} title={"sectionTitle.upcoming_movies"} viewAll={false}/>
          <SpecialsLatestMovies list={best_in_tv} title="sectionTitle.best_in_tv"/>
          <LatestMovies sliderData={latestMovie}  viewAll={false}/>
        </div>
      </Container>
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <Container fluid>
        <div className="overflow-hidden">
          <SuggestedBlock  />
        </div>
      </Container>

      <ParallexSection />

      <TrendingSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <RecommendedTVShow data={recommendedforYou} viewAll={false}/>
        </div>
      </Container>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
