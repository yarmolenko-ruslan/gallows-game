import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameState } from './types';

const initialState: GameState = {
	chosenCategory: null,
	word: '',
	guessedLetters: [],
	mistakes: 0,
	maxMistakes: 6,
	gameStatus: 'idle',
	categories: [],
	loading: false,
	error: null,
};

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		startGame(state, action: PayloadAction<string>) {
			state.chosenCategory = action.payload;
			state.guessedLetters = [];
			state.mistakes = 0;
			state.gameStatus = 'playing';
		},
	},
});
