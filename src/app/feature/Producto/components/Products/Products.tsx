import React, { useEffect, useState } from 'react';
import { Wrapper } from './Products.styles';
import { connect } from 'react-redux';
import Product from '../Product/Product';

const Products = ({ productos }: any) => {
  const [filteredProducts, setFilteredProducts] = useState(productos);

  const handleFilter = (filter: string, condition: string) => {
    let newArray = [];
    if (condition === 'low') {
      newArray = productos.sort((a: any, b: any) => a[filter] - b[filter]);
    } else if (condition === 'high') {
      newArray = productos.sort((a: any, b: any) => b[filter] - a[filter]);
    } else {
      setFilteredProducts(productos);
    }
    setFilteredProducts(newArray);
  };

  return (
    <Wrapper>
      <div className="background"></div>
      <div className="products">
        <h2>Productos Destacados</h2>
        <div className="filters">
          <button onClick={() => handleFilter('price', 'low')}>
            Menor precio
          </button>
          <button onClick={() => handleFilter('price', 'high')}>
            Mayor precio
          </button>
        </div>
        {filteredProducts.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productos: state.productos.productos,
  };
};

export default connect(mapStateToProps)(Products);
