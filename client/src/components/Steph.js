import React from "react";
import { Card } from "react-bootstrap";

function Steph() {
  return (
    // <Card>
    //   <Card.Img variant="top" src={require("./flower.jpg")} />
    //   <Card.Body>
    //     <Card.Title>
    //       <h5>Stephanie!</h5>
    //     </Card.Title>
    //     <Card.Text>
    //       Steph loves a good flower! She thought up the idea for the app and did
    //       a lot of the front end work.
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Footer>
    //     <a
    //       href="https://github.com/steppinonland"
    //       target="_blank"
    //       className="btn btn-primary"
    //     >
    //       Stephanie's Github
    //     </a>
    //   </Card.Footer>
    // </Card>
    <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-about">
        <img
          className="card-img-top"
          src={require("../flower-1.jpg")}
          alt="Steph"
        />
        <div className="card-body">
          <h5 className="card-title">Steph!</h5>
          <p className="card-text">
            Steph loves a good flower! She thought up the idea for the app and did a lot of the front end work.
          </p>
          <a
            href="https://github.com/steppinonland"
            className="btn btn-primary"
          >
            Steph's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Steph;
