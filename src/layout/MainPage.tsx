import React from "react";
import ProjectSection from "../homePageSections/portfolioSection/ProjectSection";
import ServicesSection from "../homePageSections/servicesSection/ServicesSection";
import AboutSection from "../homePageSections/aboutSection/AboutSection";
import TeamSection from "../homePageSections/teamSection/TeamSection";
import ClientsSection from "../homePageSections/clientsSection/ClientsSection";
import ContactUs from "../homePageSections/contactSection/ContactUs";
import Footer from "../homePageSections/footerSection/Footer";
import MainNavigation from "./MainNavigation";
import TopNavigation from "./TopNavigation";

const MainPage = () => {
  return (
    <div>
      <TopNavigation />
      <MainNavigation />
      <ServicesSection />
      <ProjectSection />
      <AboutSection />
      <TeamSection />
      <ClientsSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default MainPage;