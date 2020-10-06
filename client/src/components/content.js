import React from "react";

import { Col, Row, Card, Container } from "react-bootstrap";
const titleStyle = {
  color: "black",
  fontFamily: "Josefin Sans",
  fontSize: "20px",
};
const backgroundStyle = {
  backgroundColor: "#D3D3D3",
  borderStyle: "solid",
  borderWidth: "0px",
  borderColor: "black",
  boxShadow: "0 0 2px 2px #555",
};
const bodyStyle = {
  alignItems: "flex-start",
};

const containerPadding = {
  paddingBottom: "50px",
};

const Content = () => (
  <div>
    <Container style={containerPadding}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card className="text-center" style={backgroundStyle}>
            <Card.Header style={titleStyle}>Steves Apples</Card.Header>
            <Card.Body style={bodyStyle}>
              <Card.Title></Card.Title>
              <div>
                <strong>Address</strong>: 1234
              </div>
              <div>
                <strong>City</strong>: Austin
              </div>
              <div>
                <strong>State</strong>: Texas
              </div>
              <div>
                <strong>ZipCode</strong>: 78753
              </div>
              <div>
                <strong>Start Date</strong>: 1/2/2020
              </div>
              <div>
                <strong>End Date</strong>: 1/3/2020
              </div>
              <div>
                <strong>Start Time</strong>: 2:00 pm
              </div>
              <div>
                <strong>End Time</strong>: 3:00 pm
              </div>
              <div>
                <strong>Details</strong>: Meety in Heb Parking lot behind the
                trash
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Content;
