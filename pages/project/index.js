import { Fragment } from "react";
import Layout from "../../components/Layout";
import Project from "../../components/project/Project";

const ProjectPage = () => {
  const projects = [
    {
      title: "Eduroom (Online learning platform)",
      year: "2020",
      description:
        "Online learning platform which is a term project of Intregated Project I in Computer Science course.",
      link: "eduroom",
    },
    {
      title: "Computer Science Bank project (CSB)",
      year: "2019",
      description:
        "Banking system on web application that includes features Authentication, Account Management, Transaction.",
      link: "csb",
    },
    {
      title: "BTS live view count",
      year: "2019",
      description:
        "Website that show the current view count of music video of BTS (Korean boy band) in real time.",
      link: "bts-live-view",
    },
    {
      title: "Mentor Score",
      year: "2020",
      description:
        "Web application to keep track score of first year student in Introduction to Programming course.",
      link: "mentor-score",
    },
    {
      title: "KKP Cargo & Logistic",
      year: "2020",
      description:
        "Web application of cargo services to let customer can keep track of their orders. Also let staff to update the status of products.",
      link: "kkp-cargo",
    },
  ];

  return (
    <Fragment>
      <Layout page="project">
        <div className="container">
          <h1 className="blue space title">Project</h1>
          <div className="content">
            {projects.map(({ title, year, description, link }) => {
              return (
                <Project
                  title={title}
                  year={year}
                  description={description}
                  link={link}
                  key={title}
                ></Project>
              );
            })}
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .content {
          padding-top: 30px;
          display: grid;
          grid-template-columns: auto auto auto;
          gap: 3%;
        }
        .container {
          padding: 3% 5% 100px 5%;
        }
        .title {
          font-size: 3rem;
          text-align: center;
        }

        @media only screen and (max-width: 950px) {
          .content {
            grid-template-columns: auto auto;
          }
          .container {
            padding-bottom: 150px;
          }
        }

        @media only screen and (max-width: 600px) {
          .content {
            grid-template-columns: auto;
          }
          .container {
            padding-bottom: 200px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default ProjectPage;
