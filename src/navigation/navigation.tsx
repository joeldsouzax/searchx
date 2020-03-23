import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Header, H3, Button } from "../components";

const Navigation: React.FC = () => (
  <Header>
    <H3>Joel D'Souza</H3>
    <Button icon primary>
      <FontAwesomeIcon icon={faShoppingBasket} />
    </Button>
  </Header>
);

export default Navigation;
