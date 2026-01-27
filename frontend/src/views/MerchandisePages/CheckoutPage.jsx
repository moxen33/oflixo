import React, { memo, Fragment, useState } from "react";

// react-bootstrap
import { Container, Form, Row, Col, Table, Collapse } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import CustomButton from "../../components/CustomButton";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";

const CheckoutPage = memo(() => {
  const { t } = useTranslation();

  const options1 = [
    { value: `${t("streamAccount.india")}`, label: `${t("streamAccount.india")}` },
    {
      value: `${t("streamAccount.united_kindom")}`,
      label: `${t("streamAccount.united_kindom")}`,
    },
    {
      value: `${t("streamAccount.united_states")}`,
      label: `${t("streamAccount.united_states")}`,
    },
    { value: `${t("streamAccount.australia")}`, label: `${t("streamAccount.australia")}` },
    { value: `${t("streamAccount.north_corea")}`, label: `${t("streamAccount.north_corea")}` },
  ];

  const options2 = [
    { value: `${t("streamAccount.colorado")}`, label: `${t("streamAccount.colorado")}` },
    { value: `${t("streamAccount.alaska")}`, label: `${t("streamAccount.alaska")}` },
    { value: `${t("streamAccount.hawai")}`, label: `${t("streamAccount.hawai")}` },
    { value: `${t("streamAccount.texas")}`, label: `${t("streamAccount.texas")}` },
    { value: `${t("streamAccount.washington")}`, label: `${t("streamAccount.washington")}` },
  ];

  const [show, setShow] = useState(false);
  const [activePayment, setActivePayment] = useState(1); // Track which payment method is active

  const handleRadioChange = (paymentMethod) => {
    setActivePayment(paymentMethod); // Update the active payment method based on the selected radio button
  };
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamShop.checkout")} />
      <div className="checkout-page  section-padding">
        <Container>
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
              <li className="cart-page-item d-flex align-items-center gap-1 active">
                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                  2
                </span>{" "}
                <span className="cart-page-link ">{t("streamShop.checkout")} </span>
              </li>
              <li className="cart-page-item d-flex align-items-center">
                <i className="ph ph-caret-circle-right fs-4"></i>
              </li>
              <li className="cart-page-item d-flex align-items-center gap-1">
                <span className=" cart-pre-number  border-radius rounded-circle me-1">
                  3
                </span>{" "}
                <span className="cart-page-link ">
                  {t("streamShop.order_summary")}{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-5 woocommerce-info-coupon">
            <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
              <div className="woocommerce-info">
                <span className="text-body ps-2">
                  {t("streamShop.have_a_coupon")}
                </span>{" "}
                <Link to="#" onClick={() => setShow(!show)}>
                  {t("streamShop.enter_code")}
                </Link>
              </div>
            </div>
            <Collapse in={show} id="apply-coupon" className=" mt-5">
              <Form className="checkout-coupon">
                <p className="mt-0">{t("streamShop.apply_coupon_code")}</p>
                <div className="iq-checkout-coupon">
                  <input
                    name="coupon-code"
                    type="text"
                    required="required"
                    placeholder="Coupon code"
                    className="form-control"
                  />
                  <div className="mt-4">
                    <CustomButton
                      buttonTitle={t("streamButtons.apply_coupon")}
                      link="#"
                      linkButton="false"
                    />
                  </div>
                </div>
              </Form>
            </Collapse>
          </div>
          <Row>
            <Col lg="6">
              <Form action="">
                <h3 className="mb-4">{t("streamShop.billing_details")}</h3>
                <Form.Group className="form-group">
                  <Row>
                    <Col md="6">
                      <Form.Label className="text-capitalize">
                        {t("streamAccount.first_name")}{" "}
                        <span className="text-primary">*</span>
                      </Form.Label>
                      <Form.Control
                        name="first-name"
                        type="text"
                        required="required"
                      />
                    </Col>
                    <Col md="6">
                      <Form.Label className="text-capitalize">
                        {t("streamAccount.last_name")}{" "}
                        <span className="text-primary">*</span>
                      </Form.Label>
                      <Form.Control
                        name="last-name"
                        type="text"
                        required="required"
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">{t("streamAccount.company_name")}</Form.Label>
                  <Form.Control
                    name="billing-company"
                    type="text"
                    required="required"
                  />
                </Form.Group>
                <Form.Group className="form-group iq-custom-checkout">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.city_region")} <span className="text-primary">*</span>
                  </Form.Label>
                  <ChoicesJs
                    options={options1}
                    className="js-choice"
                    select="one"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.street_address")}{" "}
                    <span className="text-primary">*</span>
                  </Form.Label>
                  <Form.Control
                    name="billing-address"
                    type="text"
                    required="required"
                    placeholder={t("streamAccount.billing_address")}
                    className="mb-2"
                  />
                  <Form.Control
                    name="billing-address2"
                    type="text"
                    required="required"
                    placeholder={t("streamAccount.apartment")}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.town_city")} <span className="text-primary">*</span>
                  </Form.Label>
                  <Form.Control name="city" type="text" required="required" />
                </Form.Group>
                <Form.Group className="form-group iq-custom-checkout">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.state")} <span className="text-primary">*</span>
                  </Form.Label>
                  <ChoicesJs
                    options={options2}
                    className="js-choice"
                    select="one"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.pin_code")} <span className="text-primary">*</span>
                  </Form.Label>
                  <Form.Control
                    name="postcode"
                    type="text"
                    required="required"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.phone")} <span className="text-primary">*</span>
                  </Form.Label>
                  <Form.Control name="phone" type="tel" required="required" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="text-capitalize">
                    {t("streamAccount.email_address")}{" "}
                    <span className="text-primary">*</span>
                  </Form.Label>
                  <Form.Control
                    name="billing-company"
                    type="email"
                    required="required"
                    className="rounded-0 mb-5"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg="6">
              <h3 className="mb-4">{t("streamShop.additional_information")}</h3>
              <div className="mb-4">
                <label className="mb-2">{t("streamShop.order_notes")}</label>
                <textarea
                  name="your-message"
                  placeholder={t("streamShop.order_notes_eg")}
                  className="form-control mb-5"
                  required
                ></textarea>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <h3>Your Order</h3>
              <div className="order_review-box">
                <h5 className="mb-3 mt-0 mt-md-2">{t("streamShop.product")}</h5>
                <div className="checkout-review-order">
                  <Table className="table cart-table" responsive>
                    <thead >
                      <tr>
                        <th scope="col" className="font-size-18 fw-bold">
                          {t("streamShop.product")}
                        </th>
                        <th scope="col" className="font-size-18 fw-bold">
                          {t("streamShop.subtotal")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="text d-flex align-items-center gap-1">
                            <span className="text-body">{t("streamShop.product1")}</span>
                            <span className="font-size-12">&nbsp;x</span>
                            <strong className="text-white  fw-bold">&nbsp;1</strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="text-body">
                              <span>$</span>28.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="text d-flex align-items-center gap-1">
                            <span className="text-body">{t("streamShop.product7")}</span>
                            <span className="font-size-12">&nbsp;x</span>
                            <strong className="text-white  fw-bold">&nbsp;1</strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="text-body">
                              <span>$</span>25.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          <div className="text  d-flex align-items-center gap-1">
                            <span className="text-body">{t("streamShop.product5")}</span>
                            <span className="font-size-12">&nbsp;x</span>
                            <strong className="text-white  fw-bold">&nbsp;1</strong>
                          </div>
                        </td>
                        <td className="product-total">
                          <span className="Price-amount">
                            <bdi className="text-body">
                              <span>$</span>18.00
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="">
                        <td className="p-3 fw-bold font-size-18 border-0">
                          {t("streamShop.subtotal")}
                        </td>
                        <td className="p-3 fw-bold border-0">
                          <span className="mb-0 text-body">$71.00</span>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-3 fw-bold font-size-18 border-0">
                          {t("streamShop.total")}
                        </td>
                        <td className="p-3 fw-bold border-0">
                          <span className="mb-0">$71.00</span>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                  <div className="checkout-payment">
                    <div className="payment-box border-bottom mb-4 pt-4 p-3">
                      <div className="accordion" id="accordionPayment">
                        <div className="accordion-item-payment">
                          <h6 className="accordion-header" id="payment-1">
                            <div
                              className="accordion-button-payment"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOnepayment"
                              aria-expanded={
                                activePayment === 1 ? "true" : "false"
                              }
                              aria-controls="collapseOnepayment"
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  checked={activePayment === 1}
                                  onChange={() => handleRadioChange(1)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  {t("streamShop.bank_transfer")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <Collapse
                            in={activePayment === 1}
                            id="collapseOnepayment"
                          >
                            <div className="accordion-body">
                              {t("streamShop.make_direct_payment")}
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item-payment">
                          <h6 className="accordion-header" id="payment-2">
                            <div
                              className="accordion-button-payment"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwopayment"
                              aria-expanded={
                                activePayment === 2 ? "true" : "false"
                              }
                              aria-controls="collapseTwopayment"
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  onChange={() => handleRadioChange(2)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  {t("streamShop.cheque_payments")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <Collapse
                            in={activePayment === 2}
                            id="collapseTwopayment"
                          >
                            <div className="accordion-body">
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </div>
                          </Collapse>
                        </div>
                        <div className="accordion-item-payment">
                          <h6 className="accordion-header" id="payment-3">
                            <div
                              className="accordion-button-payment"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThreepayment"
                              aria-expanded={
                                activePayment === 3 ? "true" : "false"
                              }
                            >
                              <span className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault3"
                                  onChange={() => handleRadioChange(3)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault3"
                                >
                                  {t("streamShop.cod")}
                                </label>
                              </span>
                            </div>
                          </h6>
                          <Collapse
                            in={activePayment === 3}
                            id="collapseThreepayment"
                            className=""
                          >
                            <div className="accordion-body">
                              Pay with cash upon delivery.
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 p-3 pb-0">
                      {t("streamShop.your_personal_data")}{" "}
                      <Link to="/PrivacyPolicy">
                        {t("streamShop.privacy_policy")}
                      </Link>
                      .
                    </p>
                    <div className="text-end pb-3 pe-3">
                    <CustomButton
                      buttonTitle={t("streamShop.place_order")}
                      link="/track-order"
                      linkButton="false"
                    />
                    </div>
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

CheckoutPage.displayName = "CheckoutPage";
export default CheckoutPage;
