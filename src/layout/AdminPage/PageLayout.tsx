import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

export default function AdminPageLayout() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
