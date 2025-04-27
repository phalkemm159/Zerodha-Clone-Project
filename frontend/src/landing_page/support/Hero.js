import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="" id="supportWrapper">
        <h4 className="mt-5">Support Portal</h4>
        <a className="mt-5" href="">Track Ticket</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <div className="position-relative mb-3">
            <input
              className="form-control ps-5"
              placeholder="Eg. how do I activate F&O..."
            />
            <i
              className="fa fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              aria-hidden="true"
            ></i>
          </div>
          <br />
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-5 lh-1.5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="">Surveillance measure on scrips - April 2025</a></li>
            <li><a href="">Latest Intraday leverages and Square-off timings</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
