import styled, { css } from "styled-components";

export const SlideShowControllers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Controller = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #3498db; /* Blue */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #bdc3c7; /* Grey */
      cursor: not-allowed;
    `}
`;
