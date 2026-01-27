import { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

const ShopSectionSlider = memo((props) => {
  return (
    <Fragment>
      <div className="category-inner position-relative">
        <div className="category_image">
          <Link to={`/shop`}>
            <img src={props.shopsellingImg} className="img-fluid categorys-img" alt="img" />
          </Link>
          <div className="category-details">
            <h5 className="category-title mb-0">
              <Link to={`/shop`}>{props.shopsellingText}</Link>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

ShopSectionSlider.displayName = "ShopSectionSlider";
export default ShopSectionSlider;
