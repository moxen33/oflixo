import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
import Card_Style_Two from "../cards/CardStyleTwo";

const TVPopularShows = memo((props) => {
  const { t } = useTranslation();

  const data = props.data !== undefined && props.data !== null ? props.data : populerSlider
  const loop = props.loop !== undefined && props.loop !== null ? props.loop : true

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.tv_popular_shows")}
        list={data}
        className="recommended-block section-top-spacing"
        wrapperClass={true}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={loop}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <Card_Style_Two
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            slug={data.slug}
            lang={data.lang}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TVPopularShows.displayName = TVPopularShows;
export default TVPopularShows;
