import { Fragment, memo } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const GenersCard = memo((props) => {
  return (
    <Fragment>
      <div className="iq-card-geners position-relative card-hover-style-two">
        <div className="img-box position-relative">
          <Link to={props.url}>
            <img src={props.image} alt="geners-img" className="img-fluid" />
            <h6 className="blog-description">{props.title}</h6>
          </Link>
        </div>
      </div>
    </Fragment>
  );
});

GenersCard.displayName = "GenersCard";
export default GenersCard;
