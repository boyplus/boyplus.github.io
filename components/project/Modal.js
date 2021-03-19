import { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  image,
  setShowModal,
  currentIndex,
  setCurrentIndex,
  size,
}) => {
  function downHandler({ keyCode }) {
    if (keyCode === 37 && currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (keyCode === 39 && currentIndex !== size - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });
  return (
    <Fragment>
      <div className="container" onClick={() => setShowModal(false)}>
        <div className="content" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="icon hover" onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <div className="image-container">
            <div className="icon">
              {currentIndex !== 0 ? (
                <div
                  className="hover"
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              ) : null}
            </div>
            <img
              className="image selectDisable"
              src={`/images/project/eduroom/${image}`}
              width="700px"
              height="auto"
            ></img>
            <div className="icon">
              {currentIndex !== size - 1 ? (
                <div
                  className="hover"
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              ) : null}
            </div>
          </div>
          <p className="text">
            Click on the arrow or press left and right to change picture
          </p>
        </div>
      </div>
      <style jsx>{`
        .text {
          display: flex;
          justify-content: center;
          color: white;
          opacity: 0.5;
          margin-top: -20px;
        }
        .selectDisable {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }
        .icon {
          width: 20px;
          height: 20px;
          color: whitesmoke;
        }
        .hover:hover {
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
