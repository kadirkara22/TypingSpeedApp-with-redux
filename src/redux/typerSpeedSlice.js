import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

import MockWordLİst from "../mock-words.json"
const dataWords = MockWordLİst.words;
export const typerSpeedSlice = createSlice({
    name: "typer",
    initialState: {
        items: dataWords,
        words: "",
        isStarted: false,
        time: 10,
        currentIndex: 0,
        correct: 0,
        wrong: 0,
        keyCorrect: 0,
        keyWrong: 0
    },
    reducers: {
        getwords: (state, action) => {

            for (let i = state.items.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));

                [state.items[i], state.items[j]] = [state.items[j], state.items[i]];
            }
            state.isStarted = false;
            state.time = 10;
            state.currentIndex = 0;
            state.correct = 0;
            state.wrong = 0;
            state.keyCorrect = 0;
            state.keyWrong = 0;

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
        setIndex: (state, action) => {
            state.currentIndex += 1
        },
        increaseCorrect: (state, action) => {
            state.correct += 1;
            state.keyCorrect += 1

        },
        decreaseWrong: (state, action) => {
            state.wrong += 1;
            state.keyWrong += 1;
        },
        increaseKeyCorrect: (state, action) => {
            state.keyCorrect += action.payload;


        },
        decreaseKeyWrong: (state, action) => {
            state.keyWrong += action.payload;

        },



    }





})
export const { getwords, selectedWord, setTime, setIndex, increaseCorrect, decreaseWrong, increaseKeyCorrect, decreaseKeyWrong } = typerSpeedSlice.actions;
export default typerSpeedSlice.reducer