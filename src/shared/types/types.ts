import type { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface IWord {
	category: string;
	words: string[];
}

export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

export interface Category {
	id: string;
	category: string;
	words: string[];
}

export interface GameState {
	chosenCategory: string | null;
	word: string;
	guessedLetters: string[];
	mistakes: number;
	maxMistakes: number;
	gameStatus: GameStatus;
	categories: Category[];
	loading: boolean;
	error: string | null;
}
