import { Fragment } from "react";
import Layout from "../components/Layout";
import Typing from "../components/Typing";

const Home = () => {
  return (
    <Fragment>
      <Layout page="home">
        <div className="container">
          <img
            src="/images/profile_pic.jpeg"
            width="200px"
            height="auto"
            className="profilePic"
            alt="profile picture"
          ></img>
          <h1 style={{ padding: "5px", textAlign: "center" }}>
            Thanaphon Sombunkaeo
          </h1>
          <div className="typing">
            <Typing
              bio="Computer Science student who interest in algorithms and web development."
              speed={40}
            ></Typing>
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
        .typing {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Home;
