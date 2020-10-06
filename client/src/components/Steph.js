import React from "react";

function Steph() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-about">
        <img
          className="card-img-top"
          src={"https://i.imgur.com/3ENqAbW.jpg"}
          alt="Steph"
        />
        <div className="card-body">
          <h5 className="card-title">Steph!</h5>
          <p className="card-text">
            Steph loves a good flower! She thought up the idea for the app and
            did a lot of the front end work.
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
