import React, { Fragment } from "react";
import { Hero } from "../components";
import Steve from "../components/Steve";
import Juliet from "../components/Juliet";
import Adrian from "../components/Adrian";
const Home = () => (
  <Fragment>
    <Hero />
    <h2>Put Your Best Fruit Forward.</h2>
    <h1>About Us</h1>
    <Steve />
    <Juliet />
    <Adrian />
  </Fragment>
);

export default Home;
