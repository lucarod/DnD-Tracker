import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 8px 12px;
  min-width: 80px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  b {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input {
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number]{
      -moz-appearance: textfield;
    }
  }
`
