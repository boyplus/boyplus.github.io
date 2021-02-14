import { Fragment } from "react";

const Experience = ({ title, year, description }) => {
  return (
    <Fragment>
      <div className="card">
        <h3>{title}</h3>
        <p className="year">{year}</p>
        <p className="description">{description}</p>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          padding: 25px 20px;
          margin-bottom: 20px;
          border-radius: 3px;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          cursor: default;
        }
        .year {
          opacity: 0.7;
          margin-top: 5px;
        }
        .description {
          margin-top: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default Experience;
