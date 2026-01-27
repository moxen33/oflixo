import { useState, Fragment, memo } from "react";

//componets
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const PopularMovies = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.popular_movies")}
        list={populerSlider}
        className="popular-movies-block streamit-block"
        // loop={true}
        paddingY={props.paddingY}
        viewAll={props.showViewAllLink}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            slug={data.slug}
            lang={data.lang}
            productPremium={data.productPremium}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

PopularMovies.displayName = "PopularMovies";
export default PopularMovies;
