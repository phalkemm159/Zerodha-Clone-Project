import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a style={{ textDecoration: "none" }} href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ textDecoration: "none" ,marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a style={{ textDecoration: "none" }} href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a style={{ textDecoration: "none" }} href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
