import { Fragment } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <div>
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
        }
        .footerContainer {
          min-height: 10vh;
        }
      `}</style>
    </Fragment>
  );
};

export default Layout;
