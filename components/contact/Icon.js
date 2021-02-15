import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon }) => {
  return (
    <Fragment>
      <a href={icon.link} target="_blank">
        <div style={{ padding: "10px" }}>
          <div className="icon">
            <FontAwesomeIcon icon={["fab", icon.name]} />
            <div
              className="icon-text"
              style={{
                marginLeft: icon.margin,
              }}
            >
              {icon.text}
            </div>
          </div>
        </div>
      </a>

      <style jsx>{`
        .icon {
          height: 50px;
          width: 50px;
          margin: 0 10px;
          opacity: 1;
          transition: 0.25s;
        }
        .icon:hover {
          cursor: pointer;
          opacity: 0.75;
          transition: 0.25s;
        }
        .icon-text {
          margin-top: 10px;
          height: 10px;
          width: 200px;
        }
        @media only screen and (max-width: 600px) {
          .icon {
            height: 30px;
            width: 30px;
            margin: 0;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Icon;
