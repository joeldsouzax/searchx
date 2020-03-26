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
`;

export interface ButtonProps {
  icon?: boolean;
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 5px;
  font-size: ${props =>
    props.icon ? "calc(10px + 2vmin)" : "calc(8px + 2vmin)"};
  border: ${props => (props.icon ? "0px" : "1px solid hotpink")};
  background-color: ${props => (props.primary ? "palevioletred" : "black")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  border-radius: 5px;
`;

export const DropDown = {
  body: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
  `,
  label: styled.div``,
  select: styled.select`
    font-size: calc(10px + 2vmin);
    color: palevioletred;
  `
};

export const H3 = styled.h3`
  font-size: calc(10px + 2vmin);
`;

export const Modal = {
  body: styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `,
  content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fefefe;
    margin: 20% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    color: palevioletred;
    text-align: center;
  `,
  close: styled.button`
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: white;
    background: red;
    width: 100px;
  `
};
