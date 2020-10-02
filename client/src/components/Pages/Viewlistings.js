import React, { Component } from "react";
import { listItems } from "../userFunctions";
import { Container, Row, Col, Card } from "react-bootstrap";

export default class Viewlistings extends Component {
  state = { listItemThis: [] };

  componentDidMount() {
    this.getThisFunctionRunning();
  }

  getThisFunctionRunning = () => {
    listItems()
      .then((res) => {
        console.log(res);
        this.setState({ listItemThis: res });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.listItemThis.map((item) => (
              <Col xs={12} sm={12} md={6} lg={4} key={item.id}>
                <Card className="text-center">
                  <Card.Header>Starts: {item.start_date}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.details}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Ends: {item.end_date}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
