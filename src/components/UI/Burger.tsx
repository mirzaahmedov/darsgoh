import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Container = styled.button`
  appearance: none;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s;

  :hover {
    outline: #eeeeee;
  }
`;
const Line = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  background-color: currentColor;
  transition: transform 0.25s;

  ${Container}.open &:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  ${Container}.open &:nth-child(2) {
    transform: scaleX(0);
  }
  ${Container}.open &:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
`;

export default function Burger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: MouseEventHandler;
}) {
  return (
    <Container role="menu" className={isOpen ? "open" : ""} onClick={onClick}>
      <Line />
      <Line />
      <Line />
    </Container>
  );
}
