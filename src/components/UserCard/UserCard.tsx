import { FC } from "react";
import { StyledCard } from "./styles";
import { StyledImage } from "../Image/styles";

interface Props {
    imageUrl: string;
    firstName: string;
    lastName: string;
}

export const UserCard: FC<Props> = ({imageUrl, firstName, lastName}) => (
    <StyledCard>
    <StyledImage src={imageUrl} />
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  </StyledCard>
)
