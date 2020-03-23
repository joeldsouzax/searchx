import React from "react";
import { Input, Button } from "../../components";
import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Search: React.FC = () => (
  <SearchBox>
    <Input placeholder="Product Name" />
    <Input placeholder="Product Type" />
    <Button primary>Search</Button>
  </SearchBox>
);

export default Search;
