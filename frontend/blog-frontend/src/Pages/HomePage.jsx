import Layout from "../Layout/Layout";
import Slider from "../components/Slider";
import BlogList from "../components/BlogList";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { allBlogPost } from "../ApiRequest/apiRequest";

const HomePage = () => {
  const [List, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await allBlogPost();
      setList(res.data);
    })();
  }, []);

  return (
    <div>
      <Layout>
        {List === null ? <Loader /> : <Slider />}
        {List === null ? <Loader /> : <BlogList List={List} />}
      </Layout>
    </div>
  );
};

export default HomePage;
