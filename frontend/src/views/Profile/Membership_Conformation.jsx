import React from "react";
import MembershipInvoice_Card from "../../components/MembershipInvoice_Card";
import { Container } from "react-bootstrap";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";

const Membership_Conformation = () => {
    const { t } = useTranslation();
  return (
    <>
    <BreadCrumbWidget title={t("streamProfile.label_membership_confirmation")} />
      <section className="section-padding">
        <Container className="pmpro">
          <section id="pmpro_confirmation-2" className="pmpro_section">
            <p>
             {t("streamProfile.membership_thank_you")}
            </p>
            <p>
              {t("streamProfile.membership_order_info")} marvin@demo.com.
            </p>
          </section>
          <MembershipInvoice_Card />
        </Container>
      </section>
    </>
  );
};

export default Membership_Conformation;
