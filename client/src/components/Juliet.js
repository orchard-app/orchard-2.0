import React from "react";

function Juliet() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card card-about">
        <img
          className="card-img-top juliet"
          src={"https://i.imgur.com/G2BHEE2.jpg"}
          alt="Juliet"
        />
        <div className="card-body">
          <h5 className="card-title">Juliet!</h5>
          <p className="card-text">
            Juliet loves to garden! She worked on the back and front end of this
            project. <br />
            &#160;
          </p>
          <a href="https://github.com/julietg19" className="btn btn-primary">
            Juliet's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Juliet;
