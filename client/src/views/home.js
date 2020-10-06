import React, { Fragment } from "react";
import { Row, CardGroup, Card, CardDeck } from "react-bootstrap";
import { Hero } from "../components";
import Steve from "../components/Steve";
import Juliet from "../components/Juliet";
import Adrian from "../components/Adrian";
import Steph from "../components/Steph";
const Home = () => (
  <Fragment>
    <Hero />
    <h2 className="slogan"> Put Your Best Fruit Forward.</h2>
    <h1 className="abtus text-center">What is Orchard?</h1>
    <p className="text-center words">
      Orchard is an inventory management system that enables small-scale farmers
      to sell their crops to local farmer's markets.
    </p>
    <h1 className="abtus text-center">About Us</h1>
    <CardGroup>
      <Row>
        <Steve />
        <Juliet />
        {/* </Row>
    </CardGroup>
    <CardGroup>
      <Row className="second-row"> */}
        <Adrian />
        <Steph />
      </Row>
    </CardGroup>
    {/* <CardDeck>
      <Steve />
      <Steph />
    </CardDeck> */}
  </Fragment>
);

export default Home;
