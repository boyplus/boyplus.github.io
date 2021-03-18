import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Project = ({ title, year, description, link }) => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="card" onClick={() => router.push(`/project/${link}`)}>
        <div>
          <h3>{title}</h3>
          <p className="year">{year}</p>
          <p className="description">{description}</p>
        </div>
        <div>
          <p className="blue read-more">Read more</p>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          padding: 25px 20px 15px 20px;
          margin-bottom: 20px;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .read-more {
          text-align: right;
          margin-top: 15px;
          font-weight: 500;
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

export default Project;
