import React from "react";
import AboutSection from "./Aboutsection";
import HowItWorks from "./HowItWork";
import FAQSection from "./FAQsection";
import WorkingWithTheBest from "./WorkingWithTheBest";
import NewsBlogSection from "../../pages/NewsBlog";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
const AboutUs = () => (
  <>
    <Header />
    <AboutSection />
    <HowItWorks />
    <FAQSection />
    <WorkingWithTheBest />
    <NewsBlogSection />
    <Footer />
  </>
);

export default AboutUs;