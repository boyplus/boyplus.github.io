import { Fragment } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <div lang="en">
        <Header></Header>
        <div className="contentContainer">
          <Nav page={props.page}></Nav>
          <div style={{ minHeight: "80vh" }}>{props.children}</div>
        </div>
        <div className="footerContainer">
          <Footer></Footer>
        </div>
      </div>
      <style jsx>{`
        .contentContainer {
          min-height: 90vh;
          padding: 40px 40px 0 40px;
          width: 100vw;
        }
        .footerContainer {
          min-height: 10vh;
        }
        @media only screen and (max-width: 720px) {
          .contentContainer {
            padding: 40px 15px 0 15px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
