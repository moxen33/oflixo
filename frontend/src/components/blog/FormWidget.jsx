import React, { Fragment, memo } from "react";

//react-bootstrap
import { Button, Col, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";
// the hook
import { useTranslation } from "react-i18next";

const FormWidget = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row className="blog-nav mt-3 mt-md-0 mb-5 mb-lg-0">
        <Col lg="6" className="col-6 blog-next-post">
          <Link to={props.prevLink ? `${props.prevLink}` : "/blogs-detail"}>
            <span className="fw-semibold d-none d-md-block">
              {t("streamForm.amy_admas")}
            </span>
            <div className="blog-arrow mt-3 d-flex align-items-center">
              <i className="ph ph-arrow-left"></i>
              <span className="previous fw-medium fst-italic">
                {" "}
                {t("streamForm.previous_post")}
              </span>
            </div>
          </Link>
        </Col>
        <Col lg="6" className="col-6 blog-next-post  text-end">
          <Link to={props.nextLink ? `${props.nextLink}` : "/blog-single/audio"}>
          <span className="fw-semibold d-none d-md-block">
              {t("streamForm.gillian_shares")}
            </span>
            <div className="blog-arrow d-flex align-items-center justify-content-end mt-3">
              <span className="next fw-medium fst-italic">
                {" "}
                {t("streamForm.next_post")}
              </span>{" "}
              <i className="ph ph-arrow-right"></i>
            </div>
            
          </Link>
        </Col>
      </Row>
      <h3 className="comments-title mb-4 pb-2">
                <span>0 {t("streamBlog.comments")}</span>
              </h3>
      <Form>
        <h3 className="mb-4">{t("streamForm.leave_reply")}</h3>
        <p className="mb-5">
          {t("streamAccount.logged_jenny")}{" "}
          <span className="text-primary">{t("streamForm.edit_profile")}{" "}</span>
          {t("streamForm.require_fields")} *
        </p>
        <Row className="pt-3">
          <Col md="12">
            <Form.Group className="form-group mb-0">
              <textarea
                className="form-control rounded-3"
                name="comment"
                cols={5}
                rows={8}
                required
                placeholder={`${t('streamBlog.comment')}*`}
              ></textarea>
            </Form.Group>
          </Col>
          <Col md="12">
            <div className="form-submit mt-5">
              <div className="iq-button">
                <Button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="text-capitalize position-relative rounded-3"
                >
                  <span className="button-text">{t("streamForm.post_comment")}</span>{" "}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
});

FormWidget.displayName = "FormWidget";
export default FormWidget;
