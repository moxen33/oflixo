import React from "react";
import MembershipInvoice_Card from "../../components/MembershipInvoice_Card";
import { Container } from "react-bootstrap";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

const Membership_Invoice = () => {
  return (
    <>
    <BreadCrumbWidget title={"Membership order"} />
    <section className="section-padding">
    <Container className="pmpro">
      <MembershipInvoice_Card />
    </Container>
    </section>
    </>
  );
};

export default Membership_Invoice;
