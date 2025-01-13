import React from "react";
import Layout from "../Layout/Layout";
import Slider from "../components/Slider";
import TeamMembers from "../components/TeamMembers";
import AboutUS from "../components/AboutUS";
import ContactForm from "../components/ContactForm";

const AboutUsPage = () => {
  return (
    <Layout>
      <Slider />
      <AboutUS />
      <TeamMembers />
      <ContactForm />
    </Layout>
  );
};

export default AboutUsPage;
