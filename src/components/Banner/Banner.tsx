import { FC } from "react";
import { StyledBanner } from "./styles";

interface Props {
  errorMessage: string;
}

export const Banner: FC<Props> = ({ errorMessage }) => (
  <StyledBanner>
    <p>{errorMessage}</p>
  </StyledBanner>
);
