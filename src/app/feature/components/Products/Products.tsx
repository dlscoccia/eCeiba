import React from 'react';
import { Wrapper } from './Products.styles';
import { connect } from 'react-redux';
import Product from './Product/Product';

const Products = ({ products }: any) => {
  return (
    <Wrapper>
      <div className="products">
        <h2>Productos Destacados</h2>
        {products.map((product: any) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
