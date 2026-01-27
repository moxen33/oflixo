import { Fragment, memo, useState } from "react";

//component
import SectionSlider from "../slider/SectionSlider";
import ContinueWatchCard from "../cards/ContinueWatchCard";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ContinueWatching = memo((props) => {
  const { t } = useTranslation();
  const [watching, setWatching] = useState([
    {
      image: generateImgPath("/assets/images/media/gameofhero.webp"),
      value: 50,
      leftTime: "70 m",
      watchMovieTitle: "streamMovies.game_of_heros", // store key, not translation
      watchMovieDate: "Jun-2025",
    },
    {
      image: generateImgPath("/assets/images/media/the-first-of-us.webp"),
      value: 30,
      leftTime: "120 m",
      watchMovieTitle: "streamMovies.the_first_of_us",
      watchMovieDate: "Jun-2025",
    },
    {
      image: generateImgPath("/assets/images/media/the-co-noueriing.webp"),
      value: 20,
      leftTime: "60 m",
      watchMovieTitle: "streamMovies.the_co_noueriing",
      watchMovieDate: "Nov-2024",
    },
    {
      image: generateImgPath("/assets/images/media/giirek.webp"),
      value: 45,
      leftTime: "60 m",
      watchMovieTitle: "streamMovies.giikre",
      watchMovieDate: "Dec-2024",
    },
    {
      image: generateImgPath("/assets/images/media/rabbit.webp"),
      value: 70,
      leftTime: "45 m",
      watchMovieTitle: "streamMovies.rabbit",
      watchMovieDate: "May-2025",
    },
    {
      image: generateImgPath("/assets/images/media/jumanjj.webp"),
      value: 80,
      leftTime: "70 m",
      watchMovieTitle: "streamMovies.jumanji",
      watchMovieDate: "March, 2025",
    },
    {
      image: generateImgPath("/assets/images/media/chosfies.webp"),
      value: 80,
      leftTime: "70 m",
      watchMovieTitle: "streamMovies.chosfies",
      watchMovieDate: "May, 2025",
    },
  ]);

  return (
    <Fragment>
      <SectionSlider
        title={t("sectionTitle.continue_watching")}
        list={watching}
        className="continue-watching-block section-padding-top"
        slidesPerView={props.slidesPerView}
        viewAll={false}
        wrapperClass={true}
        loop={true}
      >
        {(data) => (
          <ContinueWatchCard
            imagePath={data.image}
            progressValue={data.value}
            dataLeftTime={data.leftTime}
            watchMovieTitle={t(data.watchMovieTitle)} // translate here
            watchMovieDate={data.watchMovieDate}
            link="/movies-detail"
          />

        )}
      </SectionSlider>
    </Fragment>
  );
});

ContinueWatching.displayName = ContinueWatching;

export default ContinueWatching;
