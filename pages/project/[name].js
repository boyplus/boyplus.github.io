import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import BlogLayout from "../../components/BlogLayout";
import Modal from "../../components/project/Modal";
import projectInfo from "../../utils/projectInfo";

const Project = () => {
  const router = useRouter();
  const name = router.query.name;
  const data = projectInfo.find((el) => el.name == name);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const renderProject = () => {
    if (!name) return null;
    return (
      <Fragment>
        <div className="container">
          {showModal ? (
            <Modal
              image={currentIndex === null ? null : data.images[currentIndex]}
              setShowModal={setShowModal}
              currentIndex={currentIndex}
              size={data.images.length}
            ></Modal>
          ) : null}
          <div className="top">
            <div>
              <img src={data.home} width="100%"></img>
            </div>
            <div style={{ paddingLeft: "30px" }}>
              <h1 className="blue">{data.title}</h1>
              <p style={{ paddingTop: "10px" }}>{data.description}</p>
              <h2 style={{ paddingTop: "20px" }} className="blue">
                Technology Stack
              </h2>
              <ul>
                {data.stacks.map((el) => {
                  return (
                    <li key={el} style={{ marginTop: "8px" }}>
                      <span style={{ marginLeft: "10px" }}>
                        <span style={{ fontWeight: "500" }}>
                          {el.split(":")[0]}
                        </span>
                        :<span>{el.split(":")[1]}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="bottom">
            <h1 className="blue">Gallery</h1>
            <div className="images">
              {data.images?.map((el, index) => {
                return (
                  <img
                    src={`/images/project/eduroom/${el}`}
                    className="img-content"
                    key={el}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowModal(true);
                    }}
                  ></img>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          ul {
            list-style-type: none;
          }
          ul > li:before {
            content: "-";
          }
          .container {
            padding-bottom: 50px;
          }
          .top {
            padding-top: 20px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
          .bottom {
            margin-top: 50px;
          }
          .images {
            margin-top: 30px;
            grid-template-columns: repeat(3, 1fr);
          }
          .img-content {
            width: 33%;
            cursor: pointer;
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
