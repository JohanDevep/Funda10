import React from 'react';
import PropTypes from 'prop-types';

export default function Facturacion({ imagen, descripcion }) {
  return (
    <div>
      <h3 className='texto-factu'>{descripcion}</h3>
    </div>
  )
}

Facturacion.propTypes = {

  descripcion: PropTypes.string.isRequired,
}