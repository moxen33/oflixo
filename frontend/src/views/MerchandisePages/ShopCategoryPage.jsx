import { Fragment, memo, useEffect } from "react";

//react bootstrap
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";

//router
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import ShopCategorySidebar from "../../components/merchandise/ShopCategorySidebar";
import CardShopListView from "../../components/merchandise/Cardshoplistview";
import CardShopGridView from "../../components/merchandise/Cardshowgridview";

//static data
import { products } from "../../StaticData/shop";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getnewProductAsync } from "../../store/shop/actions";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/shop/selectors";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../components/choice";

const ShopCategoryPage = memo((props) => {
  const { t } = useTranslation();

  const options = [
    {
      value: `${t("streamShop.default_sorting")}`,
      label: `${t("streamShop.default_sorting")}`,
    },
    {
      value: `${t("streamShop.sort_by_popularity")}`,
      label: `${t("streamShop.sort_by_popularity")}`,
    },
    {
      value: `${t("streamShop.sort_by_rating")}`,
      label: `${t("streamShop.sort_by_rating")}`,
    },
    {
      value: `${t("streamShop.sort_by_latest")}`,
      label: `${t("streamShop.sort_by_latest")}`,
    },
    {
      value: `${t("streamShop.price_low_to_high")}`,
      label: `${t("streamShop.price_low_to_high")}`,
    },
    {
      value: `${t("streamShop.price_high_to_low")}`,
      label: `${t("streamShop.price_high_to_low")}`,
    },
  ];
  // selector
  const newProduct = useSelector(SettingSelector.newProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getnewProductAsync());
  });
  let filterWiseProducts = products;
  const length = products.length;

  return (
    <Fragment>
      <BreadCrumbWidget title={t("streamShop.product")} />
      <div className="section-padding">
        <Container fluid>
          <Row>
            <Col xl="9">
              <Tab.Container defaultActiveKey="third">
                <div className="d-flex align-items-center justify-content-between shop-filter flex-wrap gap-3">
                  <p className="mb-0">{t("streamShop.showing")}</p>
                  <div className="d-flex align-items-center">
                    <div className="product-view-button rounded-3">
                      <Nav
                        as="ul"
                        id="pills-tab"
                        className="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex gap-2 bg-transparent align-items-center list-inline"
                        role="tablist"
                      >
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="list-view-tab"
                            className="btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-list-view"
                            eventKey="first"
                            role="tab"
                            aria-selected="true"
                          >
                            <i className="ph ph-list-bullets grid-4x4 hover_effect active_effect"></i>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="grid-view-tab"
                            className="nav-link btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-grid-view"
                            eventKey="second"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icon-grid-2x2 grid-4x4 hover_effect active_effect"></i>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="grid-three-view-tab"
                            className="nav-link btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-grid-three-view-tab"
                            eventKey="third"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icon icon-grid-3x3 grid-4x4 hover_effect active_effect"></i>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                          as="li"
                          className="nav-item"
                          role="presentation"
                        >
                          <Nav.Link
                            id="grid-four-view-tab"
                            className="nav-link btn-sm btn-icon rounded-pill p-0"
                            data-toggle="pill"
                            data-bs-target="#pills-grid-four-view-tab"
                            eventKey="forth"
                            role="tab"
                            aria-selected="false"
                          >
                            <i className="icon icon-grid-4x4 grid-4x4"></i>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                    <div className="iq-custom-select d-inline-block shop-select">
                      <ChoicesJs
                        options={options}
                        className="js-choice"
                        select="one"
                      />
                    </div>
                  </div>
                </div>
                <Tab.Content defaultActiveKey="third">
                  {/* <!-- List View --> */}
                  <Tab.Pane
                    id="pills-list-view"
                    eventKey="first"
                    className="tab-pane fade show "
                    role="tabpanel"
                    data-current-page="1"
                  >
                    {filterWiseProducts.slice(0, 5).map((item, index) => {
                      return (
                        <Row
                          className=""
                          key={index}
                        >
                          <CardShopListView
                            thumbnail={item.thumbnail}
                            slug={item.slug}
                            is_sale={item.is_sale}
                            is_new={item.is_new}
                            product_name={t(item.product_name)}
                            price={item.price}
                            final_price={item.final_price}
                            rating="4"
                            count1="1"
                          />
                        </Row>
                      );
                    })}
                  </Tab.Pane>

                  <Tab.Pane
                    id="pills-grid-view"
                    eventKey="second"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="grid-view-tab"
                    tab-current-page="2"
                  >
                    <Row className="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-2">
                      {filterWiseProducts.slice(0, 6).map((item, index) => {
                        return (
                          <Col key={index}>
                            <CardShopGridView
                              thumbnail={item.thumbnail}
                              slug={item.slug}
                              is_sale={item.is_sale}
                              is_new={item.is_new}
                              product_name={t(item.product_name)}
                              price={item.price}
                              final_price={item.final_price}
                              rating="5"
                              count1="0"
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                  {/* <!-- Three Grid view --> */}
                  <Tab.Pane
                    id="pills-grid-view"
                    eventKey="third"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="grid-view-tab"
                    tab-current-page="3"
                  >
                    <Row className="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-3">
                      {filterWiseProducts.slice(0, 9).map((item, index) => {
                        return (
                          <Col key={index}>
                            <CardShopGridView
                              thumbnail={item.thumbnail}
                              slug={item.slug}
                              is_sale={item.is_sale}
                              is_new={item.is_new}
                              product_name={t(item.product_name)}
                              price={item.price}
                              final_price={item.final_price}
                              // rating={item.ratting}
                              // count1={5 - item.ratting}
                              rating="5"
                              count1="0"
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                  {/* <!-- Four Grid View --> */}
                  <Tab.Pane
                    id="pills-grid-view"
                    eventKey="forth"
                    className="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="grid-view-tab"
                    tab-current-page="4"
                  >
                    <Row className="row-col-data gy-5 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                      {filterWiseProducts.slice(0, 12).map((item, index) => {
                        return (
                          <Col key={index}>
                            <CardShopGridView
                              thumbnail={item.thumbnail}
                              slug={item.slug}
                              is_sale={item.is_sale}
                              is_new={item.is_new}
                              product_name={t(item.product_name)}
                              price={item.price}
                              final_price={item.final_price}
                              rating="5"
                              count1="0"
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              <div className="pagination justify-content-center my-5">
                <ul
                  className="pagination blog-pagination gap-2"
                  id="pagination"
                >
                  <li className="page-item">
                    <Link className="page-link rounded-3" to="#">
                      <i className="ph ph-arrow-left pageicon-lineheight"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link
                      className="page-link d-flex justify-content-center pageicon-lineheight rounded-3"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link d-flex justify-content-center pageicon-lineheight rounded-3"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link d-flex justify-content-center pageicon-lineheight rounded-3"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link rounded-3" to="#">
                      <i className="ph ph-arrow-right pageicon-lineheight"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="3">
              <div className="pe-3">
                <ShopCategorySidebar>
                  {newProduct.slice(0, 3).map((item, index, arr) => {
                    const rating = item.ratting || 0; // default to 0 if undefined
                    const fullStars = Math.floor(rating);
                    const hasHalfStar = rating % 1 !== 0;
                    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                    return (
                          <li className={`d-flex align-items-center ${index === arr.length - 1 ? "":"mb-4"}`}>
                            <div className="top-product-img pe-3">
                              <img src={item.thumbnail} className="img-fluid" />
                            </div>
                            <div className="">
                              <Link to="/product-detail" className="">
                                {t(item.product_name)}
                              </Link>
                              <div>
                                <del>{item.price}</del> {item.final_price}
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    {[...Array(fullStars)].map((_, i) => (
                                      <>
                                        <i
                                          key={`full-${i}`}
                                          className="ph-fill ph-star text-warning"
                                          aria-hidden="true"
                                        ></i>{" "}
                                      </>
                                    ))}
                                    {hasHalfStar && (
                                      <i
                                        className="ph-fill ph-star-half text-warning"
                                        aria-hidden="true"
                                      ></i>
                                    )}
                                    {[...Array(emptyStars)].map((_, i) => (
                                      <i
                                        key={`empty-${i}`}
                                        className="ph ph-star text-warning"
                                        aria-hidden="true"
                                      ></i>
                                    ))}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                    );
                  })}
                </ShopCategorySidebar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

ShopCategoryPage.displayName = "ShopCategoryPage";
export default ShopCategoryPage;
