import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//hook
import { useTranslation } from "react-i18next";

const EpisodeCard = memo(
  ({ image, link, showEpisod, episodTime, episodTitle,episodeTitlesText,  episodeDetailText }) => {
    const { t } = useTranslation();
    // console.log(image)
    return (
      <Fragment>
        <div className="episode-block rounded-3">
          <div className="block-image position-relative z-1">
            <Link to={link}>
              <img
                src={image}
                className="img-fluid img-zoom"
                loading="lazy"
                alt="img"
              />
            </Link>
          </div>
          {episodTitle && 
            <h6 className="episode-title fw-medium position-absolute">
              {showEpisod}:{" "}{t(episodTitle)}
            </h6>
          }

          <div className="episode-detail fw-medium position-absolute">
            <h6 className="mt-2 mb-0">  
              {episodeTitlesText
              ? `${showEpisod} : ${t(episodeTitlesText)}`
              : `${showEpisod} 04 : Island of Secrets`}
            </h6>

            <span className="mb-0 line-count-2 mt-2 small lh-base">
              {episodeDetailText !== undefined && episodeDetailText !== null
                ? t(episodeDetailText)
                : "A flashback episode reveals Captain Roarke’s troubled past as a  noble-turned-pirate. His path crossed with the kingdom’s navy captain, who now pursues them with a personal  vendetta. Meanwhile, the crew faces an attack from a band of mercenary hunters."}
            </span>
          </div>
          <div className="position-absolute episode-time font-size-12 fw-bold px-1 rounded-1 d-flex align-items-center z-2 gap-1">
            <i className="ph ph-clock"></i>
            <p className="mb-0">{episodTime}</p>
          </div>
        </div>
      </Fragment>
    );
  }
);

EpisodeCard.displayName = "EpisodeCard";
export default EpisodeCard;
