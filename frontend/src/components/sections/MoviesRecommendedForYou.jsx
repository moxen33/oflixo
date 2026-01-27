import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const MoviesRecommendedForYou = memo((props) => {
  const { t } = useTranslation();

  const recommended = t(props.title) || t("sectionTitle.movies_recommended")
  const data = props.data || recommendedforYou
  const loops = props.loop !== undefined  ? false : true
  // console.log(loops)

  return (
    <Fragment>
      <SectionSlider
        title={recommended}
        list={data}
        className="recommended-block"
        slidesPerView={props.slides || 6}
        wrapperClass={true}
        viewAll={props.viewAll}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        // loop={loops}
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

MoviesRecommendedForYou.displayName = "MoviesRecommendedForYou";
export default MoviesRecommendedForYou;
