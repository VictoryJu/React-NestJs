import React from "react";
import styled from "styled-components";

type InputProps = {
  width: number;
  fontSize: number;
};

const InputBox = styled.input<InputProps>`
  width: ${(props) => props.width + "px"};
  font-size: ${(props) => props.fontSize + "px"};
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Input = (props: InputProps) => {
  return <InputBox fontSize={props.fontSize} width={props.width}></InputBox>;
};

export default Input;
