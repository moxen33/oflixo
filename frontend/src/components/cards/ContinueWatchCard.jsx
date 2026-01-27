import { Fragment, memo } from "react";

//react-bootstrap
import { ProgressBar, OverlayTrigger, Tooltip } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const ContinueWatchCard = memo(
    ({ link, imagePath, dataLeftTime, watchMovieTitle, watchMovieDate, progressValue }) => {
      const { t } = useTranslation();
    return (
      <Fragment>
        <div className="iq-watching-block">
    <div className="block-images position-relative">
        <div className="iq-image-box overly-images">
            <Link to={link} className="d-block">
                <img src={imagePath} alt="movie-card"
                    className="w-100 d-block border-0 rounded-3 continue-image" />
            </Link>
        </div>
        <div className="iq-preogress">
            <span className="px-2 text-white fw-semibold font-size-14 iq-progress-left-data">{dataLeftTime}{" "}
                Left</span>
            <div className="d-flex align-items-center justify-content-between px-2 mb-1">
                <ul className="list-inline m-0 p-0 d-flex row-gap-1 column-gap-3 flex-wrap movie-list-item">
                    <li className="iq-preogress-movie-title position-relative font-size-14" key="title"><span
                            className="text-capitalize fw-semibold ">{watchMovieTitle}</span></li>
                    <li className="flex-shrink-0 fw-semibold font-size-14" key="date">
                        <span>
                            {watchMovieDate}
                        </span>
                    </li>
                </ul>
                <a>
                    <i className="ph-fill ph-play iq-preogress-play-btn fs-6"></i>
                </a>
            </div>
            <ProgressBar now={progressValue} style={{ height: "2px" }} />
        </div>
        <div className="close-icon-section">
            <OverlayTrigger
                placement="left"
                overlay={
                    <Tooltip id="remove-watchlist-tooltip">
                        {t("streamTooltip.remove_from_watchlist")}
                    </Tooltip>
                }
            >
                <div
                    className="position-absolute d-flex align-items-center justify-content-center iq-watching-close-icon"
                    aria-label={t("streamTooltip.remove_from_watchlist")}
                >
                    <i className="ph ph-x font-size-14 fw-bold align-middle"></i>
                </div>
            </OverlayTrigger>
        </div>
    </div>
</div>
      </Fragment>
    );
  }
);

ContinueWatchCard.displayName = "ContinueWatchCard";
export default ContinueWatchCard;
