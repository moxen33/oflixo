import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";
import { Fragment, memo, useState } from "react";
import { recommendedforYou } from "../../StaticData/data";
// the hook
import { useTranslation } from "react-i18next";

const RecommendedForYou = memo((props) => {
  const { t } = useTranslation();
const recommended = t(props.title) || t("sectionTitle.recommended_for_you")
  return (
    <Fragment>
      <SectionSlider
        title={recommended}
        list={recommendedforYou}
        className="recommended-block streamit-block"
        slidesPerView="6"
        // loop={true}
        paddingY={props.paddingY}
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

RecommendedForYou.displayName = "RecommendedForYou";
export default RecommendedForYou;
