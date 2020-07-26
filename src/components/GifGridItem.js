import React from "react";

const GifGridItem = ({id, title, url}) => {
  return (
    <div key={id} className="card">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;
