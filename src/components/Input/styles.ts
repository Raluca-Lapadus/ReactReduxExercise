import styled, { css } from "styled-components";

export const StyledInput = styled.input<{ error?: string  }>`
  width: 50%;
  padding: 10px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  outline: none;

  ${({ error }) =>
  error === 'true' &&
    css`
      border-color: red;
    `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
