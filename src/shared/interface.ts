import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface IWord {
	category: string;
	words: string[];
}

export interface IContextType {
	data: IWord[];
	setData: Dispatch<SetStateAction<IWord[]>>;
	categoryList: string[];
	setCategoryList: Dispatch<SetStateAction<string[]>>;
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
	word: string;
	setWord: Dispatch<SetStateAction<string>>;
	guesses: string[];
	setGuesses: Dispatch<SetStateAction<string[]>>;
	wrongGuesses: number;
	setWrongGuesses: Dispatch<SetStateAction<number>>;
	incorrectLetters: string[];
	setIncorrectLetters: Dispatch<SetStateAction<string[]>>;
	maxWrongGuesses: number;
	gameOver: boolean;
	isWinner: boolean;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}
