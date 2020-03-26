import React from "react";
import styled from "styled-components";

const item = {
  body: styled.div`
    padding: 10px;
    min-width: 30%;
    border: 1px solid black;
  `,
  title: styled.div`
    text-align: left;
  `,
  content: styled.div``,
  action: styled.div`
    margin: 20px;
  `
};

export interface ProductProps {
  name: string;
  type: string;
}

const Product: React.FC<ProductProps> = ({ name, type }) => (
  <item.body>
    <item.title>{name}</item.title>
    <item.content>{type}</item.content>
    <item.action>
      <button>Hello</button>
    </item.action>
  </item.body>
);

export default Product;
