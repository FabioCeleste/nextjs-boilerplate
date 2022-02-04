import * as Styled from "./styles";

export type ButtonProps = {
  text: string;
  isActive?: boolean;
  isClearButton: boolean;
};

export const Button = ({ text, isClearButton }: ButtonProps) => {
  return <Styled.Wrapper isClearButton={isClearButton}>{text}</Styled.Wrapper>;
};
