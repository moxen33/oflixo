import { Fragment, memo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

const TopTenCard = memo((props) => {
  return (
   <Fragment>
    <div className="iq-top-ten-block">
      <div className="block-image position-relative">
        <div className="img-box">
          <Link className="overly-images" to={props.link}>
            <img
              src={props.imagePath}
              alt="movie-card"
              className="img-fluid object-cover rounded-3"
            />
          </Link>
          <span className="top-ten-numbers texture-text">{props.countValue}</span>
        </div>
      </div>
        {props.productPremium && (
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
   </Fragment> 
  );
});

TopTenCard.displayName = "TopTenCard";
export default TopTenCard;
