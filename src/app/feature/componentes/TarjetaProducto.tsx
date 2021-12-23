import React from 'react';

type Producto = {
  nombre: string;
  id: number;
  edad: number;
  especie: string;
  precio: number;
  imagen: string;
};

const TarjetaProducto: React.FC<Producto> = ({
  nombre,
  id,
  edad,
  especie,
  precio,
  imagen,
}) => {
  return (
    <div>
      <img src={imagen} alt="bonsai" />
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
      <p>Especie: {especie}</p>
      <p>Precio: {precio}</p>
      <button>Agregar</button>
    </div>
  );
};

export default TarjetaProducto;
