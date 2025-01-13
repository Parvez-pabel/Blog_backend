import React from "react";
import Layout from "../Layout/Layout";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import OurServices from "../components/OurServices";

const ServicePage = () => {
  return (
    <Layout>
      <Slider />
      <OurServices />
      <ContactForm />
    </Layout>
  );
};

export default ServicePage;
