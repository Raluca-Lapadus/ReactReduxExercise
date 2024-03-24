import { FC } from "react";
import { StyledInput } from "./styles";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;          
}

export const Input: FC<Props> = ({onChange, error}) => <StyledInput onChange={onChange} error={error} />;
