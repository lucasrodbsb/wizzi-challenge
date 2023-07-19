import { configureStore } from "@reduxjs/toolkit";
import { formInputs } from "./slices/formSlice";

export const store = configureStore({ reducer: { formInputs: formInputs.reducer } });

export type RootType = ReturnType<typeof store.getState>;
