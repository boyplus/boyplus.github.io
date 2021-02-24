import { Fragment } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const BlogLayout = (props) => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="container">
        <div className="back" onClick={() => router.push("/project")}>
          <div style={{ width: "15px" }}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <p style={{ marginLeft: "15px", marginTop: "-5px" }}>Back</p>
        </div>
        {props.children}
      </div>
      <style jsx>{`
        .container {
          margin-top: 10px;
        }
        .back {
          display: flex;
          align-items: center;
          width: fit-content;
          opacity: 1;
          transition: 0.25s;
        }
        .back:hover {
          cursor: pointer;
          opacity: 0.75;
          transition: 0.25s;
        }
      `}</style>
    </Fragment>
  );
};

export default BlogLayout;
