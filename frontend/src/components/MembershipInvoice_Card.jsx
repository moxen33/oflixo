import React from "react";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const MembershipInvoice_Card = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="pmpro_order_single"
        className="pmpro_order_single pmpro_section mt-0"
      >
        <div className="pmpro_card">
          <div className="pmpro_card_actions text-end">
            <button
              className="pmpro_btn-plain pmpro_btn-print"
             onClick={() => window.print()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-printer"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              {t("streamButtons.print_button")}
            </button>
          </div>
          <h2 className="pmpro_card_title pmpro_font-x-large d-flex align-items-center justify-content-between flex-wrap">
            {t("streamProfile.order_title")}
            <span className="pmpro_list_item_value pmpro_tag pmpro_tag-success">
              {t("streamProfile.order_status_paid")}
            </span>
          </h2>
          <div className="pmpro_card_content">
            <div className="pmpro_spacer"></div>

            <div id="pmpro_order_single-meta">
              <ul className="pmpro_list pmpro_list-plain pmpro_list-with-labels pmpro_cols-2">
                <li
                  id="pmpro_order_single-meta-order_date"
                  className="pmpro_list_item"
                >
                  <span className="pmpro_list_item_label">
                    {t("streamProfile.order_date_label")}
                  </span>
                  {t("streamProfile.order_date_value")}
                </li>
                <li
                  id="pmpro_order_single-meta-payment_method"
                  className="pmpro_list_item"
                >
                  <span className="pmpro_list_item_label">
                    {t("streamProfile.payment_method_label")}
                  </span>
                  {t("streamProfile.payment_method_value")}
                </li>
                <li
                  id="pmpro_order_single-meta-pay_to"
                  className="pmpro_list_item"
                >
                  <span className="pmpro_list_item_label">
                    {t("streamProfile.pay_to_label")}
                  </span>
                  {t("streamProfile.pay_to_value")}
                </li>
                <li
                  id="pmpro_order_single-meta-bill_to"
                  className="pmpro_list_item"
                >
                  <span className="pmpro_list_item_label">
                    {t("streamProfile.bill_to_label")}
                  </span>
                  {t("streamProfile.bill_to_value")}
                  <br />
                  {t("streamProfile.bill_to_value-2")}
                  <br />
                  {t("streamProfile.bill_to_value-3")}
                  <br />
                  {t("streamProfile.bill_to_value-4")}
                  <br />
                  (123) 456-7899
                </li>
              </ul>
            </div>

            <div className="pmpro_spacer"></div>
            <div id="pmpro_order_single-items">
              <h3 className="pmpro_font-large">
                {t("streamProfile.amount_paid_info")}
              </h3>
              <div className="table-responsive">
                <table className="pmpro_table">
                  <thead>
                    <tr>
                      <th>{t("streamProfile.table_description_header")}</th>
                      <th>{t("streamProfile.table_amount_header")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th data-title="Description">
                        {t("streamProfile.table_description_item")}
                        <p>{t("streamProfile.table_description_account")}</p>
                      </th>
                      <td data-title="Amount">
                        {t("streamProfile.table_total_amount")}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>{t("streamProfile.table_total_label")}</td>
                      <td data-title="Total">
                        {t("streamProfile.table_total_amount")}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pmpro_actions_nav">
        <span className="pmpro_actions_nav-right">
          <Link to="/profile/membership-account">
            {t("streamProfile.nav_view_membership_account")}
          </Link>
        </span>
        <span className="pmpro_actions_nav-left">
          <Link to="/profile/membership-orders">
            {t("streamProfile.nav_view_all_orders")}
          </Link>
        </span>
      </div>

      {/* <!-- end pmpro_actions_nav --> */}
    </>
  );
};

export default MembershipInvoice_Card;
