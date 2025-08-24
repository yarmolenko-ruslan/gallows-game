import type { GameState } from '../types/types';

export const BASE_URL = 'https://66c1719af83fffcb587951a3.mockapi.io/gallows';

export const MAX_MISTAKES = 6;

export const ALPHABET = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

export const initialState: GameState = {
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
