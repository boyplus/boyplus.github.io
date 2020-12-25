import { Fragment } from "react";
import Layout from "../components/Layout";
import Bio from "../components/about/Bio";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";
import Awards from "../components/about/Awards";

const About = () => {
  return (
    <Fragment>
      <Layout page="about">
        <Bio></Bio>
        <div className="container">
          <Education></Education>
          <Skills></Skills>
          <Awards></Awards>
        </div>
      </Layout>
      <style jsx>{``}</style>
    </Fragment>
  );
};

export default About;
