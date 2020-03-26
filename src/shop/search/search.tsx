import React from "react";
import { Input, Button } from "../../components";
import styled from "styled-components";
import Products from "./products";

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Search: React.FC = () => (
  <React.Fragment>
    <SearchBox>
      <Input placeholder="Product Name" />
      <Input placeholder="Product Type" />
      <Button primary>Search</Button>
    </SearchBox>
    <Products />
  </React.Fragment>
);

export default Search;
