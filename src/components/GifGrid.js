import React from "react";
import GifGridItem from "./GifGridItem";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2> {loading ? "Cargando...!" : category} </h2>
      <div className="contenedor animate__animated animate__fadeIn animate__delay-2s">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
