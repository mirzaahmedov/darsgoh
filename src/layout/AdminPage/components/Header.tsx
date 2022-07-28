import React from "react";
import styled from "styled-components";

import Menu from "@/components/UI/Menu";

const Container = styled.header`
  width: 100%;
  height: 62px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 5px 10px #00000109;
`;

export default function Header() {
  return (
    <Container>
      <Menu />
    </Container>
  );
}
