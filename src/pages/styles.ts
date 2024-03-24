import styled from "styled-components";

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
`