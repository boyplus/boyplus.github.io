import { Fragment } from "react";
import Layout from "../components/Layout";
import Bio from "../components/about/Bio";
import Education from "../components/about/Education";
import Award from "../components/about/Award";

const About = () => {
  return (
    <Fragment>
      <Layout page="about">
        <Bio></Bio>
        <div className="container">
          <Education></Education>
          <Award></Award>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          padding: 50px;
        }
        @media only screen and (max-width: 1100px) {
          .container {
            padding-left: 0;
          }
        }
        @media only screen and (max-width: 900px) {
          .container {
            padding-top: 10px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default About;
