import { Fragment } from "react";

const Award = ({ emoji, text, year, desc }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="content">
              <h3>{text}</h3>
              <p style={{ color: "grey", marginTop: "5px" }}>{year}</p>
              <p style={{ marginTop: "10px", fontWeight: "500" }}>
                <span style={{ marginRight: "8px", fontSize: "1.4rem" }}>
                  {emoji}
                </span>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          padding: 20px;
          margin-bottom: 20px;
          display: flex;
          width: fit-content;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          cursor: default;
        }
        .container{
          margin-top: 30px;
          padding-right: 5%;
        }

        @media only screen and (max-width: 500px) {
          .container{
            padding: 0;
          }
          .card {
            margin: 0;
            margin-top: 40px;
          }
          .card{
            width: 250px;
          }
          .awardPic{
            width: 250px;
            height: 170px;
          }
      `}</style>
    </Fragment>
  );
};

export default Award;
