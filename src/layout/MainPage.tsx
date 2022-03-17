import React, {useState} from 'react';
import ProjectSection from "../homePageSections/portfolioSection/ProjectSection";
import ServicesSection from "../homePageSections/servicesSection/ServicesSection";
import AboutSection from "../homePageSections/aboutSection/AboutSection";
import TeamSection from "../homePageSections/teamSection/TeamSection";
import ClientsSection from "../homePageSections/clientsSection/ClientsSection";
import ContactUs from "../homePageSections/contactSection/ContactUs";
import Footer from "../homePageSections/footerSection/Footer";
import PortfolioModal from "../modalComponents/PortfolioModal";
import MainNavigation from "./MainNavigation";

const MainPage = () => {
    const [projectToBeEdited, setProjectToBeEdited] = useState({});
    return (
        <div id="page-top">
            <MainNavigation/>
            <ServicesSection/>
            <ProjectSection />
            <AboutSection/>
            <TeamSection/>
            <ClientsSection/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default MainPage;