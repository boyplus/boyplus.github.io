import { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="box">
        <div className="content">
          All right reserved © by Thanaphon Sombunkaeo
        </div>
      </div>
      <style jsx>{`
        .box {
          background-color: rgba(245, 245, 245, 0.5);
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          font-weight: 400;
          font-size: 18px;
          letter-spacing: 2px;
        }
      `}</style>
    </Fragment>
  );
};

export default Footer;
