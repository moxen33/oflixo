import { Fragment, memo } from "react";

//components
import TeamSection from "./AboutSections/TeamSection";
import ContactUs from "./AboutSections/ContactUs";
import WorkSection from "./AboutSections/WorkSection";
import BreadcrumbWidget from "../../components/BreadcrumbWidget";

// the hook
import { useTranslation } from "react-i18next";
import AboutPlatform from "./AboutSections/AboutPlatform";
import ChooseStreamit from "./AboutSections/ChooseStreamit";
import UltimateExp from "./AboutSections/UltimateExp";

const AboutPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadcrumbWidget title={t("streamPages.about_us")} />
      <AboutPlatform></AboutPlatform>
      <ChooseStreamit></ChooseStreamit>
      <UltimateExp></UltimateExp>
      <TeamSection></TeamSection>
      <ContactUs></ContactUs>
      <WorkSection></WorkSection>
    </Fragment>
  );
});

AboutPage.displayName = "AboutPage";
export default AboutPage;
