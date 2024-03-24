import { FC } from "react";
import { StyledImage  } from "./styles";

interface Props {
    imageUrl: string;
}

export const UserCard: FC<Props> = ({imageUrl}) => (
    <StyledImage >
    <img src={imageUrl} alt={`image`} />
  </StyledImage >
)
