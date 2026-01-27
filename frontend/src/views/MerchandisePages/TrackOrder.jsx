import React, { memo, Fragment } from "react";

// react-bootstrap
import { Container, Table, Row, Col } from "react-bootstrap";

// Components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const TrackOrder = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamPages.order_tracking")} />
      <section className="section-padding">
        <Container>
          <div className="px-3">
            <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
              <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
                <li className="cart-page-item d-flex align-items-center gap-1">
                  <span className=" cart-pre-number  border-radius rounded-circle  me-1">
                    1
                  </span>{" "}
                  <span className="cart-page-link d-flex align-items-center">
                    {t("streamShop.shopping_cart")}
                  </span>
                </li>
                <li className="cart-page-item d-flex justify-content-center">
                  <i className="ph ph-caret-circle-right fs-4"></i>
                </li>
                <li className="cart-page-item d-flex align-items-center gap-1 ">
                  <span className=" badge cart-pre-number  border-radius rounded-circle me-1">
                    2
                  </span>{" "}
                  <span className="cart-page-link ">{t("streamShop.checkout")} </span>
                </li>
                <li className="cart-page-item d-flex align-items-center">
                  <i className="ph ph-caret-circle-right fs-4"></i>
                </li>
                <li className="cart-page-item d-flex align-items-center gap-1 active">
                  <span className="cart-pre-heading cart-pre-number bg-primary border-radius rounded-circle me-1">
                    3
                  </span>{" "}
                  <span className="cart-page-link ">
                    {t("streamShop.order_summary")}{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="order">
              <p className="thank">{t("streamShop.thankyou")}</p>
              <ul className="details list-inline">
                <li className="detail">
                  {t("streamShop.order_number")}
                  <strong>15823</strong>
                </li>
                <li className="detail text-uppercase">
                  {t("streamKeyword.date")}:<strong className="text-capitalize">June 22, 2022</strong>
                </li>
                <li className="detail">
                  {t("streamAccount.email")}
                  <strong>jondoe@gmail.com</strong>
                </li>
                <li className="detail">
                  {t("streamShop.total")}
                  <strong>$25.00</strong>
                </li>
                <li className="detail text-uppercase">
                  {t("streamShop.payment_method")}
                  <strong className=" text-lowercase">
                    {t("streamShop.bank_transfer")}
                  </strong>
                </li>
              </ul>
            </div>
            <h5 className="order_details mb-5">{t("streamShop.order_details")}</h5>
            <Row>
              <Col sm="12">
                <section className="maintable table-responsive">
                  <Table className="table table-border">
                    <thead>
                      <tr>
                        <th className="fw-bold text-white">
                          {t("streamShop.product")}
                        </th>
                        <th className="fw-bold text-white">
                          {t("streamShop.total")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="order_item">
                        <td>
                          <Link to="/product-detail">
                            {t("streamShop.product1")}{" "}
                          </Link>
                          <strong className="product-quantity">×&nbsp;1</strong>
                        </td>
                        <td className="">
                          <span className="amount">
                            <bdi>
                              <span className="">$</span>25.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="order_item">
                        <th className="fw-bold text-white">
                          {t("streamShop.subtotal")}:
                        </th>
                        <td className="">
                          <span className="amount fw-bold text-white">
                            <span className="">$</span>25.00
                          </span>
                        </td>
                      </tr>
                      <tr className="order_item">
                        <th className="fw-bold text-white">
                          {t("streamShop.payment_method")}
                        </th>
                        <td className="fw-bold text-white">
                          {t("streamShop.bank_transfer")}
                        </td>
                      </tr>
                      <tr>
                        <th className="fw-bold text-white">
                          {t("streamShop.total")}:
                        </th>
                        <td className="">
                          <span className="amount fw-bold text-white">
                            <span className="">$</span>25.00
                          </span>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                </section>
              </Col>
              <Col sm="12">
                <h5 className="order_details mb-5">
                  {t("streamShop.billing_addess")}
                </h5>
                <div className="bill_section">
                  <address>
                   {t("streamShop.name_ginger")}<br></br>{t("streamShop.company_chase")}<br></br>{t("streamShop.address_24white")}
                    {t("streamShop.name_fabien")}<br></br>{t("streamShop.latin_quasi")}<br></br>{t("streamShop.latin_etvol")}<br></br>{t("streamShop.country_india")}<br></br>{t("streamShop.tag_fuga")}<br></br>{t("streamShop.country_virgin")}
                    <p className="d-flex align-items-center my-3">
                      <i className="ph ph-phone me-2"></i>
                      <span>+13496874424</span>
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="ph ph-envelope-simple me-2"></i>
                      <span>palawojewa@mailinator.com</span>
                    </p>
                  </address>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
});

TrackOrder.displayName = "TrackOrder";
export default TrackOrder;
