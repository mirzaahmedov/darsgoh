import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, AnimationProps } from "framer-motion";

import Burger from "./Burger";

const Container = styled.menu`
  position: relative;
`;
const OverlayContainer = styled(motion.nav)`
  min-width: 400px;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: white;
  box-shadow: 0 0 10px #00000011;
`;
const OverlayHeader = styled.div`
  height: 62px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const slideInAnimation: AnimationProps = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0%",
  },
  exit: {
    x: "-100%",
  },
  transition: {
    type: "tween",
  },
};

export default function Menu() {
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);
  return (
    <Container>
      <Burger
        isOpen={isOverlayOpen}
        onClick={() => setIsOverlayOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {isOverlayOpen && (
          <OverlayContainer {...slideInAnimation}>
            <OverlayHeader>
              <h1>Menu</h1>
              <Burger
                isOpen={isOverlayOpen}
                onClick={() => setIsOverlayOpen((prev) => !prev)}
              />
            </OverlayHeader>
          </OverlayContainer>
        )}
      </AnimatePresence>
    </Container>
  );
}
