import React, { useState } from "react";
import { generateImgPath } from "../StaticData/data";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useEnterExit } from "../utilities/usePage";
import VideoJS from "./plugins/VideoJs";

// the hook
import { useTranslation } from "react-i18next";

const Playlist_Detail = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [Like, setLike] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    muted: true,
    loop: true,
    preload: "auto",
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: "https://www.youtube.com/watch?v=X8c8EXPfqkI",
        type: "video/youtube",
      },
    ],
    youtube: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 1,
    },
    fluid: true,
    poster: generateImgPath("/assets/images/media/gameofhero.webp"),
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log("player is waiting");
      // console.log("hello");
    });

    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });

  };

  return (
    <>
      <section className="section-padding ">
        <div className="playlist-detail-page">
          <Container fluid>
            <Row className="flex-row-reverse">
              <Col xxl="3" xl="4" lg="5">
                <Card className="border-0">
                  <Card.Header className="pb-3 mb-3 border-bottom d-flex align-items-center justify-content-between gap-1">
                    <Card.Title as="h5" className="m-0">
                      {t("streamPlaylist.playlist_movie_90s_throwback")}
                    </Card.Title>
                    <small>1/4 </small>
                  </Card.Header>

                  <Card.Body className="px-0 pt-0 pb-3">
                    <div className="playlist-data">
                      <div className="playlist-data-card active">
                        <div className="playlist-data-card-image">
                          <Link href="#">
                            <img
                              src={generateImgPath(
                                "/assets/images/media/gameofhero.webp"
                              )}
                              alt="Game of Heros"
                              className="img-fluid object-cover w-100 border-0"
                            />
                          </Link>
                        </div>
                        <div className="playlist-data-card-content">
                          <h6 className="mt-0 mb-2 line-count-2 playlist-data-title">
                            <Link to="#">{t("streamMovies.game_of_heros")}</Link>
                          </h6>
                          <ul className="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                            <li>
                              <i className="icon-eye-2 me-1"></i>1225{" "}
                              {t("streamKeyword.views")}
                            </li>
                            <li>2 {t("streamKeyword.month_age")} </li>
                          </ul>
                        </div>
                      </div>
                      <div className="playlist-data-card ">
                        <div className="playlist-data-card-image">
                          <Link to="#">
                            <img
                              src={generateImgPath(
                                "/assets/images/media/rabbit.webp"
                              )}
                              alt="Rabbit"
                              className="img-fluid object-cover w-100 border-0"
                            />
                          </Link>
                        </div>
                        <div className="playlist-data-card-content">
                          <h6 className="mt-0 mb-2 line-count-2 playlist-data-title">
                            <Link to="#">{t("streamMovies.rabbit")}</Link>
                          </h6>
                          <ul className="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                            <li>
                              <i className="icon-eye-2 me-1"></i>902{" "}
                              {t("streamKeyword.views")}
                            </li>
                            <li>11 {t("streamPlaylist.years_ago")} </li>
                          </ul>
                        </div>
                      </div>
                      <div className="playlist-data-card ">
                        <div className="playlist-data-card-image">
                          <Link to="#">
                            <img
                              src={generateImgPath(
                                "/assets/images/media/migration.webp"
                              )}
                              alt="Migration"
                              className="img-fluid object-cover w-100 border-0"
                            />
                          </Link>
                        </div>
                        <div className="playlist-data-card-content">
                          <h6 className="mt-0 mb-2 line-count-2 playlist-data-title">
                            <Link to="#">{t("streamMovies.migration")}</Link>
                          </h6>
                          <ul className="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                            <li>
                              <i className="icon-eye-2 me-1"></i>234{" "}
                              {t("streamKeyword.views")}
                            </li>
                            <li>11 {t("streamPlaylist.years_ago")} </li>
                          </ul>
                        </div>
                      </div>
                      <div className="playlist-data-card ">
                        <div className="playlist-data-card-image">
                          <Link to="#">
                            <img
                              src={generateImgPath(
                                "/assets/images/media/joker.webp"
                              )}
                              alt="joker"
                              className="img-fluid object-cover w-100 border-0"
                            />
                          </Link>
                        </div>
                        <div className="playlist-data-card-content">
                          <h6 className="mt-0 mb-2 line-count-2 playlist-data-title">
                            <Link to="#">{t("streamMovies.joker")}</Link>
                          </h6>
                          <ul className="playlist-category list-inline d-flex flex-wrap align-items-center m-0 p-0 column-gap-3 row-gap-1">
                            <li>
                              <i className="icon-eye-2 me-1"></i>181{" "}
                              {t("streamKeyword.views")}
                            </li>
                            <li>11 {t("streamPlaylist.years_ago")} </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xxl="9" xl="8" lg="7" className="mt-lg-0 mt-4">
                <div className="playlist-main-banner position-relative mb-3">
                  {/* <!-- Video.js Player --> */}
                  <VideoJS
                    options={videoJsOptions}
                    onReady={handlePlayerReady}
                  />
                </div>
                <div
                  id="streamit_player_container"
                  className="trending-info d-flex justify-content-between align-items-center gap-4"
                >
                  <Link to="/movie-detail">
                    <h4 className="my-2 fw-bold">
                      {t("streamMovies.game_of_heros")}
                    </h4>
                  </Link>
                  <ul className="actions-playlist list-inline my-2 p-0 d-flex gap-2 justify-content-md-end">
                    <li>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="like-tooltip">{Like ? t("streamTooltip.un-like") : t("streamTooltip.like")}</Tooltip>}
                      >
                        <Button
                          variant="secondary"
                          className="border action-btn"
                          id="like-toggle"
                          onClick={() => setLike(!Like)}
                        >
                          <span id="like-movies">
                            <span className="h-100 w-100 d-block">
                              <i
                                className={`${
                                  Like === true ? "ph-fill" : "ph"
                                } ph-heart heart-icon`}
                              ></i>
                            </span>
                          </span>
                        </Button>
                      </OverlayTrigger>
                    </li>
                    <li className="position-relative share-button dropend dropdown">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="share-tooltip">{t("streamTooltip.share")}</Tooltip>}
                      >
                        <Button
                          variant="secondary"
                          className="border action-btn"
                          onClick={handleShow}
                        >
                          <span className="h-100 w-100 d-block">
                            <i className="ph ph-share-network"></i>
                          </span>
                        </Button>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Modal
              className="fade view-more-data-modal"
              id="shareModal"
              show={show}
              onHide={handleClose}
              centered
            >
              <div className="modal-dialog-centered share-modal">
                <div className="modal-content">
                  <Modal.Header className=" pb-0" closeButton>
                    <Modal.Title as="h5" id="exampleModalLabelshare">
                      {t("streamSocial.share")}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="share-media-box">
                      <div className="media-box">
                        <Link to="https://www.facebook.com/" target="_blank">
                          <span className="image-icon">
                            <i className="icon-facebook-icon"></i>
                          </span>
                          <span className="titles">{t("streamSocial.facebook")}</span>
                        </Link>
                      </div>
                      <div className="media-box">
                        <Link to="https://twitter.com/" target="_blank">
                          <span className="image-icon">
                            <i className="icon-twitter-icon"></i>
                          </span>
                          <span className="titles text-center">{t("streamSocial.twitter")}</span>
                        </Link>
                      </div>
                      <div className="media-box">
                        <Link to="https://www.linkedin.com" target="_blank">
                          <span className="image-icon">
                            <i className="icon-instagram-icon"></i>
                          </span>
                          <span className="titles">{t("streamSocial.instagram")}</span>
                        </Link>
                      </div>
                      <div className="media-box">
                        <Link to="https://api.whatsapp.com" target="_blank">
                          <span className="image-icon">
                            <i className="icon-whatsapp-icon"></i>
                          </span>
                          <span className="titles">{t("streamSocial.Whatsapp")}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="copy-link">
                      <h6 id="basic-addon1">{t("streamButtons.copy_link")} </h6>
                      <div className="input-group mb-0">
                        <Form.Control
                          type="text"
                          id="copyInput"
                          className="copy-post-url"
                          placeholder="Username"
                          value="https://templates.iqonic.design/streamit-dist/frontend/react/"
                          aria-label="Username"
                          readOnly=""
                        />
                        <button
                          className="input-group-text copy-url-btn"
                          id="copyButton"
                        >
                          <i className="ph ph-copy-simple" id="copyIcon"></i>
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </div>
              </div>
            </Modal>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Playlist_Detail;
