import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props<Type> = {
  inputType: string;
  placeholder: string;
  formName: keyof Type;
  errorMsg?: string;
  isError?: boolean;
};

const FormInput = <Type,>({
  inputType,
  placeholder,
  formName,
  errorMsg,
  isError,
}: Props<Type>) => {
  const methods = useFormContext();

  return (
    <>
      <TextField
        variant="standard"
        type={inputType}
        placeholder={placeholder}
        
        error={isError}
        {...methods.register(formName.toString())}
        helperText={isError && errorMsg}
      />
    </>
  );
};

export default FormInput;
