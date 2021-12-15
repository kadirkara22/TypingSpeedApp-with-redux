import { configureStore } from "@reduxjs/toolkit";
import typerSpeedSlice from "./typerSpeedSlice";

export const store = configureStore({
    reducer: {
        typer: typerSpeedSlice,
    }
})