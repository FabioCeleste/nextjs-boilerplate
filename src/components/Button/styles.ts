import styled, { css, DefaultTheme } from "styled-components";

interface Props {
  isClearButton: boolean;
}

export const Wrapper = styled.button<Props>`
  ${({ isClearButton }) => css`
    height: 70px;
    width: 250px;

    border: ${isClearButton ? "2px solid black" : "none"};
    border-radius: 12px;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    background: ${isClearButton ? "#EFEFEF" : "#969696"};
  `}
`;
