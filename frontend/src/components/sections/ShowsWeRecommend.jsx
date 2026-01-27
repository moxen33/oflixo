import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { recommendedforYou } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ShowsWeRecommend = memo((props) => {
  const { t } = useTranslation();
const data = props.data !== undefined && props.data !== null ? props.data : recommendedforYou
const loop = props.loop !== undefined && props.loop !== null ? props.loop : true
  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.shows_recommend")}
        list={data}
        className="recommended-block streamit-block"
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={loop}
        slidesPerView={props.slides || 6}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
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

ShowsWeRecommend.displayName = "ShowsWeRecommend";
export default ShowsWeRecommend;
