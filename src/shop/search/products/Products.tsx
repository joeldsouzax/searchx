import React from "react";
import styled from "styled-components";
import Product from "./product";
import axios from "axios";
import { useError, Modal } from "../../../components";

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
  const { error, message, setError } = useError();

  const addProduct = (productId: string) => {
    axios
      .post(`http://127.0.0.1:51095/basket/basket`, { productId })
      .then(res => {
        setError(true, "Successful");
      })
      .catch(err => {
        setError(true, "cannot buy a product twice");
      });
  };

  const productList = productsData.map(item => (
    <Product
      id={item.productId}
      add={addProduct}
      name={item.productName}
      type={item.productType}
      key={item.productId}
    />
  ));

  return (
    <ProductsWindow>
      {productList}{" "}
      {error ? (
        <Modal.body onClick={() => setError(false, "")}>
          <Modal.content>
            {message}
            <Modal.close onClick={() => setError(false, "")}>Close</Modal.close>
          </Modal.content>
        </Modal.body>
      ) : null}
    </ProductsWindow>
  );
};

export default Products;
