import styled from "styled-components";

type props = {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  family?: "sans" | "serif" | "mono";
  weight?: "normal" | "bold";
  type?: "normal" | "italic";
  color?: string;
  theme: any;
};

export default styled.p`
  /* get font size from theme */
  ${({ theme, size }: props) => size && `font-size: ${theme.fonts.size[size]};`}

  /* get font family from theme */
  ${({ theme, family }: props) =>
    family && `font-family: ${theme.fonts.family[family]};`}
    
  /* get text color from theme */
  ${({ theme, color }: props) => color && `color: ${theme.colors.text[color]};`}
    
  /* get font weight */
  ${({ weight }: props) => weight && `font-weight: ${weight};`}
  
  /* get font style */
  ${({ type }: props) => type && `font-style: ${type};`}
`;
