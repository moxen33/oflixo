import React, { memo, Fragment, useState } from "react";

// react-bootstrap
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Form,
  Table,
  Collapse,
} from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import CustomButton from "../../components/CustomButton";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";
const MyAccount = memo(() => {
  const { t } = useTranslation();

  const options = [
    { value: `${t("streamAccount.choose")}`, label: `${t("streamAccount.choose")}` },
    { value: `${t("streamAccount.gujrat")}`, label: `${t("streamAccount.gujrat")}` },
    { value: `${t("streamAccount.dehli")}`, label: `${t("streamAccount.dehli")}` },
    { value: `${t("streamAccount.goa")}`, label: `${t("streamAccount.goa")}` },
    { value: `${t("streamAccount.haryana")}`, label: `${t("streamAccount.haryana")}` },
    { value: `${t("streamAccount.ladakh")}`, label: `${t("streamAccount.ladakh")}` },
  ];
  const options1 = [
    {
      value: `${t("streamAccount.chooes_country")}`,
      label: `${t("streamAccount.chooes_country")}`,
    },
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

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamPages.my_account_page")} />
      <div className="section-padding service-details">
        <Container>
          <div className="px-3">
            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col md="4">
                  <div className="acc-left-menu mb-5 mb-lg-0 mb-md-0">
                    <div className="product-menu">
                      <Nav
                        as="ul"
                        variant="tabs"
                        className="list-inline m-0 nav-tabs flex-column bg-transparent border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <Nav.Item as="li" className="pb-3">
                          <Nav.Link
                            eventKey="first"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.dashboard")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="second"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.orders")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="third"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.downloads")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="fourth"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.addresses")}</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="py-3">
                          <Nav.Link
                            eventKey="five"
                            className="p-0 bg-transparent"
                          >
                            <span className="">
                              {t("streamShop.account_details")}
                            </span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className="pt-3">
                          <Nav.Link
                            eventKey="sixth"
                            className="p-0 bg-transparent"
                          >
                            <span className="">{t("streamShop.logout")}</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="8">
                  <Tab.Content
                    id="product-menu-content"
                    className="product-menu-content"
                  >
                    <Tab.Pane className="fade" eventKey="first">
                      <div className="myaccount-content text-body p-4">
                        <p className="my-3">
                          {t("streamShop.greeting_hello")}{" "}
                          <strong>{t("streamShop.greeting_name")}</strong> (
                          <strong>{t("streamShop.greeting_notYou")}</strong>{" "}
                          <Link to="/login">{t("streamShop.greeting_logout")}</Link>)
                        </p>
                        <p>
                          {t("streamShop.dashboard_intro")}{" "}
                          <Link to="javascript:void(0)">
                            {t("streamShop.dashboard_orders")}
                          </Link>
                          , {t("streamShop.dashboard_manageYour")}{" "}
                          <Link to="javascript:void(0)">
                            {t("streamShop.dashboard_addresses")}
                          </Link>
                          , {t("streamShop.and")}{" "}
                          <Link to="javascript:void(0)">
                            {t("streamShop.dashboard_editDetails")}
                          </Link>
                          .
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="fade" eventKey="second">
                      <div className="orders-table text-body p-4">
                        <Table responsive>
                          <thead>
                            <tr className="border-bottom">
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.order")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.date")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.status")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.total")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamKeyword.actions")}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-bottom">
                              <th className="text-primary">#32604</th>
                              <td>October 28, 2022</td>
                              <td>{t("streamKeyword.cancelled")}</td>
                              <td>$215.00 For 0 Items</td>
                              <td>
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#32584</th>
                              <td>October 27, 2022</td>
                              <td>{t("streamKeyword.on_hold")}</td>
                              <td>$522.00 For 0 Items</td>
                              <td>
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#31756</th>
                              <td>October 19, 2022</td>
                              <td>{t("streamKeyword.processing")}</td>
                              <td>$243.00 For 0 Items</td>
                              <td>
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#23663</th>
                              <td>October 7, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$123.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr className="border-bottom">
                              <th className="text-primary">#23612</th>
                              <td>October 7, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$64.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-primary">#19243</th>
                              <td>April 1, 2022</td>
                              <td>{t("streamKeyword.completed")}</td>
                              <td>$159.00 For 0 Items</td>
                              <td className="">
                                <Link
                                  to="javascript:void(0)"
                                  className="btn btn-primary px-2 text-capitalize position-relative view-btn rounded-3"
                                >
                                  <span className="button-text">
                                    {t("streamKeyword.view")}
                                  </span>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="third">
                      <div className="orders-table text-body p-4">
                        <Table responsive>
                          <thead>
                            <tr className="border-bottom">
                              <th className="fw-bolder p-3">
                                {t("streamShop.product")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.download_remaining")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.expires")}
                              </th>
                              <th className="fw-bolder p-3">
                                {t("streamShop.download")}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="">
                                {t("streamShop.electric_toothbrush")}
                              </td>
                              <td>∞</td>
                              <td className="">{t("streamShop.never")}</td>
                              <td>
                                <Link
                                  to="#"
                                  className="px-2 btn btn-primary view-btn text-white"
                                  download
                                >
                                  {t("streamPages.download_movie")}
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="fourth">
                      <div className="text-body p-4">
                        <p className="my-3">{t("streamShop.default_addresses")}</p>
                        <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                          <h4 className="mb-0">{t("streamShop.billing_addess")}</h4>
                          <div className="iq-button">
                            <Link
                              to="#"
                              className="btn btn-primary text-capialize position-relative rounded-3"
                              onClick={() => setShow(!show)}
                            >
                              <span className="button-text">
                                {t("streamAccount.edit")}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <Collapse in={show} id="edit-address-1">
                          <div className="text-body mb-4">
                            <Form>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.company_name")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="Iqonic Design"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.country_region")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options1}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.street_address")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="House number and street name"
                                  defaultValue="4517 Kentucky"
                                  className="form-control mb-3 rounded-0"
                                  required="required"
                                />
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.town_city")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="city"
                                  defaultValue="Navsari"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.state")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.pin_code")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="pin code"
                                  defaultValue="396321"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.phone")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="number"
                                  defaultValue="1234567890"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.email_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  defaultValue="johndeo@gmail.com"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <CustomButton
                                  buttonTitle="Save Address"
                                  link="#"
                                  linkButton="false"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Collapse>
                        <div className="table-responsive">
                          <table className="edit-address w-100">
                            <tbody>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.name")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.john_deo")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.company")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamKeyword.iqonic_design")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.country")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.india")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamShop.addresses")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  4517 {t("streamAccount.washington_manchester")}.
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.email")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">johndeo@gmail.com</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.phone")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">1234567890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                          <h4 className="mb-0">{t("streamShop.shipping_address")}</h4>
                          <div className="iq-button">
                            <Link
                              to="#"
                              className="btn btn-primary text-capialize
                               position-relative rounded-3"
                              onClick={() => setShow1(!show1)}
                            >
                              <span className="button-text">
                                {t("streamAccount.edit")}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <Collapse in={show1} id="edit-address-2">
                          <div className="text-body mb-4">
                            <Form>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.company_name")}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="Iqonic Design"
                                  className="form-control"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.country_region")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options1}
                                    className="js-choice "
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.street_address")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="House number and street name"
                                  defaultValue="4517 Kentucky"
                                  className="form-control mb-3 rounded-0"
                                  required="required"
                                />
                                <Form.Control
                                  type="text"
                                  name="address"
                                  placeholder="Apartment, suite, unit, etc. (optional)"
                                  className="form-control mb-5 rounded-0"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.town_city")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="city"
                                  defaultValue="Navsari"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.state")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <div className="mb-5 iq-custom-select2">
                                  <ChoicesJs
                                    options={options}
                                    className="js-choice"
                                    select="one"
                                  />
                                </div>
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.pin_code")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="pin code"
                                  defaultValue="396321"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.phone")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="tel"
                                  name="number"
                                  defaultValue="1234567890"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.email_address")}&nbsp;
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  defaultValue="johndeo@gmail.com"
                                  required="required"
                                />
                              </Form.Group>
                              <Form.Group className="form-group">
                                <CustomButton
                                  buttonTitle="Save Address"
                                  link="#"
                                  linkButton="false"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Collapse>
                        <div className="table-responsive">
                          <table className="edit-address w-100" >
                            <tbody>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.name")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.john_deo")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.company")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamKeyword.iqonic_design")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.country")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">{t("streamAccount.india")}</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamShop.addresses")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">
                                  4517 {t("streamAccount.washington_manchester")}.
                                </td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.email")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">johndeo@gmail.com</td>
                              </tr>
                              <tr>
                                <td className="label-name p-2">
                                  {t("streamAccount.phone")}
                                </td>
                                <td className="seprator p-2">
                                  <span>:</span>
                                </td>
                                <td className="p-2">1234567890</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="five">
                      <div className="text-body p-4">
                        <Form>
                          <Row>
                            <Col lg="6">
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.first_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="first-name"
                                  defaultValue="John"
                                  className="form-control"
                                  required="required"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group mb-5">
                                <Form.Label className="mb-2">
                                  {t("streamAccount.last_name")}&nbsp;{" "}
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  name="last-name"
                                  defaultValue="deo"
                                  required="required"
                                />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.display_name")}&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="display-name"
                              defaultValue="John"
                              className="form-control"
                              required="required"
                            />
                          </Form.Group>
                          <em className="d-block mb-5">
                            This will be how your name will be displayed in the account section and in reviews
                          </em>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.email_address")}&nbsp;
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              defaultValue="johndeo@gmail.com"
                              className="form-control"
                              required="required"
                            />
                          </Form.Group>
                          <h4 className="fw-normal mb-5">
                            {t("streamAccount.password_change")}
                          </h4>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.current_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.new_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group className="form-group mb-5">
                            <Form.Label className="mb-2">
                              {t("streamAccount.confirm_password")}
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              className="form-control"
                            />
                          </Form.Group>
                          <Form.Group>
                            <CustomButton
                              buttonTitle={t("streamButtons.save_changes")}
                              link="#"
                              linkButton="false"
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className=" fade" eventKey="sixth">
                      <div className="p-4">
                        <div className="row">
                          <div className="col-md-6">
                            <h4 className="mb-5 text-primary">
                              {t("streamButtons.login")}
                            </h4>
                            <Form method="post">
                              <div className="mb-4">
                                <Form.Control
                                  type="text"
                                  name="user-name"
                                  placeholder={`${t("streamAccount.username_or_email")} *`}
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="password"
                                  name="pwd"
                                  placeholder={`${t("streamAccount.password")} *`}
                                  required
                                />
                              </div>
                              <Form.Check
                                type="checkbox"
                                id="remember"
                                label={t("streamShop.remember_me")}
                                className="mb-4"
                              ></Form.Check>
                              <CustomButton
                                buttonTitle={t("streamButtons.login")}
                                link="#"
                                linkButton="false"
                              />
                            </Form>
                            <div className="mt-3">
                              <Link
                                to="javascript:void(0)"
                                className="btn text-primary p-0 text-capitalize position-relative"
                              >
                                <span className="button-text">
                                  {t("streamAccount.lost_password")}
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <h4 className="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">
                              {t("streamButtons.register")}
                            </h4>
                            <Form method="post">
                              <div className="mb-4">
                                <Form.Control
                                  type="text"
                                  name="user-name"
                                  placeholder={`${t("streamAccount.username")} *`}
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="email"
                                  name="email-address"
                                  placeholder={`${t("streamAccount.email_address")} *`}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <div className="mb-4">
                                <Form.Control
                                  type="password"
                                  name="password"
                                  placeholder={`${t("streamAccount.password")} *`}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <p className="mb-5">
                                {" "}
                                {t("streamShop.user_personal_data")}{" "}
                                <Link to="/PrivacyPolicy">
                                  {" "}
                                  {t("streamShop.privacy_policy")}
                                </Link>
                                .
                              </p>
                              <CustomButton
                                buttonTitle={t("streamButtons.register")}
                                link="#"
                                linkButton="false"
                              />
                            </Form>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

MyAccount.displayName = "MyAccount";
export default MyAccount;
