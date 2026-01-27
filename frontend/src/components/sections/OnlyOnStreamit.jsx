import { memo, Fragment, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//static data
import { sectionSliders } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const OnlyOnStreamit = memo(() => {
  const { t } = useTranslation();
  const [onlyonstreamit] = useState(sectionSliders);
  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.only_on_streamit")}
        list={onlyonstreamit}
        className="streamit-block"
        loop={true}
        paddingY="my-4"
        slidesPerView="6"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            slug={data.slug}
            movieTime={t(data.movieTime)}
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

OnlyOnStreamit.displayName = "OnlyOnStreamit";
export default OnlyOnStreamit;
