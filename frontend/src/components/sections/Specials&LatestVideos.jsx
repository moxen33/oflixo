import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { latestMovie } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const SpecialsLatestVideos = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.specials_latest_videos")}
        list={props.data}
        className="latest-block streamit-block"
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={true}
        viewAll={props.viewAll}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <CardStyle
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

SpecialsLatestVideos.displayName = "SpecialsLatestVideos";
export default SpecialsLatestVideos;
