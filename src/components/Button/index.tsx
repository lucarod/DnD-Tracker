import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  border: 1px solid ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.gray[100] : 'transparent' };
  background-color: ${({theme, variant}) =>
    variant === 'secondary' ? theme.colors.white : theme.colors.primary };
  color: ${({theme, variant}) =>
    variant === 'secondary' ? theme.colors.primary : theme.colors.white};
  padding: 12px 0;
  font-size: 14px;
  font-weight: bold;
  width: 80px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(1.1);
  }
`
