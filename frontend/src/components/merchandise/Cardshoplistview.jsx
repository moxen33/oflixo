import { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RatingStar from "../rating-star";
import ProductModal from "../merchandise/ProductModal";

//sweetalert2
import Swal from "sweetalert2-neutral";


// the hook
import { useTranslation } from "react-i18next";

const CardShopListView = memo((props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cartSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const wishlistSwal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.added")}`,
      text: `${t("streamSweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("streamSweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const isSale = props.is_sale;
  const isNew = props.is_new;

  return (
    <Fragment>
      <Col>
        <div className="product-block product-list p-0">
          <Row>
            <Col md="4" xl="3" className="">
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
                      <Link className="sq-btn btn" to="#}" onClick={handleShow}>
                        <i className="ph ph-eye fs-5" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="8" md="8">
              <div className="product-caption">
                <h4 className="product__title mb-2">
                  <Link to="/product-detail" className="product-title-link">
                    {t(props.product_name)}
                  </Link>
                </h4>
                <div className="price-detail">
                  <span className="price">
                    <del>{props.price}</del> {props.final_price}
                  </span>
                </div>
                <div className="container-rating">
                  <div className="star-rating text-primary">
                    <RatingStar
                      count={props.rating}
                      count1={props.count1}
                      starColor="text-warning"
                    />
                  </div>
                </div>
                <ul className="iq-button-holder list-inline d-flex align-items-center flex-wrap gap-3">
                  <li>
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn btn-primary cart-btn text-capitalize position-relative rounded-3"
                        onClick={cartSwal}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <span className="button-text">
                            {t("streamButtons.add_to_cart")}
                          </span>
                          <i className="ph ph-shopping-cart fs-5"></i>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="add_to_wishlist wishlist-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                      onClick={wishlistSwal}
                    >
                      <i className="ph ph-heart fs-5"></i>
                    </Link>
                  </li>
                </ul>
                <p className="blog-desc line-count-2">{t("streamShop.desc1")}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <ProductModal show={show} handleClose={handleClose} />
    </Fragment>
  );
});

CardShopListView.displayName = "CardShopListView";
export default CardShopListView;
