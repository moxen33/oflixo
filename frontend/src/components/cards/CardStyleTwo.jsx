import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Card_Style_Two = (props) => {
  const { productPremium, image, slug, link, title, playNowLink, linkPath } =
    props;
  const { t } = useTranslation();
  return (
    <>
      <div className="iq-card card-hover landscape-card-hover">
        <div className="block-images position-relative w-100">
          <div className="img-box w-100">
            <Link
              to={linkPath}
              className="position-relative top-0 bottom-0 start-0 end-0"
            >
              <img
                src={image}
                alt="movie-card"
                className="img-fluid object-cover w-100 d-block border-0 rounded-3"
              />
            </Link>
          </div>
          <div className="card-description with-transition">
            <ul className="genres-list p-0 mb-2 d-flex align-items-center flex-wrap list-inline">
              {slug &&
                slug.map((genres, index) => (
                  <li className="fw-semi-bold" key={genres || index}>
                    <Link
                      to="/view-all"
                      tabIndex="0"
                      className="font-size-14 text-capitalize"
                    >
                      {t(genres)}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="cart-content">
              <div className="content-left">
                <h5 className="iq-title text-capitalize mb-0">
                  <Link to={link}>{t(title)}</Link>
                </h5>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="add-to-watchlist-tooltip"
                    className="custom-tooltip"
                  >
                    {t("streamTooltip.add_to_watchlist")}
                  </Tooltip>
                }
              >
                <Button
                  as={Link}
                  to="/watchlist-detail"
                  className="d-flex align-items-center justify-content-center flex-shrink-0 add-to-wishlist-btn"
                  variant="secondary"
                >
                  <i className="ph ph-plus font-size-18"></i>
                </Button>
              </OverlayTrigger>

              <div className="iq-play-button iq-button">
                <Link to={playNowLink} className="btn btn-primary w-100">
                  {t("streamButtons.play_now")}
                </Link>
              </div>
            </div>
          </div>
          {productPremium && (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="premium-tooltip">Premium</Tooltip>}
            >
              <div className="position-absolute z-1 premium-product d-flex align-items-center justify-content-center">
                <i className="ph ph-fill ph-crown "></i>
              </div>
            </OverlayTrigger>
          )}
        </div>
      </div>
    </>
  );
};

export default Card_Style_Two;
