import React from 'react';
import './ServicesGallery.css';

const ServicesGallery = () => {
  return (
    <section className="section-container">
      <div className="service">
        <img
          src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoarbol_home.png"
          alt="arboles"
        />
        <h2>Arboles</h2>
        <p>
          En la Casa del Bonsai contamos con una galería itinerante de árboles
          Bonsai de diferentes gamas, edades, estilos, especies y tamaños.
        </p>
      </div>
      <div className="service">
        <img
          src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoherramienta_home.png"
          alt="herramientas"
        />
        <h2>Herramientas</h2>
        <p>
          Ofrecemos kits de piezas básicas, herramientas profesionales y todo lo
          relacionado con el cuidado y decoración para su Bonsai.
        </p>
      </div>
      <div className="service">
        <img
          src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoarbol_home.png"
          alt="jardines"
        />
        <h2>Jardines</h2>
        <p>
          Diseñamos y llevamos a cabo jardinería zen, transformando espacios
          grandes y chicos, en lugares que aportan a nuestra vida tranquilidad y
          relax.
        </p>
      </div>
    </section>
  );
};

export default ServicesGallery;
