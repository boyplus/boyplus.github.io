import { Fragment } from "react";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Fragment>
      <Layout>
        <div className="container">
          <h1 style={{ fontSize: "4rem" }} className="blue">
            404
          </h1>
          <h1 style={{ marginTop: "20px" }}>Page Not Found</h1>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
};

export default Error;
