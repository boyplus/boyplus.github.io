import { Fragment } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";
import projectInfo from "../../utils/projectInfo";

const Project = () => {
  const router = useRouter();
  const name = router.query.name;
  const data = projectInfo.find((el) => el.name == name);
  const renderProject = () => {
    if (!name) return null;
    return (
      <Fragment>
        <div className="container">
          <div>
            <img src={data.home} width="100%"></img>
          </div>
          <div style={{ paddingLeft: "30px" }}>
            <h1>{data.title}</h1>
            <p style={{ paddingTop: "10px" }}>{data.description}</p>
            <h2 style={{ paddingTop: "10px" }}>Technology Stack</h2>
            {data.stacks.map((el) => {
              return (
                <div key={el}>
                  <p>{el}</p>
                </div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .container {
            padding-top: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        `}</style>
      </Fragment>
    );
  };
  return (
    <Fragment>
      <Layout page="project">
        <BlogLayout>{renderProject()}</BlogLayout>
      </Layout>
    </Fragment>
  );
};

export default Project;
