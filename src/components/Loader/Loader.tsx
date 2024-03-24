import { FC } from "react";
import { LoaderContainer, LoaderSpinner } from "./styles";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
};
