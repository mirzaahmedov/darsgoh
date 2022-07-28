import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.main`
  flex: 1;
`;

export default function Main() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
