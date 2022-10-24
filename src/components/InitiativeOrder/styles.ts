import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`

export const Header = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  box-shadow: 0 5px 5px -5px #d8e1e8;
  padding: 0 24px 8px;
`

export const CreatureList = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};
  padding: 16px 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
