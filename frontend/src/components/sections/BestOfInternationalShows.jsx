import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const BestOfInternationalShows = memo((props) => {
  const { t } = useTranslation();
  const data = props.data !== undefined && props.data !== null ? props.data : latestMovie
  const loop = props.loop !== undefined && props.loop !== null ? props.loop : true
 
  
  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.international_shows")}
        list={data}
        className="recommended-block section-top-spacing streamit-block"
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={loop}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            slug={data.slug}
            lang={data.lang}
            movieTime={data.movieTime}
            productPremium={data.productPremium}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

BestOfInternationalShows.displayName = "BestOfInternationalShows";
export default BestOfInternationalShows;
