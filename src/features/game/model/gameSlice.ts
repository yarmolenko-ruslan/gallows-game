import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchGameData } from './thunks';
import { MAX_MISTAKES } from '@shared/config/constants';
import type { GameState } from '@shared/types/types';

const initialState: GameState = {
	chosenCategory: null,
	word: '',
	guessedLetters: [],
	mistakes: 0,
	maxMistakes: MAX_MISTAKES,
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
			const categoryId = action.payload;
			state.chosenCategory = categoryId;
			state.guessedLetters = [];
			state.mistakes = 0;
			state.gameStatus = 'playing';

			const category = state.categories.find(cat => cat.id === categoryId);
			if (category && category.words.length > 0) {
				const randomIndex = Math.floor(Math.random() * category.words.length);
				state.word = category.words[randomIndex];
			} else {
				state.word = '';
				state.gameStatus = 'idle';
			}
		},
		guessLetter(state, action: PayloadAction<string>) {
			const letter = action.payload.toLowerCase();
			if (!state.guessedLetters.includes(letter)) {
				state.guessedLetters.push(letter);

				if (!state.word.toLowerCase().includes(letter)) {
					state.mistakes += 1;
					if (state.mistakes >= state.maxMistakes) {
						state.gameStatus = 'lost';
					}
				} else {
					const allLettersGuessed = state.word
						.toLowerCase()
						.split('')
						.every(l => state.guessedLetters.includes(l) || l === ' ');

					if (allLettersGuessed) {
						state.gameStatus = 'won';
					}
				}
			}
		},
		resetGame(state) {
			state.chosenCategory = null;
			state.word = '';
			state.guessedLetters = [];
			state.mistakes = 0;
			state.gameStatus = 'idle';
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchGameData.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchGameData.fulfilled, (state, action) => {
				state.loading = false;
				state.categories = action.payload;
			})
			.addCase(fetchGameData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Ошибка загрузки данных';
			});
	},
});

export const { startGame, guessLetter, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
