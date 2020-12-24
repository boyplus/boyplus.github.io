import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <h1>Contact</h1>
      </div>
    </Fragment>
  );
};

export default Contact;
