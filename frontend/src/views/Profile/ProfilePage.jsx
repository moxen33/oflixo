import React, { useState } from "react";
import {
  generateImgPath,
  ProfilePage_Notificationread,
  ProfilePage_NotificationUnread,
  ProfilePage_WatchlistMovie,
  ProfilePage_WatchlistTvShow,
  ProfilePage_WatchlistVideo,
  ProfilPage_PlaylistEpisode,
  ProfilPage_PlaylistMovie,
  ProfilPage_PlaylistVideo,
} from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  OverlayTrigger,
  Row,
  Tab,
  TabContent,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ChoicesJs from "../../components/choice";
import ProfileDetailsCard from "../../components/cards/ProfileDetailsCard";
import WishlistCard from "../../components/cards/WishlistCard";
import NotificationItem_Card from "../../components/cards/NotificationItemCard";

const ProfilePage = () => {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [newData, setNewdata] = useState(5);

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
      <section className="section-padding profile-section-padding">
        <Container fluid>
          {/* <!-- user profile start --> */}
          <div className="px-sm-5 px-3 py-4 rounded-3 profile-user-info">
            <Row className="align-items-center">
              <Col sm={6}>
                <div className="d-flex align-items-center gap-3">
                  <div className="profile-image flex-shrink-0">
                    <img
                      src={generateImgPath("/assets/images/user/user6.jpg")}
                      alt="Marvin McKinney"
                      className="user-image user-profile-image"
                    />
                  </div>
                  <div className="profile-info">
                    <h5 className="mt-0 info-title">
                      {t("streamShop.greeting_name")}
                    </h5>
                    <p className="mb-1 mt-0">marvin@demo.com</p>
                    <p className="m-0">{t("streamProfile.marvin")}</p>
                  </div>
                </div>
              </Col>
              <Col sm={6} className="mt-sm-0 mt-3">
                <div className="d-flex align-items-center justify-content-sm-end gap-3">
                  <Button
                    variant="primary"
                    className="btn-sm custom-btn-sm btn-primary text-nowrap fw-semibold"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-profile-modal"
                    onClick={handleShow}
                  >
                    <i className="icon-edit-icon"></i> {t("streamButtons.editprofile")}{" "}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="playlist">
            <Row className="mt-5">
              <Col xl="2" lg="3">
                <Nav
                  variant="tabs"
                  as="ul"
                  className="profile-page-list list-inline p-0 mx-0 nav-tabs flex-column"
                >
                  <Nav.Item as="li" className="profile-page-list-item">
                    <Nav.Link
                      eventKey="playlist"
                      className="profile-page-list-link"
                    >
                      {t("streamPages.playlist")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="profile-page-list-item">
                    <Nav.Link
                      eventKey="watchlist"
                      className="profile-page-list-link"
                    >
                      {t("streamAccount.watch_list")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="profile-page-list-item">
                    <Nav.Link
                      eventKey="notification"
                      className="profile-page-list-link"
                    >
                      {t("streamAccount.notification")}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="profile-page-list-item">
                    <Nav.Link
                      eventKey="membership"
                      className="profile-page-list-link"
                    >
                      Membership
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col xl="10" lg="9" className="mt-5 mt-lg-0">
                <TabContent className="tab-content" id="profile-menu-content">
                  <Tab.Pane
                    className="fade"
                    id="playlist-tab"
                    role="tabpanel"
                    eventKey="playlist"
                  >
                    <div className="play-lists">
                      <Tab.Container defaultActiveKey="movie">
                        <div className="row gy-3 column-reverce align-items-center border-bottom playlist-bottom-margin">
                          <Col xs={8} sm={9} lg={10}>
                            <div id="item-nav">
                              <div
                                className="item-list-tabs no-ajax css_prefix-tab-lists"
                                id="object-nav"
                              >
                                <Nav
                                  variant="underline"
                                  className="nav data-search-tab"
                                  id="pills-tab"
                                  role="tablist"
                                >
                                  <Nav.Item
                                    className="nav-item"
                                    role="presentation"
                                  >
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
                                  <Nav.Item
                                    className="nav-item"
                                    role="presentation"
                                  >
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
                                  <Nav.Item
                                    className="nav-item"
                                    role="presentation"
                                  >
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
                          </Col>

                          <Col xs={4} sm={3} lg={2}>
                            <div className="d-flex justify-content-md-end mb-md-0 mb-1">
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip id="tooltip-playlist">
                                    {t("streamTooltip.playlist")}
                                  </Tooltip>
                                }
                              >
                                <Button
                                  variant="link"
                                  className="manage_playlist btn btn-link"
                                  onClick={handleShow1} // replace modal trigger with state-based handler
                                >
                                  <span className="h-100 w-100 d-block">
                                    {t("streamButtons.add_playlist")}
                                  </span>
                                </Button>
                              </OverlayTrigger>

                              <Modal
                                className="fade view-more-data-modal edit-profile-modal"
                                id="creatplaylistModal"
                                show={show1}
                                onHide={handleClose1}
                                centered
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title
                                    as="h5"
                                    className="modal-title"
                                    id="exampleModalLabelplaylist"
                                  >
                                    {t("streamPlaylist.create_playlist")}
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="pt-0">
                                  <Form id="st_creat_playlist">
                                    <input
                                      id="st_playlist_id"
                                      type="hidden"
                                      value=""
                                    />
                                    <Form.Group className="form-group mb-4">
                                      <Form.Label>{t("streamPlaylist.playlist_title")}</Form.Label>{" "}
                                      <span className="text-danger">*</span>
                                      <Form.Control
                                        type="text"
                                        id="st_playlist_title"
                                        value=""
                                      />
                                    </Form.Group>
                                    <Form.Group className="form-group playlist-select mb-4 iq-custom-select">
                                      <Form.Label>
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
                                        type="button"
                                        className="text-capitalize position-relative rounded-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addNewPlaylist"
                                        onClick={handleClose1}
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
                        </div>

                        {/* <!-- Playlist Tab Content --> */}
                        <TabContent id="pills-tabContent">
                          <Tab.Pane
                            className=""
                            id="pills-movie"
                            eventKey="movie"
                          >
                            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilPage_PlaylistMovie.slice(0, newData).map(
                                (data, index) => (
                                  <Col key={index}>
                                    <ProfileDetailsCard
                                      image={data.image}
                                      movieType={data.movieType}
                                      movieCategory={data.movieCategory}
                                    />
                                  </Col>
                                )
                              )}
                            </div>
                            <div className="text-center mt-4">
                              <div className="iq-button">
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary text-capitalize position-relative load-more-btn rounded-3"
                                  onClick={() => setNewdata((prev) => prev + 2)}
                                >
                                  <span className="button-text">
                                    {t("streamButtons.load_more")}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane
                            className="fade"
                            id="pills-tvshow"
                            role="tabpanel"
                            tabIndex="0"
                            eventKey="video"
                          >
                            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilPage_PlaylistVideo.slice(0, newData).map(
                                (data, index) => (
                                  <Col key={index}>
                                    <ProfileDetailsCard
                                      image={data.image}
                                      movieType={data.movieType}
                                      movieCategory={data.movieCategory}
                                    />
                                  </Col>
                                )
                              )}
                            </div>
                          </Tab.Pane>

                          <Tab.Pane
                            className="fade"
                            id="pills-video"
                            role="tabpanel"
                            tabIndex="0"
                            aria-labelledby="pills-video-tab"
                            eventKey="episode"
                          >
                            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilPage_PlaylistEpisode.slice(0, newData).map(
                                (data, index) => (
                                  <Col key={index}>
                                    <ProfileDetailsCard
                                      image={data.image}
                                      movieType={data.movieType}
                                      movieCategory={data.movieCategory}
                                    />
                                  </Col>
                                )
                              )}
                            </div>
                          </Tab.Pane>
                        </TabContent>
                      </Tab.Container>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    className="fade"
                    eventKey="watchlist"
                    id="watchlist-tab"
                    role="tabpanel"
                  >
                    <Tab.Container defaultActiveKey="watchlist_movie">
                      <div className="col-md-12">
                        <div className="border-bottom mb-5 watchlist-tab">
                          <div id="item-nav">
                            <div
                              className="item-list-tabs no-ajax css_prefix-tab-lists"
                              id="object-nav"
                            >
                              <Nav
                                variant="underline"
                                className="nav data-search-tab"
                                id="pills-tab"
                                role="tablist"
                              >
                                <Nav.Item
                                  className="nav-item"
                                  role="presentation"
                                >
                                  <Nav.Link
                                    eventKey="watchlist_movie"
                                    id="pills-movie-tab"
                                    className="nav-link"
                                    role="tab"
                                    aria-controls="pills-movie"
                                    aria-selected="true"
                                  >
                                    {t("streamPages.movie")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item
                                  className="nav-item"
                                  role="presentation"
                                >
                                  <Nav.Link
                                    eventKey="watchlist_video"
                                    id="pills-video-tab"
                                    className="nav-link"
                                    role="tab"
                                    aria-controls="pills-video"
                                    aria-selected="false"
                                  >
                                    {t("streamPages.video")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item
                                  className="nav-item"
                                  role="presentation"
                                >
                                  <Nav.Link
                                    eventKey="watchlist_tvShow"
                                    id="pills-video-tab"
                                    className="nav-link"
                                    role="tab"
                                    aria-controls="pills-tvShow"
                                    aria-selected="false"
                                  >
                                    {t("streamPages.tv_show")}
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item
                                  className="nav-item"
                                  role="presentation"
                                >
                                  <Nav.Link
                                    eventKey="watchlist_episode"
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
                        {/* // <!-- Playlist Tab Content --> */}
                        <TabContent
                          className="tab-content"
                          id="pills-tabContent-watch"
                        >
                          <Tab.Pane
                            className="tab-pane fade "
                            id="pills-movie1"
                            role="tabpanel"
                            eventKey="watchlist_movie"
                          >
                            <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilePage_WatchlistMovie.map((data, index) => (
                                <Col key={index}>
                                  <WishlistCard
                                    image={data.image}
                                    moviename={data.movieName}
                                  ></WishlistCard>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>

                          <Tab.Pane
                            className="tab-pane fade"
                            id="pills-video1"
                            role="tabpanel"
                            tabIndex="0"
                            aria-labelledby="pills-video-tab"
                            eventKey="watchlist_video"
                          >
                            <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilePage_WatchlistVideo.map((data, index) => (
                                <Col key={index}>
                                  <WishlistCard
                                    image={data.image}
                                    moviename={data.movieName}
                                  ></WishlistCard>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>

                          <Tab.Pane
                            className="tab-pane fade"
                            id="pills-tvshow1"
                            eventKey="watchlist_tvShow"
                          >
                            <Row className="gy-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 data-listing">
                              {ProfilePage_WatchlistTvShow.map((data, index) => (
                                <Col key={index}>
                                  <WishlistCard
                                    image={data.image}
                                    moviename={data.movieName}
                                  ></WishlistCard>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>

                          <Tab.Pane
                            className="tab-pane fade"
                            id="pills-episode1"
                            eventKey="watchlist_episode"
                          >
                            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ">
                              <p className="text-center w-100">
                                {t("streamPlaylist.no_watchlist_available")}
                              </p>
                            </div>
                          </Tab.Pane>
                        </TabContent>
                      </div>
                    </Tab.Container>
                  </Tab.Pane>

                  {/* ----------------------------------- */}
                  <Tab.Pane
                    className=" fade"
                    id="notification-tab"
                    role="tabpanel"
                    eventKey="notification"
                  >
                    <Tab.Container defaultActiveKey="unread">
                      <div className="d-flex align-items-center gap-3 justify-content-between flex-sm-row flex-column-reverse border-bottom mb-5">
                        <div id="item-nav1">
                          <div
                            className="item-list-tabs no-ajax css_prefix-tab-lists"
                            id="object-nav1"
                          >
                            <Nav
                              variant="underline"
                              className="nav nav-underline data-search-tab"
                              id="notification-tab1"
                              role="tablist"
                            >
                              <Nav.Item
                                className="nav-item"
                                role="presentation"
                              >
                                <Nav.Link
                                  eventKey="unread"
                                  id="unread-tab"
                                  className="nav-link"
                                  role="tab"
                                  aria-controls="unread"
                                  aria-selected="true"
                                >
                                  {t("streamKeyword.unread")}
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item
                                className="nav-item"
                                role="presentation"
                              >
                                <Nav.Link
                                  eventKey="read"
                                  id="read-tab"
                                  className="nav-link"
                                  role="tab"
                                  aria-controls="read"
                                  aria-selected="false"
                                >
                                  {t("streamKeyword.read")}
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                        </div>
                      </div>
                      <TabContent id="notification-tabContent">
                        {/* <!-- Unread Notifications Tab --> */}
                        <Tab.Pane
                          className="fade"
                          id="unread"
                          eventKey="unread"
                        >
                          <ul className="notification-list m-0 p-0">
                            {ProfilePage_NotificationUnread.map(
                              (data, index) => {
                                // Handle both string and array formats
                                const translatedTitle = Array.isArray(
                                  data.title
                                )
                                  ? data.title.map((key) => t(key)).join(" ")
                                  : t(data.title);

                                const translatedDays = t(data.days);

                                return (
                                  <li key={index}>
                                    <NotificationItem_Card
                                      image={data.image}
                                      title={translatedTitle}
                                      days={translatedDays}
                                    />
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </Tab.Pane>

                        {/* <!-- Read Notifications Tab --> */}
                        <Tab.Pane
                          className="tab-pane fade"
                          id="read"
                          eventKey="read"
                        >
                          <Form>
                            <ul className="notification-list m-0 p-0">
                              {ProfilePage_Notificationread.map(
                                (data, index) => {
                                  // Handle both string and array formats
                                  const translatedTitle = Array.isArray(
                                    data.title
                                  )
                                    ? data.title.map((key) => t(key)).join(" ")
                                    : t(data.title);

                                  const translatedDays = t(data.days);

                                  return (
                                    <li key={index}>
                                      <NotificationItem_Card
                                        image={data.image}
                                        title={translatedTitle}
                                        days={translatedDays}
                                      />
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </Form>
                        </Tab.Pane>
                      </TabContent>
                    </Tab.Container>
                  </Tab.Pane>
                  <Tab.Pane
                    className="fade"
                    eventKey="membership"
                    id="membership-tab"
                    role="tabpanel"
                  >
                    <div className="pmpro">
                      <p className="error-message">
                        {t("streamPlaylist.no_active_membership")}
                      </p>
                      <section className="st-pmp-section mt-5">
                        <h4 className="pmpro_section_title">{t("streamShop.order_history")}</h4>
                        <div className="pmpro_card">
                          <table className="pmpro_table pmpro_table_orders">
                            <thead>
                              <tr>
                                <th className="st-pmp-table-order">{t("streamKeyword.date")}</th>
                                <th className="st-pmp-table-order">{t("streamKeyword.level")}</th>
                                <th className="st-pmp-table-order">{t("streamKeyword.total")}</th>
                                <th className="st-pmp-table-order">{t("streamKeyword.status")}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr id="pmpro_table_order-51311C6265">
                                <th
                                  className="pmpro_table_order-date"
                                  data-title="Date"
                                >
                                  <Link to="/membership-invoice">
                                    February 18, 2025{" "}
                                  </Link>
                                </th>
                                <td
                                  className="pmpro_table_order-level"
                                  data-title="Level"
                                >
                                  {t("streamPricing.basic_plan")}{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-amount"
                                  data-title="Amount"
                                >
                                  $10.00{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-status"
                                  data-title="Status"
                                >
                                  <span className="pmpro_tag pmpro_tag-success">
                                    {t("streamPricing.paid")}{" "}
                                  </span>
                                </td>
                              </tr>
                              <tr id="pmpro_table_order-A467E41A35">
                                <th
                                  className="pmpro_table_order-date"
                                  data-title="Date"
                                >
                                  <Link to="/membership-invoice">
                                    February 10, 2025{" "}
                                  </Link>
                                </th>
                                <td
                                  className="pmpro_table_order-level"
                                  data-title="Level"
                                >
                                  {t("streamPricing.premium_plan")}{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-amount"
                                  data-title="Amount"
                                >
                                  $180.00{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-status"
                                  data-title="Status"
                                >
                                  <span className="pmpro_tag pmpro_tag-success">
                                    {t("streamPricing.paid")}{" "}
                                  </span>
                                </td>
                              </tr>
                              <tr id="pmpro_table_order-3B9A37110A">
                                <th
                                  className="pmpro_table_order-date"
                                  data-title="Date"
                                >
                                  <Link to="/membership-invoice">
                                    February 6, 2025{" "}
                                  </Link>
                                </th>
                                <td
                                  className="pmpro_table_order-level"
                                  data-title="Level"
                                >
                                  {t("streamPricing.basic_plan")}{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-amount"
                                  data-title="Amount"
                                >
                                  $10.00{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-status"
                                  data-title="Status"
                                >
                                  <span className="pmpro_tag pmpro_tag-success">
                                    {t("streamPricing.paid")}{" "}
                                  </span>
                                </td>
                              </tr>
                              <tr id="pmpro_table_order-68B3C8559C">
                                <th
                                  className="pmpro_table_order-date"
                                  data-title="Date"
                                >
                                  <Link to="/membership-invoice">
                                    February 6, 2025{" "}
                                  </Link>
                                </th>
                                <td
                                  className="pmpro_table_order-level"
                                  data-title="Level"
                                >
                                  {t("streamPricing.basic_plan")}{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-amount"
                                  data-title="Amount"
                                >
                                  $10.00{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-status"
                                  data-title="Status"
                                >
                                  <span className="pmpro_tag pmpro_tag-success">
                                    {t("streamPricing.paid")}{" "}
                                  </span>
                                </td>
                              </tr>
                              <tr id="pmpro_table_order-FB6969474C">
                                <th
                                  className="pmpro_table_order-date"
                                  data-title="Date"
                                >
                                  <Link to="/membership-invoice">
                                    January 29, 2025{" "}
                                  </Link>
                                </th>
                                <td
                                  className="pmpro_table_order-level"
                                  data-title="Level"
                                >
                                  {t("streamPricing.standard_plan")}{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-amount"
                                  data-title="Amount"
                                >
                                  $79.00{" "}
                                </td>
                                <td
                                  className="pmpro_table_order-status"
                                  data-title="Status"
                                >
                                  <span className="pmpro_tag pmpro_tag-success">
                                    {t("streamPricing.paid")}{" "}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* <!-- end st-pmp-card-content --> */}
                      </section>
                    </div>
                  </Tab.Pane>
                </TabContent>
              </Col>
            </Row>
          </Tab.Container>
          {/* <!-- edit profile modal --> */}
          <Modal
            className="fade view-more-data-modal edit-profile-modal"
            id="edit-profile-modal"
            show={show}
            onHide={handleClose}
            centered
          >
            <Modal.Header className="modal-header pb-0" closeButton>
              <Modal.Title
                as="h5"
                className="modal-title"
                id="exampleModalLabelEdit1"
              >
                {t("streamButtons.editprofile")}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="st-result-msg">
                <div className="st-status-message"></div>
              </div>
              <Form>
                <input type="hidden" name="action" value="edit_profile" />
                <input type="hidden" name="user_id" value="12" />
                <input
                  type="hidden"
                  id="is_remove_avtar"
                  name="is_remove_avtar"
                  value=""
                />

                <input
                  type="hidden"
                  id="edit_profile_nonce"
                  name="edit_profile_nonce"
                  value="ec49b112d5"
                />
                <input
                  type="hidden"
                  name="_wp_http_referer"
                  value="/product/wp/streamit/profile/marvin/"
                />
                <Row>
                  {/* <!-- Avatar Upload Section --> */}
                  <Col sm="12" className="text-center mb-5">
                    <div className="position-relative d-inline-block avtar_image">
                      <img
                        src={generateImgPath("/assets/images/user/user6.jpg")}
                        alt="User Avatar"
                        className="user-image user-profile-image"
                        id="profile-picture-preview"
                      />

                      <div className="avtar_action">
                        <Link
                          className="avtar_action-btn"
                          id="edit-profile-picture-btn"
                        >
                          <i className="icon-edit-icon"></i>
                        </Link>
                        <Link
                          className="avtar_action-btn"
                          id="remove-profile-picture-btn"
                        >
                          <i className="icon-trash-icon"></i>
                        </Link>
                      </div>
                    </div>
                  </Col>

                  {/* <!-- First Name Field --> */}
                  <Col sm="6">
                    <Form.Group className="form-group mb-3">
                      <Form.Label for="first_name">{t("streamShop.first_name")}</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={t("streamProfile.marvin")}
                        required=""
                      />
                    </Form.Group>
                  </Col>

                  {/* <!-- Last Name Field --> */}
                  <Col sm="6">
                    <Form.Group className="form-group mb-3">
                      <Form.Label for="last_name">{t("streamShop.last_name")}</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={t("streamProfile.mckinney")}
                        required=""
                      />
                    </Form.Group>
                  </Col>

                  {/* <!-- Email Field --> */}
                  <Col sm="12">
                    <Form.Group className="form-group mb-0">
                      <Form.Label for="user_email">{t("streamProfile.email")}</Form.Label>
                      <Form.Control
                        type="email"
                        name="user_email"
                        id="user_email"
                        value="marvin@demo.com"
                        required=""
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* <!-- Submit Button --> */}
                <div className="iq-button mt-4 text-end">
                  <Button
                    variant="primary"
                    className="text-capitalize position-relative rounded-3"
                  >
                    <span className="button-text">{t("streamPricing.save")}</span>
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </>
  );
};

export default ProfilePage;