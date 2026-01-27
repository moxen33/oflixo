import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const VideosRecommendedForYou = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.videos_recommended")}
        list={props.data}
        className="recommended-block streamit-block"
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        viewAll={props.viewAll}
        // loop={true}
        slidesPerView={props.slides || 6}
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

VideosRecommendedForYou.displayName = VideosRecommendedForYou;
export default VideosRecommendedForYou;
