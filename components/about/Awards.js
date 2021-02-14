import { Fragment } from "react";
import Award from "./Award";
const Awards = () => {
  const items = [
    {
      emoji: "🥇",
      text: "Programming Competition Thailand National",
      year: "2019",
      desc: "Gold medal (1st place)",
    },
    {
      emoji: "🥉",
      text: "Thailand Olympaid in Informatics (TOI 14th)",
      year: "2019",
      desc: "Bronze medal (28th place)",
    },
    {
      emoji: "🥉",
      text: "Thailand Olympaid in Informatics (TOI 13th)",
      year: "2018",
      desc: "Bronze medal (42th place)",
    },
  ];
  return (
    <Fragment>
      <div className="container">
        <h1 className="blue">Awards</h1>
        <div className="content">
          {items.map((item) => {
            return (
              <Award
                emoji={item.emoji}
                text={item.text}
                year={item.year}
                desc={item.desc}
                key={item.text}
              ></Award>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding-bottom: 50px;
        }
        .content {
          display: grid;
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
            width: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Awards;
