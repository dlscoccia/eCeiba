import React from 'react';
import { Wrapper } from './ServicesGallery.styles';

const ServicesGallery = () => {
  return (
    <Wrapper>
      <section className="section-container">
        <h2 className="service_header">Nuestros servicios</h2>
        <div className="services">
          <div className="service">
            <img
              src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoarbol_home.png"
              alt="arboles"
            />
            <h2 className="service_subheader">Arboles</h2>
            <p className="service_text">
              Contamos con una galería itinerante de árboles Bonsai de
              diferentes gamas, edades, estilos, especies y tamaños.
            </p>
          </div>
          <div className="service">
            <img
              src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoherramienta_home.png"
              alt="herramientas"
            />
            <h2 className="service_subheader">Herramientas</h2>
            <p className="service_text">
              Ofrecemos kits de piezas básicas, herramientas profesionales y
              todo lo relacionado con el cuidado y decoración para su Bonsai.
            </p>
          </div>
          <div className="service">
            <img
              src="https://casadelbonsai.com/wp-content/uploads/2011/09/iconoarbol_home.png"
              alt="jardines"
            />
            <h2 className="service_subheader">Jardines</h2>
            <p className="service_text">
              Diseñamos y llevamos a cabo jardinería zen, transformando espacios
              grandes y chicos, en lugares que aportan a nuestra vida
              tranquilidad y relax.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ServicesGallery;
