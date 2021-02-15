import { Fragment } from "react";
import Layout from "../components/Layout";
import Icon from "../components/contact/Icon";

const Contact = () => {
  const icons = [
    {
      name: "github",
      text: "boyplus",
      margin: -3,
      link: "https://github.com/boyplus",
    },
    {
      name: "facebook",
      text: "Thanaphon Sombunkaeo",
      margin: -60,
      link: "https://www.facebook.com/thanaphon.sombunkaeo/",
    },
    {
      name: "google",
      text: "thanaphon.me@mail.kmutt.ac.th",
      margin: -70,
      link: "mailto: thanaphon.me@mail.kmutt.ac.th",
    },
    {
      name: "linkedin-in",
      text: "Thanaphon Sombunkaeo",
      margin: -70,
      link: "https://www.linkedin.com/in/thanaphon-sombunkaeo-755a881b0/",
    },
  ];
  return (
    <Fragment>
      <Layout page="contact">
        <div className="container">
          <div className="content">
            <h1 className="space blue contact-text">Contact Me</h1>
            <div className="icon-container">
              {icons.map((icon) => (
                <Icon icon={icon} key={icon.name}></Icon>
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container {
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .icon-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 10px;
        }
        .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .contact-text {
          font-size: 3rem;
        }
        @media only screen and (max-width: 320px) {
          .contact-text {
            font-size: 2rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Contact;
