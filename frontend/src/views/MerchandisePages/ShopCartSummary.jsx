import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../../components/partials/theme/breadcrumb-widget";

// the hook
import { useTranslation } from "react-i18next";

const ShopCartSummary = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title="Cart Summary" />
      <Container fluid>
        <div className="page-header">
          <ul className="page-items">
            <li className="page_item active">
              <span className="pre-heading"> 1 </span>
              <span className="page_link">{t("streamShop.shopping_cart")}</span>
            </li>
            <li className="page_item">
              <span className="pre-heading"> 2 </span>
              <span className="page_link">{t("streamShop.checkout")}</span>
            </li>
            <li className="page_item">
              <span className="pre-heading"> 3 </span>
              <span className="page_link">{t("streamShop.order_summary")}</span>
            </li>
          </ul>
        </div>
        <div className="order">
          <p className="thank">{t("streamShop.thankyou")}.</p>
          <ul className="details">
            <li className="detail">
              {t("streamShop.order_number")}:<strong>15823</strong>
            </li>
            <li className="detail">
              {t("streamKeyword.date")}:<strong>June 22, 2022</strong>
            </li>
            <li className="detail">
              {t("streamAccount.email")}:<strong>jondoe@gmail.com</strong>
            </li>
            <li className="detail">
              {t("streamShop.total_")}<strong>$25.00</strong>
            </li>
            <li className="detail">
              {t("streamShop.payment_method")}:
              <strong>{t("streamShop.bank_transfer")}</strong>
            </li>
          </ul>
        </div>
        <h5 className="order_details">Order Details</h5>
        <Row>
          <Col lg="8">
            <section className="maintable">
              <table className="shop_table">
                <thead>
                  <tr>
                    <th className="product-name">{t("streamShop.product_")}</th>
                    <th className="product-total">{t("streamShop.total")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="order_item">
                    <td className="product-name">
                      <Link to="#">Back Pack &nbsp;</Link>
                      <strong className="product-quantity">×&nbsp;1</strong>
                    </td>
                    <td className="product-total">
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
                    <th scope="row bill-total">{t("streamShop.subtotal")}:</th>
                    <td>
                      <span className="amount">
                        <span className="">$</span>25.00
                      </span>
                    </td>
                  </tr>
                  <tr className="order_item">
                    <th scope="row bill-total">{t("streamShop.payment_method")}:</th>
                    <td>{t("streamShop.bank_transfer")}</td>
                  </tr>
                  <tr>
                    <th scope="row bill-total">{t("streamShop.total")}:</th>
                    <td>
                      <span className="amount">
                        <span className="">$</span>25.00
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </section>
          </Col>
          <Col lg="4">
            <section className="bill_section">
              <h5 className="bill_address">{t("streamShop.billing_addess")}</h5>
              <address>
                <div className="table-responsive bill_table">
                  <table>
                    <tbody className="bill_body">
                      <tr>
                        <td className="label-name">{t("streamAccount.name")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("favouritePersonalities.ava_monroe")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("streamAccount.company")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("favouritePersonalities.ava_monroe")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("streamAccount.country")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("streamAccount.us")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("streamShop.addresses")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("favouritePersonalities.jack_walkerc")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("streamAccount.email")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">jondoe@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("streamAccount.phone")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">96465216515</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </address>
            </section>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
});

ShopCartSummary.displayName = "ShopCartSummary";
export default ShopCartSummary;
