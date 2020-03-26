import React from "react";
import styled from "styled-components";
import Product from "./product";

const ProductsWindow = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Products: React.FC = () => (
  <ProductsWindow>
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
    <Product name="book" type="joel" />
  </ProductsWindow>
);

export default Products;
