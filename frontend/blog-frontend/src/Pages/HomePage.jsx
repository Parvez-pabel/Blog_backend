import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Slider from "../components/Slider";
import BlogList from "../components/BlogList";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Slider />
        <BlogList />
      </Layout>
    </div>
  );
};

export default HomePage;
