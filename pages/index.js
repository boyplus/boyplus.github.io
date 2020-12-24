import { Fragment, useState, useEffect } from "react";
import Layout from "../components/Layout";

const Home = () => {
  let bio =
    "Computer Science student who interest in algorithms and web development.";
  const [text, setText] = useState("");
  let i = 0,
    speed = 40;
  const typeWriter = () => {
    if (i < bio.length) {
      setText(bio.slice(0, i + 1));
      i++;
      setTimeout(typeWriter, speed);
    }
  };
  const getCursorStyle = () => {
    if (text.length !== bio.length) {
      return {
        marginLeft: "-5px",
        width: "5px",
        height: "15px",
        backgroundColor: "grey",
      };
    } else {
      return {};
    }
  };
  useEffect(() => {
    typeWriter();
  }, []);
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
            <p style={{ padding: "5px" }}>{text}</p>
            <div style={getCursorStyle()}></div>
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
