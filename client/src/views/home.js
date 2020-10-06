import React, { Fragment } from "react";
import { Row, CardGroup } from "react-bootstrap";
import { Hero } from "../components";
import Steve from "../components/Steve";
import Juliet from "../components/Juliet";
import Adrian from "../components/Adrian";
import Steph from "../components/Steph"
const Home = () => (
  <Fragment>
    <Hero />
    <h2 className="slogan"> Put Your Best Fruit Forward.</h2>
    <h1 className="abtus">About Us</h1>
    <CardGroup>
      <Row>
        <Steve />
        <Juliet />
      </Row>
      </CardGroup>
      <CardGroup>
      <Row className="second-row">
        <Adrian />
        <Steph />
      </Row>
    </CardGroup>
  </Fragment>
);

export default Home;
