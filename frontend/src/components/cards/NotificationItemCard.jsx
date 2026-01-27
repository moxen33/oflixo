import React, { memo } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const NotificationItem_Card = memo(({ image, title, days }) => {
  const { t } = useTranslation();
  return (
    <div className="notification-item">
      <div className="d-flex align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-md-center flex-md-row flex-column gap-3">
          <div className="notification-image flex-shrink-0">
            <Link
              to="/movie-detail"
              className="link-overlay"
              data-user_id="12"
              data-notification_id="1"
            >
              <img
                decoding="async"
                src={image}
                alt="image"
                className="img-fluid object-cover result-image"
              />
            </Link>
          </div>
          <div className="notification-message">
            <Link
              to="/movie-detail"
              className="link-overlay message"
              data-user_id="12"
              data-notification_id="1"
            >
              {t(title)}{" "}
            </Link>
            <span className="d-block">{t(days)} </span>
          </div>
        </div>
        <div className="notification-actions flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center gap-3">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-mark-read">{t("streamReview.mark_as_read")}</Tooltip>}
            >
              <Button
                type="button"
                variant="secondary"
                className="btn btn-secondary btn-circle border notification-action-btn"
                data-user_id="12"
                data-notification_id="1"
              >
                <i className="icon-eye-2"></i>
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
});

export default NotificationItem_Card;