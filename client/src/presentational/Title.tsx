import React from "react";
import styled from "styled-components";

type TitleProps = {
  fontSize: number;
  fontWeight: number;
  description: string;
};

const Header = styled.h2<TitleProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const Title = (props: TitleProps) => {
  return (
    <Header
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      description={props.description}
    >
      {props.description}
    </Header>
  );
};

export default Title;
