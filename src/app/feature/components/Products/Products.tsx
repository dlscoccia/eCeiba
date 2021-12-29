import React, { useState } from 'react';
import { Wrapper } from './Products.styles';
import { connect } from 'react-redux';
import Product from './Product/Product';

const Products = ({ products }: any) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    filter: string,
    condition: string
  ) => {
    const newArray = products.sort((a: any, b: any) => a[filter] - b[filter]);
    setFilteredProducts(newArray);
  };
  console.log(filteredProducts);
  return (
    <Wrapper>
      <div className="products">
        <h2>Productos Destacados</h2>
        <button onClick={(e) => handleFilter(e, 'age', 'low')}>
          Menor edad
        </button>
        <button onClick={(e) => handleFilter(e, 'age', 'high')}>
          Mayor edad
        </button>
        <button onClick={(e) => handleFilter(e, 'price', 'low')}>
          Menor precio
        </button>
        <button onClick={(e) => handleFilter(e, 'price', 'high')}>
          Mayor precio
        </button>
        {filteredProducts.map((product: any) => (
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
