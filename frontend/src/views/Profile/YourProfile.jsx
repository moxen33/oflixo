import React from "react";
import { Form } from "react-bootstrap";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const YourProfile = () => {
  const { t } = useTranslation();
  return (
    <>
        <BreadCrumbWidget title={"Your Profile"} />
      <div className="section-padding">
        <div className="pmpro container">
          <section id="pmpro_member_profile_edit" className="pmpro_section">
            <div className="pmpro_section_content">
              <Form
                id="member-profile-edit"
                className="pmpro_form"
                action=""
                method="post"
              >
                <div className="pmpro_card">
                  <div className="pmpro_card_content">
                    <input
                      type="hidden"
                      id="update_user_nonce"
                      name="update_user_nonce"
                      value="52ffbc7b9c"
                    />
                    <input
                      type="hidden"
                      name="_wp_http_referer"
                      value="/product/wp/streamit/membership-account/your-profile/"
                    />
                    <fieldset
                      id="pmpro_member_profile_edit-account-information"
                      className="pmpro_form_fieldset"
                    >
                      <legend className="pmpro_form_legend">
                        <h2 className="pmpro_form_heading pmpro_font-large">
                          {t("streamProfile.form_heading_account_info")}
                        </h2>
                      </legend>
                      <div className="pmpro_form_fields pmpro_cols-2">
                        <div className="pmpro_form_field pmpro_form_field-first_name">
                          <Form.Label for="first_name" className="pmpro_form_label">
                            {t("streamAccount.first_name")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="first_name"
                            id="first_name"
                            value="Marvin"
                            className="pmpro_form_input pmpro_form_input-text"
                            autoComplete="given-name"
                          />
                        </div>
                        <div className="pmpro_form_field pmpro_form_field-last_name">
                          <Form.Label for="last_name" className="pmpro_form_label">
                            {t("streamAccount.last_name")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="last_name"
                            id="last_name"
                            value="McKinney"
                            className="pmpro_form_input pmpro_form_input-text"
                            autoComplete="family-name"
                          />
                        </div>
                        <div className="pmpro_form_field pmpro_form_field-display_name">
                          <Form.Label for="display_name" className="pmpro_form_label">
                            {t("streamProfile.label_display_name")}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="display_name"
                            id="display_name"
                            value="Marvin McKinney"
                            className="pmpro_form_input pmpro_form_input-text"
                          />
                        </div>
                        <div className="pmpro_form_field pmpro_form_field-user_email">
                          <Form.Label for="user_email" className="pmpro_form_label">
                            {t("streamAccount.email")}
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="user_email"
                            id="user_email"
                            value="marvin@demo.com"
                            className="pmpro_form_input pmpro_form_input-email"
                            autoComplete="email"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <input type="hidden" name="action" value="update-profile" />
                    <input type="hidden" name="user_id" value="12" />
                    <div className="pmpro_form_submit">
                      <button
                        type="button"
                        name="submit"
                        className="pmpro_btn pmpro_btn-submit-update-profile"
                      >
                         {t("streamProfile.button_update_profile")}
                      </button>
                      <button
                        type="button"
                        name="cancel"
                        className="pmpro_btn pmpro_btn-cancel"
                      >
                        {t("streamProfile.button_cancel")}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default YourProfile;
