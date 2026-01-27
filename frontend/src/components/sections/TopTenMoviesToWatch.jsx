import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import TopTenCard from "../../components/cards/TopTenCard";
// the hook
import { useTranslation } from "react-i18next";

const TopTenMoviesToWatch = memo((props) => {
  const { t } = useTranslation();

  const titles  = props.title || "sectionTitle.Top 10 Movies to Watch"
  return (
    <Fragment>
      <div className="overflow-hideen">
      <SectionSlider
        title={t(titles)}
        list={props.data}
        className="top-ten-block"
        wrapperClass={true}
        cardClass={false}
        viewAll={props.viewAll}
        swiperclassName="iq-top-ten-block-slider"
        // wrapperClass={tr}
        // loop={true}\
        slidesPerView="6"
      >
        {(data) => (
          <TopTenCard
            imagePath={data.image}
            countValue={data.count}
            link={data.link ? data.link : "/movies-detail"} // <-- JS expression
          />
        )}
      </SectionSlider>
      </div>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
