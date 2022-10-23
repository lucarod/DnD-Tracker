import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
  display: flex;
  gap: 32px;
`

export const Content = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: 32px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
