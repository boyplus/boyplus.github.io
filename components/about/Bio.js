import { Fragment } from "react";
const Bio = () => {
  return (
    <Fragment>
      <div className="container">
        <img
          src="/images/profile_pic.jpeg"
          width="200px"
          height="200px"
          className="profilePic"
          alt="profile picture"
        ></img>
        <div className="right">
          <h1 className="header name">Thanaphon Sombunkaeo (Boy)</h1>
          <div className="fullStack">
            <div className="line"></div>
            <h3
              style={{
                color: "grey",
                marginLeft: "10px",
              }}
            >
              Full stack web developer
            </h3>
          </div>
          <p className="text">
            Hi everyone, I am a sophomore student in Computer Science at School
            of Information Teachnology, King Mongkut's University of Technology
            Thonburi (KMUTT).
          </p>
          <p className="text">
            I am interested in Algorithms, Data structures, and full stack web
            development.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          justify-content: center;
          padding-top: 40px;
        }
        .line {
          width: 7px;
          height: 30px;
          background-color: grey;
        }
        .fullStack {
          display: flex;
          align-items: center;
          margin: 15px 0;
        }
        .profilePic {
          border-radius: 50%;
          margin: 5px;
        }
        .right {
          padding-left: 60px;
          max-width: 60%;
        }
        .name {
          font-size: 2.5rem;
        }
        .text {
          font-size: 20px;
          margin-bottom: 20px;
        }
        @media only screen and (max-width: 1100px) {
          .right {
            max-width: 100%;
          }
        }
        @media only screen and (max-width: 900px) {
          .container {
            flex-wrap: wrap;
          }
          .right {
            padding-left: 0;
          }
          .name {
            text-align: center;
            font-size: 2rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Bio;
