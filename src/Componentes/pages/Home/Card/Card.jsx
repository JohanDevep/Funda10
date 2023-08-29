import React from 'react';
import PropTypes from 'prop-types';

export default function Capacitaciones({ imagen, descripcion }) {
  return (
    <div>
      <img src={imagen} alt={descripcion} />
      <h3>{descripcion}</h3>
    </div>
  )
}

Capacitaciones.propTypes = {

  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
}