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
        "Mentor in Introduction to Programming and Web Application Development for first year student at SIT KMUTT.",
    },
    {
      title: "Core team of DSC KMUTT",
      year: "2020 - Present",
      description:
        "Conten Creator who create content about Google services at Developer Student Clubs - KMUTT.",
    },
    {
      title: "Computer Olympiad Tutor",
      year: "2020",
      description:
        "Teach students at Benjamarachutit Ratchaburi School. Produced 1 silver in 2020 Thailand Olympiad in Informatics.",
    },
    {
      title: "Application Development Leader",
      year: "2020",
      description:
        "Term project in Integrated project I of Computer Science course. Project is online learning plafrom.",
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
          margin: 20px 0;
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
          .item {
            padding-right: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Experiences;
