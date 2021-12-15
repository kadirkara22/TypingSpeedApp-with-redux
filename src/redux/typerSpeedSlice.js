import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

import MockWordLİst from "../mock-words.json"
const dataWords = MockWordLİst.words;
export const typerSpeedSlice = createSlice({
    name: "typer",
    initialState: {
        items: dataWords,
        words: null,
        isStarted: false,
        time: 60,
        empty: []
    },
    reducers: {
        getwords: (state, action) => {

            for (let i = state.items.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));

                [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
            }
            state.isStarted = false;
            state.time = 60;



        },
        selectedWord: (state, action) => {
            const word = action.payload;
            state.words = word;
            state.isStarted = true;
        },
        setTime: (state, action) => {
            const timer = action.payload;
            state.isStarted === false ? clearInterval(timer)
                : state.time === 1 && clearInterval(timer) && state.time === 1 ? state.isStarted = false
                    : state.time -= 1;

        },




    }





})
export const { getwords, selectedWord, setTime } = typerSpeedSlice.actions;
export default typerSpeedSlice.reducer