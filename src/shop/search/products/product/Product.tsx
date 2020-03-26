import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components";

export interface TextProps {
  gutterBottom?: Boolean;
}

const item = {
  body: styled.div`
    padding: 5px;
    min-width: 25%;
    border: 1px solid palevioletred;
    margin: 5px;
    border-radius: 5px;
  `,
  title: styled.div<TextProps>`
    padding-bottom: ${props => (props.gutterBottom ? "10px" : "")};
    text-align: left;
    font-size: 20px;
  `,
  paragraph: styled.div<TextProps>`
    padding-bottom: ${props => (props.gutterBottom ? "10px" : "")};
    text-align: left;
    font-size: 16px;
  `,
  content: styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
  `,
  action: styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row-reverse;
  `
};

export interface ProductProps {
  name: string;
  type: string;
}

const Product: React.FC<ProductProps> = ({ name, type }) => (
  <item.body>
    <item.content>
      <item.title gutterBottom>{`Product Name : ${name}`}</item.title>
      <item.paragraph>{`Product Name : ${type}`}</item.paragraph>
    </item.content>
    <item.action>
      <Button primary>Add Product</Button>
    </item.action>
  </item.body>
);

export default Product;
