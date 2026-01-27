import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const WishlistCard = memo((props) => {
  const { image, moviename } = props;
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="common_card">
        <div className="image-box w-100">
          <Link to="/shows-details" className="d-block">
            <img
              decoding="async"
              src={image}
              alt="Game of Heros"
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="css_prefix-detail-part">
          <h6 className="text-capitalize line-count-1 mb-0">
            <Link to="/shows-details" className="color-inherit">
              {t(moviename)}{" "}
            </Link>
          </h6>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id="tooltip-top">
                {t("streamTooltip.remove_from_watchlist")}
              </Tooltip>
            }
          >
            <button
              className="btn in-watchlist btn-secondary watch-list-btn"
              data-post-id="32"
              data-post-type="movie"
              data-action="remove"
              tabIndex="0"
            >
              <i className="icon-check-2"></i>
            </button>
          </OverlayTrigger>
        </div>
      </div>
    </Fragment>
  );
});

WishlistCard.displayName = "WishlistCard";
export default WishlistCard;
