import React, { Fragment, memo, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const RelatedMovies = memo((props) => {
  const { t } = useTranslation();
  const [RelatedMovies] = useState(props.data || sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title= {t(props.title) || t("sectionTitle.related_movies")}
        list={RelatedMovies}
        className="related-movie-block"
        slidesPerView={6}
        wrapperClass={true}
        viewAll={props.viewAll}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={true}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            lang={data.lang}
            slug={data.slug}
            productPremium={data.productPremium}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

RelatedMovies.displayName = "RelatedMovies";
export default RelatedMovies;
