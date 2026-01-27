import { Fragment, memo } from "react";

// hero slider
import MovieHeroSlider from "../../components/slider/MovieHeroSlider";

// section
import PopularMovies from "../../components/sections/PopularMovies";
import SpecialsLatestMovies from "../../components/sections/Specials&LatestMovies";
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import TopTenMoviesToWatch from "../../components/sections/TopTenMoviesToWatch";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import { Container } from "react-bootstrap";

import { top_ten_movie, upcommingMovie , recommendedforYou} from "../../StaticData/data";

const MoviesPage = memo(() => {
  return (
    <Fragment>
      <MovieHeroSlider />
      <Container fluid>
        <div className="overflow-hidden">
          <TopTenMoviesToWatch data={top_ten_movie} viewAll={false} title={"sectionTitle.top_10_movies_to_watch"}/>
          <PopularMovies showViewAllLink={false} />
          <UpcomingMovies viewAll={false} data={upcommingMovie} title={"sectionTitle.upcoming_movies"}/>
          <SpecialsLatestMovies />
          <MoviesRecommendedForYou slides="6" viewAll={false} data={recommendedforYou}/>
        </div>
      </Container>
    </Fragment>
  );
});

MoviesPage.displayName = "MoviesPage";
export default MoviesPage;
