import { Fragment } from "react";
import Award from "./Award";
const Awards = () => {
  const items = [
    {
      image: "/images/toi14.jpeg",
      text: "Thailand Olympaid in Informatics (TOI 14th)",
      year: "2019",
      desc: "Bronze medal (28th place)",
    },
    {
      image: "/images/toi13.JPG",
      text: "Thailand Olympaid in Informatics (TOI 13th)",
      year: "2018",
      desc: "Bronze medal (42th place)",
    },
    {
      image: "/images/medal_all.jpg",
      text: "Programming Competition Thailand National",
      year: "2019",
      desc: "Gold medal (1st place)",
    },
  ];
  return (
    <Fragment>
      <div className="container">
        <h1 className="blue">Awards</h1>
        <div className="contentContainer">
          <div className="content">
            {items.map((item) => {
              return (
                <Award
                  image={item.image}
                  text={item.text}
                  year={item.year}
                  desc={item.desc}
                  key={item.text}
                ></Award>
              );
            })}
          </div>
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
        .contentContainer {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media only screen and (max-width: 1100px) {
          .content {
            grid-template-columns: auto auto;
          }
        }
        @media only screen and (max-width: 720px) {
          .content {
            grid-template-columns: auto;
          }
          .container {
            width: 100%;
            /* background-color: blue; */
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Awards;
