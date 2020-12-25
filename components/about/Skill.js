import { Fragment } from "react";
const Skill = ({ text }) => {
  return (
    <Fragment>
      <div className="card">
        <h3>{text}</h3>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 150px;
          height: 80px;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 3px;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          cursor: default;
        }
        @media only screen and (max-width: 800px) {
          .card {
            margin: 5px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Skill;
