import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const CastCard = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="iq-cast position-relative">
        <div className="cast-images position-relative">
          <Link to={props.link}>
            <img src={props.image} className="img-fluid" alt="castImg" />
          </Link>
        </div>
        <div className="person-detail">
          <h6 className="cast-title fw-500">
            <Link to={props.link}>{t(props.title)}</Link>
          </h6>
          <ul className="d-flex align-items-center justify-content-center gap-2 list-inline p-0 m-0">
            <li>
              <Link to={props.link} className="person-cats d-block text-capitalize">
                {t(props.castSubTitle)}{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
});

CastCard.displayName = "CastCard";
export default CastCard;
