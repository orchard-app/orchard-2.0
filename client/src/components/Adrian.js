import React from "react";

function Adrian() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-about">
        <img
          className="card-img-top"
          src={require("../mango-1.jpg")}
          alt="adrian"
        />
        <div className="card-body">
          <h5 className="card-title">Adrian</h5>
          <p className="card-text">
            Adrian loves Mangos! He worked on the backend of this project. <br />&#160;
          </p>
          <a
            href="https://github.com/adrian-palacios"
            className="btn btn-primary"
          >
            Adrian's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Adrian;
