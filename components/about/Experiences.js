import { Fragment } from "react";
import Experience from "./Experience";

const Experiences = () => {
  const experiences = [
    {
      title: "Computer Olympiad student",
      year: "2015 - 2018",
      description:
        "Informatics olympiad student at Silpakorn University in camp 1, 2, and 3 (National Competition).",
    },
    {
      title: "CS Mentor",
      year: "2020 - Present",
      description:
        "Mentor in Introductio to Programming and Web Application Development for first year student at SIT KMUTT.",
    },
    {
      title: "Content Creator of DSC KMUTT",
      year: "2020 - Present",
      description:
        "Create content about Google services and Sustainable Development Goals at Developer Student Clubs - KMUTT.",
    },
    {
      title: "Computer Olympiad Tutor",
      year: "2020",
      description:
        "Teach students at Benjamarachutit Ratchaburi School. Produced 1 silver in 2020 Thailand Olympiad in Informatics.",
    },
  ];

  return (
    <Fragment>
      <h1 className="blue">Experiences</h1>
      <div className="content">
        {experiences.map(({ title, year, description }) => {
          return (
            <div className="item" key={title}>
              <Experience
                title={title}
                year={year}
                description={description}
              ></Experience>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .item {
          width: 100%;
          padding-right: 8%;
          margin-bottom: 10px;
        }
        .content {
          display: grid;
          margin-top: 20px;
          grid-template-columns: auto auto auto;
        }
        @media only screen and (max-width: 950px) {
          .content {
            grid-template-columns: auto auto;
          }
        }
        @media only screen and (max-width: 500px) {
          .content {
            grid-template-columns: auto;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Experiences;
