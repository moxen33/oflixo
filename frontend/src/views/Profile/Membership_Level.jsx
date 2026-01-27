import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const Membership_Level = () => {
  const { t } = useTranslation();
  return (
    <>
      <BreadCrumbWidget title={t("streamProfile.label_membership_levels")} />
      <div className="section-padding">
        <div className="pmpro container">
          <section id="pmpro_levels" className="pmpro_section">
            <div className="pmpro_section_content">
              <div
                id="pmpro_level_group-1"
                className="pmpro_card pmpro_level_group"
              >
                <div className="pmpro_card_content">
                  <Table className="pmpro_table pmpro_levels_table">
                    <thead>
                      <tr>
                        <th>{t("streamKeyword.level")}</th>
                        <th>{t("streamShop.price")}</th>
                        <th>
                          <span className="screen-reader-text">
                            {" "}
                            {t("streamTag.action")}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="pmpro_level-2" className="pmpro_level">
                        <th data-title="Level">{t("streamPricing.basic_plan")}</th>
                        <td data-title="Price">
                          <p className="pmpro_level-price">
                            <strong>$10.00</strong> {t("streamProfile.time_now")}.{" "}
                          </p>
                        </td>
                        <td>
                          <Link
                            aria-label="Select the Basic Plan membership level"
                            className="pmpro_btn pmpro_btn-select w-100"
                            to="/profile/membership-comfirmation"
                          >
                            {t("streamProfile.select")}
                          </Link>
                        </td>
                      </tr>
                      <tr id="pmpro_level-3" className="pmpro_level">
                        <th data-title="Level">{t("streamPricing.standard_plan")}</th>
                        <td data-title="Price">
                          <p className="pmpro_level-price">
                            <strong>$79.00</strong>{" "}
                            {t("streamProfile.time_now_and_then")}{" "}
                            <strong>$89.00 per {t("streamPricing.month")}</strong>.{" "}
                          </p>
                        </td>
                        <td>
                          <Link
                            aria-label="Select the Standard Plan membership level"
                            className="pmpro_btn pmpro_btn-select w-100"
                            to="/profile/membership-comfirmation"
                          >
                            {t("streamProfile.select")}
                          </Link>
                        </td>
                      </tr>
                      <tr id="pmpro_level-4" className="pmpro_level">
                        <th data-title="Level">{t("streamPricing.premium_plan")}</th>
                        <td data-title="Price">
                          <p className="pmpro_level-price">
                            <strong>
                              $180.00 {t("streamProfile.time_every")} 3{" "}
                              {t("streamPricing.month")}s
                            </strong>
                            .{" "}
                          </p>
                        </td>
                        <td>
                          <Link
                            aria-label="Select the Premium Plan membership level"
                            className="pmpro_btn pmpro_btn-select w-100"
                            to="/profile/membership-comfirmation"
                          >
                            {t("streamProfile.select")}
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Membership_Level;
