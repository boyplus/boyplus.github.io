import { Fragment } from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Fragment>
      <Layout page="home">
        <div className="container">
          <img
            src="/images/profile_pic.jpeg"
            width="200px"
            className="profilePic"
          ></img>
          <h1 style={{ padding: "5px" }}>Thanaphon Sombunkaeo</h1>
          <div style={{ textAlign: "center" }}>
            <p style={{ padding: "5px" }}>
              Computer Science student who interest in algorithms and web
              development.
            </p>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .profilePic {
          border-radius: 50%;
          margin: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default Home;
