import React, { Fragment, memo, useEffect, useRef } from "react";

//react-bootstrap
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

// Assets
import Logo from '/assets/images/logo-full.png';

const ComingSoon = memo(() => {
  const { t } = useTranslation();
  const countdownRef = useRef(null); // 👈 to access the DOM

  useEffect(() => {
    function updateClock(clock, endtime) {
      const t = Date.parse(endtime) - Date.now();
      if (t <= 0) return clearInterval(clock._timer);

      const format = (num) => String(num).padStart(2, "0");

      if (clock) {
        clock.querySelector("[data-days]").textContent = Math.floor(t / 86400000);
        clock.querySelector("[data-hours]").textContent = format(Math.floor((t / 3600000) % 24));
        clock.querySelector("[data-minutes]").textContent = format(Math.floor((t / 60000) % 60));
        clock.querySelector("[data-seconds]").textContent = format(Math.floor((t / 1000) % 60));
      }
    }

    function startClock(clock, endtime) {
      updateClock(clock, endtime);
      if (clock) {
        clock._timer = setInterval(() => updateClock(clock, endtime), 1000);
      }
    }

    const countdownEl = countdownRef.current;
    const dateAttr = countdownEl?.getAttribute("data-date");
    const defaultDate = new Date(Date.now() + 15 * 86400000); // fallback date
    const endtime = new Date(dateAttr || defaultDate);
    
    if (countdownEl) {
      startClock(countdownEl, endtime);
    }

    return () => {
      if (countdownEl && countdownEl._timer) {
        clearInterval(countdownEl._timer);
      }
    };
  }, []);

  return (
    <Fragment>
      <div className="mx-3">
        <Row>
          <div
            className="coming-soon-background"
            style={{ background: 'url("../assets/images/login/login.webp")' }}
          >
            <Col xs={12}>
              <div className="st-coming">
                <div className="st-coming-inner text-white rounded-3">
                  <div className="iq-maintenance-message">
                    <h1 className="iq-maintenance-title text-white">{t("sidebar.coming_soon")}</h1>
                    <p className="iq-maintenance-desc">
                    {t("authentication.professional_ideas")}
                    </p>
                  </div>

                  <div className="expire_date" id="March30,2025"></div>

                  <ul
                    className="list-inline example mb-0 ps-0 countdown"
                    data-date="December 30 2025 20:20:22"
                    ref={countdownRef} // 👈 DOM reference here
                  >
                    <li>
                      <span className="days" data-days>13</span>
                      <p className="days_text">Days</p>
                    </li>
                    <li>
                      <span className="hours" data-hours>02</span>
                      <p className="hours_text">Hours</p>
                    </li>
                    <li>
                      <span className="minutes" data-minutes>18</span>
                      <p className="minutes_text">Minutes</p>
                    </li>
                    <li>
                      <span className="seconds" data-seconds>53</span>
                      <p className="seconds_text">Seconds</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </Fragment>
  );
});

export default ComingSoon;
