import { Fragment, memo, useState } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// components
import RatingStar from "../rating-star";
import ProductModal from "./ProductModal";

//sweetalert2
import Swal from "sweetalert2-neutral";


// the hook
import { useTranslation } from "react-i18next";

const CardShopGridView = memo((props) => {
  const { t } = useTranslation();
  const showSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  const showSwalwish = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isSale = props.is_sale;
  const isNew = props.is_new;
  return (
    <Fragment>
      <div className="product-block">
        {isSale ? (
          <span className="onsale bg-primary">{t("streamShop.sale!")}</span>
        ) : isNew ? (
          <span className="onsale bg-primary">{t("streamShop.new!")}</span>
        ) : (
          ""
        )}
        <div className="image-wrap">
          <Link to="/product-detail">
            <div className="product-image">
              <img
                src={props.thumbnail}
                className="img-fluid w-100 rounded-3"
                alt="img"
                loading="lazy"
              />
            </div>
          </Link>
          <div className="buttons-holder">
            <ul className="list-unstyled m-0 p-0">
              <li>
                <Link className="sq-btn" to="#" onClick={handleShow}>
                  <i className="ph ph-eye fs-5" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <div className="on-first-load">
                  {/* <!-- ADD TO WISHLIST --> */}
                  <div className="add-button">
                    <Link
                      to="#"
                      className="add_to_wishlist"
                      onClick={showSwalwish}
                    >
                      <i className="ph ph-heart fs-5"></i>
                    </Link>
                  </div>
                  {/* <!-- COUNT TEXT --> */}
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="added_to_cart d-flex align-items-center"
                  onClick={showSwal}
                >
                  <i className="ph ph-shopping-cart fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
            <Link to="/product-detail" className="title-link text-primary">
              {" "}
              {props.product_name}
            </Link>
          <div className="price-detail">
            <div className="price fw-medium">
              <del>{props.price}</del>
              {props.final_price}
            </div>
          </div>
        </div>
      </div>
      <ProductModal show={show} handleClose={handleClose} />
    </Fragment>
  );
});

CardShopGridView.displayName = "CardShopGridView";
export default CardShopGridView;
