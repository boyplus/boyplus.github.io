import { Fragment } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Fragment>
      <Layout page="contact">
        <div className="container">
          <h1>Contact Me</h1>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          height: 80vh;
          display: flex;
          flex-directoin: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Contact;
