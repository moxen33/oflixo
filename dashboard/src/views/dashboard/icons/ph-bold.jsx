import React, { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

//component
import IconComponent from "../../../components/icon-component";

// the hook
import { useTranslation } from "react-i18next";

const PhBold = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Card>
            <Card.Body>
              <h4 className="fw-bold">{t("header.ph_bold")}</h4>
              <div className="border-bottom mt-3"></div>
              <Row>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-bell"
                    name={t("icons.bell")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-phone"
                    name={t("icons.phone")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="ph-bold ph-dog" name={t("icons.dog")} />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-fish"
                    name={t("icons.fish")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="ph-bold ph-bug" name={t("icons.bug")} />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-down"
                    name={t("icons.caret-down")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-left"
                    name={t("icons.caret-left")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-right"
                    name={t("icons.caret-right")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-up"
                    name={t("icons.caret-up")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-circle-double-left"
                    name={t("icons.caret-circle-double-left")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-caret-circle-double-right"
                    name={t("icons.caret-circle-double-right")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-download"
                    name={t("icons.download")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-navigation-arrow"
                    name={t("icons.location-arrow")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-share"
                    name={t("icons.share")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-rewind"
                    name={t("icons.rewind")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-play"
                    name={t("icons.play")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-pause"
                    name={t("icons.pause")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-arrows-clockwise"
                    name={t("icons.arrows-clockwise")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-speaker-low"
                    name={t("icons.speaker-low")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-speaker-simple-x"
                    name={t("icons.speaker-simple-x")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-speaker-x"
                    name={t("icons.speaker-x")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-speaker-high"
                    name={t("icons.speaker-high")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-youtube-logo"
                    name={t("icons.youtube-logo")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="ph-bold ph-car" name={t("icons.car")} />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-truck"
                    name={t("icons.truck")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-tree"
                    name={t("icons.tree")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-pinterest-logo"
                    name={t("icons.pinterest-logo")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-file-js"
                    name={t("icons.file-js")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-buildings"
                    name={t("icons.buildings")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-note-pencil"
                    name={t("icons.note-pencil")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-copy"
                    name={t("icons.copy")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-scissors"
                    name={t("icons.cut")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent class="ph-bold ph-pen" name={t("icons.pen")} />
                </Col>
                <Col lg="3">
                  <IconComponent class="ph-bold ph-tag" name={t("icons.tag")} />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-buildings"
                    name={t("icons.buildings")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-list-checks"
                    name={t("icons.tasks")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-chat-centered-text"
                    name={t("icons.comment")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-video"
                    name={t("icons.video")}
                  />
                </Col>
                <Col lg="3">
                  <IconComponent
                    class="ph-bold ph-smiley"
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

PhBold.displayName = "ph-bold Bold";
export default PhBold;
