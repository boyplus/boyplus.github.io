import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ image, setShowModal, currentIndex, size }) => {
  return (
    <Fragment>
      <div className="container" onClick={() => setShowModal(false)}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="icon" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="image-container">
            {currentIndex !== 0 ? (
              <div className="icon">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            ) : null}
            <img
              className="image"
              src={`/images/project/eduroom/${image}`}
              width="700px"
              height="auto"
            ></img>
            {currentIndex !== size - 1 ? (
              <div className="icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon {
          width: 20px;
          height: 20px;
          color: whitesmoke;
          opacity: 1;
          transition: 0.25s;
        }
        .icon:hover {
          opacity: 0.75;
          transition: 0.25s;
          cursor: pointer;
        }
        .image-container {
          margin-top: 20px;
          display: flex;
          align-items: center;
        }
        .container {
          height: 100vh;
          width: 100vw;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.9);
          overflow-x: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          z-index: 20;
          padding: 20px;
        }
      `}</style>
    </Fragment>
  );
};

export default Modal;
