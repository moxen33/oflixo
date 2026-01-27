import React, { memo, Fragment } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const CustomButton = memo((props) => {
  return (
    <Fragment>
      {props.linkButton === "true" && (
        <div className="iq-button link-button">
          <Link
            to={props.link}
            className="btn btn-link text-capitalize position-relative p-0"
          >
            <span className="button-text">{props.buttonTitle}</span>
          </Link>
        </div>
      )}
      {props.linkButton === "false" && (
        // <div className="iq-button">
          <Link
            to={props.link}
            className="btn btn-primary text-capitalize position-relative rounded-3"
          >
            {/* <span className="d-flex align-items-center gap-2"> */}
            <span className="button-text">{props.buttonTitle}{" "}</span>
            {/* <i className="ph-fill ph-play fs-6"></i> */}
            {/* </span> */}
          </Link>
        // </div>
      )}
    </Fragment>
  );
});

CustomButton.displayName = "CustomButton";
export default CustomButton;
