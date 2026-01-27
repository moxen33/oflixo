import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { suggested } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const SuggestedBlock = memo((props) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.suggested_block")}
        list={suggested}
        className="suggested-block streamit-block"
        slidesPerView="6"
        paddingY={props.paddingY}
        // loop={true}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            productPremium={data.productPremium}
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

SuggestedBlock.DisplayName = "SuggestedBlock";
export default SuggestedBlock;
