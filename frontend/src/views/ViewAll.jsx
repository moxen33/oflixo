import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

//components
import CardStyle from "../components/cards/CardStyle";
import BreadCrumbWidget from "../components/BreadcrumbWidget";

//function
import { generateImgPath } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const ViewAll = memo(() => {
  const { t } = useTranslation();
    const [newData , setNewdata] = useState(10)
  const viewAll = [
    {
      image: generateImgPath("/assets/images/media/the-first-of-us-portrait.webp"),
      title: "streamMovies.the_first_of_us",
      movieTime: "2:59",
      lang:"language.eng"
    },
     {
      image: generateImgPath("/assets/images/media/gameofhero-portrait.webp"),
      title: "streamMovies.game_of_heros",
      movieTime: "2:30",
      lang:"language.eng"
    },
     {
      image: generateImgPath("/assets/images/media/venom-portrait.webp"),
      title: "streamMovies.venom",
      movieTime: "2:03",
      lang:"language.eng"
    },
     {
      image: generateImgPath("/assets/images/media/rabbit-portrait.webp"),
      title: "streamMovies.rabbit",
      movieTime: "2:30",
      lang:"language.eng"
    },
     {
      image: generateImgPath("/assets/images/media/migration-portrait.webp"),
      title: "streamMovies.migration",
      movieTime: "2:04",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/krishna-portrait.webp"),
      title: "streamMovies.krishna",
      movieTime: "2:45",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/kali-portrait.webp"),
      title: "streamMovies.kali",
      movieTime: "0:00",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/joker-portrait.webp"),
      title: "streamMovies.joker",
      movieTime: "2:45",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/deadpool-portrait.webp"),
      title: "streamMovies.deadpool",
      movieTime: "2:14",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/any-name-portrait.webp"),
      title: "streamMovies.any_name",
      movieTime: "2:20",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/batter-caill-portrait.webp"),
      title: "streamMovies.better_call_saul",
      movieTime: "2:30",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/jumanji-portrait.webp"),
      title: "streamMovies.jumanji",
      movieTime: "2:03",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/yoshi-portrait.webp"),
      title: "streamMovies.yoshi",
      movieTime: "2:15",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/the-co-noueriing-portrait.webp"),
      title: "streamMovies.the_co_noueriing",
      movieTime: "2:07",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/giirek-portrait.webp"),
      title: "streamMovies.giikre",
      movieTime: "2hr: 12mins",
      lang:"language.eng"
    },
     {
      image: generateImgPath("/assets/images/media/another-danger-portrait.webp"),
      title: "streamMovies.another_danger",
      movieTime: "2:15",
      lang:"language.eng",
      productPremium:"true"
    },
    {
      image: generateImgPath("/assets/images/media/te-oaler-portrait.webp"),
      title: "streamMovies.tf_oaler",
      movieTime: "2:09",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/kung-fu-panda-portrait.webp"),
      title: "streamMovies.kung_fu_panda",
      movieTime: "2:30",
      lang:"language.eng",
      productPremium:"true"
    },
    {
      image: generateImgPath("/assets/images/media/john-wick-portrait.webp"),
      title: "streamMovies.john_wick",
      movieTime: "1:44",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/revenge-of-the-sith-portrait.webp"),
      title: "streamMovies.revenge_of_sith",
      movieTime: "1hr: 45mins",
      lang:"language.eng"
    },
            {
      image: generateImgPath("/assets/images/media/spiderman-portrait.webp"),
      title: "streamMovies.spiderman",
      movieTime: "2:30",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/war-for-the-planet-portrait.webp"),
      title: "streamMovies.war_for_the_planet",
      movieTime: "2:25",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/fast-furious-portrait.webp"),
      title: "streamMovies.fast_&_furious",
      movieTime: "2:09",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/dinoosaur-portrait.webp"),
      title: "streamMovies.dinoosaur",
      movieTime: "2:17",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/chosfies-portrait.webp"),
      title: "streamMovies.chosfies",
      movieTime: "2:16",
      lang:"language.eng"
    },  
    {
      image: generateImgPath("/assets/images/media/bumblebee-portrait.webp"),
      title: "streamMovies.bumblebee",
      movieTime: "2:06",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/batter-caill-portrait.webp"),
      title: "streamMovies.better_call_saul",
      movieTime: "2:06",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/arrival-portrait.webp"),
      title: "streamMovies.arrival",
      movieTime: "2:15",
      lang:"language.eng"
    },
    {
      image: generateImgPath("/assets/images/media/the-hunter-portrait.webp"),
      title: "streamMovies.the_hunter",
      movieTime: "2:30",
      lang:"language.eng"
    },
  ];
  return (
    <Fragment>
      <BreadCrumbWidget title={t("sectionTitle.view_all")} />
      <div className="section-padding view-all-movies">
        <Container fluid>
          <div className="card-style-grid">
            <Row className="row-cols-xl-5 row-cols-md-2 row-cols-1">
              {viewAll.slice(0 , newData).map((item, index) => (
                <Col key={index} className="mb-4">
                  <CardStyle
                    image={item.image}
                    title={t(item.title)}
                    movieTime={item.movieTime}
                    watchlistLink="/playlist"
                    link="/movies-detail"
                    lang={t(item.lang)}
                    productPremium={item.productPremium}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <div className="text-center mt-4">
          <Button variant="primary" className="position-relative load-more-btn text-capitalize" onClick={() => setNewdata((prev) => prev + 19)}>
            <span className="button-text">{t("streamButtons.load_more")}</span>
          </Button>
      </div>
        </Container>
      </div>
    </Fragment>
  );
});

ViewAll.displayName = "ViewAll";
export default ViewAll;
