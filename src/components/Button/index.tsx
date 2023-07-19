import React from "react";
import * as C from "./styles";

type Props = {
  title: string;
  submit?: () => any
};

const Button = ({ title, submit }: Props) => {
  return (
    <>
      <C.ButtonContainer onClick={submit}>{title}</C.ButtonContainer>
    </>
  );
};

export default Button;
