import React, { memo, Fragment } from "react";

// react-bootstrap
import { Table } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import CustomButton from "../../components/CustomButton";

// img
import img1 from "/assets/images/shop/product/01.webp";
import img2 from "/assets/images/shop/product/02.webp";
import img3 from "/assets/images/shop/product/03.webp";

// the hook
import { useTranslation } from "react-i18next";

//sweetalert2
import Swal from "sweetalert2-neutral";

const WishlistPage = memo(() => {
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
      <BreadCrumbWidget title={t("streamPages.wishlist")} />
      <div className="wishlist-page section-padding">
        <div className="container">
          <div className="wishlist-section px-2">
          <h2 className="mb-5 custom-wishlist-title">{t("streamShop.my_wishlist")}</h2>
          <Table className="table cart-table mb-0" responsive>
            <thead className="border-bottom">
              <tr>
                <th className="fw-medium font-size-18"></th>
                <th className="fw-medium font-size-18"></th>
                <th className="fw-medium font-size-18">
                  {t("streamShop.product_name")}
                </th>
                <th className="fw-medium font-size-18">{t("streamShop.unit_price")}</th>
                <th className="fw-medium font-size-18">
                  {t("streamShop.stock_status")}
                </th>
                <th className="fw-medium font-size-18"></th>
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
                <td className="product-img">
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="#">
                      <img className="avatar-80" src={img1} alt="img" />
                    </Link>{" "}
                  </div>
                </td>
                <td>
                  <Link to="/product-detail" className="product-name">
                    {t("streamShop.product1")}
                  </Link>
                </td>
                <td>
                  <span className="fw-medium">$25.00</span>
                </td>
                <td>
                  <span>{t("streamShop.in_stock")}</span>
                </td>
                <td className="text-center">
                  <span className="text-primary">
                    {t("streamButtons.add_to_cart")}
                  </span>
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
                <td className="product-img">
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="#">
                      <img className="avatar-80" src={img2} alt="img" />
                    </Link>{" "}
                  </div>
                </td>
                <td>
                  <Link to="/product-detail" className="product-name">
                    {t("streamShop.product2")}
                  </Link>
                </td>
                <td>
                  <span className="fw-medium">$13.00</span>
                </td>
                <td>
                  <span>{t("streamShop.in_stock")}</span>
                </td>
                <td className="text-center">
                  <span className="text-primary">
                    {t("streamButtons.add_to_cart")}
                  </span>
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
                <td className="product-img">
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="">
                      <img className="avatar-80" src={img3} alt="img" />
                    </Link>{" "}
                  </div>
                </td>
                <td>
                  <Link to="/product-detail" className="product-name">
                    {t("streamShop.product3")}
                  </Link>
                </td>
                <td>
                  <span className="fw-medium">$18.00 – $45.00</span>
                </td>
                <td>
                  <span>Out of Stock</span>
                </td>
                <td className="text-center">
                  <span className="text-primary">
                    {t("streamButtons.add_to_cart")}
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="product-social-share mt-5">
            <h5 className="fs-4">Share On:</h5>
            <ul className="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-3">
              <li className="flex-shrink-0">
                <Link
                  to="https://www.facebook.com/"
                  className="d-inline-block border-radius rounded-circle bg-primary text-white text-center"
                  target="_blank"
                >
                  <i className="icon icon-facebook-share"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://twitter.com/"
                  className="d-inline-block border-radius rounded-circle bg-info text-white text-center d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <i className="ph ph-x-logo"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://in.pinterest.com/"
                  className="d-inline-block border-radius rounded-circle bg-danger text-white text-center d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <i className="icon icon-pinterest-share"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://iqonic.design/"
                  className="d-inline-block border-radius rounded-circle bg-warning text-white text-center d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <i className="ph ph-envelope-simple fs-5"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://www.whatsapp.com/"
                  className="d-inline-block border-radius rounded-circle bg-success text-white text-center d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <i className="ph ph-whatsapp-logo fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

WishlistPage.displayName = "WishlistPage";
export default WishlistPage;
