import React, { Component } from "react";
import { listItems } from "../userFunctions";
import { Container, Row, Col, Card } from "react-bootstrap";

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
							<Col key={item.id} xs={12} sm={12} md={6} lg={4}>
								{/* <Card className="text-center">
                  <Card.Header>Starts: {item.start_date}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.details}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Ends: {item.end_date}
                  </Card.Footer>
                </Card> */}
								<Card className="text-center" style={backgroundStyle}>
									<Card.Header style={titleStyle}>{item.title}</Card.Header>
									<Card.Body style={bodyStyle}>
										<Card.Title></Card.Title>
										<div>
											<strong>Address</strong>: {item.address}
										</div>
										<div>
											<strong>City</strong>: {item.city}
										</div>
										<div>
											<strong>State</strong>: {item.state}
										</div>
										<div>
											<strong>ZipCode</strong>: {item.zipcode}
										</div>
										<div>
											<strong>Start Date</strong>: {item.start_date}
										</div>
										<div>
											<strong>End Date</strong>: {item.end_date}
										</div>
										<div>
											<strong>Start Time</strong>: {item.start_time}
										</div>
										<div>
											<strong>End Time</strong>: {item.end_time}
										</div>
										<div>
											<strong>Details</strong>: {item.details}
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		);
	}
}
