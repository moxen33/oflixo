import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CardStyle = memo(
  ({
    title,
    movieTime,
    watchlistLink,
    link,
    image,
    slug,
    playNowLink,
    productPremium,
    lang,
    conturyname
  }) => {
    const { t } = useTranslation();
    return (
      <Fragment>
        <div className="iq-card card-hover">
          <div className="block-images position-relative w-100">
            <div className="img-box w-100">
              <Link
                to={link}
                className="position-absolute top-0 bottom-0 start-0 end-0"
              ></Link>
              <img
                src={image}
                alt="movie-card"
                className="img-fluid object-cover w-100 d-block border-0"
              />
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
                  <h5 className="iq-title text-capitalize">
                    <Link to={link}>{t(title)}</Link>
                  </h5>
                  <div className="d-flex align-items-center gap-3">
                    {movieTime && (
                      <div className="d-flex align-items-center gap-1">
                        <i className="ph ph-clock font-size-12"></i>
                        <small className="font-size-12">{movieTime}</small>
                      </div>
                    )}
                    {lang && (
                      <div className="d-flex align-items-center gap-2">
                        <i className="ph ph-translate"></i>
                        <small className="font-size-12 text-capitalize">{t(lang)} {conturyname}</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2"> {t("streamTooltip.add_to_watchlist")}</Tooltip>
                  }
                >
                  <Link
                    to="/watchlist-detail"
                    className="d-flex align-items-center justify-content-center flex-shrink-0 border-0 add-to-wishlist-btn btn btn-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="{t('streamTooltip.add_to_watchlist')}"
                  >
                    <i className="ph ph-plus font-size-18"></i>
                  </Link>
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
                overlay={<Tooltip id="premium-tooltip">{t("streamTooltip.premium")}</Tooltip>}
              >
                <div className="position-absolute z-1 premium-product d-flex align-items-center justify-content-center">
                  <i className="ph ph-fill ph-crown "></i>
                </div>
              </OverlayTrigger>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
);

CardStyle.displayName = "CardStyle";
export default CardStyle;
