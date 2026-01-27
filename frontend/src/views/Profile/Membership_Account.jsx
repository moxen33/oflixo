import React from "react";
import { generateImgPath } from "../../StaticData/data";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const Membership_Account = () => {
      const { t } = useTranslation();
  return (
    <>
      <section className="section-padding">
        <div className="pmpro container">
          <section id="pmpro_account-profile" className="pmpro_section">
            <h2 className="pmpro_section_title pmpro_font-x-large">
              {t("streamPages.my_account_page")}
            </h2>
            <div className="pmpro_card">
              <h3 className="pmpro_card_title pmpro_font-large pmpro_heading-with-avatar">
                <img
                  alt="img"
                  src={generateImgPath("/assets/images/user/userblank.jpg")}
                  className="avatar avatar-48 photo"
                  height="48"
                  width="48"
                />{" "}
                {t("streamProfile.welcome")}, {t("streamShop.greeting_name")}
              </h3>
              <div className="pmpro_card_content">
                <ul className="pmpro_list pmpro_list-plain">
                  <li className="pmpro_list_item">
                    <strong>{t("streamAccount.username")}:</strong> {t("streamProfile.marvin")}
                  </li>
                  <li className="pmpro_list_item">
                    <strong>{t("streamAccount.email")}:</strong> marvin@demo.com
                  </li>
                </ul>
              </div>
              <div className="pmpro_card_actions">
                <span className="pmpro_card_action">
                  <Link
                    id="pmpro_actionlink-profile"
                    to="/profile/your-profile"
                  >
                    {t("streamButtons.editprofile")}
                  </Link>
                </span>
                <span className="pmpro_card_action_separator"></span>
                <span className="pmpro_card_action">
                  <Link
                    id="pmpro_actionlink-change-password"
                    to="/profile/change-password"
                  >
                    {t("streamProfile.change_password")}
                  </Link>
                </span>
                <span className="pmpro_card_action_separator"></span>
                <span className="pmpro_card_action">
                  <Link id="pmpro_actionlink-logout" to="/login">
                    {t("streamKeyword.log_out")}
                  </Link>
                </span>
              </div>
            </div>
          </section>

          <section id="pmpro_account-membership" className="pmpro_section">
            <h2 className="pmpro_section_title pmpro_font-x-large">
              {t("streamProfile.my_memberships")}
            </h2>
            <div className="pmpro_section_content">
              <div id="pmpro_account-membership-none" className="pmpro_card">
                <div className="pmpro_card_content">
                  <p>
                    {t("streamPlaylist.no_active_membership")}{" "}
                    <Link to="/profile/membership-level">
                      {t("streamProfile.choose_membership_level")}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="pmpro_account-orders" className="pmpro_section">
            <h2 className="pmpro_section_title pmpro_font-x-large">
              {t("streamShop.order_history")}
            </h2>
            <div className="pmpro_card">
              <div className="pmpro_card_content">
                <table className="pmpro_table pmpro_table_orders">
                  <thead>
                    <tr>
                      <th className="st-pmp-table-order">{t("streamKeyword.date")}</th>
                      <th className="st-pmp-table-order">
                        {t("streamKeyword.level")}
                      </th>
                      <th className="st-pmp-table-order">
                        {t("streamKeyword.total")}
                      </th>
                      <th className="st-pmp-table-order">
                        {t("streamKeyword.status")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="pmpro_table_order-51311C6265">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">February 18, 2025 </Link>
                      </th>
                      <td
                        className="pmpro_table_order-level"
                        data-title="Level"
                      >
                        {t("streamPricing.basic_plan")}{" "}
                      </td>
                      <td
                        className="pmpro_table_order-amount"
                        data-title="Amount"
                      >
                        $10.00{" "}
                      </td>
                      <td
                        className="pmpro_table_order-status"
                        data-title="Status"
                      >
                        <span className="pmpro_tag pmpro_tag-success">
                          {t("streamPricing.paid")}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr id="pmpro_table_order-A467E41A35">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">February 10, 2025 </Link>
                      </th>
                      <td
                        className="pmpro_table_order-level"
                        data-title="Level"
                      >
                        {t("streamPricing.premium_plan")}{" "}
                      </td>
                      <td
                        className="pmpro_table_order-amount"
                        data-title="Amount"
                      >
                        $180.00{" "}
                      </td>
                      <td
                        className="pmpro_table_order-status"
                        data-title="Status"
                      >
                        <span className="pmpro_tag pmpro_tag-success">
                          {t("streamPricing.paid")}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr id="pmpro_table_order-3B9A37110A">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">February 6, 2025 </Link>
                      </th>
                      <td
                        className="pmpro_table_order-level"
                        data-title="Level"
                      >
                        {t("streamPricing.basic_plan")}{" "}
                      </td>
                      <td
                        className="pmpro_table_order-amount"
                        data-title="Amount"
                      >
                        $10.00{" "}
                      </td>
                      <td
                        className="pmpro_table_order-status"
                        data-title="Status"
                      >
                        <span className="pmpro_tag pmpro_tag-success">
                          {t("streamPricing.paid")}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr id="pmpro_table_order-68B3C8559C">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">February 6, 2025 </Link>
                      </th>
                      <td
                        className="pmpro_table_order-level"
                        data-title="Level"
                      >
                        {t("streamPricing.basic_plan")}{" "}
                      </td>
                      <td
                        className="pmpro_table_order-amount"
                        data-title="Amount"
                      >
                        $10.00{" "}
                      </td>
                      <td
                        className="pmpro_table_order-status"
                        data-title="Status"
                      >
                        <span className="pmpro_tag pmpro_tag-success">
                          {t("streamPricing.paid")}{" "}
                        </span>
                      </td>
                    </tr>
                    <tr id="pmpro_table_order-FB6969474C">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">January 29, 2025 </Link>
                      </th>
                      <td
                        className="pmpro_table_order-level"
                        data-title="Level"
                      >
                        {t("streamPricing.standard_plan")}{" "}
                      </td>
                      <td
                        className="pmpro_table_order-amount"
                        data-title="Amount"
                      >
                        $79.00{" "}
                      </td>
                      <td
                        className="pmpro_table_order-status"
                        data-title="Status"
                      >
                        <span className="pmpro_tag pmpro_tag-success">
                          {t("streamPricing.paid")}{" "}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <div className="pmpro_actions_nav">
            <span className="pmpro_actions_nav-left">
              <Link to="/profile/membership-orders"> {t("streamProfile.nav_view_all_orders")}</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership_Account;
