import React from "react";
import { Input, Button, DropDown, useError } from "../../components";
import styled from "styled-components";
import Products from "./products";
import axios from "axios";
import { Modal } from "../../components/Components";

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const Search: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const productTypeSelect = [
    { value: "Books", label: "Books" },
    { value: "Music", label: "Music" },
    { value: "Games", label: "Games" }
  ];
  const [type, setType] = React.useState<string>(productTypeSelect[0].value);
  const [productData, setProductData] = React.useState([] as any[]);
  const { error, message, setError } = useError();

  const search = () => {
    if (name.match(/^[A-Za-z]+$/) && name.length <= 30) {
      const searchReq = {
        name,
        type
      };
      axios
        .post(`http://127.0.0.1:57858/product/search/`, searchReq)
        .then(res => {
          setProductData(res.data);
        });
    } else {
      setError(true, "you should only use letters and less than 30 characters");
    }
  };

  return (
    <React.Fragment>
      <SearchBox>
        <Input
          type="text"
          value={name}
          placeholder="Product Name"
          fullWidth
          onChange={e => {
            setError(false, "");
            setName(e.target.value);
          }}
        />
        <DropDown.body>
          {/* <DropDown.label>Select Product Type</DropDown.label> */}
          <DropDown.select
            value={type}
            onChange={e => setType(e.target.value)}
            id="productTypeList"
          >
            {productTypeSelect.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </DropDown.select>
        </DropDown.body>

        <Button onClick={search} primary>
          Search
        </Button>
      </SearchBox>
      {productData.length !== 0 ? (
        <Products productsData={productData} />
      ) : null}
      {error ? (
        <Modal.body onClick={() => setError(false, "")}>
          <Modal.content>
            {message}
            <Modal.close onClick={() => setError(false, "")}>Close</Modal.close>
          </Modal.content>
        </Modal.body>
      ) : null}
    </React.Fragment>
  );
};

export default Search;
