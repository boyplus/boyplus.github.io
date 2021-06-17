import { Fragment, useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderProject = () => {
    if (!name || !data) return null;
    return (
      <Fragment>
        <div className="container">
          {showModal ? (
            <Modal
              name={name}
              image={data.images[currentIndex]}
              setShowModal={setShowModal}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              size={data.images.length}
            ></Modal>
          ) : null}
          <div className="top">
            <div>
              <img src={data.home} width="100%" alt="home picture"></img>
            </div>
            <div className="content-text">
              <h1 className="blue">{data.title}</h1>
              <p style={{ paddingTop: "10px" }}>{data.description}</p>
              {data.link ? (
                <p style={{ marginTop: "10px" }}>
                  Link:{" "}
                  <a href={data.link} target="_blank" className="blue">
                    {data.link}
                  </a>
                </p>
              ) : (
                ""
              )}
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
                  <div className="image-container" key={el}>
                    <img
                      alt={el}
                      src={`/images/project/${name}/${el}`}
                      className="img-content"
                      onClick={() => {
                        setCurrentIndex(index);
                        setShowModal(true);
                      }}
                    ></img>
                  </div>
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
            display: flex;
            flex-wrap: wrap;
          }
          .image-container {
            width: 33%;
            padding: 20px;
          }
          .img-content {
            width: 100%;
          }
          .img-content:hover {
            cursor: pointer;
          }
          .content-text {
            padding-left: 30px;
          }

          @media only screen and (max-width: 900px) {
            .top {
              grid-template-columns: repeat(1, 1fr);
            }
            .content-text {
              padding-top: 20px;
              padding-left: 0;
            }
            .image-container {
              width: 50%;
            }
          }
          @media only screen and (max-width: 500px) {
            .image-container {
              width: 100%;
            }
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
