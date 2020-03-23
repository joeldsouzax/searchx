import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  top: 0;
  left: 0;
  right: 0;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  background-color: #f5f8fa;
`;

export interface InputProps {
  fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: 5px;
  width: ${props => (props.fullWidth ? "100%" : "40%")};
  font-size: calc(10px + 2vmin);
  margin: 10px;
  border: 1px solid hotpink;
  border-radius: 5px;
`;

export const Root = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: black;
  padding-top: 115px;
`;

export interface ButtonProps {
  icon?: boolean;
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${props =>
    props.icon ? "calc(10px + 2vmin)" : "calc(8px + 2vmin)"};
  border: ${props => (props.icon ? "0px" : "1px solid hotpink")};
  background-color: ${props => (props.primary ? "palevioletred" : "black")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  border-radius: 5px;
`;

export const H3 = styled.h3``;
