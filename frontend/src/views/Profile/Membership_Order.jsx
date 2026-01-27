import React from "react";

// the hook
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

const Membership_Order = () => {
  const { t } = useTranslation();
  return (
    <>
     <BreadCrumbWidget title={t("streamProfile.label_membership_orders")} />
      <section className="section-padding">
        <div className="pmpro container">
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
                     <tr id="pmpro_table_order-FB6969474C">
                      <th className="pmpro_table_order-date" data-title="Date">
                        <Link to="/membership-invoice">January 29, 2025 </Link>
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
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Membership_Order;
