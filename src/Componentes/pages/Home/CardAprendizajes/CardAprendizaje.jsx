import React from 'react';
import PropTypes from 'prop-types';


export default function CardAprendizaje({ imagen, descripcion, titulo }) {
  return (
    <div>
      <img className="tamaño-imagen" src={imagen} alt={descripcion} />
      <h3>{descripcion}</h3>
    
    </div>
  )
}

CardAprendizaje.propTypes = {
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
}