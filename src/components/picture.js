import React from "react";
import Page404 from "../pages/Page404";
const picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download pictures:{" "}
        <a target="_blank" href={data.src.large}>
          Click me!
        </a>
      </p>
    </div>
  );
};

export default picture;
