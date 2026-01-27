import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyleTwo from "../cards/CardStyleTwo";

//static data
import { spacialLatestMovie } from "../../StaticData/data";
// the hook
import { useTranslation } from "react-i18next";

const SpecialsLatestMovies = memo((props) => {
  const { t } = useTranslation();
  const [title] = useState(t("sectionTitle.specials_latest_movies"));

  const list = props.list !== undefined && props.list !== null ? props.list : spacialLatestMovie
  const titles = props.title !== undefined && props.title !== null ? props.title : title
  const loops = props.loop !== undefined && props.loop !== null ? props.loop : true
  const slidesPerView = props.slidesPerView || 6
  return (
    <Fragment>
      <SectionSlider
        title={t(titles)}
        list={list}
        className="recommended-block streamit-block"
        paddingY={props.paddingY}
        loop={loops}
        slidesPerView={slidesPerView}
      >
        {(data) => (
          <CardStyleTwo
            image={data.image}
            title={data.title}
            lang={data.lang}
            slug={data.slug}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
            productPremium={data.productPremium}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

SpecialsLatestMovies.displayName = "SpecialsLatestMovies";
export default SpecialsLatestMovies;
