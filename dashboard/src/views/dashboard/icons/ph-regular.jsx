import React, { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

//component
import IconComponent from "../../../components/icon-component";

// the hook
import { useTranslation } from "react-i18next";

const PhRegular = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Card>
            <Card.Body>
              <h4 className="fw-bold">{t("header.ph_regular")}</h4>
              <div className="border-bottom mt-3"></div>
              <Row>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-bell"
                    name={t("icons.bell")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-phone"
                    name={t("icons.phone")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-dog"
                    name={t("icons.dog")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-fish"
                    name={t("icons.fish")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-bug"
                    name={t("icons.bug")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-down"
                    name={t("icons.caret-down")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-left"
                    name={t("icons.caret-left")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-right"
                    name={t("icons.caret-right")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-up"
                    name={t("icons.caret-up")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-circle-double-left"
                    name={t("icons.caret-circle-double-left")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-caret-circle-double-right"
                    name={t("icons.caret-circle-double-right")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-download"
                    name={t("icons.download")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-navigation-arrow"
                    name={t("icons.location-arrow")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-share"
                    name={t("icons.share")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-rewind"
                    name={t("icons.rewind")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-play"
                    name={t("icons.play")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-pause"
                    name={t("icons.pause")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-arrows-clockwise"
                    name={t("icons.arrows-clockwise")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-speaker-low"
                    name={t("icons.speaker-low")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-speaker-simple-x"
                    name={t("icons.speaker-simple-x")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-speaker-x"
                    name={t("icons.speaker-x")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-speaker-high"
                    name={t("icons.speaker-high")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-youtube-logo"
                    name={t("icons.youtube-logo")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-car"
                    name={t("icons.car")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-truck"
                    name={t("icons.truck")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-tree"
                    name={t("icons.tree")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-pinterest-logo"
                    name={t("icons.pinterest-logo")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-file-js"
                    name={t("icons.file-js")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-buildings"
                    name={t("icons.buildings")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-note-pencil"
                    name={t("icons.note-pencil")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-copy"
                    name={t("icons.copy")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-scissors"
                    name={t("icons.cut")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-pen"
                    name={t("icons.pen")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-tag"
                    name={t("icons.tag")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-buildings"
                    name={t("icons.buildings")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-list-checks"
                    name={t("icons.tasks")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-chat-centered-text"
                    name={t("icons.comment")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-video"
                    name={t("icons.video")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph ph-smiley"
                    name={t("icons.smile")}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
});

PhRegular.displayName = "Ph Regular";
export default PhRegular;
