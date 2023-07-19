import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormType } from "../../types/formType";

type InitialState = {
  data: FormType[];
};

const initialState: InitialState = { data: [] };

export const formInputs = createSlice({
  initialState,
  name: "formInputs",
  reducers: {
    addFormInputsValue: (state, action: PayloadAction<FormType>) => {
      return {
        data: [...state.data, action.payload],
      };
    },
    clearState: (state, action: PayloadAction<void>) => {
      return {
        data: [],
      };
    },
  },
});

export const { addFormInputsValue, clearState } = formInputs.actions;
