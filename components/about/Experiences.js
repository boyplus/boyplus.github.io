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
      <div className="container">
        {experiences.map(({ title, year, description }) => {
          return (
            <div className="item">
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
        .container {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          margin-bottom: 40px;
        }
        .item {
          width: 33.33%;
          padding-right: 5%;
          margin-bottom: 10px;
        }
      `}</style>
    </Fragment>
  );
};

export default Experiences;
