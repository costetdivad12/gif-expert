import React from "react";
import PropTypes from "prop-types";

const GifGrillItem = ({ id, title, url }) => {
  return (
    <>
  
      <div className="card animate__animated animate__fadeInRight">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

GifGrillItem.propTypes = {};

export default GifGrillItem;
