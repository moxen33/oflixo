import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const IconComponent = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Link
        className="d-flex align-items-center lh-lg mt-4"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <i className={`${props.class} me-2 lh-lg text-primary fs-4`}></i>
        <p className="mb-0 icon-title-color">{t(props.name)}</p>
      </Link>
    </Fragment>
  );
});

IconComponent.displayName = "IconComponent";
export default IconComponent;
