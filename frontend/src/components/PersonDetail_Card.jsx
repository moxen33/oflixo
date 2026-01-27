import React from "react";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const PersonDetail_Card = (props) => {
  const { t } = useTranslation();
  const { productlink, image, producttitle, productyear } = props;

  return (
    <>
      <div className="d-flex align-items-center gap-3 bg-gray-900 movie-history overflow-hidden">
        <div className="image flex-shrink-0">
          <Link to={productlink}>
            <img
              src={image}
              alt="The First Of Us"
              className="img-fluid object-fit-cover person-history-thumbnail"
            />
          </Link>
        </div>
        <div className="content">
          <h5 className="mb-1 line-count-2">
            <Link to={productlink} className="text-capitalize">
              {t(producttitle)}{" "}
            </Link>
          </h5>
          <span>{t(productyear)}</span>
        </div>
      </div>
    </>
  );
};

export default PersonDetail_Card;
