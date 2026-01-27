import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { popular_videos } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const PopularVideos = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.popular_videos")}
        list={popular_videos}
        className="recommended-block section-top-spacing"
        wrapperClass={true}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        viewAll={props.viewAll}
        // loop={true}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
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

PopularVideos.displayName = "PopularVideos";
export default PopularVideos;
