import { Fragment, memo, useState } from "react";

//react bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import ProfileCard from "../../../components/cards/ProfileCard";

//function
import { generateImgPath } from "../../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";
const TeamSection = memo(() => {
  const { t } = useTranslation();
  const [lists] = useState([
    {
      image: generateImgPath("/assets/images/pages/team1.webp"),
      designation: "streamAbout.ceo",
      name: "streamAbout.tonny_smith",
    },
    {
      image: generateImgPath("/assets/images/pages/team2.webp"),
      designation: "streamAbout.designer",
      name: "streamAbout.barry_tech",
    },
    {
      image: generateImgPath("/assets/images/pages/team3.webp"),
      designation: "streamAbout.developer",
      name: "streamAbout.kep_john",
    },
    {
      image: generateImgPath("/assets/images/pages/team4.webp"),
      designation: "streamAbout.designer",
      name: "streamAbout.monty_rock",
    },
  ]);
  return (
    <Fragment>
      <section className="section-padding-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg="2"></Col>
            <Col lg="8" md="12">
              <div className="title-box text-center">
                <h3>{t("streamAbout.mastermind_team")}</h3>
                <p className="mb-0">{t("streamAbout.streamit_build")}</p>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
          <div className="row about-us-detail gy-4">
            {lists.map((data, index) => (
              <Col md="3" key={index}>
                <ProfileCard
                  name={t(data.name)}
                  designation={t(data.designation)}
                  image={data.image}
                ></ProfileCard>
              </Col>
            ))}
          </div>
        </Container>
      </section>
    </Fragment>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
