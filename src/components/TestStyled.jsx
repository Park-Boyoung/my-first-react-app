import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  background-color: orange;
  font-size: 3em;
`;

const MyHeading = styled.h1`
  color: blue;
`;

const MySpan = styled.span`
  background-color: pink;
  font-weight: 700;
`;

export default function TestStyled() {
  return (
    <MyDiv>
      <MyHeading>h1 tag</MyHeading>
      <MySpan>span tag</MySpan>
    </MyDiv>
  );
}
