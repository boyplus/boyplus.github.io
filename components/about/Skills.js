import { Fragment } from "react";
import Skill from "./Skill";

const Skills = () => {
  const items = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "NextJS",
    "VueJS",
    "MongoDB",
    "RDBMS",
    "Docker",
  ];
  return (
    <Fragment>
      <div className="container">
        <h1 className="blue">Technology Skills</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="content">
            {items.map((item) => {
              return <Skill text={item} key={item}></Skill>;
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-bottom: 50px;
        }
        .content {
          width: 95%;
          display: grid;
          margin-top: 20px;
          grid-template-columns: auto auto auto auto auto;
        }
        @media only screen and (max-width: 950px) {
          .content {
            grid-template-columns: auto auto auto;
          }
        }
        @media only screen and (max-width: 800px) {
          .content {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Skills;
