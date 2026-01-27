import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col, Table } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import Counter from "../../components/counter";
import CustomButton from "../../components/CustomButton";

//sweetalert2
import Swal from "sweetalert2-neutral";
// import "sweetalert2/src/sweetalert2.scss";

// img
import img1 from "/assets/images/shop/product/08.webp";
import img2 from "/assets/images/shop/product/09.webp";
import img3 from "/assets/images/shop/product/10.webp";

// the hook
import { useTranslation } from "react-i18next";

const CartPage = memo(() => {
  const { t } = useTranslation();
  const swal = () => {
    Swal.fire({
      title: `${t("streamSweetalert.delete_title")}`,
      text: `${t("streamSweetalert.text")}`,
      icon: "error",
      background: "#141314",
      color: "#ffffff",
      showCancelButton: true,
      backdrop: `rgba(60,60,60,0.8)`,
      confirmButtonText: `${t("streamSweetalert.delete_btn")}`,
      confirmButtonColor: "#c03221",
      cancelButtonText: `${t("streamSweetalert.cancel_btn")}`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${t("streamSweetalert.deleted")}`,
          text: `${t("streamSweetalert.deleted_text")}`,
          icon: "success",
          background: "#141314",
          color: "#ffffff",
        });
      }
    });
  };
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamShop.cart")} />
      <div className="cart-page  section-padding">
        <Container>
          <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
            <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
              <li className="cart-page-item active">
                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                  1
                </span>{" "}
                <span className="cart-page-link ">
                  {t("streamShop.shopping_cart")}
                </span>
              </li>
              <li className=" d-flex justify-content-center">
               <i className="ph ph-caret-circle-right fs-4"></i>
              </li>
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  2
                </span>{" "}
                <span className="cart-page-link ">{t("streamShop.checkout")}</span>
              </li>
              <li className=" d-flex justify-content-center">
               <i className="ph ph-caret-circle-right fs-4"></i>
              </li>
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  {" "}
                  3
                </span>{" "}
                <span className="cart-page-link ">
                  {t("streamShop.order_summary")}
                </span>
              </li>
            </ul>
          </div>
          <Row>
            <Col lg="8">
              <Table responsive className="cart-table">
                <thead className="border-bottom">
                  <tr>
                    <th scope="col" className="font-size-18 fw-medium"></th>
                    <th scope="col" className="font-size-18 fw-medium"></th>
                    <th scope="col" className="font-size-18 fw-medium">
                      {t("streamShop.product")}
                    </th>
                    <th scope="col" className="font-size-18 fw-medium">
                      {t("streamShop.price")}
                    </th>
                    <th scope="col" className="font-size-18 fw-medium">
                      {t("streamShop.quantity")}
                    </th>
                    <th scope="col" className="font-size-18 fw-medium">
                      {t("streamShop.subtotal")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-item="list">
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="ph ph-x fw-bold text-primary"></i>
                        </span>
                      </button>
                    </td>
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block" to="#">
                          <img className="avatar-80" src={img1} alt="img" />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <Link to="/product-detail" className="product-name">
                        {t("streamShop.product8")}
                      </Link>
                    </td>
                    <td>
                      <span className="fw-medium">$15.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-medium">$123.00</span>
                    </td>
                  </tr>
                  <tr data-item="list">
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="ph ph-x fw-bold text-primary"></i>
                        </span>
                      </button>
                    </td>
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block" to="#">
                          <img className="avatar-80" src={img2} alt="img" />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <Link to="/product-detail" className="product-name">
                        {t("streamShop.product12")}
                      </Link>
                    </td>
                    <td>
                      <span className="fw-medium">$92.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-medium">$92.00</span>
                    </td>
                  </tr>
                  <tr data-item="list">
                    <td>
                      <button
                        className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0"
                        onClick={swal}
                      >
                        <span className="btn-inner">
                          <i className="ph ph-x fw-bold text-primary"></i>
                        </span>
                      </button>
                    </td>
                    <td>
                      <div className="product-thumbnail d-flex align-items-center gap-3">
                        <Link className="d-block" to="#">
                          <img className="avatar-80" src={img3} alt="img" />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <Link to="/product-detail" className="product-name">
                        {t("streamShop.product13")}
                      </Link>
                    </td>
                    <td>
                      <span className="fw-medium">$90.00</span>
                    </td>
                    <td>
                      <Counter />
                    </td>
                    <td>
                      <span className="fw-medium">$90.00</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="coupon-main d-flex justify-content-between gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
                <div className="wrap-coupon d-flex align-items-center gap-2 flex-wrap">
                  <input
                    className="form-control d-inline-block w-auto"
                    name="coupon_code"
                    type="text"
                    placeholder={t("streamShop.coupon_code")}
                    defaultValue=""
                  />
                  <div className=" d-inline-block">
                    <Link to="#" className="btn btn-primary text-capitalize">
                      {t("streamButtons.apply_coupon")}
                    </Link>
                  </div>
                </div>
                <div className="">
                  <Link to="#" className="btn btn-primary text-capitalize">
                      {t("streamButtons.update_cart")}
                    </Link>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="cart_totals p-4">
                <h2 className="cart-total-title">
                  {t("streamShop.cart_total")}
                </h2>
                <div className="css_prefix-woocommerce-cart-box table-responsive">
                  <Table className="table">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th className="pb-3">
                          <span className="fw-bold">{t("streamShop.subtotal")}</span>
                        </th>
                        <td className="pb-3 text-end">
                          <span>$305.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th className="border-0">
                          <span className="fw-medium"> {t("streamShop.total")}</span>
                        </th>
                        <td className="border-0 text-end">
                          <span className="fw-bold">$305.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="button-primary pt-3">
                    <CustomButton
                      buttonTitle={t("streamShop.proceed_to_checkout")}
                      link="/checkout"
                      linkButton="false"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

CartPage.displayName = "CartPage";
export default CartPage;
