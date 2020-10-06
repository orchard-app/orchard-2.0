import React from "react";

function Steve() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-about">
        <img
          className="card-img-top"
          src={"https://i.imgur.com/IaOaNoW.jpg"}
          alt="steve"
        />
        <div className="card-body">
          <h5 className="card-title">Steve!</h5>
          <p className="card-text">
            Steve worked a ton on the back end of this project. He also likes
            bananas! <br />
            &#160;
          </p>
          <a href="https://github.com/Steve-Munoz" className="btn btn-primary">
            Steve's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Steve;
