import React from "react";
import styled from "styled-components";

type ButtonType = {
  width: number;
  height: number;
  padding?: number;
  margin?: string;
  description: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function con(props: ButtonType) {
  console.log(props);
}

const ButtonStyle = styled.button<ButtonType>`
  width: ${(props) => props.width + "px;"}
  height: ${(props) => props.height + "px;"}
  padding: ${(props) => props.padding + "px;"}
  margin: ${(props) => props.margin + "px;"}
`;

const Button = (props: ButtonType) => {
  con(props);
  return (
    <ButtonStyle
      width={props.width}
      height={props.height}
      padding={props.padding}
      margin={props.margin}
      description={props.description}
      onClick={props.onClick}
    >
      {props.description}
    </ButtonStyle>
  );
};

export default Button;
