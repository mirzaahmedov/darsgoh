import React from "react";
import styled from "styled-components";
import { FaUniversity } from "react-icons/fa";

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`;
const Icon = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  vertical-align: middle;
`;
const Text = styled.h1`
  display: inline-block;
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
`;

export default function Logo() {
  return (
    <Container>
      <Icon>
        <FaUniversity />
      </Icon>
      <Text>OLIYGOH</Text>
    </Container>
  );
}
