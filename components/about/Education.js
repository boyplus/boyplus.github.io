import { Fragment } from "react";
const Education = () => {
  return (
    <Fragment>
      <div className="box">
        <h1 className="blue">Education</h1>
        <div className="schoolContainer">
          <div className="card">
            <h2>King Mongkut's University of Technology Thonburi</h2>
            <p className="year">2019 - Now</p>
            <p style={{ marginTop: "10px" }}>
              I'm currently studying bachelor's second year of Computer Science
              at School of Information Technology.
            </p>
            <p style={{ marginTop: "10px" }}>Current GPAX : 3.85</p>
          </div>
          <div className="card">
            <h2>Benjamarachutit Ratchaburi School</h2>
            <p className="year">2012 - 2018</p>
            <p style={{ marginTop: "10px" }}>
              Science-Mathmematics Program (Mathmematics gifted program)
            </p>
            <p style={{ marginTop: "10px" }}>GPAX : 3.82</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .schoolContainer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .card {
          width: 50%;
          padding: 20px 20px 0 0;
        }
        .box {
          margin-bottom: 50px;
        }
        .year {
          opacity: 0.7;
          margin-top: 3px;
        }
        @media only screen and (max-width: 900px) {
          .card {
            width: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Education;
