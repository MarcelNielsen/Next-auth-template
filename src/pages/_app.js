import React from "react";
import App from "next/app";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "../components/Navbar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <title>Thoughts!</title>
        </Head>
        <Navbar />
          <Jumbotron>
            <Component {...pageProps} />
          </Jumbotron>
      </div>
    );
  }
}

export default MyApp;