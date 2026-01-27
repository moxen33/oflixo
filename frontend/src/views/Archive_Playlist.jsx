import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
  TabContent,
} from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";
import {
  Archive_playlist_episdoe,
  Archive_playlist_movies,
  Archive_playlist_video,
} from "../StaticData/data";
import ProfileDetailsCard from "../components/cards/ProfileDetailsCard";
import ChoicesJs from "../components/choice";
import BreadCrumbWidget from "../components/BreadcrumbWidget";

const Archive_Playlist = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { value: `${t("streamPages.movie")}`, label: `${t("streamPages.movie")}` },
    { value: `${t("streamPages.video")}`, label: `${t("streamPages.video")}` },
    {
      value: `${t("streamKeyword.episode")}`,
      label: `${t("streamKeyword.episode")}`,
    },
  ];
  return (
    <>
    <BreadCrumbWidget title={t("streamPages.playlist")} />
      <section className="section-padding">
        <Container fluid>
          <div className="play-lists">
            <Tab.Container defaultActiveKey="movie" transition={true}>
              <Row className="g-2 column-reverce align-items-center border-bottom playlist-bottom-margin">
                <Col xs={8} sm={9} lg={10}>
                  <div id="item-nav">
                    <div
                      className="item-list-tabs no-ajax css_prefix-tab-lists"
                      id="object-nav"
                    >
                      <Nav
                        as="ul"
                        className="nav nav-underline data-search-tab"
                        role="tablist"
                      >
                        <Nav.Item as="li" className="">
                          <Nav.Link
                            eventKey="movie"
                            className="nav-link fw-bold"
                          >
                            {t("streamPages.movie")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="">
                          <Nav.Link
                            eventKey="video"
                            className="nav-link fw-bold"
                          >
                            {t("streamPages.video")}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="">
                          <Nav.Link
                            eventKey="episode"
                            className="nav-link fw-bold"
                          >
                            {t("streamKeyword.episode")}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col xs={4} sm={3} lg={2}>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="link"
                      className="manage_playlist action-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#creatplaylistModal"
                      onClick={handleShow}
                    >
                      <span
                        className="h-100 w-100 d-block"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="{t('streamTooltip.playlist')}"
                      >
                        {t("streamButtons.add_playlist")}{" "}
                      </span>
                    </Button>

                    <Modal
                      className="fade view-more-data-modal edit-profile-modal"
                      id="creatplaylistModal"
                      tabIndex="-1"
                      aria-modal="true"
                      role="dialog"
                      centered
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header className="modal-header" closeButton>
                        <Modal.Title as="h5" id="createPlaylist">
                          {t("streamPlaylist.create_playlist")}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="pt-0">
                        <Form id="st_creat_playlist" action="#" method="post">
                          <input id="st_playlist_id" type="hidden" value="" />
                          <Form.Group className="form-group mb-4">
                            <Form.Label >
                              {t("streamPlaylist.playlist_title")}
                            </Form.Label>{" "}
                            <span className="text-danger">*</span>
                            <Form.Control
                              type="text"
                              id="st_playlist_title"
                              value=""
                            />
                          </Form.Group>
                          <Form.Group className="playlist-select mb-4 iq-custom-select">
                            <Form.Label >
                              {t("streamPlaylist.select_playlist_type")}
                            </Form.Label>{" "}
                            <span className="text-danger">*</span>
                            <ChoicesJs
                              options={options}
                              className="js-choice"
                              select="one"
                            />
                          </Form.Group>
                          <div className="iq-button">
                            <Button
                              variant="primary"
                              className="position-relative rounded-3"
                              data-bs-toggle="modal"
                              data-bs-target="#addNewPlaylist"
                              onClick={handleClose}
                            >
                              <span className="button-text">
                                {t("streamPlaylist.create_playlist")}
                              </span>
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Col>
              </Row>

              {/* <!-- Playlist Tab Content --> */}
              <TabContent id="pills-tabContent">
                <Tab.Pane
                  className="fade"
                  id="pills-movie"
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby="pills-movie-tab"
                  eventKey="movie"
                >
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                    {Archive_playlist_movies.map((data) => {
                      return (
                        <>
                          <div className="col">
                            <ProfileDetailsCard
                              image={data.image}
                              movieType={data.movieType}
                              movieCategory={data.movieCategory}
                            />
                          </div>
                        </>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane
                  className="tab-pane fade"
                  id="pills-tvshow"
                  role="tabpanel"
                  tabIndex="0"
                  eventKey="video"
                >
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                    {Archive_playlist_video.map((data) => {
                      return (
                        <>
                          <Col className="col">
                            <ProfileDetailsCard
                              image={data.image}
                              movieType={data.movieType}
                              movieCategory={data.movieCategory}
                            />
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane
                  className="fade"
                  id="pills-video"
                  role="tabpanel"
                  tabIndex="0"
                  aria-labelledby="pills-video-tab"
                  eventKey="episode"
                >
                  <Row className="gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                    {Archive_playlist_episdoe.map((data) => {
                      return (
                        <>
                          <Col className="col">
                            <ProfileDetailsCard
                              image={data.image}
                              movieType={data.movieType}
                              movieCategory={data.movieCategory}
                            />
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Archive_Playlist;
