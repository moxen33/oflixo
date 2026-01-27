import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//fslight-box
import FsLightbox from "fslightbox-react";

//hooks
import { useTranslation } from "react-i18next";

//components
import WishlistCard from "../components/cards/WishlistCard";
import { generateImgPath } from "../StaticData/data";
import { useEnterExit } from "../utilities/usePage";
import BreadCrumbWidget from "../components/BreadcrumbWidget";

const WatchlistDetail = memo(() => {
  const { t } = useTranslation();
  const [toggler, setToggler] = useState(false);
  const watchlistMovie = [
    {
      image: generateImgPath("/assets/images/media/gameofhero.webp"),
      moviename: "streamMovies.game_of_heros",
    },
    {
      image: generateImgPath("/assets/images/media/rabbit.webp"),
      moviename: "streamMovies.rabbit",
    },
    {
      image: generateImgPath("/assets/images/media/migration.webp"),
      moviename: "streamMovies.migration",
    },
    {
      image: generateImgPath("/assets/images/media/krishna.webp"),
      moviename: "streamMovies.krishna",
    },
    {
      image: generateImgPath("/assets/images/media/jumanjj.webp"),
      moviename: "streamMovies.jumanji",
    },
    {
      image: generateImgPath("/assets/images/media/yoshi.webp"),
      moviename: "streamMovies.yoshi",
    },
    {
      image: generateImgPath("/assets/images/media/kung-fu-panda.webp"),
      moviename: "streamMovies.kung_fu_panda",
    },
    {
      image: generateImgPath("/assets/images/media/the-hunter.webp"),
      moviename: "streamMovies.the_hunter",
    },
  ];

  const watchlistvideo = [
    {
      image: generateImgPath("/assets/images/media/toddler.webp"),
      moviename: "streamMovies.toddler",
    },
  ];

  const watchlist_TvShow = [
    {
      image: generateImgPath("/assets/images/media/the-first-of-us.webp"),
      moviename: "streamEpisode.episode11",
    },
    {
      image: generateImgPath("/assets/images/media/migration.webp"),
      moviename: "streamEpisode.episode7",
    },
    {
      image: generateImgPath("/assets/images/media/spiderman.webp"),
      moviename: "streamEpisode.episode39",
    },
    {
      image: generateImgPath("/assets/images/media/minions.webp"),
      moviename: "streamMovies.minions",
    },
    {
      image: generateImgPath("/assets/images/media/pirates-ofdayones-orignal.webp"),
      moviename: "streamEpisode.episode1",
    },
    {
      image: generateImgPath("/assets/images/media/assassins-creed.webp"),
      moviename: "streamEpisode.episode55",
    },
  ];

  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamButtons.watchlist")} />
      <section className="section-padding">
        <Container fluid>
          <Row>
            <div className="playlist-listing mt-4 mt-md-0">
              <Tab.Container defaultActiveKey="movie">
                <div className="border-bottom mb-5 watchlist-tab  watchlist-tab">
                  <div id="item-nav">
                    <div
                      className="item-list-tabs no-ajax css_prefix-tab-lists"
                      id="object-nav"
                    >
                      {/* Sidebar Nav */}
                      <Nav
                        className="nav-underline data-search-tab mb-0"
                        id="pills-tab"
                        role="tablist"
                      >
                        <Nav.Item>
                          <Nav.Link
                            eventKey="movie"
                            id="pills-movie-tab"
                            className="nav-link"
                            role="tab"
                            aria-controls="pills-movie"
                            aria-selected="true"
                          >
                            {t("streamPages.movie")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="video"
                            id="pills-video-tab"
                            className="nav-link"
                            role="tab"
                            aria-controls="pills-video"
                            aria-selected="false"
                          >
                            {t("streamPages.video")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="tvshow"
                            id="pills-tvshow-tab"
                            className="nav-link"
                            role="tab"
                            aria-controls="pills-tvshow"
                            aria-selected="false"
                          >
                            {t("streamPages.tv_show")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="episode"
                            id="pills-episode-tab"
                            className="nav-link"
                            role="tab"
                            aria-controls="pills-episode"
                            aria-selected="false"
                          >
                            {t("streamKeyword.episode")}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </div>
                {/* Tab Content */}
                <Tab.Content>
                  <Tab.Pane
                    eventKey="movie"
                    id="pills-movie"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pills-movie-tab"
                  >
                    {/* Movie tab content */}
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlistMovie.map((item, index) => {
                        return (
                          <Col key={index}>
                            <WishlistCard
                              image={item.image}
                              moviename={item.moviename}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="video"
                    id="pills-video"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pills-video-tab"
                  >
                    {/* Video tab content */}
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlistvideo.map((item, index) => {
                        return (
                          <Col key={index}>
                            <WishlistCard
                              image={item.image}
                              moviename={item.moviename}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="tvshow"
                    id="pills-tvshow"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pills-tvshow-tab"
                  >
                    {/* Tvshow tab content */}
                    <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                      {watchlist_TvShow.map((item, index) => {
                        return (
                          <Col key={index}>
                            <WishlistCard
                              image={item.image}
                              moviename={item.moviename}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane
                    eventKey="episode"
                    id="pills-episode"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="pills-episode-tab"
                  >
                    {/* Episode tab content */}
                    <p className="text-center w-100">
                      {t("streamPlaylist.no_watchlist_available")}
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Row>
        </Container>
      </section>
      <FsLightbox
        maxYoutubeVideoDimensions={{ width: 700, height: 400 }}
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources={[generateImgPath("/assets/images/video/trailer.mp4")]}
      />
    </Fragment>
  );
});

WatchlistDetail.displayName = "WatchlistDetail";
export default WatchlistDetail;
