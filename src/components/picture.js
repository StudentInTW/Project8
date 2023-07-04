import React from "react";
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
