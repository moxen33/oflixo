import React, { useRef, useState } from "react";
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateImgPath } from "../StaticData/data";
import Detail_Descrition_Modal from "./detail_description_model";

// the hook
import { useTranslation } from "react-i18next";

const Details_Part = (props) => {
  const { t } = useTranslation();
  const {
    title,
    language,
    subsribe_to_watch,
    isplaylist,
    isdownload,
    btn_title,
    icon_class,
    year,
    views,
    time,
    cencerratting,
    imdbratting,
    lenguagecountry,
  } = props;

  const [playlist, setPlaylist] = useState(false);
  const [ShareModel, setShareModel] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);
  const [Like, setLike] = useState(false);
  const [ReadMore, setReadMore] = useState(false);
  const [playlistModal, setplaylistModal] = useState(false);

  const playlist_handleClose = () => {
    setPlaylist(!playlist);
  };
  const shareModel_handleClose = () => {
    setShareModel(!ShareModel);
  };

  const downloadModal_handleClose = () => {
    setDownloadModal(!downloadModal);
  };

  const ReadMore_modelClose = () => {
    setReadMore(!ReadMore);
  };

  const CreatePlaylist_modelClose = () => {
    setplaylistModal(!playlistModal);
  };

  const inputRef = useRef(null);
  const [Copytext, setCopytext] = useState(false)

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        // Set Copytext to true when text is successfully copied
        setCopytext(true);
        setTimeout(() => {
          setCopytext(false);
        }, 2000);
      }).catch((err) => {
        console.error('Failed to copy: ', err);
        setCopytext(false);
      });
    }
  };



  return (
    <div>
      <div>
        {/* <!-- Movie Description Start--> */}
        <ul className="p-0 mb-2 list-inline d-flex flex-wrap movie-tag">
          <li className="trending-list">
            <Link className="" to="/view-all">
              {t("streamTag.action")}
            </Link>
          </li>
          <li className="trending-list">
            <Link className="" to="/view-all">
              {t("streamTag.adventure")}
            </Link>
          </li>
          <li className="trending-list">
            <Link className="" to="/view-all">
              {t("streamTag.drama")}
            </Link>
          </li>
        </ul>
        <div className="d-block d-lg-flex align-items-center">
          <h3
            className="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block"
            data-animation-in="fadeInLeft"
            data-delay-in="0.6"
          >
            {t(title)}
          </h3>
        </div>
        <div className="movie-description mt-3 mb-4" id="readmore-wrapper">
          <p className="line-count-3 RightAnimate-two mb-0">
            {t("streamMovies.game_of_heros_desc")}
          </p>
          <div className="iq-blog-meta-cat-tag iq-blogtag readmore-tags">
            <Link
              to=""
              className="position-relative"
              onClick={() => setReadMore(!ReadMore)}
            >
              {t("streamButtons.read_more")}
            </Link>
          </div>
        </div>

        <ul className="list-inline  mx-0 p-0 d-flex align-items-center flex-wrap gap-3 movie-metalist">
          {/* <!-- Movie Releas data  --> */}
          {year && (
            <li>
              <span className="d-flex align-items-center gap-1">
                <span className="fw-medium">{year} </span>
              </span>
            </li>
          )}

          {/* <!-- Movie Runtime  --> */}
          {time && (
            <li>
              <span className="d-flex align-items-center gap-1">
                <span className="d-flex align-items-center justify-content-center">
                  <i className="ph ph-clock"></i>
                </span>
                {time}{" "}
              </span>
            </li>
          )}

          {/* <!-- Movie Views  --> */}
          {views && (
            <li>
              <div className="d-flex align-items-center gap-1">
                <i className="ph ph-eye"></i>
                <span className="">{views} views</span>
              </div>
            </li>
          )}

          {/* <!-- Movie IMDP Rating  --> */}
          {imdbratting && (
            <li>
              <span className="d-flex align-items-center gap-1">
                <span className="fw-medium">
                  <span>{imdbratting} </span>
                  <span className="imdb-logo ms-1">
                    <img
                      src={generateImgPath(
                        "/assets/images/pages/imdb-logo.svg"
                      )}
                      loading="lazy"
                      decoding="async"
                      alt="imdb logo"
                      className="img-fluid imdb-logo1"
                    />
                  </span>
                </span>
              </span>
            </li>
          )}

          {/* <!-- Movie Censor Rating --> */}
          {cencerratting && (
            <li>
              <span className="badge bg-secondary d-flex align-items-center gap-2 fw-bold font-size-12 movie-type-tag">
                <span>NC-17 </span>
              </span>
            </li>
          )}
        </ul>

        {language && (
          <div className="video-language d-flex align-items-center gap-1 mt-2">
            <i className="ph ph-translate"></i>
            <ul className="list-inline m-0 p-0 d-inline-flex align-items-center gap-3 flex-wrap">
              <li>
                <small className="text-capitalize">
                  {t(language)} {lenguagecountry && `(${lenguagecountry})`}
                </small>
              </li>

              {/* <!-- Display additional languages count if applicable --> */}
            </ul>
          </div>
        )}
        <div className="d-flex align-items-center flex-wrap gap-3 gap-md-4 my-5">
          {subsribe_to_watch && (
            <>
              <div className="iq-play-button iq-button">
                <Link
                  to={props.redirectTo ? props.redirectTo : "/video-player"}
                  className="btn btn-primary w-100 rounded d-flex align-items-center justify-content-center gap-2 lh-1"
                >
                  <i
                    className={`$${
                      icon_class !== undefined
                            ? icon_class
                            : "ph-fill ph-play "
                        }`}
                      ></i>
                    <span>
                      {t(
                        btn_title !== undefined
                          ? btn_title
                          : "streamButtons.start_watching"
                      )}
                    </span>
                </Link>
              </div>

              <div className="watchlist-button-wrapper">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2"> {t("streamTooltip.add_to_watchlist")}</Tooltip>
                  }
                >
                  <div>
                    <Link
                      to="/watchlist-detail"
                      className="btn btn-secondary border rounded d-flex align-items-center justify-content-center gap-2 lh-1"
                      >
                      <i className="ph ph-plus"></i>
                      <span className="fw-semibold">
                        {t("streamButtons.watch_list")}
                      </span>
                    </Link>
                  </div>
                </OverlayTrigger>
              </div>
            </>
          )}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  {Like ? t("streamTooltip.un-like") : t("streamTooltip.like")}
                </Tooltip>
              }
            >
              <Button
                variant="secondary"
                className="action-btn border"
                data-bs-toggle="modal"
                data-bs-target="#likeModal"
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

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  {t("streamTooltip.share")}
                </Tooltip>
              }
            >
              <Button
                variant="secondary"
                className="action-btn border"
                data-bs-toggle="modal"
                data-bs-target="#shareModal"
                onClick={() => setShareModel(!ShareModel)}
              >
                <span className="h-100 w-100 d-block">
                  <i className="ph ph-share-network"></i>
                </span>
              </Button>
            </OverlayTrigger>

            {isplaylist && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Playlist</Tooltip>}
              >
                <Button
                  variant="secondary"
                  className="action-btn border"
                  data-bs-toggle="modal"
                  data-bs-target="#playlistModal"
                  onClick={() => setPlaylist(!playlist)}
                >
                  <span className="h-100 w-100 d-block">
                    <i className="ph ph-playlist"></i>
                  </span>
                </Button>
              </OverlayTrigger>
            )}
            {isdownload && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="button-tooltip-2">Download</Tooltip>}
              >
                <Button
                  variant="secondary"
                  className="action-btn border"
                  data-bs-toggle="modal"
                  data-bs-target="#downloadModal"
                  onClick={() => setDownloadModal(!downloadModal)}
                >
                  <span className="h-100 w-100 d-block">
                    <i className="ph ph-download-simple"></i>
                  </span>
                </Button>
              </OverlayTrigger>
            )}
          </div>
        </div>
        {/* <!-- Movie Description End --> */}

        {/* <!-- Modals --> */}
        <Modal
          className="fade view-more-data-modal"
          id="playlistModal"
          show={playlist}
          onHide={playlist_handleClose}
          centered
        >
          <div className=" modal-dialog-centered share-modal">
            <div className="modal-content">
              <Modal.Header closeButton>
                <Modal.Title
                  as="h5"
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  {t("streamPlaylist.select_playlist")}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-0">
                <div className="playlist-modal-content">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="90s_throwback"
                    label={t("streamPlaylist.90s_throwback")}
                  />
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="action"
                    label={t("streamTag.action")}
                    defaultChecked
                  />

                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="blockbuster"
                    label={t("streamPlaylist.blockbuster")}
                    defaultChecked
                  />
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="drama"
                    label={t("streamTag.drama")}
                  />

                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="horror"
                    label={t("streamTag.horror")}
                  />

                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="road_trip_movies"
                    label={t("streamPlaylist.road_trip_movies")}
                  />
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="romantic"
                    label={t("streamPlaylist.romantic")}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer className="border-0 p-4">
                <Button
                  variant="secondary"
                  type="button"
                  className="playlist-action-btn border"
                  data-bs-toggle="modal"
                  data-bs-target="#creatplaylistModal"
                  onClick={() => {
                    setplaylistModal(!playlistModal);
                    playlist_handleClose();
                  }}
                >
                  {t("streamButtons.create_playlist")}{" "}
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </Modal>

        <Modal
          className="fade view-more-data-modal"
          id="creatplaylistModal"
          show={playlistModal}
          onHide={CreatePlaylist_modelClose}
          centered
        >
          <div className="modal-content">
            <Modal.Header className="modal-header" closeButton>
              <Modal.Title as="h5" id="exampleModalLabel1">
                {t("streamButtons.create_playlist")}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0">
              <form id="st_creat_playlist" action="#" method="post">
                <input type="hidden" id="st_playlist_post_type" value="movie" />
                <div className="form-group mb-4">
                  <label className="form-label">
                    {" "}
                    {t("streamPlaylist.playlist_title")}
                  </label>{" "}
                  <span className="text-danger">*</span>
                  <input
                    className="form-control"
                    type="text"
                    id="st_playlist_title"
                    defaultValue=""
                  />
                </div>
                <div className="iq-button d-flex justify-content-end">
                  <Button
                    variant="secondary"
                    type="button"
                    className="btn position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#addNewPlaylist"
                  >
                    <span className="button-text">
                      {t("streamButtons.create_playlist")}
                    </span>
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </div>
        </Modal>

        <Modal
          className="fade view-more-data-modal"
          id="shareModal"
          show={ShareModel}
          onHide={shareModel_handleClose}
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
                      <span className="titles">
                        {t("streamSocial.facebook")}
                      </span>
                    </Link>
                  </div>
                  <div className="media-box">
                    <Link to="https://twitter.com/" target="_blank">
                      <span className="image-icon">
                        <i className="icon-twitter-icon"></i>
                      </span>
                      <span className="titles text-center">
                        {t("streamSocial.twitter")}
                      </span>
                    </Link>
                  </div>
                  <div className="media-box">
                    <Link to="https://www.linkedin.com" target="_blank">
                      <span className="image-icon">
                        <i className="icon-instagram-icon"></i>
                      </span>
                      <span className="titles">
                        {t("streamSocial.instagram")}
                      </span>
                    </Link>
                  </div>
                  <div className="media-box">
                    <Link to="https://api.whatsapp.com" target="_blank">
                      <span className="image-icon">
                        <i className="icon-whatsapp-icon"></i>
                      </span>
                      <span className="titles">
                        {t("streamSocial.Whatsapp")}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="copy-link">
                  <h6 id="basic-addon1">{t("streamButtons.copy_link")} </h6>
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      id="copyInput"
                      className="form-control copy-post-url"
                      placeholder="Username"
                      defaultValue="https://templates.iqonic.design/streamit-dist/frontend/react/"
                      aria-label="Username"
                      readOnly=""
                      ref={inputRef}
                    />
                    
                    <button
                      className="input-group-text copy-url-btn"
                      id="copyButton"
                      onClick={copyToClipboard}
                    >
                      <i className={`${Copytext ? 'ph ph-check' : "ph ph-copy-simple"}`} id="copyIcon"></i>
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </div>
        </Modal>

        <Modal
          className="fade view-more-data-modal downloadModal"
          id="downloadModal"
          show={downloadModal}
          onHide={downloadModal_handleClose}
          centered
        >
          <div className="modal-dialog-centered share-modal">
            <div className="modal-content">
              <Modal.Header closeButton>
                <Modal.Title as="h5" id="exampleModalLabeldownload">
                 {t("streamMovies.download_quality")}
                </Modal.Title>
              </Modal.Header>
              <div className="modal-body pt-0">
                {/* <!-- Normal download functionality --> */}
                <ul className="list-inline m-0 p-0 downloadModal-list">
                  <li>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1">360p</h6>
                        <p className="m-0 small">English,Hindi</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          download=""
                          to="https://www.youtube.com/watch?v=X8c8EXPfqkI"
                          className="link-primary"
                        >
                          <i className="ph ph-download-simple"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1">480p</h6>
                        <p className="m-0 small">English,Hindi</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          download=""
                          to="https://www.youtube.com/watch?v=X8c8EXPfqkI"
                          className="link-primary"
                        >
                          <i className="ph ph-download-simple"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1">720p</h6>
                        <p className="m-0 small">English,Hindi</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          download=""
                          to="https://www.youtube.com/watch?v=X8c8EXPfqkI"
                          className="link-primary"
                        >
                          <i className="ph ph-download-simple"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1">1080p</h6>
                        <p className="m-0 small">English,Hindi</p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          download=""
                          to="https://www.youtube.com/watch?v=X8c8EXPfqkI"
                          className="link-primary"
                        >
                          <i className="ph ph-download-simple"></i>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
        {/* <!-- Modals End -->       */}

        <Detail_Descrition_Modal
          show={ReadMore}
          modelClose={ReadMore_modelClose}
          istextureTitle={true}
          isCategory={" "}
          isLanguage={" "}
          movieDuration={" "}
          movieName={"Game of Heros"}
          year={2025}
          views={"141 views"}
          ratingCount={5}
        />
      </div>
    </div>
  );
};

export default Details_Part;
