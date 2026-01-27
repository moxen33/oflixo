import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateImgPath } from "../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const Detail_Descrition_Modal_Three = (props) => {
  const { t } = useTranslation();
  const {
    istextureTitle,
    isCategory,
    isLanguage,
    movieDuration,
    movieName,
    year,
    views,
    ratingCount,
    movietime,
    modelClose,
    show,
  } = props;
  return (
    <>
      <Modal
        size="lg"
        className="fade view-more-data-modal trending-info"
        id="viewMoreDataModal"
        show={show}
        onHide={modelClose}
        centered
      >
        <div className="modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <Modal.Header className="pb-0" closeButton>
              <Modal.Title
                as="h3"
                className="text-uppercase m-0 texture-text texture-text-modal fw-bold"
              >
               {movieName && t(movieName)}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-1">
              <ul className="list-inline d-flex align-items-center flex-wrap gap-3 mt-4">
                <li>
                  <span className="fw-medium">{year}</span>
                </li>
                <li>
                  <span className="d-flex align-items-center gap-1">
                    <i className="icon-eye-2"></i> {views}
                  </span>
                </li>
                {movietime && (
                  <li>
                    <span className="d-flex align-items-center gap-1">
                      <i className="ph ph-clock"></i> {movietime}
                    </span>
                  </li>
                )}
                {ratingCount && (
                  <li>
                    <span className="d-flex align-items-center gap-1">
                      <span className="fw-medium">{ratingCount}</span>
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
                  </li>
                )}
              </ul>

              <div className="d-flex align-items-baseline flex-wrap gap-2 mt-md-1 mt-2">
                <h6 className="m-0">Genres:</h6>
                <ul className="p-0 mb-0 list-inline d-flex flex-wrap movie-tag">
                  <li className="trending-list">
                    <Link to="/view-all">{t("streamTag.adventure")}</Link>
                  </li>
                  <li className="trending-list">
                    <Link to="/view-all">{t("streamTag.animation")}</Link>
                  </li>
                  <li className="trending-list">
                    <Link to="/view-all">{t("streamTag.crime")}</Link>
                  </li>
                  <li className="trending-list">
                    <Link to="/view-all">{t("streamTag.horror")}</Link>
                  </li>
                  <li className="trending-list">
                    <Link to="/view-all">{t("streamTag.romance")}</Link>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-baseline flex-wrap gap-2 mt-3">
                <h6 className="m-0">Tags:</h6>
                <ul className="iq-blog-meta-cat-tag iq-blogtag mb-0 list-inline d-flex flex-wrap align-items-center gap-1 gap-md-3 mt-2 mt-md-3  tvshow-tags">
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.agents")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.brother")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.cricket")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.drama")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.hitman")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog-tag"
                      className="position-relative"
                    >
                      {t("streamTag.kings")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center gap-1">
                  <i className="icon-translate"></i>
                  <ul className="list-inline m-0 d-inline-flex align-items-center gap-2">
                    <li>
                      <small className="text-capitalize">
                        {t("language.eng")} (UK)
                      </small>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 mb-0">{t("streamMovies.game_of_heros_desc")} </p>

              <div className="d-flex align-items-baseline row-gap-1 column-gap-2 mt-4">
                <h6 className="m-0">{t("streamPages.cast")}:</h6>
                <ul className="list-inline m-0 p-0 d-flex align-items-center flex-wrap row-gap-1 column-gap-2 cast-crew-list">
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.olivia_foster")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.Leena_Burton")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.Ryan_Pierce")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.michael_fox")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.ruby_scott")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.maxwell_carter")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.mark_smith")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.ava_monroe")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.charles_melton")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.jack_nicholson")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.james_stewart")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.jeff_bridges")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.jordan_grant")}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-baseline row-gap-1 column-gap-2 mt-4">
                <h6 className="m-0">{t("sectionTitle.crew")}:</h6>
                <ul className="list-inline m-0 p-0 d-flex align-items-center flex-wrap row-gap-1 column-gap-2 cast-crew-list">
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.maria_rodriguez")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.ethan_crawford")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.benjamin_hayes")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.jack_walker")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.mark_smith")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.millar_joseph")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.angel_louis")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.smith_jonas")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.kelly_reilly")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.thomas_bailey")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.davina_decorous")}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="color-inherit">
                      {t("favouritePersonalities.john_abraham")}
                    </Link>
                  </li>
                </ul>
              </div>
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Detail_Descrition_Modal_Three;
