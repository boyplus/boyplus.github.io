import { Fragment } from "react";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";
import projectInfo from "../../utils/projectInfo";

const Project = ({ name }) => {
  const data = projectInfo.find((el) => el.name == name);
  return (
    <Fragment>
      <Layout page="project">
        <BlogLayout>
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
                  <div>
                    <p>{el}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </BlogLayout>
      </Layout>
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

export async function getServerSideProps(ctx) {
  try {
    const name = ctx.query.name;
    return { props: { name } };
  } catch (err) {
    return { props: { name: "" } };
  }
}

export default Project;
