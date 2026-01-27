import { useState, useEffect, memo, Fragment } from "react";

//react-bootstrap
import { Offcanvas, Row, Col } from "react-bootstrap";

//hooks
import { useTranslation } from "react-i18next";

// Redux Selector / Action
// import { useSelector } from 'react-redux';
import { useSelector } from "react-redux";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";
// Section Components
// Style Setting Section Components
import ColorCustomizer from "./sections/color-customizer";
import Direction from "./sections/direction";
const SettingOffCanvas = memo(() => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  // Define selectors
  const themeSchemeDirection = useSelector(
    SettingSelector.theme_scheme_direction
  );
  const themeColor = useSelector(SettingSelector.theme_color);
  return (
    <Fragment>
      <div className="rtl-box">
        <a
          className="btn btn-icon btn-setting"
          id="settingbutton"
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
        >
          <i className="ph ph-gear-six fs-5 text-white"></i>
        </a>
        <div
          className={`offcanvas ${themeSchemeDirection === "rtl" ? "offcanvas-start" : "offcanvas-end"}  live-customizer end ${show ? "show" : "hiding"
            }`}
        >
          <div className="offcanvas-header justify-content-between gap-1">
            <div className="d-flex align-items-center">
              <h5
                id="live-customizer-label"
                className="offcanvas-title text-dark"
              >
                {t("streamSetting.live_customizer")}
              </h5>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <button
                className="btn btn-icon text-primary"
                data-reset="settings"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                aria-label="Reset All Settings"
                data-bs-original-title="{{ t('streamTooltip.reset_all_settings') }}"
              >
                <span className="btn-inner">
                  <i className="ph ph-arrows-clockwise"></i>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-icon btn-close px-0 text-reset shadow-none text-dark"
                onClick={() => setShow(false)}
                aria-label="Close"
              >
                <i className="ph ph-x"></i>
              </button>
            </div>
          </div>
          <div className="offcanvas-body pt-0  ">
            <Row>
              <Col lg={12}>
                <Direction
                  themeSchemeDirection={themeSchemeDirection}
                ></Direction>
                <ColorCustomizer themeColor={themeColor}></ColorCustomizer>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

SettingOffCanvas.displayName = "SettingOffCanvas";
export default SettingOffCanvas;
