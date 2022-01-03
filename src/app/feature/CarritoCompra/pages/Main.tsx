import React from 'react';
import { Layout } from '../../../shared/components/Layout';
import { ProveedorGestionProductos } from '../hoc/ProveedorGestionCarrito';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Carrito" description="Carrito">
      <ProveedorGestionProductos />
    </Layout>
  );
};

MainPage.displayName = 'Carrito';

export default MainPage;
