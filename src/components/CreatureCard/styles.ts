import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  height: 80px;
  display: flex;
`

export const CreatureDetails = styled.div`
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

export const HealthCounter = styled.div`

`
