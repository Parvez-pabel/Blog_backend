import React from "react";
import Layout from "../Layout/Layout";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import ConnectWith from "../components/ConnectWith";

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <ConnectWith />
        <ContactForm />
      </Layout>
    </div>
  );
};

export default ContactPage;
