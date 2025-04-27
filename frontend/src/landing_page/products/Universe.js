import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="img-box">
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Our asset management venture <br/> that is creating simple and transparent index <br/> funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibull_logo_new.webp" />
          <p className="text-small text-muted">Options trading platform that lets you <br/> create strategies, analyze positions, and examine <br/> data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/tijori-logo.png" />
          <p className="text-small text-muted">Investment research platform <br/> that offers detailed insights on stocks <br/>, sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" />
          <p className="text-small text-muted">Systematic trading platform <br/> that allows you to create and backtest <br/> strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform that helps you <br/> invest in diversified baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">Personalized advice on life and health <br/> insurance. No spam and no mis-selling.</p>
        </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
