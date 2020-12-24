import { Fragment } from "react";
import Link from "next/link";
import style from "../styles/nav";

const Nav = ({ page }) => {
  const items = [
    { label: "Home", link: "/", page: "home" },
    { label: "About me", link: "/about", page: "about" },
    { label: "Project", link: "/project", page: "project" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];
  return (
    <Fragment>
      <div className="nav">
        {items.map((item) => {
          return (
            <div
              className={`item ${item.page === page ? "active" : ""}`}
              key={item.label}
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          );
        })}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Nav;
