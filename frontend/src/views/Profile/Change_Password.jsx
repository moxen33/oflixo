import React from "react";
import { Form } from "react-bootstrap";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const Change_Password = () => {
     const { t } = useTranslation();
  return (
    <>
      <BreadCrumbWidget title={"Your Profile"} />
      <div className="section-padding">
        <div className="pmpro container">
          <section id="pmpro_change_password" className="pmpro_section">
            <div className="pmpro_section_content">
              <Form
                id="change-password"
                className="pmpro_form"
                action=""
                method="post"
              >
                <div className="pmpro_card">
                  <div className="pmpro_card_content">
                    <fieldset className="pmpro_form_fieldset">
                      <legend className="pmpro_form_legend">
                        <h2 className="pmpro_form_heading pmpro_font-large">
                          {t("streamProfile.form_heading")}
                        </h2>
                      </legend>
                      <div className="pmpro_form_fields d-flex flex-column gap-3">
                        <input
                          type="hidden"
                          id="change_password_user_nonce"
                          name="change_password_user_nonce"
                          value="29ee27dab7"
                        />
                        <input
                          type="hidden"
                          name="_wp_http_referer"
                          value="/product/wp/streamit/membership-account/your-profile/?view=change-password"
                        />
                        <div className="pmpro_form_field pmpro_form_field-password_current">
                          <div className="pmpro_form_field-password-toggle d-flex align-item-center justify-content-between">
                            <label
                              for="password_current"
                              className="pmpro_form_label"
                            >
                               {t("streamProfile.label_current_password")}{" "}
                              <span className="pmpro_asterisk">
                                {" "}
                                <span className="text-primary">*</span>
                              </span>
                            </label>
                            <div className="d-flex align-item-center justify-content-center gap-2 text-primary">
                              <span>
                                <i className="ph ph-eye fw-bold fs-5"></i>
                              </span>
                              <span className="fw-bold">{t("streamButtons.show_password")}</span>
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password_current"
                            id="password_current"
                            value=""
                            className="pmpro_form_input pmpro_form_input-password pmpro_form_input-required password_current"
                            autoComplete="current-password"
                            spellcheck="false"
                            aria-required="true"
                            tabIndex="1"
                          />
                        </div>
                        <div className="pmpro_cols-2">
                          <div className="pmpro_form_field pmpro_form_field-pass1">
                            <label for="pass1" className="pmpro_form_label">
                              {t("streamProfile.label_new_password")}{" "}
                              <span className="pmpro_asterisk">
                                {" "}
                                <span className="text-primary">*</span>
                              </span>
                            </label>
                            <input
                              type="password"
                              name="pass1"
                              id="pass1"
                              value=""
                              className="pmpro_form_input pmpro_form_input-password pmpro_form_input-required pass1"
                              autoComplete="new-password"
                              aria-required="true"
                              aria-describedby="pass-strength-result"
                              tabIndex="3"
                            />
                          </div>
                          <div className="pmpro_form_field pmpro_form_field-pass2">
                            <label for="pass2" className="pmpro_form_label">
                              {t("streamProfile.label_confirm_password")}{" "}
                              <span className="pmpro_asterisk">
                                {" "}
                                <span className="text-primary">*</span>
                              </span>
                            </label>
                            <input
                              type="password"
                              name="pass2"
                              id="pass2"
                              value=""
                              className="pmpro_form_input pmpro_form_input-password pmpro_form_input-required pass2"
                              autoComplete="new-password"
                              aria-required="true"
                              spellcheck="false"
                              tabIndex="4"
                            />
                          </div>
                        </div>
                        <p className="pmpro_form_hint">
                         {t("streamProfile.password_hint")}
                        </p>
                        <div
                          id="pass-strength-result"
                          className="hide-if-no-js empty"
                          aria-live="polite"
                        >
                          &nbsp;
                        </div>
                      </div>
                    </fieldset>
                    <div className="pmpro_form_submit">
                      <input
                        type="hidden"
                        name="action"
                        value="change-password"
                      />
                      <input type="hidden" name="user_id" value="12" />
                      <input
                        type="submit"
                        className="pmpro_btn pmpro_btn-submit pmpro_btn-submit-change-password"
                        value={t("streamProfile.button_change_password")}
                        tabIndex="5"
                        disabled=""
                      />
                      <input
                        type="button"
                        name="cancel"
                        className="pmpro_btn pmpro_btn-cancel"
                        value={t("streamProfile.button_cancel")}
                      />
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

export default Change_Password;
