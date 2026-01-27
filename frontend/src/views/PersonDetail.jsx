import React from "react";
import { generateImgPath, PersonDetail_all, PersonDetail_movies, PersonDetail_tvshow } from "../StaticData/data";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import PersonDetail_Card from "../components/PersonDetail_Card";

// the hook
import { useTranslation } from "react-i18next";

const PersonDetail_Page = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className="section-padding personality-detail">
        <Container fluid className="container-fluid">
          <Row>
            <Col md={3}>
              <div className="cast-box position-relative">
                <img
                  src={generateImgPath(
                    "/assets/images/cast/charles-melton.webp"
                  )}
                  className="img-fluid object-cover w-100 rounded-3"
                  alt="person"
                  loading="lazy"
                />
              </div>
              <h5 className="mt-5 pt-4 mb-4 text-white fw-500">
                {t("persondesc.personal_details")}
              </h5>
              <ul className="list-inline p-0 m-0">
                <li className="mb-3">
                  <h5 className="mt-0 mb-2">{t("persondesc.born")}</h5>
                  <ul className="person-birth-detail d-flex align-items-center flex-wrap column-gap-5 row-gap-1 p-0 m-0">
                    <li className="list-group-item">{t("persondesc.birthday")}: 1985-03-22 </li>
                  </ul>
                </li>
              </ul>
            </Col>
            <Col md={9} className="mt-5 mt-md-0">
              <h4 className="mb-3">{t("favouritePersonalities.charles_melton")}</h4>
              <ul className="person-category d-flex flex-wrap align-items-center gap-5 ps-0">
                <li className="list-group-item">
                  <Link to="">{t("persondesc.actor")}</Link>
                </li>
              </ul>

              <p>
               {t("favouritePersonalities.charles_melton_description")}
              </p>
              <div className="actor-history">
                <div className="">
                  <h4 className="">{t("persondesc.person_history")}</h4>
                </div>
              </div>
              {/* {{!-- tab start --}} */}
              <div className="content-details trending-info personal-detail">
                <Tab.Container defaultActiveKey="all" transition={true}>
                  <Nav
                    className="nav nav-underline d-flex nav-pills align-items-center text-center my-5"
                    role="tablist"
                  >
                    <Nav.Item className="">
                      <Nav.Link eventKey="all" className="nav-link fw-bold">
                        {t("persondesc.all")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="">
                      <Nav.Link eventKey="movies" className="nav-link fw-bold">
                        {t("streamPages.movie")}
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="">
                      <Nav.Link eventKey="tvshows" className="nav-link fw-bold">
                        {t("streamPages.tv_show")}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content className="tab-content personal-detail-tab-content">
                    <Tab.Pane
                      eventKey="all"
                      className="animated fadeInUp show"
                      role="tabpanel"
                    >
                      <div className="description-content">
                        <Row className="gy-5">
                          {/* All tab content here */}
                          {PersonDetail_all.map((data, idx) => {
                            return (
                                <Col xl={4} sm={6} key={`all-${idx}`}>
                                  <PersonDetail_Card
                                    productlink={data.productlink}
                                    image={data.image}
                                    producttitle={data.producttitle}
                                    productyear={data.productyear}
                                  ></PersonDetail_Card>
                                </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="movies"
                      className="animated fadeInUp show"
                      role="tabpanel"
                    >
                      <div className="description-content">
                        <Row className="gy-5">
                          {PersonDetail_movies.map((data, idx) => {
                            return (
                                <Col xl={4} sm={6} key={`movies-${idx}`}>
                                  <PersonDetail_Card
                                    productlink={data.productlink}
                                    image={data.image}
                                    producttitle={data.producttitle}
                                    productyear={data.productyear}
                                  ></PersonDetail_Card>
                                </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </Tab.Pane>

                    <Tab.Pane
                      eventKey="tvshows"
                      className="animated fadeInUp show"
                      role="tabpanel"
                    >
                      <div className="source-list-content">
                        <Row className="gy-5">
                          {PersonDetail_tvshow.map((data, idx) => {
                            return (
                                <Col xl={4} sm={6} key={`tvshows-${idx}`}>
                                  <PersonDetail_Card
                                    productlink={data.productlink}
                                    image={data.image}
                                    producttitle={data.producttitle}
                                    productyear={data.productyear}
                                  ></PersonDetail_Card>
                                </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              {/* {{!-- tab end --}} */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PersonDetail_Page;