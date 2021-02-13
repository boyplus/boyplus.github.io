import { Fragment } from "react";

const Award = ({ image, text, year, desc }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={image} className="awardPic"></img>
            <div style={{ paddingBottom: "20px" }}>
              <div className="content">
                <h3>{text}</h3>
                <p style={{ color: "grey", marginTop: "3px" }}>{year}</p>
                <p style={{ marginTop: "10px", fontWeight: "500" }}>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          
          margin-bottom: 20px;
          display: flex;
          width: fit-content;
          width: 300px;
        }
        .awardPic {
          border-radius: 10px 10px 0 0;
          width: 300px;
          height: 210px;
        }
        .content {
          padding: 10px 20px;
        }
        .container{
          padding: 20px 40px;
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
