import { Fragment, memo, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../../components/cards/CardStyle";

//data
import { upcomingVideo } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const UpcomingMovies = memo((props) => {
  const { t } = useTranslation();
  const [upcommingMovie2] = useState(upcomingVideo);

  const upcoming = t(props.title) || t("sectionTitle.upcoming_video")

  return (
    <Fragment>
      <SectionSlider
        title={upcoming}
        list={props.data}
        className="upcomimg-block streamit-block"
        slidesPerView={props.slides || 6}
        viewAll={props.viewAll}
        slideMedium={props.slideMedium}
        paddingY={props.paddingY}
        loop={false}
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={t(data.title)}
            movieTime={data.movieTime}
            lang={data.lang}
            slug={data.slug}
            productPremium={data.productPremium}
            conturyname={data.conturyname}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

upcomingVideo.DisplayName = upcomingVideo;
export default UpcomingMovies;
