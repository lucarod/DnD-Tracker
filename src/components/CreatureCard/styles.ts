import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  height: 80px;
  display: flex;
`

export const CreatureDetails = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[100]};

  b {
    margin-bottom: 4px;
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[300]};

    & + span {
      margin-top: 4px;
    }
  }
`

export const HPCounterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-width: 80px;

  button {
    padding: 8px 12px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid transparent;
    cursor: default;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:active {
      border-color: #000;
    }

    b {
      width: 100%;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
      text-align: center;
    }

    div {
      width: 100%;
      padding: 4px 0;

      span {
        font-size: 16px;
        font-weight: bold;
      }

      span.separator {
        margin: 0 8px;
      }
    }
  }
`
