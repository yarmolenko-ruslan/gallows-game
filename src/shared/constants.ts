import { createContext } from 'react';
import type { IContextType } from './interface';

export const Context = createContext<IContextType>({
	data: [],
	setData: () => {},
	categoryList: [],
	setCategoryList: () => {},
	category: '',
	setCategory: () => {},
	word: '',
	setWord: () => {},
	guesses: [],
	setGuesses: () => {},
	wrongGuesses: 0,
	setWrongGuesses: () => {},
	incorrectLetters: [],
	setIncorrectLetters: () => {},
	maxWrongGuesses: 7,
	gameOver: false,
	isWinner: false,
	isLoading: false,
	setIsLoading: () => {},
});
