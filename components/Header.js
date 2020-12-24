import { Fragment } from "react";
import Head from "next/head";
const Header = () => {
  return (
    <Fragment>
      <Head>
        <title>Thanaphon</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Portfolio"></meta>
        <meta
          name="description"
          content="Portfolio of Thanaphon Sombunkaeo"
        ></meta>
      </Head>
    </Fragment>
  );
};

export default Header;
