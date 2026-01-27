import React, { Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import GenersCard from "../cards/GanresCard";

//static data
import { geners } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const GenreSlider = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <SectionSlider
        className="movie-geners-block"
        title={t("streamGenres.genre")}
        list={geners}
        slidesPerView={6}
        link="/all-genres"
        loop={true}
        wrapperClass={true}
      >
        {(data) => (
          <GenersCard
            slug={data.slug}
            title={t(data.title)}
            image={data.thumbnail}
            type={data.type}
            url={"/view-all"}
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

GenreSlider.displayName = "GenreSlider";
export default GenreSlider;
