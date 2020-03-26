import React from "react";
import styled from "styled-components";
import Product from "./product";

const ProductsWindow = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export interface ProductsProps {
  productsData: any[];
}

const Products: React.FC<ProductsProps> = ({ productsData }) => {
  const productList = productsData.map(item => (
    <Product
      name={item.productName}
      type={item.productType}
      key={item.productId}
    />
  ));

  return <ProductsWindow>{productList}</ProductsWindow>;
};

export default Products;
