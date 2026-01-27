import React, { Fragment, memo } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

// components
import BreadcrumbWidget from "../../components/BreadcrumbWidget";
import CastCard from "../../components/cards/CastCard";

// data
import { cast, cast_member } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

export const ListPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamPages.cast")} />
      <section className="section-padding">
        <Container fluid>
          <Row className="data-listing row gy-5 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5">
            {cast_member.map((item, index) => (
              <Col key={index}>
                <CastCard
                  title={t(item.title)}
                  category={item.designation}
                  image={item.profile_image}
                  castSubTitle={item.subtitle}
                  link={"/person-detail"}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

ListPage.displayName = "ListPage";
export default ListPage;
